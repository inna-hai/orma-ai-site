import React from 'react';
import { Users, UserCog, Wallet, Brain, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Users,
    title: "שליטה מלאה במחזור חיי הלקוח",
    subtitle: "מליד לעסקה לשימור",
    description: "הסוכן מזהה ליד חדש ברגע שהוא נכנס, מסווג לפי דחיפות ופוטנציאל, מקצה לאיש הצוות הנכון, ומתחיל מעקב אוטומטי. כל אירוע מתועד, כל מסר מותאם לשלב ולהקשר.",
    color: "from-red-500 to-rose-600",
  },
  {
    icon: UserCog,
    title: "ניהול צוות שטח ומשאבי אנוש",
    subtitle: "בלי מערכת HR נפרדת",
    description: "דיווח שעות, בקשות חופשה, אישורי מנהל, קליטת עובדים — הכל דרך הודעה. הסוכן מנהל Onboarding מלא, מפיץ לוחות משימות, ומאזן עומסים בין אזורים.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Wallet,
    title: "חשבונאות ותזרים",
    subtitle: "סגירת המעגל הפיננסי",
    description: "עסקה נסגרת → הצעת מחיר → חשבונית → מעקב תשלום → תזכורת → דוח תזרים. אין יותר ׳חורים׳ בין מחלקות. מכירות, תפעול וכספים מנוהלים באותו מוח.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Brain,
    title: "אינטליגנציה מצטברת",
    subtitle: "הסוכן נהיה חכם יותר עם כל יום",
    description: "מזהה דפוסים, לומד איזה לקוחות סוגרים מהר, מתי הצוות הכי מגיב, אילו מוצרים מבוקשים ביחד, ואילו לקוחות בסיכון נטישה — ומתריע לפני שמאוחר.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Rocket,
    title: "הטמעה ללא שיבוש",
    subtitle: "תהליך מובנה שמכבד את המורכבות",
    description: "אפיון מעמיק, מיגרציה מלאה עם audit trail, הרשאות מדורגות, ושלב Soft Launch. הצוות עובר בצורה טבעית — כי הערוץ כבר מוכר. אין מערכת חדשה ללמוד.",
    color: "from-emerald-500 to-green-600",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 text-sm font-bold tracking-widest uppercase">חמש נקודות חוזק</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 mt-2">
            מערכת אחת. סוכן אחד. כל התפעול.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Forward מאחדת CRM, משאבי אנוש וכספים תחת סוכן AI אוטונומי אחד — שלומד, מחליט ופועל.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-300 ${index >= 3 ? 'lg:col-span-1' : ''}`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-indigo-600 font-medium text-sm mb-4">{service.subtitle}</p>
                
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
