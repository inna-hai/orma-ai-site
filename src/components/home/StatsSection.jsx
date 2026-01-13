import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Workflow, Building2 } from 'lucide-react';

export default function StatsSection({ settings }) {
  const stats = [
    {
      icon: Clock,
      value: settings?.stats_hours_saved || 5000,
      suffix: '+',
      label: 'שעות עבודה שנחסכו',
      color: 'violet'
    },
    {
      icon: Workflow,
      value: settings?.stats_processes || 120,
      suffix: '+',
      label: 'תהליכים שהוטמעו',
      color: 'blue'
    },
    {
      icon: Building2,
      value: settings?.stats_organizations || 30,
      suffix: '+',
      label: 'ארגונים שעבדנו איתם',
      color: 'emerald'
    }
  ];

  const colorClasses = {
    violet: 'from-violet-500 to-violet-600',
    blue: 'from-blue-500 to-blue-600',
    emerald: 'from-emerald-500 to-emerald-600'
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${colorClasses[stat.color]} flex items-center justify-center shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <p className="text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}