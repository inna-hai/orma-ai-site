import React from 'react';
import { motion } from 'framer-motion';
import { Repeat, Link2, Lightbulb, ArrowLeft } from 'lucide-react';

const problems = [
  {
    icon: Repeat,
    problem: 'עומס עבודה ידני ומיותר',
    solution: 'תהליכים אוטומטיים וזרימה חכמה',
    color: 'violet'
  },
  {
    icon: Link2,
    problem: 'יותר מדי מערכות שלא מדברות',
    solution: 'חיבור חכם בין הכלים הקיימים',
    color: 'blue'
  },
  {
    icon: Lightbulb,
    problem: 'AI שנשאר בהרצאות ובמצגות',
    solution: 'הטמעה אמיתית בעבודה היומיומית',
    color: 'emerald'
  }
];

const colorClasses = {
  violet: {
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    icon: 'text-violet-600',
    iconBg: 'bg-violet-100'
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    icon: 'text-blue-600',
    iconBg: 'bg-blue-100'
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    icon: 'text-emerald-600',
    iconBg: 'bg-emerald-100'
  }
};

export default function ProblemSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            האתגרים שאנחנו פותרות
          </h2>
          <p className="text-slate-600 text-lg">
            שלושת החסמים המרכזיים שמונעים מ-AI לעבוד באמת בארגונים
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, index) => {
            const colors = colorClasses[item.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${colors.bg} border ${colors.border} group hover:shadow-lg transition-all duration-300`}
              >
                <div className={`w-14 h-14 rounded-xl ${colors.iconBg} flex items-center justify-center mb-6`}>
                  <item.icon className={`w-7 h-7 ${colors.icon}`} />
                </div>

                <div className="space-y-4">
                  <p className="text-xl font-bold text-slate-900 mb-4">
                    {item.problem}
                  </p>
                  
                  <p className={`text-base ${colors.icon} font-medium`}>
                    {item.solution}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}