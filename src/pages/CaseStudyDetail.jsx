import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Wrench, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function CaseStudyDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');

  const { data: caseStudies = [], isLoading } = useQuery({
    queryKey: ['case-studies'],
    queryFn: () => base44.entities.CaseStudy.list(),
    initialData: []
  });

  const study = caseStudies.find(cs => cs.slug === slug);

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="animate-pulse space-y-6">
            <div className="h-8 w-32 bg-slate-200 rounded-full" />
            <div className="h-12 w-3/4 bg-slate-200 rounded" />
            <div className="h-4 w-full bg-slate-200 rounded" />
            <div className="h-4 w-2/3 bg-slate-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

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

            {/* Metrics Highlight */}
            {study.metrics && study.metrics.length > 0 && (
              <div className="flex flex-wrap gap-6 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                    <div>
                      <span className="text-2xl font-bold text-emerald-700">{metric.value}</span>
                      <span className="text-emerald-600 mr-2">{metric.label}</span>
                    </div>
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

            {/* Process */}
            {study.process && (
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-blue-600" />
                  </div>
                  התהליך
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">
                  {study.process}
                </p>
              </div>
            )}

            {/* Results */}
            {study.results && (
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-8 border border-emerald-200">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-200 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-700" />
                  </div>
                  התוצאות
                </h2>
                <p className="text-slate-700 leading-relaxed text-lg whitespace-pre-line">
                  {study.results}
                </p>
              </div>
            )}

            {/* Tools */}
            {study.tools && study.tools.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">כלים שנעשה בהם שימוש</h3>
                <div className="flex flex-wrap gap-2">
                  {study.tools.map((tool, idx) => (
                    <Badge key={idx} variant="outline" className="px-4 py-2 text-sm">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

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