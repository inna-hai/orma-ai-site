import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-violet-600 via-purple-600 to-blue-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            מוכנים לחסוך שעות עבודה
            <br />
            בכל יום?
          </h2>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            שיחת אבחון חינמית של 45 דקות - נבין את האתגרים שלכם ונציע מאיפה הכי כדאי להתחיל
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>ללא התחייבות</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>45 דקות שיחה</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>המלצות מעשיות</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <Button 
                size="lg" 
                className="bg-white text-violet-700 hover:bg-slate-100 px-8 py-6 text-lg rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                לקביעת שיחת אבחון חינם
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </Link>
            <a href="tel:+972528746137">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5 ml-2" />
                052-8746137
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
