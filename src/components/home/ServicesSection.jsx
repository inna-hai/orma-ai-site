import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Bot, GraduationCap, RefreshCw, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'ספרינט אבחון AI',
    badge: 'מוצר כניסה',
    description: 'תהליך ממוקד לזיהוי הזדמנויות AI בארגון',
    features: [
      'מיפוי תהליכים ארגוניים',
      'זיהוי נקודות חיסכון בזמן וכסף',
      'תוכנית יישום אופרטיבית'
    ],
    highlight: true
  },
  {
    icon: Bot,
    title: 'יישום AI ואוטומציה',
    description: 'בנייה והטמעה של פתרונות AI מותאמים',
    features: [
      'בוטים לשירות, מכירות ותפעול',
      'אוטומציות בין מערכות',
      'חיבור GPT לתהליכים קיימים'
    ]
  },
  {
    icon: GraduationCap,
    title: 'הטמעה והכשרת צוותים',
    description: 'העברת ידע והכשרה מעשית לצוותים',
    features: [
      'הכשרת הנהלה',
      'סוכני AI אישיים לפי תפקיד',
      'ליווי שינוי תהליכי עבודה'
    ]
  },
  {
    icon: RefreshCw,
    title: 'ליווי שוטף (Retainer)',
    description: 'תמיכה מתמשכת ושדרוגים',
    features: [
      'תחזוקה ושדרוגים',
      'מדידה ושיפור מתמיד',
      'התאמות לצמיחה'
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
                  <p className="text-slate-500 mt-1">
                    {service.description}
                  </p>
                </div>
              </div>

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