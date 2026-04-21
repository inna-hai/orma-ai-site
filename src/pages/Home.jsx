import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowLeft, Minus } from 'lucide-react';
import HeroVisual from '@/components/HeroVisual';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(139,109,226,0.18) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(75,40,140,0.15) 0%, transparent 55%)',
        }}
      />

      <div className="relative container-wide grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <motion.div {...fadeUp} className="lg:col-span-7 order-2 lg:order-1">
          <div className="meta-label mb-6">Forward · Autonomous Agents</div>
          <h1 className="heading-display mb-8">
            סוכני AI שמנהלים את{' '}
            <span className="text-lavender-300">המכירות, הצוות והכספים</span>
            {' '}— 24/7 במקומכם.
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-[1.75] max-w-xl mb-10">
            Forward יוצרת סוכני AI ומנהל סוכנים לכל תהליך בארגון — מכירות, HR, כספים.
            לא רק עוזרים, אלא <span className="text-white">מבצעים, מחליטים ומדווחים</span>{' '}
            באוטונומיה מלאה.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link to={createPageUrl('Contact')} className="btn-pill-primary">
              <ArrowLeft className="w-4 h-4 ml-2" />
              תיאום פגישת אפיון
            </Link>
            <Link to={createPageUrl('Platform')} className="btn-pill-ghost">
              מה Forward עושה?
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="lg:col-span-5 order-1 lg:order-2"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function MarqueeSection() {
  const logos = ['Oracle', 'HyperRoll', 'OpenAI', 'Anthropic', 'Google Cloud', 'Ministry of Labor', 'ORT', 'Ben-Gurion University'];
  return (
    <section className="py-10 border-y border-white/[0.05]">
      <div className="container-wide">
        <p className="meta-label text-center mb-6 text-white/40">אנחנו בונים את Forward על בסיס ניסיון מ—</p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          {logos.map((l) => (
            <span key={l} className="text-[14px] text-white/35 font-medium tracking-wide">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-editorial">
        <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <div className="meta-label mb-4">הבעיה</div>
            <div className="divider-thin" />
          </div>
          <div className="md:col-span-8">
            <h2 className="heading-section mb-8">
              כלי AI שמחזיקים את הצוות באזיקים.
            </h2>
            <div className="space-y-5 text-white/70 text-lg leading-[1.85] max-w-2xl">
              <p>
                רוב הפתרונות היום — מ-Salesforce ועד Leena AI — מציעים{' '}
                <span className="text-white">שכבת עוזרים</span>: בוטים שצריך לשאול,
                אוטומציות שצריך לתחזק, דשבורדים שצריך לבדוק.
              </p>
              <p>
                הצוות עדיין עסוק בלנהל את הכלים. ה-AI לא באמת עושה את העבודה — הוא רק
                מאיץ חלקים ממנה.
              </p>
              <p className="text-white">זה לא מה שמגיע לארגון שלך.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ManifestoSection() {
  const pillars = [
    { num: '01', title: 'סוכנים, לא כלים', body: 'הסוכן לא מחכה להוראה. הוא מזהה ליד חדש, משייך לאיש הנכון, עוקב, מעדכן, וסוגר — בלי שאף אחד מהצוות יזיז אצבע.' },
    { num: '02', title: 'מערכת אחת. לא אוסף מוצרים.', body: 'CRM, HR וכספים תחת מוח אחד. הסוכן יודע שהלקוח בשלב עסקה, שהעובד שמטפל חסר יום חופש, ושהתזרים מאשר שליחת הצעה. בלי ערבוב בין מחלקות.' },
    { num: '03', title: 'WhatsApp-native, מהיום הראשון', body: 'אין ערוץ חדש ללמוד. הצוות שולח הודעה — הסוכן מבצע. הלקוח כותב — הסוכן עונה. כל השאר קורה מאחורי הקלעים.' },
  ];
  return (
    <section className="py-28 md:py-36 bg-gradient-to-b from-transparent via-night-900/60 to-transparent">
      <div className="container-editorial">
        <motion.div {...fadeUp} className="mb-16 md:mb-20">
          <div className="meta-label mb-4">הגישה</div>
          <h2 className="heading-section max-w-3xl">איך Forward שונה — בשלושה קווים ברורים.</h2>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {pillars.map((p, i) => (
            <motion.article
              key={p.num}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="grid md:grid-cols-12 gap-8 md:gap-12 items-start border-t border-white/[0.06] pt-12"
            >
              <div className="md:col-span-3">
                <div className="text-5xl md:text-6xl font-black text-lavender-400/80 tracking-tight">{p.num}</div>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">{p.title}</h3>
                <p className="text-white/65 text-lg leading-[1.8] max-w-2xl">{p.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: '100%', label: 'העברת נתונים עם בדיקת תקינות' },
    { value: '0', label: 'שיבוש לפעילות השוטפת' },
    { value: '24/7', label: 'ניטור וליווי צמוד' },
    { value: '∞', label: 'סוכנים ללא הגבלה' },
  ];
  return (
    <section className="py-20 border-y border-white/[0.06]">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }} className="text-center md:text-right">
              <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">{s.value}</div>
              <div className="text-[13px] text-white/45 leading-snug">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformTeaserSection() {
  const categories = [
    `תקשורת — WhatsApp, Email, SMS, צ'אט חי`,
    'שיווק — Campaigns, Lead Scoring, Workflows',
    'מכירות — Quotes, Commissions, Forecasting',
    'שירות — Ticketing, KB, Customer Portal',
    'תזמון — Calendar sync, Online Booking',
    'מסמכים — Templates, E-sign, Contracts',
    'חיוב — חשבוניות ישראליות, Payments',
    'Analytics — Dashboards, Report Builder',
    'AI — Summary, Next-Best-Action, Chatbot',
    'אינטגרציות — Fireberry, Meta Ads, Zapier',
  ];
  return (
    <section className="py-28 md:py-36">
      <div className="container-editorial">
        <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16">
          <div className="md:col-span-5">
            <div className="meta-label mb-4">הפלטפורמה</div>
            <h2 className="heading-section">בסיס אחד.<br /><span className="text-lavender-300">50+ מודולים</span> להתאמה מלאה.</h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-white/60 text-lg leading-[1.85]">
              אנחנו לא מוכרים CRM גנרי. אנחנו בונים ליבה חזקה שכל לקוח מקבל, ומשלבים את המודולים שבאמת רלוונטיים לעסק שלו. מתחילים קטן, מרחיבים מתי שצריך — בלי להחליף מערכת.
            </p>
            <Link to={createPageUrl('Platform')} className="inline-flex items-center mt-8 text-white hover:text-lavender-300 transition-colors font-medium border-b border-white/30 hover:border-lavender-300 pb-1">
              <ArrowLeft className="w-4 h-4 ml-2" />
              לקטלוג המודולים המלא
            </Link>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-x-10 gap-y-3 border-t border-white/[0.08] pt-10">
          {categories.map((cat, i) => (
            <div key={i} className="flex items-start gap-3 py-3 border-b border-white/[0.04]">
              <Minus className="w-4 h-4 mt-2 text-lavender-400 flex-shrink-0" strokeWidth={3} />
              <span className="text-white/80 text-[15px] leading-relaxed">{cat}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PricingTeaserSection() {
  return (
    <section className="py-28 md:py-36 bg-gradient-to-b from-night-900/40 to-transparent">
      <div className="container-editorial">
        <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 items-end mb-16">
          <div className="md:col-span-7">
            <div className="meta-label mb-4">תמחור</div>
            <h2 className="heading-section">Flat rate. לא per-user.</h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-white/60 text-lg leading-[1.85]">
              עסק של 10 עובדים משלם את אותו המחיר כמו עסק של 25. מה שחוסך עד פי 7 בשנה מול HubSpot, Fireberry ו-Monday.
            </p>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="grid md:grid-cols-4 border-t border-b border-white/[0.08] divide-x divide-x-reverse divide-white/[0.08]">
          {[
            { name: 'Starter', price: '₪0', sub: 'חינם לתמיד', users: '1 משתמש' },
            { name: 'Growth', price: '₪299', sub: 'לחודש', users: 'עד 5 משתמשים' },
            { name: 'Professional', price: '₪799', sub: 'לחודש', users: 'עד 15 משתמשים', featured: true },
            { name: 'Business', price: '₪1,499', sub: 'לחודש', users: 'עד 30 משתמשים' },
          ].map((p) => (
            <div key={p.name} className={`p-8 ${p.featured ? 'bg-lavender-500/[0.08]' : ''}`}>
              <div className="flex items-center gap-2 mb-6">
                <span className={`text-[12px] font-bold tracking-widest uppercase ${p.featured ? 'text-lavender-300' : 'text-white/50'}`}>
                  {p.name}
                </span>
                {p.featured && <span className="text-[10px] font-bold bg-lavender-500 text-white px-2 py-0.5 rounded-full">המומלץ</span>}
              </div>
              <div className="text-4xl font-black text-white mb-1">{p.price}</div>
              <div className="text-[13px] text-white/50 mb-4">{p.sub}</div>
              <div className="text-[14px] text-white/70">{p.users}</div>
            </div>
          ))}
        </motion.div>

        <motion.div {...fadeUp} className="mt-10 text-center">
          <Link to={createPageUrl('Pricing')} className="inline-flex items-center text-white hover:text-lavender-300 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 ml-2" />
            השוואה מלאה מול המתחרים ופירוט המסלולים
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(139,109,226,0.2) 0%, transparent 70%)' }} />
      <div className="relative container-editorial text-center">
        <motion.div {...fadeUp}>
          <div className="meta-label mb-6">מוכנים להתחיל?</div>
          <h2 className="heading-section max-w-3xl mx-auto mb-10">שיחת אסטרטגיה של 30 דקות. בלי מצגות. בלי התחייבות.</h2>
          <p className="text-white/60 text-lg leading-[1.85] max-w-2xl mx-auto mb-12">
            נבחן יחד את התהליכים שלכם, נבין איפה סוכן AI יכול באמת להרים את הראש של הצוות, ונראה אם יש התאמה בינינו.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to={createPageUrl('Contact')} className="btn-pill-primary">
              <ArrowLeft className="w-4 h-4 ml-2" />
              תיאום שיחה
            </Link>
            <Link to={createPageUrl('CaseStudies')} className="btn-pill-ghost">קודם סיפורי הצלחה</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MarqueeSection />
      <ProblemSection />
      <ManifestoSection />
      <StatsSection />
      <PlatformTeaserSection />
      <PricingTeaserSection />
      <CTASection />
    </div>
  );
}
