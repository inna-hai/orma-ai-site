import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, X, Minus } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const plans = [
  {
    name: 'Starter',
    subtitle: 'לעסק מתחיל',
    price: '0', priceNote: 'חינם לתמיד',
    setup: '0', setupNote: 'ללא הקמה',
    cta: 'התחלה חינמית',
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
    price: '299', priceNote: '₪ / חודש',
    setup: '4,500', setupNote: 'הקמה חד-פעמית',
    cta: 'בחר Growth',
    features: [
      { text: 'עד 5 משתמשים', included: true },
      { text: '2,000 אנשי קשר', included: true },
      { text: 'כל הבסיס + 3 מודולים לבחירה', included: true },
      { text: 'WhatsApp / Email integration', included: true },
      { text: 'טפסי Web + Landing Page', included: true },
      { text: 'דשבורד מתקדם', included: true },
      { text: 'חשבוניות ישראליות (Morning/iCount)', included: true },
      { text: "תמיכה בצ'אט וואטסאפ", included: true },
      { text: 'AI features', included: false },
    ],
  },
  {
    name: 'Professional',
    subtitle: 'הכי פופולרי',
    price: '799', priceNote: '₪ / חודש',
    setup: '9,000', setupNote: 'הקמה חד-פעמית',
    cta: 'בחר Professional',
    featured: true,
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
    price: '1,499', priceNote: '₪ / חודש',
    setup: '15,000', setupNote: 'הקמה חד-פעמית',
    cta: 'בחר Business',
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
  { feature: 'WhatsApp Business native', orma: true, fireberry: 'תוסף', monday: 'תוסף', hubspot: 'תוסף יקר' },
  { feature: 'AI מובנה (Claude)', orma: true, fireberry: 'חלקי', monday: 'בסיסי', hubspot: 'יקר (+$)' },
  { feature: 'בנדלים ורטיקליים', orma: '8 תחומים', fireberry: 'גנרי', monday: 'תבניות', hubspot: 'גנרי' },
  { feature: 'Workflow Automation', orma: true, fireberry: true, monday: true, hubspot: 'מוגבל' },
  { feature: 'Custom development', orma: true, fireberry: 'חיצוני', monday: 'מוגבל', hubspot: 'מוגבל' },
  { feature: 'תמיכה בעברית', orma: '24/7', fireberry: 'שעות עבודה', monday: 'אנגלית', hubspot: 'אנגלית' },
];

const faqs = [
  { q: 'למה ה-flat rate חשוב כל כך?', a: 'בכל CRM אחר (HubSpot, Fireberry, Salesforce) אתם משלמים פר משתמש — ככל שהצוות גדל, המחיר זוחל ויכול להגיע ל-₪8,000-10,000 לחודש לעסק של 20 עובדים. אצלנו המחיר קבוע: Professional ב-₪799 זה אותו דבר בין אם יש 5 משתמשים או 15.' },
  { q: 'מה כולל Setup Fee?', a: 'התקנה ראשונית, הגדרת הצוות, קונפיגורציית pipeline, ייבוא מידע ממערכת ישנה, שתי הדרכות לצוות, והתאמה של המודולים הרלוונטיים. מחיר Setup נע בין ₪4,500 ל-₪15,000 לפי מסלול.' },
  { q: 'האם ניתן לשדרג/להוריד מסלול?', a: 'כן, בכל עת. שדרוג — מיידי. הורדה — בסוף תקופת החיוב הנוכחית. אם הוספתם מודולים בעצם ההתקשרות, הם נשארים גם במסלול נמוך יותר.' },
  { q: 'מה ההבדל בין Growth ל-Professional?', a: 'Growth מתאים לעסק שעושה CRM בסיסי + תקשורת. Professional מוסיף את ה-AI, automation מלא, חוזים עם חתימה דיגיטלית, ואחד מה-Vertical Bundles.' },
  { q: 'יש התחייבות?', a: 'התחייבות מינימלית של 6 חודשים. אחרי זה — חודש בחודש. אין ביטול לפני 6 חודשים אלא אם אנחנו לא עומדים ב-SLA.' },
  { q: 'מה קורה עם הדאטה שלי אם אעזוב?', a: 'הדאטה שלכם — שלכם. בכל עת אתם יכולים לייצא את כל המידע כ-CSV/Excel/JSON. אם אתם עוזבים, יש לכם 30 יום להוריד הכל, ואז המידע נמחק מהשרתים שלנו.' },
  { q: 'איך ההטמעה עובדת?', a: '1) שיחת אפיון (30-60 דקות). 2) אנחנו מקימים את המערכת (3-7 ימי עבודה). 3) ייבוא נתונים. 4) הדרכת צוות. 5) Go-live עם ליווי צמוד שבועיים. סה"כ 2-3 שבועות עד לייצור מלא.' },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const priceOf = (p) => {
    if (p === '0') return '0';
    const n = parseInt(p.replace(',', ''));
    return (yearly ? Math.round(n * 0.8) : n).toLocaleString('he-IL');
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,109,226,0.18) 0%, transparent 60%)' }} />
        <div className="relative container-editorial">
          <motion.div {...fadeUp} className="max-w-4xl">
            <div className="meta-label mb-6">Pricing</div>
            <h1 className="heading-display mb-8">
              עד <span className="text-lavender-300">פי 5 זול</span> יותר<br />
              ממה שאתם משלמים היום.
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-[1.75] max-w-2xl">
              תמחור <span className="text-white">flat</span>, לא per-user.
              לא משנה אם 5 או 25 משתמשים — אותו מחיר. חוסך לעסק צומח עשרות אלפי שקלים בשנה.
            </p>
          </motion.div>

          {/* Billing toggle */}
          <motion.div {...fadeUp} className="mt-10 inline-flex items-center gap-2 p-1.5 rounded-full border border-white/[0.1] bg-white/[0.03]">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-[13px] font-medium transition ${!yearly ? 'bg-white text-[#0a0515]' : 'text-white/70 hover:text-white'}`}
            >
              חודשי
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-[13px] font-medium transition flex items-center gap-2 ${yearly ? 'bg-white text-[#0a0515]' : 'text-white/70 hover:text-white'}`}
            >
              שנתי
              <span className="bg-lavender-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">−20%</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 md:py-24 border-t border-white/[0.06]">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                {...fadeUp}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.featured
                    ? 'border-lavender-400/40 bg-lavender-500/[0.06]'
                    : 'border-white/[0.08] bg-white/[0.02]'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 right-8 text-[10px] font-bold tracking-widest uppercase text-[#0a0515] bg-lavender-400 px-3 py-1 rounded-full">
                    המומלץ
                  </div>
                )}

                <div className="meta-label mb-2">{plan.name}</div>
                <div className="text-white/55 text-[13px] mb-6">{plan.subtitle}</div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-black text-white tracking-tight">
                    {plan.price === '0' ? '₪0' : `₪${priceOf(plan.price)}`}
                  </span>
                </div>
                <div className="text-[13px] text-white/50 mb-6">
                  {plan.price === '0' ? plan.priceNote : (yearly ? '₪/חודש · חיוב שנתי' : plan.priceNote)}
                </div>

                <div className="pt-4 mb-6 border-t border-white/[0.08]">
                  <div className="meta-label text-[10px] mb-1.5 text-white/40">+ דמי הקמה</div>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-2xl font-black ${plan.setup === '0' ? 'text-lavender-300' : 'text-lavender-300'}`}>
                      {plan.setup === '0' ? 'חינם' : `₪${plan.setup}`}
                    </span>
                    {plan.setup !== '0' && <span className="text-[11px] text-white/40">חד-פעמי</span>}
                  </div>
                </div>

                <Link to={createPageUrl('Contact')} className={`mb-8 py-3 text-center rounded-full text-[14px] font-medium transition ${
                  plan.featured ? 'bg-lavender-400 hover:bg-lavender-300 text-[#0a0515]' : 'bg-white/10 hover:bg-white/20 text-white'
                }`}>
                  {plan.cta}
                </Link>

                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px]">
                      {f.included ? (
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-lavender-300" strokeWidth={2.5} />
                      ) : (
                        <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/20" strokeWidth={2} />
                      )}
                      <span className={f.included ? 'text-white/80' : 'text-white/30 line-through'}>{f.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* A la carte callout */}
          <motion.div {...fadeUp} className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="meta-label mb-2 text-white/50">רוצים קונפיגורציה מותאמת?</div>
              <p className="text-white/75 text-[14px] leading-relaxed max-w-3xl">
                המסלולים למעלה כוללים חבילות מוכנות של מודולים. לקונפיגורציה פרטנית של מודולים ספציפיים —
                <Link to={createPageUrl('Platform')} className="text-lavender-300 hover:text-lavender-200 font-semibold mx-1">קטלוג A la Carte</Link>
                עם תמחור פרטני לכל מודול.
              </p>
            </div>
            <Link to={createPageUrl('Platform')} className="btn-pill-ghost flex-shrink-0 whitespace-nowrap">
              לקטלוג המלא
            </Link>
          </motion.div>

          {/* Enterprise callout */}
          <motion.div {...fadeUp} className="mt-4 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-lavender-900/30 to-transparent p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="meta-label mb-3">Enterprise</div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">לארגונים עם דרישות מיוחדות</h3>
              <p className="text-white/60 text-[15px] leading-relaxed max-w-2xl">
                30+ משתמשים · תשתית ייעודית · SLA חוזי · פיתוחים מותאמים ללא הגבלה · אינטגרציות ERP · מנהל פרויקט ייעודי
              </p>
            </div>
            <Link to={createPageUrl('Contact')} className="btn-pill-primary flex-shrink-0">
              <ArrowLeft className="w-4 h-4 ml-2" />
              תיאום שיחה
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Setup explanation */}
      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <div className="meta-label mb-4">דמי ההקמה</div>
              <h2 className="heading-section">חד-פעמי, בבניית הליבה שלכם.</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-white/65 text-lg leading-[1.85] max-w-2xl mb-10">
                בניגוד ל-Fireberry או Monday שבהם אתם מקבלים מערכת גנרית &quot;כמו שהיא&quot;,
                אצלנו <span className="text-white">כל לקוח מקבל מערכת מותאמת אישית</span>.
                דמי ההקמה מכסים את העבודה של התאמת הליבה לעסק שלכם, ומשתלמים כבר בחודש השני.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 border-t border-white/[0.08] pt-8">
                {[
                  'אפיון עסקי (שיחת 60 דקות)',
                  'הקמת המערכת והגדרת המודולים',
                  'התאמת Pipeline ושלבים',
                  'ייבוא נתונים ממערכת קודמת',
                  'חיבור אינטגרציות',
                  '2 מפגשי הדרכה לצוות',
                  'שבועיים ליווי אחרי Go-Live',
                  'תשלום: 50% בחתימה, 50% ב-Go-Live',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 py-2 text-[14px] text-white/75">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-lavender-400" strokeWidth={2.5} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-night-900/40 to-transparent">
        <div className="container-wide">
          <motion.div {...fadeUp} className="mb-14">
            <div className="meta-label mb-4">השוואה</div>
            <h2 className="heading-section max-w-3xl">Forward vs. השוק.</h2>
            <p className="text-white/60 text-lg leading-[1.85] max-w-2xl mt-6">
              תמחור אמיתי מול המתחרים הגדולים. לא הנחות טריקיות, לא &quot;starts from&quot;.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="overflow-x-auto rounded-2xl border border-white/[0.08]">
            <table className="w-full min-w-[720px] text-[14px]">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="p-5 text-right font-medium text-white/60 text-[13px] tracking-wide">פיצ&apos;ר</th>
                  <th className="p-5 text-center bg-lavender-500/[0.08]">
                    <div className="meta-label text-lavender-300">Forward</div>
                  </th>
                  <th className="p-5 text-center text-white/50 text-[13px]">Fireberry</th>
                  <th className="p-5 text-center text-white/50 text-[13px]">Monday CRM</th>
                  <th className="p-5 text-center text-white/50 text-[13px]">HubSpot</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-white/[0.04] last:border-0">
                    <td className="p-5 text-white/85">{row.feature}</td>
                    <td className="p-5 text-center bg-lavender-500/[0.04] font-semibold text-white">
                      {typeof row.orma === 'boolean' ? (
                        row.orma ? <Check className="w-5 h-5 text-lavender-300 mx-auto" /> : <X className="w-5 h-5 text-white/30 mx-auto" />
                      ) : row.orma}
                    </td>
                    {[row.fireberry, row.monday, row.hubspot].map((v, j) => (
                      <td key={j} className="p-5 text-center text-white/50">
                        {typeof v === 'boolean' ? (
                          v ? <Check className="w-5 h-5 text-white/35 mx-auto" /> : <X className="w-5 h-5 text-white/20 mx-auto" />
                        ) : <span className="text-[13px]">{v}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <p className="text-center text-[12px] text-white/35 mt-6">
            * מחירי מתחרים מבוססים על אתרי התמחור הרשמיים נכון לאפריל 2026.
          </p>
        </div>
      </section>

      {/* ROI */}
      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <motion.div {...fadeUp} className="mb-14 text-center max-w-2xl mx-auto">
            <div className="meta-label mb-4">חיסכון</div>
            <h2 className="heading-section mb-6">כמה תחסכו בשנה?</h2>
            <p className="text-white/60 text-lg">דוגמה אמיתית: עסק עם 15 משתמשים — שנה ראשונה כולל הקמה.</p>
          </motion.div>

          <motion.div {...fadeUp} className="grid md:grid-cols-3 gap-5">
            {[
              { tag: 'HubSpot Pro', total: '₪81,600', breakdown: '₪5,550 × 12 + ₪15,000 הטמעה', bad: true },
              { tag: 'Fireberry Growth', total: '₪64,000', breakdown: '₪4,500 × 12 + ₪10,000 הטמעה', bad: true },
              { tag: 'Forward Professional', total: '₪18,588', breakdown: '₪799 × 12 + ₪9,000 הקמה', good: true },
            ].map((c, i) => (
              <div key={i} className={`rounded-2xl p-8 text-center ${
                c.good ? 'border-2 border-lavender-400/50 bg-lavender-500/[0.08]' : 'border border-white/[0.08] bg-white/[0.02]'
              }`}>
                <div className={`meta-label mb-3 ${c.good ? 'text-lavender-300' : 'text-white/45'}`}>{c.tag}</div>
                <div className={`text-4xl font-black tracking-tight mb-2 ${c.good ? 'text-white' : 'text-white/70'}`}>{c.total}</div>
                <div className="text-[12px] text-white/45">{c.breakdown}</div>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp} className="mt-8 rounded-2xl p-8 text-center bg-gradient-to-r from-lavender-600/20 to-lavender-400/10 border border-lavender-400/30">
            <div className="text-[13px] text-lavender-200 mb-2">חיסכון שנה ראשונה מול HubSpot</div>
            <div className="text-5xl md:text-6xl font-black text-white tracking-tight mb-2">₪63,012</div>
            <div className="text-[14px] text-white/60">בשנים הבאות — חיסכון של ₪57,012 בשנה</div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-night-900/40 to-transparent">
        <div className="container-editorial">
          <motion.div {...fadeUp} className="mb-14">
            <div className="meta-label mb-4">שאלות נפוצות</div>
            <h2 className="heading-section max-w-3xl">הפרטים הקטנים.</h2>
          </motion.div>

          <motion.div {...fadeUp} className="space-y-1">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b border-white/[0.08]">
                <summary className="cursor-pointer list-none flex items-center justify-between py-6 text-white font-medium text-[17px]">
                  <span>{faq.q}</span>
                  <span className="text-lavender-400 text-2xl font-light group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="pb-6 text-white/60 leading-[1.85] text-[15px] max-w-3xl">{faq.a}</div>
              </details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-28 md:py-36 overflow-hidden border-t border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(139,109,226,0.2) 0%, transparent 70%)' }} />
        <div className="relative container-editorial text-center">
          <motion.div {...fadeUp}>
            <h2 className="heading-section max-w-3xl mx-auto mb-8">לא בטוחים איזה מסלול מתאים?</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              שיחת 30 דקות ונבחן יחד — לפי מספר משתמשים, תחום עסקי, וצרכים ייחודיים.
            </p>
            <Link to={createPageUrl('Contact')} className="btn-pill-primary">
              <ArrowLeft className="w-4 h-4 ml-2" />
              תיאום שיחת אבחון
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
