import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { caseStudies } from '@/data/staticData';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, TrendingUp } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export default function CaseStudyDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const study = caseStudies.find(cs => cs.id === id);

  if (!study) {
    return (
      <div className="pt-32 min-h-screen">
        <div className="container-editorial py-24 text-center">
          <h1 className="heading-section mb-8">סיפור ההצלחה לא נמצא</h1>
          <Link to={createPageUrl('CaseStudies')} className="btn-pill-ghost">
            <ArrowRight className="w-4 h-4 mr-2" />
            חזרה לסיפורי הצלחה
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,109,226,0.18) 0%, transparent 60%)' }} />
        <div className="relative container-editorial">
          <motion.div {...fadeUp}>
            <Link to={createPageUrl('CaseStudies')} className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-10 transition-colors text-[14px]">
              <ArrowRight className="w-4 h-4" />
              חזרה לסיפורי הצלחה
            </Link>
            <div className="meta-label mb-4 text-lavender-300">{study.industry}</div>
            <h1 className="heading-display mb-10 max-w-4xl">{study.title}</h1>

            {study.results && study.results.length > 0 && (
              <div className="flex flex-wrap gap-x-10 gap-y-4 rounded-2xl border border-lavender-400/20 bg-lavender-500/[0.06] p-6 md:p-8">
                {study.results.map((result, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-lavender-300" />
                    <span className="text-lg font-medium text-white">{result}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="container-editorial space-y-16">
          <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <div className="text-5xl font-black text-lavender-400/80 mb-3">01</div>
              <div className="meta-label">האתגר</div>
            </div>
            <div className="md:col-span-8">
              <p className="text-white/75 text-lg leading-[1.85]">{study.challenge}</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 md:gap-16 border-t border-white/[0.06] pt-16">
            <div className="md:col-span-4">
              <div className="text-5xl font-black text-lavender-400/80 mb-3">02</div>
              <div className="meta-label">הפתרון</div>
            </div>
            <div className="md:col-span-8">
              <p className="text-white/75 text-lg leading-[1.85]">{study.solution}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-28 md:py-36 overflow-hidden border-t border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(139,109,226,0.2) 0%, transparent 70%)' }} />
        <div className="relative container-editorial text-center">
          <motion.div {...fadeUp}>
            <h2 className="heading-section max-w-3xl mx-auto mb-8">רוצים תוצאות דומות בארגון שלכם?</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">נשמח לשמוע על האתגרים שלכם ולבדוק איך AI יכול לעזור.</p>
            <Link to={createPageUrl('Contact')} className="btn-pill-primary">
              <ArrowLeft className="w-4 h-4 ml-2" />
              לשיחת אבחון
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
