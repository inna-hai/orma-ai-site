import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Bot, Zap, Sparkles, GraduationCap, Search, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '@/data/staticData';

const iconMap = {
  Bot: Bot,
  Zap: Zap,
  Sparkles: Sparkles,
  GraduationCap: GraduationCap,
  Search: Search,
};

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-600 font-semibold text-sm tracking-wide uppercase mb-3 block">
            השירותים שלנו
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            פתרונות AI מקצה לקצה
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            מאבחון ראשוני ועד הטמעה מלאה - מלווים אתכם בכל שלב
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                  service.highlighted 
                    ? 'bg-gradient-to-br from-violet-600 to-purple-700 text-white shadow-xl shadow-violet-500/25'
                    : 'bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-100'
                }`}
              >
                {service.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                    פופולרי
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  service.highlighted 
                    ? 'bg-white/20' 
                    : 'bg-violet-100 text-violet-600'
                }`}>
                  <Icon className={`w-7 h-7 ${service.highlighted ? 'text-white' : ''}`} />
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${
                  service.highlighted ? 'text-white' : 'text-slate-900'
                }`}>
                  {service.title}
                </h3>
                
                <p className={`mb-6 leading-relaxed ${
                  service.highlighted ? 'text-white/80' : 'text-slate-600'
                }`}>
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className={`flex items-start gap-2 text-sm ${
                      service.highlighted ? 'text-white/90' : 'text-slate-700'
                    }`}>
                      <span className={`mt-1 ${service.highlighted ? 'text-yellow-300' : 'text-violet-500'}`}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to={createPageUrl('Contact')}>
            <button className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors">
              לא בטוחים מה מתאים לכם? דברו איתנו
              <ArrowLeft className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
