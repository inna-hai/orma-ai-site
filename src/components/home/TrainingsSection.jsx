import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { GraduationCap, Clock, Users, ArrowLeft, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const trainings = [
  {
    title: "סדנת AI למנהלים",
    duration: "4 שעות",
    audience: "מנהלים ומקבלי החלטות",
    description: "הבנת יכולות ה-AI, זיהוי הזדמנויות בארגון, ובניית אסטרטגיה להטמעה.",
    topics: ["מה AI יכול ולא יכול", "זיהוי הזדמנויות", "חישוב ROI", "תכנון הטמעה"]
  },
  {
    title: "הכשרת Prompt Engineering",
    duration: "8 שעות",
    audience: "צוותים שעובדים עם AI",
    description: "איך לכתוב פרומפטים אפקטיביים ולהפיק את המקסימום מ-ChatGPT ו-Claude.",
    topics: ["עקרונות כתיבה", "טכניקות מתקדמות", "תבניות מעשיות", "תרגול אינטנסיבי"]
  },
  {
    title: "סדנת אוטומציות No-Code",
    duration: "8 שעות",
    audience: "אנשי תפעול ו-Ops",
    description: "בניית אוטומציות עם Make/Zapier ושילוב AI - ללא צורך בתכנות.",
    topics: ["עקרונות אוטומציה", "Make/Zapier", "שילוב ChatGPT", "פרויקט מעשי"]
  }
];

export default function TrainingsSection() {
  return (
    <section className="py-24 bg-slate-950" id="trainings">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            הכשרות AI לצוותים
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            סדנאות מעשיות שמלמדות את הצוות להשתמש ב-AI ביום-יום
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainings.map((training, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-blue-400" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {training.title}
              </h3>

              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {training.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {training.audience}
                </span>
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {training.description}
              </p>

              <ul className="space-y-2 mb-6">
                {training.topics.map((topic, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                    {topic}
                  </li>
                ))}
              </ul>

              <Link to={createPageUrl('Contact')}>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-slate-600 text-white hover:bg-slate-700"
                >
                  לפרטים נוספים
                  <ArrowLeft className="w-4 h-4 mr-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 mb-2">צריכים הכשרה מותאמת לארגון?</p>
          <Link to={createPageUrl('Contact')}>
            <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors inline-flex items-center gap-2">
              דברו איתנו על התאמה אישית
              <ArrowLeft className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
