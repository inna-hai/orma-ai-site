import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import {
  Home, Shield, Stethoscope, Scale, Calculator, Wrench, GraduationCap, Banknote,
  ArrowLeft, Check, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const industries = [
  {
    icon: Home,
    title: 'Real Estate',
    hebrewTitle: 'נדל"ן ותיווך',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-900',
    setup: '32,000',
    monthly: '1,400',
    target: 'משרדי תיווך 2-20 סוכנים, יזמי נדל"ן, קבוצות רכישה',
    painPoints: [
      'מאות לידים מ-Yad2 / Madlan / פייסבוק',
      'פגישות לנכסים מרובים',
      'חוזים מסובכים עם צדדים שלישיים',
      'עמלות מורכבות (split בין סוכנים)',
    ],
    modules: [
      'Base CRM',
      'WhatsApp Business',
      'Calendar + Online Booking',
      'Email Campaigns',
      'Commission Tracking',
      'Documents + E-signature',
      'Meta Lead Ads',
      'Property Listings',
      'Open House Scheduler',
      'Virtual Tour Integration',
    ],
  },
  {
    icon: Shield,
    title: 'Insurance',
    hebrewTitle: 'סוכנויות ביטוח',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-900',
    setup: '36,000',
    monthly: '1,600',
    target: 'סוכני ביטוח, סוכנויות רב-חברתיות, יועצים פיננסיים',
    painPoints: [
      'ניהול מאות פוליסות פעילות',
      'חידושים שנתיים שנופלים בין הכיסאות',
      'עמלות ממספר חברות ביטוח',
      'תביעות + מסמכי רגולציה',
    ],
    modules: [
      'Base CRM',
      'WhatsApp',
      'Commission Tracking מורכב',
      'Contract Lifecycle',
      'Documents + E-sign',
      'חשבוניות ישראליות',
      'Customer Portal',
      'Policy Management',
      'Claims Tracking',
      'Renewal Workflow',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Medical',
    hebrewTitle: 'מרפאות ורפואה',
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-900',
    setup: '30,000',
    monthly: '1,300',
    target: 'מרפאות פרטיות, רפואה משלימה, שיניים, פסיכולוגים',
    painPoints: [
      'No-shows של 15-25% שהורסים את היום',
      'יומנים מפוזרים בין מזכירות לרופא',
      'תהליך קבלה ארוך וידני',
      'מעקב טיפולים לאורך זמן',
    ],
    modules: [
      'Base CRM',
      'Online Booking Widget',
      'Calendar sync',
      'Automated Reminders (WhatsApp)',
      'Customer Portal',
      'Documents',
      'חשבוניות ישראליות',
      'Patient Records',
      'Digital Intake Forms',
      'Treatment History',
    ],
  },
  {
    icon: Scale,
    title: 'Law Firm',
    hebrewTitle: 'משרדי עורכי דין',
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-900',
    setup: '38,000',
    monthly: '1,700',
    target: 'משרדי עורכי דין 3-30 עו"ד, יועצי מס ומשפטיים',
    painPoints: [
      'ניהול תיקים מקבילים מורכבים',
      'חיוב שעות לפי דרגת עו"ד',
      'דדליינים קריטיים (בית משפט)',
      'Conflict of interest checks',
    ],
    modules: [
      'Base CRM',
      'Time Tracking',
      'חשבוניות ישראליות',
      'Documents + E-sign',
      'Contract Lifecycle',
      'Customer Portal',
      'Calendar',
      'Matter Management',
      'Court Deadlines',
      'Conflict Check',
    ],
  },
  {
    icon: Calculator,
    title: 'Accounting',
    hebrewTitle: 'רואי חשבון',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-900',
    setup: '34,000',
    monthly: '1,500',
    target: 'משרדי רו"ח ויועצי מס 2-15 עובדים',
    painPoints: [
      'עונתיות חזקה (מס הכנסה)',
      'מסמכים רבים מלקוחות',
      'מעקב אחר דדליינים רגולטוריים',
      'תקשורת מתמדת מול רשויות',
    ],
    modules: [
      'Base CRM',
      'Document Storage + Portal',
      'Customer Portal',
      'חשבוניות ישראליות',
      'Accounting Sync (Hashavshevet)',
      'Time Tracking',
      'Client Portfolio',
      'Tax Deadlines Tracker',
      'Document Upload Portal',
    ],
  },
  {
    icon: Wrench,
    title: 'Field Service',
    hebrewTitle: 'שירות בשטח',
    color: 'from-sky-500 to-blue-600',
    bgColor: 'bg-sky-50',
    textColor: 'text-sky-900',
    setup: '35,000',
    monthly: '1,500',
    target: 'חשמלאים, אינסטלטורים, שיפוצניקים, טכנאים',
    painPoints: [
      'שיבוץ נכון של עובדים באזור',
      'סטטוס עבודה בשטח real-time',
      'הצעות מחיר מהשטח ללקוח',
      'חשבוניות + תשלום מיידי',
    ],
    modules: [
      'Base CRM',
      'Online Booking',
      'Resource Scheduling',
      'WhatsApp',
      'Quotes + Proposals',
      'חשבוניות ישראליות',
      'Technician Mobile App',
      'Job Dispatch',
      'On-site Signatures',
      'Route Optimization',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Education',
    hebrewTitle: 'חינוך וקורסים',
    color: 'from-fuchsia-500 to-pink-600',
    bgColor: 'bg-fuchsia-50',
    textColor: 'text-fuchsia-900',
    setup: '33,000',
    monthly: '1,400',
    target: 'בתי ספר פרטיים, קורסים, מרכזי למידה, hai.tech דומים',
    painPoints: [
      'ניהול הורים + ילדים במקביל',
      'תשלומים מרובים (סדרות, קורסים)',
      'דוחות התקדמות להורים',
      'תקשורת שוטפת עם שני הורים',
    ],
    modules: [
      'Base CRM',
      'Online Booking',
      'חשבוניות ישראליות',
      'Email Campaigns',
      'WhatsApp',
      'Customer Portal',
      'Student Management',
      'Course Enrollment',
      'Parent Communication',
      'Progress Tracking',
    ],
    featured: true,
    featuredNote: 'יתרון מובנה — נבנה על תשתית hai.tech',
  },
  {
    icon: Banknote,
    title: 'Financial Services',
    hebrewTitle: 'משכנתאות ופיננסים',
    color: 'from-yellow-500 to-amber-600',
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-900',
    setup: '42,000',
    monthly: '1,900',
    target: 'יועצי משכנתאות, סוכנויות פיננסיות, יועצי השקעות',
    painPoints: [
      'חלוקת לידים אוטומטית בין סוכנים',
      'SLA קפדני על זמן תגובה',
      'Compliance + audit trail מלא',
      'מחזור לידים שלא נענו',
    ],
    modules: [
      'Base CRM',
      'Lead Exchange Engine',
      'Commission Tracking',
      'Documents + E-sign',
      'Advanced Lead Scoring',
      'SLA Tracking',
      'Compliance &amp; Audit',
      'Distribution Engine',
      'Recycling Logic',
    ],
  },
];

export default function Industries() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(160deg, #020617 0%, #0f172a 35%, #1e1b4b 70%, #312e81 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/5 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-indigo-400 text-sm font-bold tracking-widest uppercase mb-6"
          >
            חבילות לפי תחום
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-100 leading-[1.2] mb-6"
          >
            לא CRM כללי.<br />
            <span className="text-indigo-400">מותאם לתחום שלכם.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            8 חבילות שנבנו סביב הדרישות האמיתיות של כל תחום עסקי.
            לא תבניות כלליות — פיצ&apos;רים אמיתיים שנבנו מתוך הבנת ה-Pain ושנים של ניסיון בכל וורטיקל.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`relative bg-white rounded-3xl overflow-hidden border ${
                    industry.featured ? 'border-indigo-300 shadow-xl shadow-indigo-100/50' : 'border-slate-100'
                  } hover:shadow-2xl transition-shadow`}
                >
                  {industry.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg inline-flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        מומלץ
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className={`bg-gradient-to-br ${industry.color} p-8 text-white`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-medium opacity-80">Setup חד-פעמי</div>
                        <div className="text-2xl font-black">₪{industry.setup}</div>
                        <div className="text-xs mt-2 opacity-80">חודשי</div>
                        <div className="text-xl font-black">₪{industry.monthly}</div>
                      </div>
                    </div>
                    <div className="text-xs font-bold tracking-widest uppercase opacity-90">{industry.title}</div>
                    <h3 className="text-3xl font-black mb-3">{industry.hebrewTitle}</h3>
                    <p className="text-sm opacity-90">{industry.target}</p>
                    {industry.featuredNote && (
                      <p className="text-xs mt-3 bg-white/20 px-3 py-1.5 rounded-full inline-block">
                        ★ {industry.featuredNote}
                      </p>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Pain points */}
                    <div className="mb-6">
                      <div className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">הבעיות שפותרות</div>
                      <ul className="space-y-2">
                        {industry.painPoints.map((pain, i) => (
                          <li key={i} className="flex gap-3 text-sm text-slate-700">
                            <span className="text-red-500 flex-shrink-0">×</span>
                            <span>{pain}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Modules */}
                    <div className="mb-6">
                      <div className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">מודולים כלולים</div>
                      <div className="flex flex-wrap gap-2">
                        {industry.modules.map((mod, i) => (
                          <span
                            key={i}
                            className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                              mod.includes('+') || ['Policy Management', 'Claims Tracking', 'Renewal Workflow', 'Patient Records', 'Digital Intake Forms', 'Treatment History', 'Matter Management', 'Court Deadlines', 'Conflict Check', 'Client Portfolio', 'Tax Deadlines Tracker', 'Document Upload Portal', 'Technician Mobile App', 'Job Dispatch', 'On-site Signatures', 'Route Optimization', 'Student Management', 'Course Enrollment', 'Parent Communication', 'Progress Tracking', 'Distribution Engine', 'Recycling Logic', 'Property Listings', 'Open House Scheduler', 'Virtual Tour Integration'].includes(mod)
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {mod}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-slate-400 mt-3">
                        <span className="inline-block w-2 h-2 rounded-full bg-amber-400 align-middle ml-1"></span>
                        מודולים ייחודיים לתחום
                      </p>
                    </div>

                    {/* CTA */}
                    <Link to={createPageUrl('Contact')}>
                      <Button className={`w-full bg-gradient-to-r ${industry.color} text-white hover:opacity-90 rounded-xl`}>
                        לבחירת חבילה זו
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Don't see your industry */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                התחום שלכם לא ברשימה?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                אלה רק הבנדלים המוכנים. אנחנו בונים חבילה ייעודית לכל תחום —
                בריאות, הובלות, אופנה, מזון, ספורט, צילום וכל עסק אחר.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg rounded-xl">
                  נבנה חבילה לעסק שלי
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's in every bundle */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-indigo-600 text-sm font-bold tracking-widest uppercase">בכל חבילה</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 mt-2">
              מה שמקבלים תמיד
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
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
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-xl p-4 flex items-center gap-3 border border-slate-100"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-slate-900">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              מצאתם את הבנדל שמתאים?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              תיאום שיחת הדגמה של 30 דקות — נראה את המערכת בפעולה ונבחן מה הכי מתאים לעסק.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-6 text-lg rounded-xl font-bold">
                  תיאום הדגמה
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </Link>
              <Link to={createPageUrl('Pricing')}>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-xl">
                  מחירים ומסלולים
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
