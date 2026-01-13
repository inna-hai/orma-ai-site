import React from 'react';
import { motion } from 'framer-motion';

export default function Privacy() {
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
              מדיניות פרטיות
            </h1>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-8">
                עדכון אחרון: {new Date().toLocaleDateString('he-IL')}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">1. כללי</h2>
                  <p className="text-slate-600 leading-relaxed">
                    ORMA.AI מכבדת את פרטיות המשתמשים באתר. מדיניות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלכם.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">2. המידע שאנו אוספים</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    אנו אוספים מידע שאתם מספקים לנו ישירות:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>שם מלא</li>
                    <li>כתובת אימייל</li>
                    <li>מספר טלפון</li>
                    <li>שם חברה ותפקיד</li>
                    <li>כל מידע נוסף שתבחרו לשתף איתנו</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">3. שימוש במידע</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    אנו משתמשים במידע שנאסף למטרות הבאות:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>יצירת קשר לגבי פניות ושאלות</li>
                    <li>מתן שירותים ותמיכה</li>
                    <li>שיפור השירותים והאתר שלנו</li>
                    <li>שליחת עדכונים ומידע שיווקי (בהסכמתכם)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">4. שיתוף מידע</h2>
                  <p className="text-slate-600 leading-relaxed">
                    אנו לא נמכור, נחליף או נעביר את המידע האישי שלכם לצדדים שלישיים ללא הסכמתכם, למעט במקרים הנדרשים על פי חוק.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">5. אבטחת מידע</h2>
                  <p className="text-slate-600 leading-relaxed">
                    אנו נוקטים באמצעי אבטחה מתאימים כדי להגן על המידע האישי שלכם מפני גישה לא מורשית, שינוי, חשיפה או השמדה.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">6. זכויותיכם</h2>
                  <p className="text-slate-600 leading-relaxed">
                    יש לכם זכות לבקש גישה למידע האישי שלכם, לתקן אותו או למחוק אותו. לכל בקשה, אנא צרו איתנו קשר.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">7. יצירת קשר</h2>
                  <p className="text-slate-600 leading-relaxed">
                    לשאלות או בקשות בנוגע למדיניות הפרטיות, אנא צרו קשר דרך עמוד יצירת הקשר באתר.
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