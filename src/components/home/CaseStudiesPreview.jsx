import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    industry: "ביטוח",
    metric: "40%",
    metricLabel: "קיצור זמן טיפול בתביעות",
    description: "סיווג מסמכים מבוסס AI ייעל את תהליך התביעות, קיצר זמני בדיקה ושיפר שביעות רצון לקוחות.",
    color: "blue"
  },
  {
    industry: "בריאות",
    metric: "95%",
    metricLabel: "דיוק בקידוד רפואי",
    description: "קידוד רפואי אוטומטי עם תאימות מלאה לתקנות פרטיות, הפחתת טעויות והאצת מחזורי חיוב.",
    color: "emerald"
  },
  {
    industry: "ייצור",
    metric: "70%",
    metricLabel: "האצת הערכות מ-CAD ל-BOM",
    description: "אוטומציה של ניתוח שרטוטים וזיהוי פגמים קיצרה זמני בדיקה תוך שיפור דיוק ועמידה בתקנים.",
    color: "violet"
  }
];

const colorClasses = {
  blue: { 
    bg: "bg-blue-500/10", 
    border: "border-blue-500/20", 
    text: "text-blue-400",
    label: "text-blue-300"
  },
  emerald: { 
    bg: "bg-emerald-500/10", 
    border: "border-emerald-500/20", 
    text: "text-emerald-400",
    label: "text-emerald-300"
  },
  violet: { 
    bg: "bg-violet-500/10", 
    border: "border-violet-500/20", 
    text: "text-violet-400",
    label: "text-violet-300"
  }
};

export default function CaseStudiesPreview() {
  return (
    <section className="py-24 bg-slate-950" id="case-studies">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            סיפורי הצלחה של AI בתעשיות שונות
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            תוצאות אמיתיות מהטמעות אמיתיות במגוון תעשיות
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const colors = colorClasses[study.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl ${colors.bg} border ${colors.border} p-8 hover:scale-[1.02] transition-transform duration-300`}
              >
                {/* Industry Label */}
                <div className={`text-sm font-semibold ${colors.label} mb-6`}>
                  {study.industry}
                </div>

                {/* Big Metric */}
                <div className="mb-4">
                  <span className={`text-5xl md:text-6xl font-black ${colors.text}`}>
                    {study.metric}
                  </span>
                </div>

                {/* Metric Label */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {study.metricLabel}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed">
                  {study.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link 
            to={createPageUrl('CaseStudies')}
            className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors"
          >
            לכל סיפורי ההצלחה
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
