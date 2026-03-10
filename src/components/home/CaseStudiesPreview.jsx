import React from 'react';
import { motion } from 'framer-motion';

const agents = [
  {
    name: 'סוכן מכירות',
    description: 'מנהל פייפליין מקצה לקצה — מליד חדש ועד סגירת עסקה',
    tasks: [
      'זיהוי וסיווג לידים אוטומטי',
      'מעקבים מותאמי הקשר',
      'יצירת הצעות מחיר',
      'דוחות פייפליין יזומים',
    ],
    borderColor: 'border-r-red-500',
    bgColor: 'bg-red-500/5',
  },
  {
    name: 'סוכן תפעול',
    description: 'מקצה משימות, מאזן עומסים ומנהל צוותי שטח',
    tasks: [
      'לוחות משימות יומיים מותאמים',
      'איזון עומסים בין אזורים',
      'תיעוד אוטומטי מהשטח',
      'סיכום יומי למנהלי אזור',
    ],
    borderColor: 'border-r-blue-500',
    bgColor: 'bg-blue-500/5',
  },
  {
    name: 'סוכן כספים',
    description: 'סוגר מעגל פיננסי — מחשבונית ועד גבייה',
    tasks: [
      'הפקת חשבוניות אוטומטית',
      'מעקב תשלומים ותזכורות',
      'דוח תזרים שבועי',
      'התראות על חריגות',
    ],
    borderColor: 'border-r-amber-500',
    bgColor: 'bg-amber-500/5',
  },
  {
    name: 'סוכן שירות',
    description: 'מנהל שביעות רצון, SLA ובקרת איכות',
    tasks: [
      'סקרים אוטומטיים לאחר שירות',
      'זיהוי לקוחות בסיכון נטישה',
      'ניטור עמידה ב-SLA',
      'המלצות Cross-sell',
    ],
    borderColor: 'border-r-emerald-500',
    bgColor: 'bg-emerald-500/5',
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-24 bg-slate-50" id="agents">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 text-sm font-bold tracking-widest uppercase">סוכנים בפעולה</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 mt-2">
            סוכן ייעודי לכל מחלקה
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            כל סוכן מתמחה בתחום שלו, אבל כולם חולקים את אותו מוח — תמונה הוליסטית של העסק
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl border border-slate-200 ${agent.bgColor} border-r-4 ${agent.borderColor} p-7 hover:shadow-lg transition-shadow duration-300`}
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">{agent.name}</h3>
              <p className="text-slate-500 text-sm mb-4">{agent.description}</p>
              <ul className="space-y-2">
                {agent.tasks.map((task, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
