import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    num: 1,
    title: 'אפיון ומיפוי מערכת קיימת',
    gradient: 'from-blue-500 to-blue-700',
    tasks: [
      'מיפוי מלא — טבלאות, שדות, קשרים, automations',
      'ראיון תהליכים עם הצוות — מי עושה מה, איפה צווארי בקבוק',
      'הגדרת KPIs — זמן טיפול בליד, אחוז המרה, עומס משימות',
      'מסמך אפיון (Spec) — סכימת נתונים, views, הרשאות',
    ],
    deliverable: 'מסמך אפיון מאושר + מיפוי נתונים + רשימת תהליכים',
  },
  {
    num: 2,
    title: 'בניית מערכת CRM + מיגרציה',
    gradient: 'from-violet-500 to-violet-700',
    tasks: [
      'בניית סכימת נתונים — טבלאות, קשרים, ולידציות מותאמות',
      'API מלא — כל הפעולות העסקיות: CRUD, אישורים, חישובים',
      'מיגרציה — העברת כל הנתונים, רשומות, היסטוריה + בדיקת תקינות',
      'הרשאות ואבטחה — תפקידים + audit log',
    ],
    deliverable: 'מערכת CRM פעילה עם כל הנתונים + דוח מיגרציה',
  },
  {
    num: 3,
    title: 'דשבורדים וממשקי משתמש',
    gradient: 'from-amber-500 to-amber-700',
    tasks: [
      'דשבורד מותאם לכל תפקיד — כל עובד רואה בדיוק מה שרלוונטי',
      'קנבן פרויקטים — תצוגה ויזואלית, גרירה להעברת סטטוס',
      'פייפליין הצעות מחיר — טיוטה → נשלחה → אושרה → נדחתה',
      'חיפוש חופשי + הפקת מסמכים מעוצבים (PDF)',
    ],
    deliverable: 'ממשק משתמש מלא + דשבורדים מותאמים',
  },
  {
    num: 4,
    title: 'סוכני AI + אוטומציות',
    gradient: 'from-emerald-500 to-emerald-700',
    tasks: [
      'הקמת סוכני AI — מותאמים לכל תהליך ומחלקה',
      'אוטומציות עסקיות — אישור הצעה → יצירת מכירה, משימות מתבניות',
      'חיבור WhatsApp/SMS/Email — הודעות מוכנות, שליחה חכמה',
      'ממשק שיחה טבעי + התראות פרואקטיביות',
    ],
    deliverable: 'סוכני AI פעילים + אוטומציות + ערוצי תקשורת',
  },
  {
    num: 5,
    title: 'בדיקות, הדרכה ו-Go Live',
    gradient: 'from-red-500 to-red-700',
    tasks: [
      'QA מלא — תקינות נתונים, אוטומציות, תרחישי קצה',
      'הדרכת צוות — סשן אישי לכל תפקיד + מסמכים + וידאו',
      'Soft launch — שבוע עבודה מקבילה, ישנה + חדשה',
      'Go Live 🚀 — מעבר מלא + ניטור צמוד בימים הראשונים',
    ],
    deliverable: 'מערכת חיה בפרודקשן + צוות מודרך',
  },
  {
    num: 6,
    title: 'ליווי שוטף + שיפור מתמיד',
    gradient: 'from-slate-600 to-slate-800',
    tasks: [
      'ניטור ואופטימיזציה — מעקב ביצועי סוכנים, כיוונון, שיפור',
      'פיצ׳רים חדשים — הוספת יכולות לפי צרכים שצצים',
      'גיבויים ואבטחה — גיבויים אוטומטיים, עדכוני אבטחה',
      'דוחות ותובנות — ניתוחים חודשיים: מה עבד, מה לשפר',
    ],
    deliverable: 'מערכת שמשתפרת כל הזמן + תמיכה + דוחות חודשיים',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white" id="approach">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 text-sm font-bold tracking-widest uppercase">תוכנית הטמעה</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 mt-2">
            ששה שלבים — מאפיון ועד Go Live
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            תהליך מובנה שמבטיח מעבר חלק, ללא הפתעות
          </p>
        </motion.div>

        <div className="space-y-5">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 p-6 pb-0">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-black text-lg">{phase.num}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{phase.title}</h3>
              </div>

              {/* Body */}
              <div className="p-6 pr-[84px]">
                <ul className="space-y-2 mb-4">
                  {phase.tasks.map((task, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                      <span className="text-indigo-500 font-bold mt-0.5">○</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm">
                  <strong className="text-green-800">📄 תוצר:</strong>{' '}
                  <span className="text-green-700">{phase.deliverable}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
