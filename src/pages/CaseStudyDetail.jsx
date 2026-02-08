import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { caseStudies } from '@/data/staticData';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Wrench, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function CaseStudyDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  const study = caseStudies.find(cs => cs.id === id);

  if (!study) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">סיפור ההצלחה לא נמצא</h1>
          <Link to={createPageUrl('CaseStudies')}>
            <Button variant="outline">
              <ArrowRight className="w-4 h-4 ml-2" />
              חזרה לסיפורי הצלחה
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to={createPageUrl('CaseStudies')}
              className="inline-flex items-center gap-2 text-slate-500 hover:text-violet-600 mb-8 transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
              חזרה לסיפורי הצלחה
            </Link>

            <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-100 mb-4">
              {study.industry}
            </Badge>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              {study.title}
            </h1>

            {/* Results Highlight */}
            {study.results && study.results.length > 0 && (
              <div className="flex flex-wrap gap-6 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                {study.results.map((result, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                    <span className="text-lg font-medium text-emerald-700">{result}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Challenge */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">!</span>
                </div>
                האתגר
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {study.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-violet-600" />
                </div>
                הפתרון
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {study.solution}
              </p>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                רוצים תוצאות דומות בארגון שלכם?
              </h3>
              <p className="text-slate-400 mb-6">
                נשמח לשמוע על האתגרים שלכם ולבדוק איך AI יכול לעזור.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white px-8">
                  לשיחת אבחון AI
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
