import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "מה זה Forward?",
    answer: "Forward היא לא עוד מערכת CRM. היא סוכן AI אוטונומי שמנהל את כל התפעול של החברה — מכירות, משאבי אנוש וכספים — ממערכת אחת חושבת. הסוכן הוא המערכת עצמה, לא שכבה על גבי תוכנה קיימת."
  },
  {
    question: "במה Forward שונה מ-CRM רגיל?",
    answer: "ב-CRM רגיל, אנשים צריכים להזין נתונים, לעדכן סטטוסים, ולרדוף אחרי דיווחים. ב-Forward, הסוכן עושה הכל לבד — מזהה לידים, מתאם צוותים, מנפיק חשבוניות ומייצר דוחות, בלי שאף אדם צריך לפתוח מערכת."
  },
  {
    question: "איך תהליך ההטמעה עובד?",
    answer: "תהליך מובנה של 6 שלבים: אפיון ומיפוי, בניית CRM + מיגרציה, דשבורדים, סוכני AI + אוטומציות, בדיקות והדרכה, ו-Go Live עם ליווי שוטף. הצוות עובר בצורה טבעית כי הערוץ (WhatsApp, Telegram) כבר מוכר."
  },
  {
    question: "האם יש שיבוש לפעילות השוטפת?",
    answer: "אפס שיבוש. התהליך כולל שלב Soft Launch שבו שתי המערכות פועלות במקביל, מיגרציה מלאה עם בדיקות תקינות, וניטור צמוד 24/7. אין מערכת חדשה ללמוד — יש חבר צוות חדש להכיר."
  },
  {
    question: "מאילו מערכות אפשר לעבור?",
    answer: "מכל מערכת: Airtable, Monday.com, HubSpot, Salesforce, Google Sheets, Excel, Zoho, Pipedrive, ואפילו מערכות מותאמות עם SQL export. כל הנתונים, הקשרים וההיסטוריה עוברים עם בדיקת תקינות מלאה."
  },
  {
    question: "מה לגבי אבטחת מידע?",
    answer: "מבנה הרשאות מדורג, Audit log מלא על כל פעולה, SLA מובטח, אפשרות לשרת ייעודי / On-Premise, SSO ואימות דו-שלבי, עמידה בתקני Compliance ורגולציה."
  },
  {
    question: "האם הסוכן מחליף עובדים?",
    answer: "לא. המערכת לא מחליפה את הניהול — היא מאפשרת לו להתמקד באסטרטגיה במקום בתפעול. הסוכן מתנהג כמו מנהל תפעול שעובד 24/7 ולא מפספס אף פרט, וכך משחרר את הצוות לעבודה בעלת ערך גבוה יותר."
  },
  {
    question: "כמה זה עולה?",
    answer: "המחיר נקבע לפי אפיון. יש שלושה מסלולים: Business (עד 50 משתמשים), Enterprise (עד 200 משתמשים), ו-Enterprise Plus (ללא הגבלה). פגישת אפיון ראשונה — בחינם וללא התחייבות."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-slate-50" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6">
            שאלות נפוצות
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-right p-6 rounded-2xl border transition-all duration-200 ${
                  openIndex === index 
                    ? 'bg-indigo-50 border-indigo-200' 
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className={`text-lg font-semibold ${openIndex === index ? 'text-indigo-900' : 'text-slate-900'}`}>
                    {faq.question}
                  </h3>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180 text-indigo-600' : 'text-slate-400'
                  }`} />
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-600 mt-4 leading-relaxed text-right">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
