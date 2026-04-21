import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-violet-600 to-purple-700 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            בואו לגלות איך AI יכול לשדרג
            <br />
            את תהליכי העבודה שלכם
          </h2>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            שיחת אסטרטגיה חינמית כדי להבין איך AI יכול להשפיע על העסק שלכם — מהיר ומאובטח.
          </p>

          {/* CTA Button */}
          <Link to={createPageUrl('Contact')}>
            <Button 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-slate-100 px-10 py-7 text-lg font-bold rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              לקביעת שיחת אסטרטגיה
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
