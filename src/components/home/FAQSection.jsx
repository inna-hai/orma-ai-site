import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "כמה זמן לוקח להטמיע פתרון AI?",
    answer: "תלוי במורכבות. POC ראשון יכול להיות מוכן תוך 4-6 שבועות. פתרון מלא לוקח 2-3 חודשים. אנחנו תמיד מתחילים עם POC מהיר כדי להראות ערך מוקדם."
  },
  {
    question: "האם AI יחליף עובדים?",
    answer: "המטרה היא לא להחליף אלא לשחרר עובדים ממשימות שגרתיות לעבודה בעלת ערך גבוה יותר. AI עוזר לעובדים לעבוד יותר טוב, לא במקומם."
  },
  {
    question: "מה העלות של הטמעת AI?",
    answer: "העלות תלויה בהיקף. אנחנו מציעים מודלים גמישים - מפרויקט חד-פעמי ועד ליווי חודשי. כל פרויקט מתחיל עם שיחת אסטרטגיה חינמית כדי להבין את הצרכים."
  },
  {
    question: "איך מודדים הצלחה?",
    answer: "לפני כל פרויקט מגדירים KPIs ברורים: חיסכון בזמן, הפחתת עלויות, שיפור שביעות רצון. אנחנו מודדים לפני ואחרי ומציגים את ה-ROI."
  },
  {
    question: "האם הנתונים שלי בטוחים?",
    answer: "אבטחת מידע בראש סדר העדיפויות. אנחנו עובדים לפי תקני אבטחה מחמירים כולל ISO 27001, הצפנה, בקרות גישה ושמירה על פרטיות. במידת הצורך - הכל רץ על השרתים שלכם."
  },
  {
    question: "אני לא יודע מאיפה להתחיל - מה עושים?",
    answer: "בדיוק בשביל זה יש שיחת אסטרטגיה חינמית. נבין את האתגרים שלכם, נזהה הזדמנויות ונציע מאיפה הכי כדאי להתחיל."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-white" id="faq">
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
                    ? 'bg-blue-50 border-blue-200' 
                    : 'bg-slate-50 border-slate-100 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className={`text-lg font-semibold ${openIndex === index ? 'text-blue-900' : 'text-slate-900'}`}>
                    {faq.question}
                  </h3>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180 text-blue-600' : 'text-slate-400'
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
