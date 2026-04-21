import React from 'react';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div className="pt-32 pb-24">
      <section className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="meta-label mb-6">Legal</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">מדיניות פרטיות</h1>
          <p className="text-[13px] text-white/40 mb-12">עדכון אחרון: {new Date().toLocaleDateString('he-IL')}</p>

          <div className="space-y-10 text-white/70 leading-[1.85] text-[15px]">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. כללי</h2>
              <p>Forward מכבדת את פרטיות המשתמשים באתר. מדיניות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלכם.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. המידע שאנו אוספים</h2>
              <p className="mb-3">אנו אוספים מידע שאתם מספקים לנו ישירות:</p>
              <ul className="list-disc list-inside space-y-1.5 pr-2">
                <li>שם מלא</li><li>כתובת אימייל</li><li>מספר טלפון</li><li>שם חברה ותפקיד</li><li>כל מידע נוסף שתבחרו לשתף איתנו</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. שימוש במידע</h2>
              <p className="mb-3">אנו משתמשים במידע שנאסף למטרות הבאות:</p>
              <ul className="list-disc list-inside space-y-1.5 pr-2">
                <li>יצירת קשר לגבי פניות ושאלות</li><li>מתן שירותים ותמיכה</li><li>שיפור השירותים והאתר שלנו</li><li>שליחת עדכונים ומידע שיווקי (בהסכמתכם)</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. שיתוף מידע</h2>
              <p>אנו לא נמכור, נחליף או נעביר את המידע האישי שלכם לצדדים שלישיים ללא הסכמתכם, למעט במקרים הנדרשים על פי חוק.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. אבטחת מידע</h2>
              <p>אנו נוקטים באמצעי אבטחה מתאימים כדי להגן על המידע האישי שלכם מפני גישה לא מורשית, שינוי, חשיפה או השמדה.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. זכויותיכם</h2>
              <p>יש לכם זכות לבקש גישה למידע האישי שלכם, לתקן אותו או למחוק אותו. לכל בקשה, אנא צרו איתנו קשר.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. יצירת קשר</h2>
              <p>לשאלות או בקשות בנוגע למדיניות הפרטיות, אנא צרו קשר דרך עמוד יצירת הקשר באתר.</p>
            </section>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
