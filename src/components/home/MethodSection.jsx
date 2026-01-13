import React from 'react';
import { motion } from 'framer-motion';
import { Target, Wrench, Users } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Alignment',
    subtitle: 'אבחון ודיוק',
    description: 'מיפוי תהליכים, זיהוי צווארי בקבוק והגדרת נקודות יישום ל-AI עם ROI ברור ומדיד.',
    icon: Target
  },
  {
    number: '02',
    title: 'Build',
    subtitle: 'יישום',
    description: 'בניית בוטים, אוטומציות ומערכות עבודה חכמות המחוברות לכלים הקיימים בארגון.',
    icon: Wrench
  },
  {
    number: '03',
    title: 'Embed',
    subtitle: 'הטמעה',
    description: 'הכשרת הנהלה וצוותים, שינוי הרגלי עבודה וליווי צמוד עד שזה עובד באמת.',
    icon: Users
  }
];

export default function MethodSection() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            איך זה עובד
          </h2>
          <p className="text-slate-400 text-lg">
            השיטה של ORMA – פשוטה, מדידה ומחוברת לעבודה האמיתית
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -left-4 w-8 h-0.5 bg-gradient-to-l from-violet-500/50 to-transparent" />
              )}

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-violet-500/30 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-slate-700/50">
                    {step.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-violet-400 font-medium">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}