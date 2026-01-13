import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const { data: caseStudies = [], isLoading } = useQuery({
    queryKey: ['case-studies'],
    queryFn: () => base44.entities.CaseStudy.list(),
    initialData: []
  });

  const publishedStudies = caseStudies.filter(cs => cs.is_published);
  
  const industries = [...new Set(publishedStudies.map(cs => cs.industry).filter(Boolean))];
  
  const filteredStudies = selectedIndustry === 'all' 
    ? publishedStudies 
    : publishedStudies.filter(cs => cs.industry === selectedIndustry);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              סיפורי הצלחה
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              תוצאות אמיתיות מארגונים שהטמיעו AI בעזרתנו.
              <br />
              כל סיפור כולל את האתגר, הפתרון והתוצאות.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      {industries.length > 0 && (
        <section className="pb-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 flex-wrap">
              <Filter className="w-5 h-5 text-slate-400" />
              <Button
                variant={selectedIndustry === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedIndustry('all')}
                className={selectedIndustry === 'all' ? 'bg-slate-900' : ''}
              >
                הכל
              </Button>
              {industries.map(industry => (
                <Button
                  key={industry}
                  variant={selectedIndustry === industry ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedIndustry(industry)}
                  className={selectedIndustry === industry ? 'bg-slate-900' : ''}
                >
                  {industry}
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 animate-pulse">
                  <div className="h-6 w-24 bg-slate-200 rounded-full mb-4" />
                  <div className="h-8 w-3/4 bg-slate-200 rounded mb-3" />
                  <div className="h-4 w-full bg-slate-200 rounded mb-2" />
                  <div className="h-4 w-2/3 bg-slate-200 rounded" />
                </div>
              ))}
            </div>
          ) : filteredStudies.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">אין סיפורי הצלחה להצגה כרגע.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`${createPageUrl('CaseStudyDetail')}?slug=${study.slug}`}>
                    <div className="group h-full bg-white rounded-2xl p-8 border border-slate-100 hover:border-violet-200 hover:shadow-xl transition-all duration-300">
                      {/* Industry Badge */}
                      <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-100 mb-4">
                        {study.industry}
                      </Badge>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-violet-600 transition-colors">
                        {study.title}
                      </h2>

                      {/* Challenge Preview */}
                      <p className="text-slate-600 mb-6 line-clamp-3">
                        {study.challenge}
                      </p>

                      {/* Metrics */}
                      {study.metrics && study.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100">
                          {study.metrics.slice(0, 2).map((metric, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-emerald-500" />
                              <span className="text-emerald-600 font-bold">{metric.value}</span>
                              <span className="text-slate-500 text-sm">{metric.label}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Read More */}
                      <div className="flex items-center gap-2 mt-6 text-violet-600 font-medium group-hover:gap-4 transition-all">
                        לקריאה המלאה
                        <ArrowLeft className="w-4 h-4" />
                      </div>
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