import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Bot, GraduationCap, RefreshCw, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'ספרינט אבחון AI',
    badge: 'מוצר כניסה',
    subtitle: 'נקודת פתיחה ממוקדת לארגונים',
    description: 'תהליך ממוקד לזיהוי הזדמנויות AI עם השפעה עסקית מיידית. מיועד לארגונים שרוצים להבין איפה נכון להשקיע – לפני שמתחילים לפתח.',
    forWhom: 'לארגונים שרוצים החלטה חכמה לפני יישום',
    features: [
      'מיפוי תהליכים ארגוניים',
      'זיהוי נקודות חיסכון בזמן וכסף',
      'הגדרת Use Cases עם ROI ברור',
      'תוכנית יישום אופרטיבית'
    ],
    highlight: true
  },
  {
    icon: Bot,
    title: 'יישום AI ואוטומציה',
    subtitle: 'הפיכת תובנות לפתרונות עובדים',
    description: 'בניית פתרונות AI שמתחברים לעבודה היומיומית ולמערכות הקיימות בארגון – בלי להמציא הכול מחדש.',
    forWhom: 'לארגונים שכבר יודעים מה הם רוצים ליישם',
    features: [
      'בוטים לשירות, מכירות ותפעול',
      'אוטומציות בין מערכות קיימות',
      'חיבור GPT לתהליכים ארגוניים',
      'פתרונות מותאמים לצרכים אמיתיים'
    ]
  },
  {
    icon: GraduationCap,
    title: 'הטמעה והכשרת צוותים',
    subtitle: 'כדי ש-AI באמת יעבוד – לא רק יפותח',
    description: 'הטמעה עמוקה של פתרונות AI דרך שינוי הרגלי עבודה, הכשרת הנהלה וצוותים וליווי תהליכי שינוי.',
    forWhom: 'לארגונים שרוצים אימוץ אמיתי, לא רק טכנולוגיה',
    features: [
      'הכשרת הנהלה וצוותים',
      'סוכני AI אישיים לפי תפקיד',
      'ליווי שינוי תהליכי עבודה',
      'התאמה לתרבות הארגונית'
    ]
  },
  {
    icon: RefreshCw,
    title: 'ליווי שוטף (Retainer)',
    subtitle: 'שמירה על ערך לאורך זמן',
    description: 'ליווי מתמשך לשיפור, התאמה וסקייל של פתרונות AI בהתאם לצמיחה ולצרכים משתנים.',
    forWhom: 'לארגונים שעובדים עם AI כחלק מהשגרה',
    features: [
      'תחזוקה ושדרוגים',
      'מדידה ושיפור מתמשך',
      'התאמות לצמיחה ארגונית',
      'שותפות ארוכת טווח'
    ]
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            השירותים שלנו
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            פתרונות AI מותאמים לכל שלב במסע הדיגיטלי של הארגון
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 bg-white border transition-all duration-300 hover:shadow-xl ${
                service.highlight 
                  ? 'border-violet-200 shadow-lg ring-2 ring-violet-100' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {service.badge && (
                <div className="absolute -top-3 right-6 px-4 py-1 bg-gradient-to-l from-violet-600 to-blue-600 text-white text-sm font-medium rounded-full">
                  {service.badge}
                </div>
              )}

              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-violet-50">
                  <service.icon className="w-7 h-7 text-violet-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-violet-600 mt-1 font-medium">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <p className="text-sm text-slate-500 italic mb-4">
                {service.forWhom}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-violet-500" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}