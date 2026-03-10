import React from 'react';
import { Bot, Zap, MessageSquare, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const badges = [
  { icon: Bot, label: 'סוכני AI אוטונומיים' },
  { icon: Zap, label: 'CRM + HR + Finance' },
  { icon: MessageSquare, label: 'WhatsApp-native' },
  { icon: BarChart3, label: 'תובנות פרואקטיביות' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: 'linear-gradient(160deg, #020617 0%, #0f172a 35%, #1e1b4b 70%, #312e81 100%)' }}>
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-indigo-400 text-sm font-bold tracking-widest uppercase mb-6"
          >
            ניתוח · טכנולוגיה עסקית · 2026
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-100 leading-[1.25] mb-8"
          >
            מעבר לאוטומציה: כשסוכן AI הופך{' '}
            <span className="text-indigo-400">למנהל התפעול</span>{' '}
            של החברה — וכל שרשרת הערך משתנה
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            איך ארכיטקטורה של סוכנים אוטונומיים מאחדת CRM, משאבי אנוש וכספים למערכת אחת חושבת — ולמה רוב הפתרונות בשוק, מ-Salesforce ועד Leena AI,{' '}
            <strong className="text-slate-300">עדיין תקועים בשכבת העוזרים</strong>.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {badges.map((badge, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] border border-white/[0.12] text-slate-400 text-sm font-medium"
              >
                <badge.icon className="w-4 h-4" />
                <span>{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "100%", label: "העברת נתונים עם בדיקת תקינות" },
            { value: "0", label: "שיבוש לפעילות השוטפת" },
            { value: "24/7", label: "ניטור וליווי צמוד" },
            { value: "∞", label: "סוכנים ללא הגבלה" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
