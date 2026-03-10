import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const oldItems = [
  'המערכת קיימת; AI "מוצמד" אליה',
  'עדיין צריך להזין נתונים ידנית',
  'AI מציע — אדם מבצע',
  'כל מחלקה = מערכת נפרדת',
  'AI לא "רואה" את התמונה המלאה',
];

const newItems = [
  'אין מערכת "מתחת" — הסוכן הוא הכל',
  'נתונים נאספים מהשיחה הטבעית',
  'הסוכן מחליט ומבצע באוטונומיה',
  'CRM + HR + Finance = סוכן אחד',
  'ראייה הוליסטית מלאה של העסק',
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-indigo-600 text-sm font-bold tracking-widest uppercase">מה באמת שונה כאן</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            הפער בין "AI בתוך מערכת" לבין "AI שהוא המערכת"
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            כמעט כל חברת תוכנה הוסיפה "AI" למוצר שלה — Salesforce, HubSpot, Monday. אבל כולן חולקות מגבלה מבנית: ה-AI הוא שכבה על גבי המערכת, לא המערכת עצמה.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Old CRM Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 bg-red-50 border border-red-200"
          >
            <h3 className="text-lg font-bold text-red-800 mb-6">AI כשכבה (השוק)</h3>
            <ul className="space-y-4">
              {oldItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Forward Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-8 bg-green-50 border border-green-200"
          >
            <h3 className="text-lg font-bold text-green-800 mb-6">AI כמערכת (Forward)</h3>
            <ul className="space-y-4">
              {newItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Intro paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-slate-600 leading-relaxed">
            Forward בנתה משהו שונה מהותית. לא עוד שכבת AI על גבי תוכנה קיימת. לא עוד "Copilot" שמחכה להוראות. אלא{' '}
            <strong className="text-slate-900">סוכן שהוא המערכת עצמה</strong> — שיודע לנהל תהליכים עסקיים מקצה לקצה, מרגע שליד נכנס ועד שהחשבונית יוצאת.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
