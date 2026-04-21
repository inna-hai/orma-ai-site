import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Check, X, Sparkles, ArrowLeft, TrendingDown, Users, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Starter',
    subtitle: 'לעסק מתחיל',
    price: '0',
    priceNote: 'חינם לתמיד',
    cta: 'התחלה חינמית',
    highlighted: false,
    icon: Users,
    color: 'from-slate-400 to-slate-600',
    features: [
      { text: 'עד 1 משתמש', included: true },
      { text: '100 אנשי קשר', included: true },
      { text: 'Pipeline + משימות', included: true },
      { text: 'Timeline פעילויות', included: true },
      { text: 'CSV import/export', included: true },
      { text: 'דשבורד בסיסי', included: true },
      { text: 'WhatsApp / Email integration', included: false },
      { text: 'AI features', included: false },
      { text: 'תמיכה ישירה', included: false },
    ],
  },
  {
    name: 'Growth',
    subtitle: 'לעסק קטן-בינוני',
    price: '299',
    priceNote: '₪ / חודש',
    cta: 'בחר Growth',
    highlighted: false,
    icon: TrendingDown,
    color: 'from-blue-500 to-cyan-600',
    features: [
      { text: 'עד 5 משתמשים', included: true },
      { text: '2,000 אנשי קשר', included: true },
      { text: 'כל הבסיס + 3 מודולים לבחירה', included: true },
      { text: 'WhatsApp / Email integration', included: true },
      { text: 'טפסי Web + Landing Page', included: true },
      { text: 'דשבורד מתקדם', included: true },
      { text: 'חשבוניות ישראליות (Morning/iCount)', included: true },
      { text: 'תמיכה בצ\'אט וואטסאפ', included: true },
      { text: 'AI features', included: false },
    ],
  },
  {
    name: 'Professional',
    subtitle: 'הכי פופולרי',
    price: '799',
    priceNote: '₪ / חודש',
    cta: 'בחר Professional',
    highlighted: true,
    badge: 'הכי משתלם',
    icon: Zap,
    color: 'from-indigo-500 to-violet-600',
    features: [
      { text: 'עד 15 משתמשים', included: true },
      { text: 'אנשי קשר ללא הגבלה', included: true },
      { text: '8 מודולים + וורטיקל בנדל', included: true },
      { text: 'כל אינטגרציות התקשורת', included: true },
      { text: 'Workflow Automation מלא', included: true },
      { text: 'Quote + חוזים + E-sign', included: true },
      { text: 'AI: סיכומי שיחות, Email Draft', included: true },
      { text: 'Analytics + Report Builder', included: true },
      { text: 'תמיכה VIP (שעתיים SLA)', included: true },
    ],
  },
  {
    name: 'Business',
    subtitle: 'לעסקים מתקדמים',
    price: '1,499',
    priceNote: '₪ / חודש',
    cta: 'בחר Business',
    highlighted: false,
    icon: Crown,
    color: 'from-amber-500 to-orange-600',
    features: [
      { text: 'עד 30 משתמשים', included: true },
      { text: 'הכל ללא הגבלה', included: true },
      { text: 'כל המודולים (10 קטגוריות)', included: true },
      { text: 'Predictive Lead Scoring (ML)', included: true },
      { text: 'AI Chatbot ללקוח קצה', included: true },
      { text: 'Next-Best-Action AI', included: true },
      { text: 'אינטגרציות ERP (Priority/SAP)', included: true },
      { text: 'Custom modules (עד 2/שנה)', included: true },
      { text: 'Account manager ייעודי', included: true },
    ],
  },
];

const comparisonRows = [
  { feature: 'תמחור ל-10 משתמשים', orma: '₪799 flat', fireberry: '~₪3,000', monday: '~₪1,100', hubspot: '~₪3,700' },
  { feature: 'תמחור ל-25 משתמשים', orma: '₪1,499 flat', fireberry: '~₪7,500', monday: '~₪2,800', hubspot: '~₪9,200' },
  { feature: 'חשבוניות מס ישראליות', orma: true, fireberry: 'חלקי', monday: false, hubspot: false },
  { feature: 'עברית RTL מלאה', orma: true, fireberry: true, monday: 'חלקי', hubspot: 'חלקי' },
  { feature: 'WhatsApp Business native', orma: true, fireberry: 'תוסף בתשלום', monday: 'תוסף בתשלום', hubspot: 'תוסף יקר' },
  { feature: 'AI מובנה (Claude)', orma: true, fireberry: 'חלקי', monday: 'בסיסי', hubspot: 'יקר (+$)' },
  { feature: 'בנדלים ורטיקליים', orma: '8 תחומים', fireberry: 'גנרי', monday: 'תבניות', hubspot: 'גנרי' },
  { feature: 'Workflow Automation', orma: true, fireberry: true, monday: true, hubspot: 'מוגבל ב-Starter' },
  { feature: 'Custom development', orma: true, fireberry: 'דורש הטמעה חיצונית', monday: 'מוגבל', hubspot: 'מוגבל' },
  { feature: 'תמיכה בעברית', orma: '24/7 ישירה', fireberry: 'בשעות עבודה', monday: 'אנגלית', hubspot: 'אנגלית' },
];

const faqs = [
  {
    q: 'למה ה-flat rate חשוב כל כך?',
    a: 'בכל CRM אחר (HubSpot, Fireberry, Salesforce) אתם משלמים פר משתמש — ככל שהצוות גדל, המחיר זוחל ויכול להגיע ל-₪8,000-10,000 לחודש לעסק של 20 עובדים. אצלנו המחיר קבוע: Professional ב-₪799 זה אותו דבר בין אם יש 5 משתמשים או 15. זה חוסך לעסקים צומחים עשרות אלפי שקלים בשנה.',
  },
  {
    q: 'מה כולל Setup Fee?',
    a: 'התקנה ראשונית, הגדרת הצוות, קונפיגורציית pipeline, ייבוא מידע ממערכת ישנה (אם יש), שתי הדרכות לצוות, והתאמה של המודולים הרלוונטיים. מחיר Setup נע בין ₪4,000 ל-₪15,000 לפי מסלול.',
  },
  {
    q: 'האם ניתן לשדרג/להוריד מסלול?',
    a: 'כן, בכל עת. שדרוג — מיידי. הורדה — בסוף תקופת החיוב הנוכחית. אם הוספתם מודולים בעצם ההתקשרות, הם נשארים גם במסלול נמוך יותר.',
  },
  {
    q: 'מה ההבדל בין Growth ל-Professional?',
    a: 'Growth מתאים לעסק שעושה CRM בסיסי + תקשורת (WhatsApp, Email, טפסי Web). Professional מוסיף את ה-AI (סיכומי שיחות, טיוטות מייל), automation מלא, חוזים עם חתימה דיגיטלית, ואחד מה-Vertical Bundles (נדל&quot;ן/ביטוח/רפואה וכו\').',
  },
  {
    q: 'יש התחייבות?',
    a: 'התחייבות מינימלית של 6 חודשים (כי יש השקעה ב-Setup ובהדרכה). אחרי זה — חודש בחודש. אין ביטול לפני 6 חודשים אלא אם אנחנו לא עומדים ב-SLA.',
  },
  {
    q: 'מה קורה עם הדאטה שלי אם אעזוב?',
    a: 'הדאטה שלכם — שלכם. בכל עת אתם יכולים לייצא את כל המידע כ-CSV/Excel/JSON. אם אתם עוזבים, יש לכם 30 יום להוריד הכל, ואז המידע נמחק מהשרתים שלנו.',
  },
  {
    q: 'האם יש אפשרות חינמית באמת?',
    a: 'כן — מסלול Starter חינמי לתמיד. משתמש אחד, 100 אנשי קשר, הבסיס. מספיק לעצמאים בתחילת דרכם. כשהעסק גדל — עוברים ל-Growth.',
  },
  {
    q: 'איך ההטמעה עובדת?',
    a: '1) שיחת אפיון (30-60 דקות). 2) אנחנו מקימים את המערכת ומגדירים אותה (3-7 ימי עבודה). 3) ייבוא נתונים מהמערכת הישנה. 4) הדרכת צוות. 5) Go-live עם ליווי צמוד שבועיים. סה&quot;כ 2-3 שבועות עד לייצור מלא.',
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const yearlyDiscount = 0.8; // 20% off

  const getPrice = (price) => {
    if (price === '0') return '0';
    const num = parseInt(price.replace(',', ''));
    if (yearly) {
      return Math.round(num * yearlyDiscount).toLocaleString('he-IL');
    }
    return num.toLocaleString('he-IL');
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(160deg, #020617 0%, #0f172a 35%, #1e1b4b 70%, #312e81 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-indigo-400 text-sm font-bold tracking-widest uppercase mb-6"
          >
            תמחור שקוף
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-100 leading-[1.2] mb-6"
          >
            עד <span className="text-indigo-400">פי 5 זול</span> יותר<br />
            ממה שאתם משלמים היום
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            תמחור <strong className="text-white">flat</strong>, לא per-user. לא משנה אם 5 או 25 משתמשים —
            אותו מחיר. חוסך לעסק צומח עשרות אלפי שקלים בשנה.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-3 bg-white/10 rounded-full p-1.5 border border-white/10"
          >
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${!yearly ? 'bg-white text-slate-900' : 'text-slate-300'}`}
            >
              חודשי
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition flex items-center gap-2 ${yearly ? 'bg-white text-slate-900' : 'text-slate-300'}`}
            >
              שנתי
              <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">חיסכון 20%</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, idx) => {
              const PlanIcon = plan.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative rounded-2xl p-8 flex flex-col ${
                    plan.highlighted
                      ? 'bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-2xl scale-105 border-2 border-indigo-400'
                      : 'bg-white border border-slate-200'
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      {plan.badge}
                    </div>
                  )}

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-5`}>
                    <PlanIcon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className={`text-2xl font-black mb-1 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.highlighted ? 'text-indigo-200' : 'text-slate-500'}`}>
                    {plan.subtitle}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-black ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                        {plan.price === '0' ? '₪0' : `₪${getPrice(plan.price)}`}
                      </span>
                    </div>
                    <div className={`text-sm mt-1 ${plan.highlighted ? 'text-indigo-200' : 'text-slate-500'}`}>
                      {plan.price === '0' ? plan.priceNote : (yearly ? '₪/חודש (חיוב שנתי)' : plan.priceNote)}
                    </div>
                  </div>

                  <Link to={createPageUrl('Contact')} className="mb-8">
                    <Button
                      className={`w-full rounded-xl font-semibold ${
                        plan.highlighted
                          ? 'bg-white text-indigo-700 hover:bg-indigo-50'
                          : 'bg-slate-900 text-white hover:bg-slate-800'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>

                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm">
                        {feature.included ? (
                          <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-emerald-300' : 'text-emerald-500'}`} />
                        ) : (
                          <X className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-white/30' : 'text-slate-300'}`} />
                        )}
                        <span className={
                          feature.included
                            ? (plan.highlighted ? 'text-white' : 'text-slate-700')
                            : (plan.highlighted ? 'text-white/40 line-through' : 'text-slate-400 line-through')
                        }>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 bg-gradient-to-r from-slate-900 to-indigo-900 rounded-2xl p-8 md:p-10 text-white flex flex-col md:flex-row md:items-center gap-8"
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-white/10 text-indigo-300 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                <Sparkles className="w-3 h-3" />
                ENTERPRISE
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-3">לארגונים עם דרישות מיוחדות</h3>
              <p className="text-slate-300 leading-relaxed">
                30+ משתמשים · תשתית ייעודית · SLA מוגדר חוזית · פיתוחים מותאמים ללא הגבלה · אינטגרציות מורכבות ל-ERP · מנהל פרויקט ייעודי
              </p>
            </div>
            <div>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg rounded-xl">
                  לתיאום שיחה
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Setup fees note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-indigo-50 border border-indigo-100 rounded-2xl p-6 max-w-3xl mx-auto text-center"
          >
            <div className="text-sm font-bold text-indigo-900 mb-2">עלות Setup חד-פעמית</div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Starter: ללא עלות · Growth: ₪4,500 · Professional: ₪9,000 · Business: ₪15,000 · Enterprise: בהתאמה.<br />
              כולל הטמעה מלאה, ייבוא מידע, הדרכות, ושבועיים ליווי צמוד.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-indigo-600 text-sm font-bold tracking-widest uppercase">השוואה</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 mt-2">
              ORMA AI vs. השוק
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              תמחור אמיתי מול המתחרים הגדולים. לא הנחות טריקיות, לא &quot;starts from&quot;.
            </p>
          </motion.div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white">
                  <th className="p-4 text-right font-bold">פיצ&apos;ר</th>
                  <th className="p-4 text-center font-bold bg-indigo-600">
                    <div className="flex flex-col items-center">
                      <span>ORMA AI</span>
                      <span className="text-xs text-indigo-200 font-normal">אנחנו</span>
                    </div>
                  </th>
                  <th className="p-4 text-center font-bold">Fireberry</th>
                  <th className="p-4 text-center font-bold">Monday CRM</th>
                  <th className="p-4 text-center font-bold">HubSpot</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="p-4 font-medium text-slate-900">{row.feature}</td>
                    <td className="p-4 text-center bg-indigo-50 font-bold text-indigo-900">
                      {typeof row.orma === 'boolean' ? (
                        row.orma ? <Check className="w-5 h-5 text-emerald-600 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />
                      ) : row.orma}
                    </td>
                    <td className="p-4 text-center text-slate-700">
                      {typeof row.fireberry === 'boolean' ? (
                        row.fireberry ? <Check className="w-5 h-5 text-slate-500 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />
                      ) : <span className="text-sm">{row.fireberry}</span>}
                    </td>
                    <td className="p-4 text-center text-slate-700">
                      {typeof row.monday === 'boolean' ? (
                        row.monday ? <Check className="w-5 h-5 text-slate-500 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />
                      ) : <span className="text-sm">{row.monday}</span>}
                    </td>
                    <td className="p-4 text-center text-slate-700">
                      {typeof row.hubspot === 'boolean' ? (
                        row.hubspot ? <Check className="w-5 h-5 text-slate-500 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />
                      ) : <span className="text-sm">{row.hubspot}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">
            * מחירי מתחרים מבוססים על אתרי התמחור הרשמיים (Fireberry, Monday, HubSpot) נכון לאפריל 2026, המרה לשקל לפי שער יציג.
          </p>
        </div>
      </section>

      {/* ROI Calculator hint */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-violet-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-indigo-100"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                כמה תחסכו בשנה?
              </h2>
              <p className="text-lg text-slate-600">דוגמה אמיתית: עסק עם 15 משתמשים</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-red-50 rounded-2xl p-6 text-center border border-red-100">
                <div className="text-xs font-bold tracking-widest uppercase text-red-600 mb-2">HubSpot Pro</div>
                <div className="text-3xl font-black text-red-900 mb-1">₪66,600</div>
                <div className="text-sm text-red-700">₪5,550 × 12 חודשים</div>
              </div>
              <div className="bg-amber-50 rounded-2xl p-6 text-center border border-amber-100">
                <div className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-2">Fireberry Growth</div>
                <div className="text-3xl font-black text-amber-900 mb-1">₪54,000</div>
                <div className="text-sm text-amber-700">₪4,500 × 12 חודשים</div>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-6 text-center border-2 border-emerald-300 shadow-lg relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ORMA AI
                </div>
                <div className="text-xs font-bold tracking-widest uppercase text-emerald-600 mb-2 mt-2">Professional</div>
                <div className="text-3xl font-black text-emerald-900 mb-1">₪9,588</div>
                <div className="text-sm text-emerald-700">₪799 × 12 חודשים</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 text-center text-white">
              <div className="text-sm font-medium mb-1 opacity-90">חיסכון שנתי מול HubSpot</div>
              <div className="text-5xl font-black mb-2">₪57,012</div>
              <div className="text-emerald-100">בערך פי 7 זול יותר</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-indigo-600 text-sm font-bold tracking-widest uppercase">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 mt-2">
              שאלות נפוצות
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:border-indigo-200 transition"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none p-6 font-bold text-slate-900 hover:bg-slate-100 transition">
                  <span>{faq.q}</span>
                  <span className="text-2xl text-indigo-600 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              לא בטוחים איזה מסלול מתאים?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              שיחת 30 דקות ונבחן יחד — לפי מספר משתמשים, תחום עסקי, וצרכים ייחודיים.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white px-10 py-7 text-lg rounded-xl">
                תיאום שיחת אבחון
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
