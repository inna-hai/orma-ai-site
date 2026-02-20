import React from 'react';
import { Phone, FileText, Rocket, Code, HeartHandshake, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { process } from '@/data/staticData';

const iconMap = {
  Phone: Phone,
  FileText: FileText,
  Rocket: Rocket,
  Code: Code,
  HeartHandshake: HeartHandshake,
};

export default function ProcessSection() {
  return (
    <section className="py-24 bg-slate-900" id="process">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 font-semibold text-sm tracking-wide uppercase mb-3 block">
            איך זה עובד
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            מאבחון ועד תוצאות -
            <br />
            <span className="text-violet-400">POC תוך 4 שבועות</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            תהליך מוכח שמביא תוצאות מהירות עם מינימום סיכון
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500/50 via-purple-500/50 to-blue-500/50 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {process.map((step, index) => {
              const Icon = iconMap[step.icon] || Rocket;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center relative z-10 hover:border-violet-500/50 transition-colors">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-violet-600 text-white text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </div>

                    <div className="w-14 h-14 rounded-xl bg-violet-500/20 flex items-center justify-center mx-auto mb-4 mt-2">
                      <Icon className="w-7 h-7 text-violet-400" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-3 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="text-violet-400 text-xs font-medium">
                      {step.duration}
                    </div>
                  </div>

                  {/* Arrow between steps (mobile) */}
                  {index < process.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <ArrowDown className="w-5 h-5 text-violet-500/50" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-4">
            מתחילים עם שיחת אבחון חינמית - ללא התחייבות
          </p>
        </motion.div>
      </div>
    </section>
  );
}
