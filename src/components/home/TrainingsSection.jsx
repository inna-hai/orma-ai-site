import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { GraduationCap, Clock, Users, ArrowLeft, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { trainings } from '@/data/staticData';

export default function TrainingsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white" id="trainings">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-600 font-semibold text-sm tracking-wide uppercase mb-3 block">
            הכשרות וסדנאות
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            הכשרות AI לצוותים
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            סדנאות מעשיות שמלמדות את הצוות להשתמש ב-AI בעבודה היומיומית
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainings.map((training, index) => (
            <motion.div
              key={training.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6 text-white">
                <GraduationCap className="w-10 h-10 mb-3 opacity-80" />
                <h3 className="text-xl font-bold mb-1">
                  {training.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-white/80">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {training.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {training.audience}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {training.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">מה נלמד:</h4>
                  <ul className="space-y-2">
                    {training.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-2xl font-bold text-slate-900">{training.price}</span>
                    <span className="text-slate-500 text-sm"> / סדנה</span>
                  </div>
                  <Link to={createPageUrl('Contact')}>
                    <Button variant="outline" size="sm" className="text-violet-600 border-violet-200 hover:bg-violet-50">
                      לפרטים
                      <ArrowLeft className="w-4 h-4 mr-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 p-8 bg-violet-50 rounded-2xl border border-violet-100"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            צריכים הכשרה מותאמת?
          </h3>
          <p className="text-slate-600 mb-4">
            נבנה יחד תוכנית הכשרה שמתאימה בדיוק לצרכים של הארגון שלכם
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white">
              צרו קשר להתאמה אישית
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
