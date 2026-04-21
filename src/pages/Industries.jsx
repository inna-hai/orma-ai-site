import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Minus } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const industries = [
  {
    num: '01',
    code: 'REAL',
    title: 'Real Estate',
    hebrewTitle: 'נדל"ן ותיווך',
    setup: '32,000',
    monthly: '1,400',
    target: 'משרדי תיווך 2-20 סוכנים, יזמי נדל"ן, קבוצות רכישה',
    pains: ['מאות לידים מ-Yad2 / Madlan', 'פגישות לנכסים מרובים', 'חוזים עם צדדים שלישיים', 'עמלות split בין סוכנים'],
    modules: ['Base CRM', 'WhatsApp', 'Calendar + Online Booking', 'Email Campaigns', 'Commission Tracking', 'Documents + E-sign', 'Meta Lead Ads'],
    unique: ['Property Listings', 'Open House Scheduler', 'Virtual Tour Integration'],
  },
  {
    num: '02',
    code: 'INS',
    title: 'Insurance',
    hebrewTitle: 'סוכנויות ביטוח',
    setup: '36,000',
    monthly: '1,600',
    target: 'סוכני ביטוח, סוכנויות רב-חברתיות, יועצים פיננסיים',
    pains: ['ניהול מאות פוליסות', 'חידושים שנופלים', 'עמלות ממספר חברות', 'תביעות + רגולציה'],
    modules: ['Base CRM', 'WhatsApp', 'Commission Tracking', 'Contract Lifecycle', 'Documents + E-sign', 'חשבוניות', 'Customer Portal'],
    unique: ['Policy Management', 'Claims Tracking', 'Renewal Workflow'],
  },
  {
    num: '03',
    code: 'MED',
    title: 'Medical',
    hebrewTitle: 'מרפאות ורפואה',
    setup: '30,000',
    monthly: '1,300',
    target: 'מרפאות פרטיות, רפואה משלימה, שיניים, פסיכולוגים',
    pains: ['No-shows של 15-25%', 'יומנים מפוזרים', 'תהליך קבלה ידני', 'מעקב טיפולים'],
    modules: ['Base CRM', 'Online Booking', 'Calendar', 'Reminders', 'WhatsApp', 'Portal', 'Documents', 'חשבוניות'],
    unique: ['Patient Records', 'Digital Intake Forms', 'Treatment History'],
  },
  {
    num: '04',
    code: 'LAW',
    title: 'Law Firm',
    hebrewTitle: 'משרדי עורכי דין',
    setup: '38,000',
    monthly: '1,700',
    target: 'משרדי עורכי דין 3-30 עו"ד, יועצי מס ומשפטיים',
    pains: ['תיקים מקבילים מורכבים', 'חיוב שעות לפי דרגה', 'דדליינים קריטיים', 'Conflict of interest'],
    modules: ['Base CRM', 'Time Tracking', 'חשבוניות', 'Documents + E-sign', 'Contract Lifecycle', 'Portal', 'Calendar'],
    unique: ['Matter Management', 'Court Deadlines', 'Conflict Check'],
  },
  {
    num: '05',
    code: 'ACC',
    title: 'Accounting',
    hebrewTitle: 'רואי חשבון',
    setup: '34,000',
    monthly: '1,500',
    target: 'משרדי רו"ח ויועצי מס 2-15 עובדים',
    pains: ['עונתיות מס הכנסה', 'מסמכים רבים מלקוחות', 'דדליינים רגולטוריים', 'תקשורת מול רשויות'],
    modules: ['Base CRM', 'Document Storage + Portal', 'חשבוניות', 'Accounting Sync (Hashavshevet)', 'Time Tracking'],
    unique: ['Client Portfolio', 'Tax Deadlines Tracker', 'Document Upload Portal'],
  },
  {
    num: '06',
    code: 'FSV',
    title: 'Field Service',
    hebrewTitle: 'שירות בשטח',
    setup: '35,000',
    monthly: '1,500',
    target: 'חשמלאים, אינסטלטורים, שיפוצניקים, טכנאים',
    pains: ['שיבוץ באזור', 'סטטוס בשטח real-time', 'הצעות מהשטח', 'חשבוניות ותשלום מיידי'],
    modules: ['Base CRM', 'Online Booking', 'Resource Scheduling', 'WhatsApp', 'Quotes', 'חשבוניות'],
    unique: ['Technician Mobile App', 'Job Dispatch', 'On-site Signatures', 'Route Optimization'],
  },
  {
    num: '07',
    code: 'EDU',
    title: 'Education',
    hebrewTitle: 'חינוך וקורסים',
    setup: '33,000',
    monthly: '1,400',
    target: 'בתי ספר פרטיים, קורסים, מרכזי למידה',
    pains: ['ניהול הורים + ילדים', 'תשלומים מרובים', 'דוחות התקדמות', 'תקשורת עם שני הורים'],
    modules: ['Base CRM', 'Online Booking', 'חשבוניות', 'Email Campaigns', 'WhatsApp', 'Portal'],
    unique: ['Student Management', 'Course Enrollment', 'Parent Communication', 'Progress Tracking'],
    featured: true,
  },
  {
    num: '08',
    code: 'FIN',
    title: 'Financial Services',
    hebrewTitle: 'משכנתאות ופיננסים',
    setup: '42,000',
    monthly: '1,900',
    target: 'יועצי משכנתאות, סוכנויות פיננסיות, יועצי השקעות',
    pains: ['חלוקת לידים בין סוכנים', 'SLA על זמן תגובה', 'Compliance + audit', 'מחזור לידים'],
    modules: ['Base CRM', 'Lead Exchange Engine', 'Commission Tracking', 'Documents + E-sign', 'Advanced Lead Scoring', 'SLA Tracking'],
    unique: ['Distribution Engine', 'Recycling Logic', 'Compliance & Audit'],
  },
];

export default function Industries() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,109,226,0.18) 0%, transparent 60%)' }} />
        <div className="relative container-editorial">
          <motion.div {...fadeUp} className="max-w-4xl">
            <div className="meta-label mb-6">Industries</div>
            <h1 className="heading-display mb-8">
              לא CRM כללי.<br />
              <span className="text-lavender-300">מותאם לתחום שלכם.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-[1.75] max-w-2xl">
              8 חבילות שנבנו סביב הדרישות האמיתיות של כל תחום עסקי.
              לא תבניות כלליות — פיצ&apos;רים אמיתיים שנבנו מתוך הבנת ה-Pain ושנים של ניסיון בכל וורטיקל.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24 border-t border-white/[0.06]">
        <div className="container-editorial">
          <div className="space-y-24">
            {industries.map((ind) => (
              <motion.article
                key={ind.num}
                {...fadeUp}
                className="grid md:grid-cols-12 gap-10 md:gap-12 border-t border-white/[0.06] pt-12 relative"
              >
                {ind.featured && (
                  <div className="absolute -top-3 right-0 text-[10px] font-bold tracking-widest uppercase text-[#0a0515] bg-lavender-400 px-3 py-1 rounded-full">
                    יתרון מובנה
                  </div>
                )}

                <div className="md:col-span-4">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl md:text-6xl font-black text-lavender-400/80 tracking-tight leading-none">{ind.num}</div>
                  </div>
                  <div className="meta-label mb-2 text-white/40">{ind.title}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">{ind.hebrewTitle}</h3>
                  <p className="text-white/55 text-[14px] leading-relaxed mb-6">{ind.target}</p>

                  <div className="flex flex-wrap gap-6 border-t border-white/[0.06] pt-6">
                    <div>
                      <div className="meta-label text-[10px] mb-1 text-white/40">Setup</div>
                      <div className="text-xl font-black text-white">₪{ind.setup}</div>
                    </div>
                    <div>
                      <div className="meta-label text-[10px] mb-1 text-white/40">חודשי</div>
                      <div className="text-xl font-black text-white">₪{ind.monthly}</div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-8 space-y-8">
                  <div>
                    <div className="meta-label mb-4 text-white/45">הבעיות שפותרות</div>
                    <ul className="space-y-2">
                      {ind.pains.map((p, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/75 text-[15px]">
                          <span className="text-red-400/70 text-sm mt-1">×</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="meta-label mb-4 text-white/45">מודולים כלולים</div>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.modules.map((m, i) => (
                        <span key={i} className="text-[12px] px-3 py-1.5 rounded-full bg-white/[0.05] text-white/70 border border-white/[0.06]">{m}</span>
                      ))}
                      {ind.unique.map((m, i) => (
                        <span key={`u-${i}`} className="text-[12px] px-3 py-1.5 rounded-full bg-lavender-500/15 text-lavender-200 border border-lavender-400/20 font-medium">
                          + {m}
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] text-white/40 mt-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-lavender-400"></span>
                      מודולים ייחודיים לתחום
                    </p>
                  </div>

                  <Link to={createPageUrl('Contact')} className="inline-flex items-center text-white hover:text-lavender-300 transition-colors font-medium border-b border-white/20 hover:border-lavender-300 pb-1">
                    <ArrowLeft className="w-4 h-4 ml-2" />
                    לבחירת חבילה זו
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-night-900/40 to-transparent">
        <div className="container-editorial">
          <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="meta-label mb-4">התחום שלכם לא ברשימה?</div>
              <h2 className="heading-section mb-6">נבנה חבילה ייעודית.</h2>
              <p className="text-white/60 text-lg leading-[1.85] max-w-2xl">
                אלה רק הבנדלים המוכנים. אנחנו בונים חבילה ייעודית לכל תחום —
                בריאות, הובלות, אופנה, מזון, ספורט, צילום וכל עסק אחר.
              </p>
            </div>
            <div className="md:col-span-5 flex md:justify-end">
              <Link to={createPageUrl('Contact')} className="btn-pill-primary">
                <ArrowLeft className="w-4 h-4 ml-2" />
                נבנה חבילה לעסק שלי
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Always included */}
      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <motion.div {...fadeUp} className="mb-10">
            <div className="meta-label mb-4">בכל חבילה</div>
            <h2 className="heading-section max-w-3xl">מה שמקבלים תמיד.</h2>
          </motion.div>

          <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-x-12 gap-y-4 border-t border-white/[0.08] pt-10">
            {[
              'הטמעה מלאה בתוך 2-3 שבועות',
              'הדרכת צוות (2 מפגשים)',
              'ייבוא דאטה ממערכת קודמת',
              'תמיכה ישירה בעברית',
              'עדכונים אוטומטיים לפלטפורמה',
              'גיבויים יומיים + SLA של 99.9%',
              'עברית RTL אמיתית',
              'התאמה אישית של pipeline ושלבים',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-3 text-[15px] text-white/80 border-b border-white/[0.04]">
                <Check className="w-4 h-4 mt-1 text-lavender-400 flex-shrink-0" strokeWidth={2.5} />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-28 md:py-36 overflow-hidden border-t border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(139,109,226,0.2) 0%, transparent 70%)' }} />
        <div className="relative container-editorial text-center">
          <motion.div {...fadeUp}>
            <h2 className="heading-section max-w-3xl mx-auto mb-8">מצאתם את הבנדל שמתאים?</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
              תיאום שיחת הדגמה של 30 דקות — נראה את המערכת בפעולה ונבחן מה הכי מתאים לעסק.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to={createPageUrl('Contact')} className="btn-pill-primary">
                <ArrowLeft className="w-4 h-4 ml-2" />
                תיאום הדגמה
              </Link>
              <Link to={createPageUrl('Pricing')} className="btn-pill-ghost">מחירים ומסלולים</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
