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
      { name: 'WhatsApp Business', desc: 'שליחה וקבלה, Templates, בוט, עדכון ליד אוטומטי' },
      { name: 'סנכרון אימייל', desc: 'Gmail/Outlook דו-כיווני, Templates, Tracking' },
      { name: 'SMS ושיחות', desc: 'Inforu/Twilio, Click-to-call, Call logs' },
      { name: "צ'אט חי באתר", desc: 'Widget, Live + bot, Handoff חלק' },
      { name: 'תיבת דואר משותפת', desc: 'Team inbox, SLA, Auto-routing' },
      { name: 'הודעות המוניות', desc: 'WhatsApp Broadcast, SMS Campaigns' },
    ],
  },
  {
    num: '02',
    title: 'שיווק',
    subtitle: 'Marketing',
    modules: [
      { name: 'Email Campaigns', desc: 'Drag-and-drop builder, A/B testing, Analytics' },
      { name: 'Lead Scoring מתקדם', desc: 'ציון דינמי, ML-based, Hot/warm/cold auto-tag' },
      { name: 'Workflow Automation', desc: 'If-this-then-that visual, Triggers, Actions' },
      { name: 'Landing Pages', desc: 'RTL templates, טפסים מחוברים, Custom domain' },
      { name: 'UTM & Attribution', desc: 'Multi-touch, ROI per campaign, Ads sync' },
      { name: 'Referral & Loyalty', desc: 'קודי הפניה, Rewards, דוחות מפנים' },
    ],
  },
  {
    num: '03',
    title: 'מכירות',
    subtitle: 'Sales',
    modules: [
      { name: 'הצעות מחיר וחוזים', desc: 'PDF מעוצב, E-sign, Templates' },
      { name: 'קטלוג מוצרים', desc: 'פריטים, מחירונים, variants, bundles' },
      { name: 'ניהול עמלות', desc: 'מבנים מותאמים, חישוב אוטומטי, דוחות' },
      { name: 'Forecasting', desc: 'חיזוי לפי pipeline, Quotas, Scenarios' },
      { name: 'Sales Playbooks', desc: 'Guided scripts, Next-best-action' },
      { name: 'Multi-stage Deal Mgmt', desc: 'Approvals בשלבים, Stage gates, ROI' },
    ],
  },
  {
    num: '04',
    title: 'שירות לקוחות',
    subtitle: 'Service',
    modules: [
      { name: 'Ticketing System', desc: 'CRUD, הקצאה אוטומטית, SLA, Portal' },
      { name: 'Knowledge Base', desc: 'מאמרים, חיפוש חכם, AI suggestions' },
      { name: 'Customer Portal', desc: "פניות, תשלומים, מסמכים, צ'אט" },
      { name: 'NPS & Surveys', desc: 'שאלונים, Sentiment AI, Trends' },
    ],
  },
  {
    num: '05',
    title: 'תזמון ופגישות',
    subtitle: 'Scheduling',
    modules: [
      { name: 'Calendar Integration', desc: 'Google/Outlook sync, Multi-user, Conflicts' },
      { name: 'Online Booking Widget', desc: 'לקוח בוחר זמן, Real-time, Auto-confirm' },
      { name: 'Resource Scheduling', desc: 'חדרים, ציוד, Prevent double-booking' },
      { name: 'Automated Reminders', desc: 'WhatsApp/SMS/Email, Custom timing' },
    ],
  },
  {
    num: '06',
    title: 'מסמכים וחוזים',
    subtitle: 'Documents',
    modules: [
      { name: 'Document Templates', desc: 'DOCX/PDF, Merge fields, Version control' },
      { name: 'E-Signature', desc: 'חתימה דיגיטלית חוקית, Multi-party' },
      { name: 'Document Storage', desc: 'S3 encrypted, Sharing links, Preview' },
      { name: 'Contract Lifecycle', desc: 'חידושים, Alerts, Automation' },
    ],
  },
  {
    num: '07',
    title: 'חיוב וחשבונות',
    subtitle: 'Billing',
    modules: [
      { name: 'חשבוניות ישראליות', desc: 'חשבוניות מס + קבלות, Morning/iCount' },
      { name: 'תשלומים אונליין', desc: 'Tranzila/Cardcom, Subscriptions' },
      { name: 'Accounting Sync', desc: 'Hashavshevet, סנכרון דו-כיווני' },
      { name: 'גבייה ודרישות', desc: 'Dunning workflows, תזכורות, Late fees' },
    ],
  },
  {
    num: '08',
    title: 'Analytics & BI',
    subtitle: 'Analytics',
    modules: [
      { name: 'דשבורדים מותאמים', desc: 'Widget builder, Multi-role, Real-time' },
      { name: 'Report Builder', desc: 'ללא קוד, Scheduled, Export, Pivot tables' },
      { name: 'Funnel Analytics', desc: 'Conversion, Bottlenecks, Cohorts' },
      { name: 'Agent Performance', desc: 'Gamification, KPIs, Leaderboards' },
    ],
  },
  {
    num: '09',
    title: 'AI & אוטומציה חכמה',
    subtitle: 'AI',
    modules: [
      { name: 'AI Conversation Summary', desc: 'סיכום שיחות, Action items, Sentiment' },
      { name: 'AI Email Draft', desc: 'טיוטות context-aware, Tone מותאם' },
      { name: 'Next-Best-Action', desc: 'המלצה על פעולה הבאה, ML-based' },
      { name: 'AI Chatbot ללקוח', desc: 'בוט באתר/WhatsApp, Handoff, Lead capture' },
      { name: 'Voice-to-Text', desc: 'הקלטה → טקסט, עברית איכותית (Whisper)' },
      { name: 'Predictive Scoring', desc: 'ML לקונברסיה, Churn, Lifetime value' },
    ],
  },
  {
    num: '10',
    title: 'אינטגרציות',
    subtitle: 'Integrations',
    modules: [
      { name: 'Fireberry / Powerlink', desc: 'סנכרון דו-כיווני, Field mapping' },
      { name: 'Meta Lead Ads', desc: 'לידים אוטומטיים, UTM, Instant response' },
      { name: 'Google Ads', desc: 'Conversions sync, Offline API, ROI' },
      { name: 'Zapier / Make', desc: 'Webhooks, 2000+ אפליקציות' },
      { name: 'Priority / SAP B1', desc: 'ERP integration, לקוחות ופריטים' },
      { name: 'GeoScale Integration', desc: 'Visibility scores, Brand monitoring' },
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
              <div className="divider-thin" />
            </div>
            <div className="md:col-span-8">
              <h2 className="heading-section mb-6">Base CRM — מה שכל לקוח מקבל</h2>
              <p className="text-white/60 text-lg leading-[1.85] max-w-2xl">
                ליבה חזקה שמספיקה לרוב העסקים הקטנים. הכל בנוי על אותם יסודות של מוצרים שכבר רצים בייצור.
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
              כל עסק מרכיב את ה-CRM המושלם שלו. מתחילים קטן, מרחיבים מתי שצריך — בלי להחליף מערכת.
            </p>
          </motion.div>

          <div className="space-y-24">
            {moduleCategories.map((cat) => (
              <motion.div key={cat.num} {...fadeUp} className="grid md:grid-cols-12 gap-10 md:gap-12 border-t border-white/[0.06] pt-12">
                <div className="md:col-span-4">
                  <div className="text-5xl md:text-6xl font-black text-lavender-400/80 tracking-tight mb-3">{cat.num}</div>
                  <div className="meta-label mb-2 text-white/40">{cat.subtitle}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">{cat.title}</h3>
                </div>
                <div className="md:col-span-8 space-y-5">
                  {cat.modules.map((m, i) => (
                    <div key={i} className="border-b border-white/[0.06] pb-5 last:border-0">
                      <div className="text-white font-semibold text-[17px] mb-1">{m.name}</div>
                      <div className="text-white/55 text-[14px] leading-relaxed">{m.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-24 md:py-32">
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
              { t: 'בנדלים ורטיקליים', d: 'נדל"ן, ביטוח, רפואה, משפטים, חשבונאות — לא תבניות. פיצ\'רים אמיתיים שנבנו לתחום.' },
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
