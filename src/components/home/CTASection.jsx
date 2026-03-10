import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: '🏢 Business',
    desc: 'עד 50 משתמשים',
    features: [
      'מיגרציה מלאה ממערכת קיימת',
      'CRM מותאם + API מלא',
      'דשבורדים מותאמים לכל תפקיד',
      'סוכני AI ללא הגבלה — לכל תהליך ומחלקה',
      'חיבור WhatsApp + Email',
      'אוטומציות עסקיות',
      'הדרכת צוות + מסמכים',
    ],
    featured: false,
  },
  {
    name: '🚀 Enterprise',
    desc: 'עד 200 משתמשים',
    features: [
      'הכל ב-Business +',
      'סוכנים מותאמים אישית ללא הגבלה',
      'אינטגרציות מרובות (ERP, BI, חשבונאות)',
      'הרשאות מדורגות + SSO',
      'ממשק שיחה טבעי בעברית',
      'התראות פרואקטיביות',
      'SLA מובטח',
      'דוחות חודשיים + ייעוץ תהליכי',
    ],
    featured: true,
  },
  {
    name: '🏗️ Enterprise Plus',
    desc: 'ללא הגבלה',
    features: [
      'הכל ב-Enterprise +',
      'שרת ייעודי / On-Premise',
      'Compliance ורגולציה מותאמת',
      'API פתוח לצד שלישי',
      'Multi-branch / Multi-tenant',
      'אימות דו-שלבי + Audit מלא',
      'ליווי מנהל פרויקט ייעודי',
    ],
    featured: false,
  },
];

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Pricing Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-indigo-600 text-sm font-bold tracking-widest uppercase">מסלולים</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 mt-2">
            בחרו את המסלול שמתאים לעסק שלכם
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-7 text-center ${
                tier.featured 
                  ? 'border-2 border-indigo-500 shadow-xl shadow-indigo-500/10 bg-white' 
                  : 'border-2 border-slate-200 bg-white'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  מומלץ
                </div>
              )}
              <h3 className="text-xl font-black text-slate-900 mb-1">{tier.name}</h3>
              <p className="text-sm text-slate-500 mb-5">{tier.desc}</p>
              
              <ul className="text-right space-y-3 mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-start gap-2 border-b border-slate-50 pb-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-slate-50 rounded-xl px-4 py-3 text-sm text-slate-500 italic">
                מחיר לפי אפיון
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA info box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 text-center mb-16 max-w-2xl mx-auto"
        >
          <h3 className="font-bold text-green-800 mb-2">🤝 איך מתחילים?</h3>
          <p className="text-sm text-green-700">
            פגישת אפיון ראשונה — בחינם וללא התחייבות. נבין את הצרכים, נמפה את המערכת הקיימת, ונציג תוכנית מפורטת עם לוחות זמנים ועלויות.
          </p>
        </motion.div>

        {/* Finale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl text-center px-8 md:px-12 py-16"
          style={{ background: 'linear-gradient(160deg, #020617, #1e1b4b)' }}
        >
          <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-4">
            בעוד שרוב חברות הטכנולוגיה ממהרות להוסיף "AI" לסליידים, Forward כבר מפעילה סוכנים שמנהלים מכירות, מתאמים צוותים, מנפיקים חשבוניות ומייצרים דוחות —{' '}
            <strong>בלי שאף אדם פותח מערכת</strong>.
          </p>
          <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-6">
            זה לא עוד כלי. זה לא עוד דאשבורד.{' '}
            <strong>זה שינוי מבני באופן שבו עסקים פועלים.</strong>
          </p>
          <p className="text-white text-xl md:text-2xl font-bold leading-relaxed max-w-2xl mx-auto mb-2">
            ארגונים שמחפשים "כלי AI" — ימצאו אלפי אפשרויות.
            <br />
            ארגונים שמחפשים <strong>מי שיעשה את העבודה</strong> — ימצאו את Forward.
          </p>
          <p className="text-white text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
            השאלה היחידה שנותרה היא לא <em>אם</em> לאמץ סוכנים אוטונומיים — אלא{' '}
            <strong>כמה חודשים של יתרון תפעולי אתם מוכנים לוותר עליהם.</strong>
          </p>
          <p className="text-indigo-400 text-3xl font-black mt-8">Forward.</p>
        </motion.div>
      </div>
    </section>
  );
}
