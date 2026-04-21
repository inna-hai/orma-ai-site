import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { caseStudies } from '@/data/staticData';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export default function CaseStudies() {
  const [selected, setSelected] = useState('all');
  const industries = [...new Set(caseStudies.map(cs => cs.industry).filter(Boolean))];
  const filtered = selected === 'all' ? caseStudies : caseStudies.filter(cs => cs.industry === selected);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,109,226,0.18) 0%, transparent 60%)' }} />
        <div className="relative container-editorial">
          <motion.div {...fadeUp} className="max-w-4xl">
            <div className="meta-label mb-6">Case Studies</div>
            <h1 className="heading-display mb-8">
              תוצאות אמיתיות.<br />
              <span className="text-lavender-300">לא הבטחות.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-[1.75] max-w-2xl">
              ארגונים שהטמיעו סוכני AI בעזרתנו. כל סיפור כולל את האתגר, הפתרון, והמספרים.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      {industries.length > 0 && (
        <section className="border-t border-white/[0.06] py-6">
          <div className="container-editorial flex items-center gap-2 flex-wrap">
            <span className="meta-label text-white/40 ml-3">סינון</span>
            <button
              onClick={() => setSelected('all')}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition ${
                selected === 'all' ? 'bg-white text-[#0a0515]' : 'bg-white/[0.05] text-white/70 hover:bg-white/10'
              }`}
            >
              הכל
            </button>
            {industries.map(ind => (
              <button
                key={ind}
                onClick={() => setSelected(ind)}
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition ${
                  selected === ind ? 'bg-white text-[#0a0515]' : 'bg-white/[0.05] text-white/70 hover:bg-white/10'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="py-16 md:py-24 border-t border-white/[0.06]">
        <div className="container-editorial">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-white/40">אין סיפורי הצלחה בקטגוריה זו כרגע.</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filtered.map((study, i) => (
                <motion.div
                  key={study.id}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                >
                  <Link
                    to={`${createPageUrl('CaseStudyDetail')}?id=${study.id}`}
                    className="group block h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-lavender-400/30 p-8 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-5">
                      <span className="meta-label text-lavender-300">{study.industry}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-lavender-200 transition-colors leading-tight">
                      {study.title}
                    </h2>
                    <p className="text-white/60 mb-6 text-[15px] leading-[1.75] line-clamp-3">
                      {study.challenge}
                    </p>
                    {study.results && study.results.length > 0 && (
                      <div className="flex flex-wrap gap-4 pt-5 border-t border-white/[0.06]">
                        {study.results.slice(0, 2).map((r, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[13px]">
                            <TrendingUp className="w-4 h-4 text-lavender-400" />
                            <span className="text-white/80 font-medium">{r}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-2 mt-6 text-lavender-300 font-medium text-[14px] group-hover:gap-4 transition-all">
                      לקריאה המלאה
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
