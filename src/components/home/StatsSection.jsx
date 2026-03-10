import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const comparisons = [
  { capability: 'מעקב לידים', old: 'ידני — תלוי שהצוות יזכור', forward: 'אוטומטי — סוכן עוקב ומתזכר' },
  { capability: 'הצעות מחיר', old: 'יצירה ידנית + שליחה', forward: 'טיוטה אוטומטית + תזכורות חכמות' },
  { capability: 'דיווח', old: 'שליפת דוחות לפי דרישה', forward: 'סיכומים יזומים + התראות פרואקטיביות' },
  { capability: 'תקשורת לקוח', old: 'ידנית בלבד', forward: 'הודעות מותאמות דרך WhatsApp/SMS' },
  { capability: 'שאילתות', old: 'פילטרים מורכבים', forward: '"מה הסטטוס של פרויקט כהן?"' },
  { capability: 'בדיקת תקינות', old: 'לא קיים', forward: 'QA אוטומטי — כפילויות, חוסרים, שגיאות' },
  { capability: 'סקרי שביעות רצון', old: 'ידני — אם בכלל', forward: 'נשלחים אוטומטית לפי ציר הזמן' },
  { capability: 'זמינות', old: 'שעות עבודה', forward: '24/7 — הסוכן תמיד ער' },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-indigo-400 text-sm font-bold tracking-widest uppercase">השוואה מפורטת</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            מה באמת משתנה כשמוסיפים שכבת AI
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-6 mb-16">
          {[
            { value: '100%', label: 'העברת נתונים עם בדיקת תקינות' },
            { value: '0', label: 'שיבוש לפעילות השוטפת' },
            { value: '24/7', label: 'ניטור וליווי צמוד' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8"
            >
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="bg-slate-800 text-white px-4 py-3 text-right font-semibold rounded-tr-xl">יכולת</th>
                <th className="bg-slate-800 text-white px-4 py-3 text-right font-semibold">CRM מסורתי</th>
                <th className="bg-slate-800 text-white px-4 py-3 text-right font-semibold rounded-tl-xl">Forward AI</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr key={i} className="border-b border-slate-700/50">
                  <td className="px-4 py-3 text-white font-semibold">{row.capability}</td>
                  <td className="px-4 py-3 text-slate-400">{row.old}</td>
                  <td className="px-4 py-3 text-emerald-400 font-medium">
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 flex-shrink-0" />
                      {row.forward}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
