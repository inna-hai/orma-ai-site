import React from 'react';

/**
 * Cosmic purple network visual — SVG-generated, matches the brand aesthetic.
 * Clusters of small dots connected by thin lines with a subtle glow,
 * set against deep violet space.
 */
export default function HeroVisual({ className = '' }) {
  // Deterministic pseudo-random layout so it looks the same every render
  const nodes = React.useMemo(() => {
    const seeded = (i) => {
      const x = Math.sin(i * 9301 + 49297) * 43758.5453;
      return x - Math.floor(x);
    };
    return Array.from({ length: 48 }, (_, i) => ({
      x: 8 + seeded(i) * 84,
      y: 10 + seeded(i + 100) * 80,
      r: 0.8 + seeded(i + 200) * 2.8,
      glow: seeded(i + 300) > 0.7,
    }));
  }, []);

  // Build edges between nearby nodes
  const edges = React.useMemo(() => {
    const out = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 18) {
          out.push({ a: nodes[i], b: nodes[j], opacity: Math.max(0.05, 0.5 - d / 40) });
        }
      }
    }
    return out;
  }, [nodes]);

  return (
    <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-3xl ${className}`}>
      {/* Deep violet backdrop with radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 45% 55%, rgba(139,109,226,0.35) 0%, rgba(67,32,136,0.5) 35%, #15082e 80%)',
        }}
      />

      {/* Subtle grid of stars */}
      <svg viewBox="0 0 100 80" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c4b0fa" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#8b6de2" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b6de2" stopOpacity="0" />
          </radialGradient>
          <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.3" />
          </filter>
        </defs>

        {/* Connecting edges */}
        <g stroke="#a68af0" strokeWidth="0.12" filter="url(#softBlur)">
          {edges.map((e, i) => (
            <line
              key={i}
              x1={e.a.x} y1={e.a.y} x2={e.b.x} y2={e.b.y}
              opacity={e.opacity}
            />
          ))}
        </g>

        {/* Node halos for glowing nodes */}
        <g>
          {nodes.filter(n => n.glow).map((n, i) => (
            <circle
              key={`halo-${i}`}
              cx={n.x} cy={n.y} r={n.r * 3}
              fill="url(#nodeGlow)"
            />
          ))}
        </g>

        {/* Nodes */}
        <g>
          {nodes.map((n, i) => (
            <circle
              key={`node-${i}`}
              cx={n.x} cy={n.y} r={n.r * 0.5}
              fill={n.glow ? '#f0e9ff' : '#c4b0fa'}
              opacity={n.glow ? 1 : 0.85}
            />
          ))}
        </g>
      </svg>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 120px rgba(10,5,21,0.9)' }} />
    </div>
  );
}
