import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowLeft, Minus, Check } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const baseFeatures = [
  'אנשי קשר וחברות',
  'תיבת לידים',
  'Pipeline Kanban',
  'משימות ותזכורות',
  'Timeline פעילויות',
  'דשבורד KPI',
  'משתמשים והרשאות',
  'חיפוש ומסננים',
  'קבצים מצורפים',
  'ייבוא / ייצוא CSV',
  'טפסי Web',
  'הערות ותגיות',
];

const moduleCategories = [
  {
    num: '01',
    title: 'תקשורת',
    subtitle: 'Communication',
    modules: [
      { name: 'WhatsApp Business', desc: 'שליחה וקבלה, Templates, בוט, עדכון ליד אוטומטי', setup: '4,000', monthly: '200', popular: true },
      { name: 'סנכרון אימייל', desc: 'Gmail/Outlook דו-כיווני, Templates, Tracking', setup: '2,500', monthly: '100' },
      { name: 'SMS ושיחות', desc: 'Inforu/Twilio, Click-to-call, Call logs', setup: '3,000', monthly: '150' },
      { name: "צ'אט חי באתר", desc: 'Widget, Live + bot, Handoff חלק', setup: '4,000', monthly: '150' },
      { name: 'תיבת דואר משותפת', desc: 'Team inbox, SLA, Auto-routing', setup: '5,000', monthly: '200' },
      { name: 'הודעות המוניות', desc: 'WhatsApp Broadcast, SMS Campaigns', setup: '3,500', monthly: '150' },
    ],
  },
  {
    num: '02',
    title: 'שיווק',
    subtitle: 'Marketing',
    modules: [
      { name: 'Email Campaigns', desc: 'Drag-and-drop builder, A/B testing, Analytics', setup: '6,000', monthly: '250' },
      { name: 'Lead Scoring מתקדם', desc: 'ציון דינמי, ML-based, Hot/warm/cold auto-tag', setup: '4,500', monthly: '200' },
      { name: 'Workflow Automation', desc: 'If-this-then-that visual, Triggers, Actions', setup: '7,000', monthly: '300' },
      { name: 'Landing Pages', desc: 'RTL templates, טפסים מחוברים, Custom domain', setup: '5,000', monthly: '200' },
      { name: 'UTM & Attribution', desc: 'Multi-touch, ROI per campaign, Ads sync', setup: '3,500', monthly: '150' },
      { name: 'Referral & Loyalty', desc: 'קודי הפניה, Rewards, דוחות מפנים', setup: '5,500', monthly: '200' },
    ],
  },
  {
    num: '03',
    title: 'מכירות',
    subtitle: 'Sales',
    modules: [
      { name: 'הצעות מחיר וחוזים', desc: 'PDF מעוצב, E-sign, Templates', setup: '5,000', monthly: '200', popular: true },
      { name: 'קטלוג מוצרים', desc: 'פריטים, מחירונים, variants, bundles', setup: '4,000', monthly: '150' },
      { name: 'ניהול עמלות', desc: 'מבנים מותאמים, חישוב אוטומטי, דוחות', setup: '5,500', monthly: '200' },
      { name: 'Forecasting', desc: 'חיזוי לפי pipeline, Quotas, Scenarios', setup: '6,000', monthly: '250' },
      { name: 'Sales Playbooks', desc: 'Guided scripts, Next-best-action', setup: '4,500', monthly: '150' },
      { name: 'Multi-stage Deal Mgmt', desc: 'Approvals בשלבים, Stage gates, ROI', setup: '6,500', monthly: '250' },
    ],
  },
  {
    num: '04',
    title: 'שירות לקוחות',
    subtitle: 'Service',
    modules: [
      { name: 'Ticketing System', desc: 'CRUD, הקצאה אוטומטית, SLA, Portal', setup: '6,000', monthly: '250' },
      { name: 'Knowledge Base', desc: 'מאמרים, חיפוש חכם, AI suggestions', setup: '5,000', monthly: '200' },
      { name: 'Customer Portal', desc: "פניות, תשלומים, מסמכים, צ'אט", setup: '7,500', monthly: '300' },
      { name: 'NPS & Surveys', desc: 'שאלונים, Sentiment AI, Trends', setup: '3,500', monthly: '150' },
    ],
  },
  {
    num: '05',
    title: 'תזמון ופגישות',
    subtitle: 'Scheduling',
    modules: [
      { name: 'Calendar Integration', desc: 'Google/Outlook sync, Multi-user, Conflicts', setup: '4,000', monthly: '150', popular: true },
      { name: 'Online Booking Widget', desc: 'לקוח בוחר זמן, Real-time, Auto-confirm', setup: '5,500', monthly: '200' },
      { name: 'Resource Scheduling', desc: 'חדרים, ציוד, Prevent double-booking', setup: '6,000', monthly: '250' },
      { name: 'Automated Reminders', desc: 'WhatsApp/SMS/Email, Custom timing', setup: '2,500', monthly: '100' },
    ],
  },
  {
    num: '06',
    title: 'מסמכים וחוזים',
    subtitle: 'Documents',
    modules: [
      { name: 'Document Templates', desc: 'DOCX/PDF, Merge fields, Version control', setup: '4,000', monthly: '150' },
      { name: 'E-Signature', desc: 'חתימה דיגיטלית חוקית, Multi-party', setup: '5,000', monthly: '200' },
      { name: 'Document Storage', desc: 'S3 encrypted, Sharing links, Preview', setup: '3,500', monthly: '150' },
      { name: 'Contract Lifecycle', desc: 'חידושים, Alerts, Automation', setup: '5,500', monthly: '200' },
    ],
  },
  {
    num: '07',
    title: 'חיוב וחשבונות',
    subtitle: 'Billing',
    modules: [
      { name: 'חשבוניות ישראליות', desc: 'חשבוניות מס + קבלות, Morning/iCount', setup: '5,500', monthly: '200', popular: true },
      { name: 'תשלומים אונליין', desc: 'Tranzila/Cardcom, Subscriptions', setup: '4,500', monthly: '200' },
      { name: 'Accounting Sync', desc: 'Hashavshevet, סנכרון דו-כיווני', setup: '6,500', monthly: '300' },
      { name: 'גבייה ודרישות', desc: 'Dunning workflows, תזכורות, Late fees', setup: '4,000', monthly: '150' },
    ],
  },
  {
    num: '08',
    title: 'Analytics & BI',
    subtitle: 'Analytics',
    modules: [
      { name: 'דשבורדים מותאמים', desc: 'Widget builder, Multi-role, Real-time', setup: '5,000', monthly: '200' },
      { name: 'Report Builder', desc: 'ללא קוד, Scheduled, Export, Pivot tables', setup: '5,500', monthly: '200' },
      { name: 'Funnel Analytics', desc: 'Conversion, Bottlenecks, Cohorts', setup: '4,500', monthly: '200' },
      { name: 'Agent Performance', desc: 'Gamification, KPIs, Leaderboards', setup: '4,000', monthly: '150' },
    ],
  },
  {
    num: '09',
    title: 'AI & אוטומציה חכמה',
    subtitle: 'AI',
    modules: [
      { name: 'AI Conversation Summary', desc: 'סיכום שיחות, Action items, Sentiment', setup: '6,000', monthly: '300', popular: true },
      { name: 'AI Email Draft', desc: 'טיוטות context-aware, Tone מותאם', setup: '5,500', monthly: '250' },
      { name: 'Next-Best-Action', desc: 'המלצה על פעולה הבאה, ML-based', setup: '8,000', monthly: '400' },
      { name: 'AI Chatbot ללקוח', desc: 'בוט באתר/WhatsApp, Handoff, Lead capture', setup: '8,500', monthly: '400' },
      { name: 'Voice-to-Text', desc: 'הקלטה → טקסט, עברית איכותית (Whisper)', setup: '4,500', monthly: '250' },
      { name: 'Predictive Scoring', desc: 'ML לקונברסיה, Churn, Lifetime value', setup: '9,000', monthly: '400' },
    ],
  },
  {
    num: '10',
    title: 'אינטגרציות',
    subtitle: 'Integrations',
    modules: [
      { name: 'Fireberry / Powerlink', desc: 'סנכרון דו-כיווני, Field mapping', setup: '5,000', monthly: '200' },
      { name: 'Meta Lead Ads', desc: 'לידים אוטומטיים, UTM, Instant response', setup: '3,500', monthly: '150' },
      { name: 'Google Ads', desc: 'Conversions sync, Offline API, ROI', setup: '4,000', monthly: '150' },
      { name: 'Zapier / Make', desc: 'Webhooks, 2000+ אפליקציות', setup: '2,000', monthly: '100' },
      { name: 'Priority / SAP B1', desc: 'ERP integration, לקוחות ופריטים', setup: '12,000', monthly: '500' },
      { name: 'GeoScale Integration', desc: 'Visibility scores, Brand monitoring', setup: '3,000', monthly: '150' },
    ],
  },
];

export default function Platform() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,109,226,0.18) 0%, transparent 60%)' }}
        />
        <div className="relative container-editorial">
          <motion.div {...fadeUp} className="max-w-4xl">
            <div className="meta-label mb-6">Platform</div>
            <h1 className="heading-display mb-8">
              בסיס אחד.<br />
              <span className="text-lavender-300">50+ מודולים</span> להתאמה מלאה.
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-[1.75] max-w-2xl">
              לא CRM גנרי ש&quot;מנסה להתאים&quot;. פלטפורמה מודולרית שנבנתה לעסק הישראלי —
              עם חשבוניות מס, WhatsApp native, עברית RTL אמיתית, ו-AI agents מובנים.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Base */}
      <section className="py-24 md:py-32 border-t border-white/[0.06]">
        <div className="container-editorial">
          <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 md:gap-16 mb-14">
            <div className="md:col-span-4">
              <div className="meta-label mb-4">הבסיס</div>
              <div className="divider-thin mb-6" />
              <div className="flex items-baseline gap-3 mb-2">
                <div className="text-4xl font-black text-white tracking-tight">₪15,000</div>
                <div className="text-[13px] text-white/50">הקמה</div>
              </div>
              <div className="flex items-baseline gap-3">
                <div className="text-4xl font-black text-white tracking-tight">₪500</div>
                <div className="text-[13px] text-white/50">/חודש מינימום</div>
              </div>
            </div>
            <div className="md:col-span-8">
              <h2 className="heading-section mb-6">Base CRM — מה שכל לקוח מקבל</h2>
              <p className="text-white/60 text-lg leading-[1.85] max-w-2xl">
                ליבה חזקה שמספיקה לרוב העסקים הקטנים. הכל בנוי על אותם יסודות של מוצרים שכבר רצים בייצור. משם מוסיפים רק את המודולים שבאמת צריך.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-5 border-t border-white/[0.08] pt-10">
            {baseFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-3 py-2">
                <Check className="w-4 h-4 mt-1 text-lavender-400 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-white/80 text-[15px]">{f}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-night-900/40 to-transparent">
        <div className="container-editorial">
          <motion.div {...fadeUp} className="mb-20">
            <div className="meta-label mb-4">הקטלוג</div>
            <h2 className="heading-section max-w-3xl">10 קטגוריות. 50+ מודולים.</h2>
            <p className="text-white/60 text-lg leading-[1.85] max-w-2xl mt-6">
              כל עסק מרכיב את ה-CRM המושלם שלו — a-la-carte. מתחילים קטן, מרחיבים מתי שצריך, בלי להחליף מערכת.
              המחיר הוא setup חד-פעמי + תחזוקה חודשית לכל מודול.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-[13px] text-white/50">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lavender-400"></span>
                Setup = בנייה והגדרה חד-פעמית
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/40"></span>
                חודשי = תחזוקה, עדכונים ותמיכה
              </div>
            </div>
          </motion.div>

          <div className="space-y-24">
            {moduleCategories.map((cat) => (
              <motion.div key={cat.num} {...fadeUp} className="grid md:grid-cols-12 gap-10 md:gap-12 border-t border-white/[0.06] pt-12">
                <div className="md:col-span-4">
                  <div className="text-5xl md:text-6xl font-black text-lavender-400/80 tracking-tight mb-3">{cat.num}</div>
                  <div className="meta-label mb-2 text-white/40">{cat.subtitle}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">{cat.title}</h3>
                  <p className="text-white/40 text-[13px] mt-4">
                    {cat.modules.length} מודולים · החל מ-₪{Math.min(...cat.modules.map(m => parseInt(m.setup.replace(',', '')))).toLocaleString('he-IL')} setup
                  </p>
                </div>
                <div className="md:col-span-8 divide-y divide-white/[0.06]">
                  {cat.modules.map((m, i) => (
                    <div key={i} className="py-5 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-5 items-baseline">
                      <div className="sm:col-span-7">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-white font-semibold text-[17px]">{m.name}</span>
                          {m.popular && (
                            <span className="text-[9px] font-bold tracking-widest uppercase text-lavender-300 bg-lavender-500/20 border border-lavender-400/30 px-1.5 py-0.5 rounded">
                              פופולרי
                            </span>
                          )}
                        </div>
                        <div className="text-white/55 text-[14px] leading-relaxed">{m.desc}</div>
                      </div>
                      <div className="sm:col-span-5 flex items-baseline gap-5 sm:justify-end">
                        <div className="flex items-baseline gap-1">
                          <span className="text-[11px] text-white/40 uppercase tracking-wider font-semibold">Setup</span>
                          <span className="text-lavender-300 font-bold text-[17px] whitespace-nowrap">₪{m.setup}</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-[11px] text-white/40 uppercase tracking-wider font-semibold">/חודש</span>
                          <span className="text-white font-bold text-[17px] whitespace-nowrap">₪{m.monthly}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two paths */}
      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <motion.div {...fadeUp} className="mb-14 text-center max-w-2xl mx-auto">
            <div className="meta-label mb-4">איך לקנות</div>
            <h2 className="heading-section">שני מסלולי תמחור.</h2>
          </motion.div>

          <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10">
              <div className="meta-label mb-3">A la Carte</div>
              <h3 className="text-2xl font-black text-white mb-4">מודולים לפי בחירה</h3>
              <p className="text-white/60 text-[15px] leading-[1.8] mb-6">
                בחרו רק את המודולים שרלוונטיים לעסק. משלמים עבור כל אחד בנפרד לפי התמחור למעלה.
                טוב למי שיודע בדיוק מה צריך או רוצה גמישות מלאה.
              </p>
              <div className="space-y-2 text-[14px] text-white/80">
                <div>+ Base CRM: ₪15,000 setup / ₪500 לחודש</div>
                <div>+ מודולים לבחירה (ראו מעלה)</div>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-lavender-400/40 bg-lavender-500/[0.06] p-8 md:p-10 relative">
              <div className="absolute -top-3 right-8 text-[10px] font-bold tracking-widest uppercase text-[#0a0515] bg-lavender-400 px-3 py-1 rounded-full">
                מומלץ לרובם
              </div>
              <div className="meta-label mb-3 text-lavender-300">Plans</div>
              <h3 className="text-2xl font-black text-white mb-4">מסלול flat חודשי</h3>
              <p className="text-white/70 text-[15px] leading-[1.8] mb-6">
                4 מסלולים שכבר כוללים את כל הבסיס + חבילת מודולים לפי סוג העסק.
                מחיר חודשי קבוע, לא per-user. פשוט וצפוי — וחוסך עד פי 5 מול המתחרים.
              </p>
              <Link to={createPageUrl('Pricing')} className="inline-flex items-center text-white hover:text-lavender-200 transition-colors font-medium border-b border-white/30 hover:border-lavender-200 pb-1 text-[14px]">
                <ArrowLeft className="w-4 h-4 ml-2" />
                ראו את המסלולים
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-night-900/40 to-transparent">
        <div className="container-editorial">
          <motion.div {...fadeUp} className="mb-14">
            <div className="meta-label mb-4">למה Forward</div>
            <h2 className="heading-section max-w-3xl">מה שאין לאף מערכת אחרת בשוק.</h2>
          </motion.div>

          <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { t: 'עברית RTL אמיתית', d: 'לא translation של מערכת אנגלית — RTL מלא, חגי ישראל, תקנות רשות המיסים מובנות.' },
              { t: 'תמחור flat, לא per-user', d: 'לא משנה אם 5 או 25 משתמשים — אותו מחיר. חוסך אלפי שקלים לחודש לעסקים צומחים.' },
              { t: 'AI native עם Claude', d: 'סיכום שיחות, טיוטות מייל, Next-best-action — לא תוספים יקרים, חלק מה-Professional.' },
              { t: 'בנדלים ורטיקליים', d: `נדל"ן, ביטוח, רפואה, משפטים, חשבונאות — לא תבניות. פיצ'רים אמיתיים שנבנו לתחום.` },
              { t: 'חשבוניות ישראליות native', d: 'Morning/iCount integration, ח-ן מזהה, ניכויים, קבלות — הכל מותאם לרשות המיסים.' },
              { t: 'גמישות מלאה', d: 'אנחנו ה-dev. כל custom שרוצים — אפשר לבנות. לא מערכת סגורה שמגבילה אתכם.' },
            ].map((item, i) => (
              <div key={i} className="border-t border-white/[0.08] pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Minus className="w-4 h-4 mt-2 text-lavender-400 flex-shrink-0" strokeWidth={3} />
                  <h3 className="text-xl font-bold text-white">{item.t}</h3>
                </div>
                <p className="text-white/60 text-[15px] leading-[1.75] pr-7">{item.d}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 md:py-36 overflow-hidden border-t border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(139,109,226,0.2) 0%, transparent 70%)' }} />
        <div className="relative container-editorial text-center">
          <motion.div {...fadeUp}>
            <div className="meta-label mb-6">הצעד הבא</div>
            <h2 className="heading-section max-w-3xl mx-auto mb-8">רוצים לראות איך זה נראה אצלכם?</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
              שיחת הדגמה של 30 דקות — נבחן ביחד איזה בסיס + מודולים מתאימים לעסק שלכם.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to={createPageUrl('Pricing')} className="btn-pill-primary">
                <ArrowLeft className="w-4 h-4 ml-2" />
                מחירים ומסלולים
              </Link>
              <Link to={createPageUrl('Industries')} className="btn-pill-ghost">חבילות לפי תחום</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
