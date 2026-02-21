import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8 border border-emerald-500/20"
          >
            <Shield className="w-4 h-4" />
            <span>אבטחה ואיכות מוכחת: ISO 9001 & ISO 27001</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-6"
          >
            AI שמביא תוצאות —
            <br />
            <span className="bg-gradient-to-l from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              מהיר, מאובטח, ומוכן לארגון שלך
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            אורמא מטמיעה AI היכן שזה משנה באמת בתהליכי העבודה שלכם — 
            <span className="text-white"> מצמצמת עיכובים, מונעת טעויות, ומשפרת יעילות</span> כדי שתוכלו לנצח גם במהירות וגם בעלויות — בלי לשבש את הדרך שהצוותים שלכם כבר עובדים.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-8 py-6 text-lg rounded-xl shadow-2xl shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
                לשיחת אסטרטגיה חינם
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </Link>
            <Link to={createPageUrl('CaseStudies')}>
              <Button size="lg" variant="outline" className="border-2 border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-lg rounded-xl transition-all duration-300 w-full sm:w-auto">
                סיפורי הצלחה
              </Button>
            </Link>
          </motion.div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-slate-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>נסמכים על ידי ארגונים מובילים</span>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "30+", label: "פרויקטי AI שהושלמו" },
            { value: "90%", label: "זמן מהיר יותר לתוצאות" },
            { value: "8+", label: "שנות ניסיון ב-AI" },
            { value: "24/7", label: "תמיכה וליווי" }
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
