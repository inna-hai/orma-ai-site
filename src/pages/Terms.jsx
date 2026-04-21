import React from 'react';
import { motion } from 'framer-motion';

export default function Terms() {
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
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">תנאי שימוש</h1>
          <p className="text-[13px] text-white/40 mb-12">עדכון אחרון: {new Date().toLocaleDateString('he-IL')}</p>

          <div className="space-y-10 text-white/70 leading-[1.85] text-[15px]">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. קבלת התנאים</h2>
              <p>בשימוש באתר Forward, אתם מסכימים לתנאי שימוש אלה. אם אינכם מסכימים לתנאים, אנא הימנעו משימוש באתר.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. השירותים</h2>
              <p>Forward מספקת שירותי ייעוץ והטמעת בינה מלאכותית לארגונים. האתר מספק מידע על השירותים ומאפשר יצירת קשר עמנו.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. קניין רוחני</h2>
              <p>כל התוכן באתר, כולל טקסטים, גרפיקה, לוגואים ותמונות, הם קניינה של Forward ומוגנים בחוקי זכויות יוצרים.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. הגבלת אחריות</h2>
              <p>המידע באתר מסופק &quot;כמות שהוא&quot;. Forward לא תישא באחריות לכל נזק ישיר או עקיף הנובע משימוש באתר או במידע המופיע בו.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. קישורים לאתרים חיצוניים</h2>
              <p>האתר עשוי להכיל קישורים לאתרים חיצוניים. Forward אינה אחראית לתוכן או למדיניות הפרטיות של אתרים אלה.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. שינויים בתנאים</h2>
              <p>Forward שומרת לעצמה את הזכות לעדכן תנאי שימוש אלה בכל עת. המשך השימוש באתר לאחר עדכון מהווה הסכמה לתנאים המעודכנים.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. דין וסמכות שיפוט</h2>
              <p>תנאי שימוש אלה כפופים לחוקי מדינת ישראל. כל מחלוקת תתברר בבתי המשפט המוסמכים בישראל.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. יצירת קשר</h2>
              <p>לשאלות בנוגע לתנאי השימוש, אנא צרו קשר דרך עמוד יצירת הקשר באתר.</p>
            </section>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
