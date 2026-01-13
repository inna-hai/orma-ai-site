import React from 'react';
import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-slate-900 mb-8">
              תנאי שימוש
            </h1>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-8">
                עדכון אחרון: {new Date().toLocaleDateString('he-IL')}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">1. קבלת התנאים</h2>
                  <p className="text-slate-600 leading-relaxed">
                    בשימוש באתר ORMA.AI, אתם מסכימים לתנאי שימוש אלה. אם אינכם מסכימים לתנאים, אנא הימנעו משימוש באתר.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">2. השירותים</h2>
                  <p className="text-slate-600 leading-relaxed">
                    ORMA.AI מספקת שירותי ייעוץ והטמעת בינה מלאכותית לארגונים. האתר מספק מידע על השירותים ומאפשר יצירת קשר עמנו.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">3. קניין רוחני</h2>
                  <p className="text-slate-600 leading-relaxed">
                    כל התוכן באתר, כולל טקסטים, גרפיקה, לוגואים ותמונות, הם קניינה של ORMA.AI ומוגנים בחוקי זכויות יוצרים.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">4. הגבלת אחריות</h2>
                  <p className="text-slate-600 leading-relaxed">
                    המידע באתר מסופק "כמות שהוא". ORMA.AI לא תישא באחריות לכל נזק ישיר או עקיף הנובע משימוש באתר או במידע המופיע בו.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">5. קישורים לאתרים חיצוניים</h2>
                  <p className="text-slate-600 leading-relaxed">
                    האתר עשוי להכיל קישורים לאתרים חיצוניים. ORMA.AI אינה אחראית לתוכן או למדיניות הפרטיות של אתרים אלה.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">6. שינויים בתנאים</h2>
                  <p className="text-slate-600 leading-relaxed">
                    ORMA.AI שומרת לעצמה את הזכות לעדכן תנאי שימוש אלה בכל עת. המשך השימוש באתר לאחר עדכון מהווה הסכמה לתנאים המעודכנים.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">7. דין וסמכות שיפוט</h2>
                  <p className="text-slate-600 leading-relaxed">
                    תנאי שימוש אלה כפופים לחוקי מדינת ישראל. כל מחלוקת תתברר בבתי המשפט המוסמכים בישראל.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">8. יצירת קשר</h2>
                  <p className="text-slate-600 leading-relaxed">
                    לשאלות בנוגע לתנאי השימוש, אנא צרו קשר דרך עמוד יצירת הקשר באתר.
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}