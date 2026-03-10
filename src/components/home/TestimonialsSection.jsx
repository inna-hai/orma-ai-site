import React from 'react';
import { motion } from 'framer-motion';

const blocks = [
  {
    title: 'מה קורה מתחת למכסה',
    text: 'הסוכן מחזיק מודל פנימי של "בריאות הליד" — שמשקלל תדירות תקשורת, זמן תגובה, שלב במשפך, וערך פוטנציאלי. כל החלטה — מתי לפנות, לאיזה איש צוות להעביר, איזה מסר לשלוח — מבוססת על המודל הזה, לא על כלל עסקי סטטי.',
  },
  {
    title: 'דוגמה: ניהול רשת שטח ארצית',
    text: 'ארגון שירותים עם 120 עובדי שטח ב-5 אזורים. כל בוקר הסוכן מפיץ לוחות משימות מותאמים לכל עובד. העובד מדווח סיום בהודעה — הסוכן מעדכן CRM, מעדכן לקוח, רושם שעות, מקצה משימה הבאה, ומאזן עומסים. מנהלי אזור מקבלים סיכום יומי. הנהלה בכירה מקבלת דוח שבועי עם KPIs.',
  },
  {
    title: 'זרימה כספית מלאה',
    text: 'עסקה נסגרת → הסוכן מייצר הצעת מחיר → הלקוח מאשר → חשבונית נוצרת → מעקב תשלום מתחיל → אם עבר מועד — תזכורת מנומסת ללקוח → המנהל מקבל דוח תזרים שבועי עם חריגות מסומנות.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            העומק שמאחורי הסוכן
          </h2>
        </motion.div>

        {/* Depth Quote */}
        <motion.blockquote
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-r-4 border-indigo-500 pr-7 mb-12 text-slate-300 text-lg italic leading-relaxed"
        >
          "בחברות רבות, 30% מזמן העבודה הניהולי מתבזבז על העברת מידע בין מערכות — הקלדת אותם נתונים ב-CRM, באקסל, בקובץ הנהלת חשבונות, ובקבוצת WhatsApp. סוכן Forward מבטל את הבעיה הזו מהשורש."
        </motion.blockquote>

        {/* Process Blocks */}
        <div className="space-y-6">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-7"
            >
              <h3 className="text-indigo-400 font-bold text-base mb-3">{block.title}</h3>
              <p className="text-slate-400 leading-relaxed text-[15px]">{block.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
