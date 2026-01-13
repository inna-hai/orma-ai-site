import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CaseStudiesPreview({ caseStudies = [] }) {
  const featured = caseStudies.filter(cs => cs.is_featured && cs.is_published).slice(0, 3);

  if (featured.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              סיפורי הצלחה
            </h2>
            <p className="text-slate-600 text-lg">
              תוצאות עסקיות מארגונים שעבדו איתנו
            </p>
          </div>
          <Link to={createPageUrl('CaseStudies')}>
            <Button variant="outline" className="border-slate-200 hover:border-slate-300">
              לכל סיפורי ההצלחה
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`${createPageUrl('CaseStudyDetail')}?slug=${study.slug}`}>
                <div className="group h-full bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-violet-200 hover:shadow-lg transition-all duration-300">
                  {/* Industry Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
                    {study.industry}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-violet-600 transition-colors">
                    {study.title}
                  </h3>

                  {/* Challenge Preview */}
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {study.challenge}
                  </p>

                  {/* Metrics */}
                  {study.metrics && study.metrics.length > 0 && (
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-200">
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-600 font-semibold">
                        {study.metrics[0].value}
                      </span>
                      <span className="text-slate-500 text-sm">
                        {study.metrics[0].label}
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}