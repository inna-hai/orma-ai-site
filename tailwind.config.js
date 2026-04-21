/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Heebo', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Heebo', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Forward brand palette — deep violet night sky
        night: {
          950: '#08030f',   // deepest black-violet
          900: '#0f0820',   // hero background start
          800: '#1a0f35',   // mid violet
          700: '#261451',   // section surface
          600: '#331a6b',   // lighter surface
          500: '#432088',
        },
        lavender: {
          50: '#faf7ff',
          100: '#f0e9ff',
          200: '#ddd0ff',
          300: '#c4b0fa',
          400: '#a68af0',
          500: '#8b6de2',   // primary accent
          600: '#7554cc',
          700: '#5d3fa8',
          800: '#472d80',
          900: '#302056',
        },
        cream: '#f5f0e6',
        // shadcn tokens
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'nebula': 'radial-gradient(ellipse at 20% 30%, rgba(139,109,226,0.25) 0%, transparent 45%), radial-gradient(ellipse at 80% 70%, rgba(75,40,140,0.35) 0%, transparent 50%), linear-gradient(180deg, #0f0820 0%, #1a0f35 50%, #0a0517 100%)',
        'nebula-soft': 'radial-gradient(ellipse at 50% 0%, rgba(139,109,226,0.15) 0%, transparent 60%), linear-gradient(180deg, #0f0820 0%, #1a0f35 100%)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'fade-up': { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.7s ease-out forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
