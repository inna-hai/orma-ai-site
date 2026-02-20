import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-violet-500/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 text-violet-300 text-sm font-medium mb-8 backdrop-blur-sm border border-violet-500/30">
            <Sparkles className="w-4 h-4" />
            <span>פתרונות AI שעובדים - תוצאות תוך שבועות</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.2] mb-6 tracking-tight">
            צ'אטבוטים. אוטומציות. AI.
            <br />
            <span className="bg-gradient-to-l from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              בהתאמה אישית לעסק שלך.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            ORMA מפתחת פתרונות AI שחוסכים לעסקים שעות עבודה בכל יום.
            <br className="hidden md:block" />
            <span className="text-white font-medium">POC תוך 4 שבועות. ROI מדיד.</span>
          </p>

          {/* Trust points */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>50+ פרויקטים</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>60% חיסכון ממוצע</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>שיחת אבחון חינם</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-violet-600 hover:bg-violet-500 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-violet-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/40 hover:-translate-y-0.5">
                לקביעת שיחת אבחון חינם
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </Link>
            <Link to={createPageUrl('CaseStudies')}>
              <Button variant="outline" size="lg" className="border-2 border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:bg-slate-800">
                לסיפורי הצלחה
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-slate-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
