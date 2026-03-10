import React from 'react';
import { motion } from 'framer-motion';

const processes = [
  'מעקב פייפליין מכירות רב-שלבי עם אישורי הנהלה',
  'הקצאת צוותי שטח ב-5 אזורים גיאוגרפיים + איזון עומסים',
  'מעקב תשלומים, גבייה, והפקת חשבוניות — סגירת מעגל פיננסי',
  'קליטת עובדים חדשים — Onboarding מלא מהחתימה עד השיבוץ',
  'בקרת איכות — סקרי שביעות רצון, זיהוי לקוחות בסיכון, חריגות SLA',
  'דיווח להנהלה — סיכומים יומיים, שבועיים, חודשיים, לפי מחלקה או סניף',
  'רכש ואספקה — ניהול ספקים, מעקב הזמנות, התראות על חוסרים',
  'ציות ורגולציה — תיעוד אוטומטי, Audit trail, עמידה בתקנים',
];

export default function MethodSection() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-bold tracking-widest uppercase">ללא תקרה</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            סוכן לכל תהליך — ללא מגבלה על היקף או מורכבות
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            כל תהליך בארגון שדורש מעקב, תיאום, או החלטות — יכול להיות מנוהל על ידי סוכן. 
            פלטפורמה שמתאימה את עצמה לכל מבנה ארגוני.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300 flex items-start gap-3"
            >
              <span className="text-indigo-400 font-bold text-lg mt-0.5">○</span>
              <span className="text-slate-300 text-sm leading-relaxed">{process}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <p className="text-slate-400 leading-relaxed">
            ככל שהעסק גדל ומתמודד עם תהליכים חדשים, <strong className="text-white">המערכת גדלה איתו</strong>. 
            בלי פרויקטי הטמעה נוספים, בלי רכישת מודולים, בלי חודשי אינטגרציה. 
            כל פעולה מתועדת עם שקיפות מלאה — הנהלה רואה כל החלטה, כל צעד, כל תוצאה.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
