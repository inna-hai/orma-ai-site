import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Bot, Zap, Brain, Eye, MessageSquare, Users, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Brain,
    title: "פיתוח Generative AI",
    description: "אנחנו מעצבים אפליקציות AI גנרטיבי שהולכות מעבר לניסויים. פתרונות שפותחים רמות חדשות של יצירתיות, מאטמטים תהליכים קריטיים, ומתרגמים רעיונות לתוצאות מדידות.",
  },
  {
    icon: Users,
    title: "פיתוח Agentic AI",
    description: "אנחנו מפתחים עוזרי AI אוטונומיים שפועלים כשותפים דיגיטליים אמינים. הם לוקחים על עצמם עבודה חוזרת ושגרתית, ממזערים טעויות אנוש ומשחררים את הצוותים שלכם למשימות בעלות ערך גבוה יותר.",
  },
  {
    icon: MessageSquare,
    title: "AI שיחתי",
    description: "אנחנו מעצבים מערכות AI שיחתיות שעושות יותר מסתם להגיב — הן מייצרות מעורבות. בנויות להבין הקשר, כוונה ורגש, ויוצרות חוויות לקוח טבעיות ורלוונטיות.",
  },
  {
    icon: Eye,
    title: "פתרונות Computer Vision",
    description: "אנחנו מיישמים Computer Vision לאתגרים התפעוליים המורכבים ביותר, והופכים תמונות ווידאו לתובנות ניתנות לפעולה. מבדיקות אוטומטיות ועד הערכות — משפרים דיוק תוך חיסכון בזמן ועלויות.",
  },
  {
    icon: Zap,
    title: "פתרונות Machine Learning",
    description: "אנחנו עוצבים, מאמנים ומשפרים מודלים של Machine Learning שפותרים אתגרים עסקיים מורכבים. ממנועי המלצות ועד זיהוי הונאות — פתרונות ML מותאמים לנתונים ולמטרות שלכם.",
  },
  {
    icon: Bot,
    title: "אוטומציה חכמה",
    description: "זיהוי משימות חוזרות והפיכתן לאוטומטיות עם AI מובנה. חיסכון של שעות עבודה בכל שבוע, הפחתת טעויות ושיפור עקביות התהליכים.",
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6">
            פתרונות AI מקצה לקצה, בנויים להשפעה
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            אנחנו עוזרים לחברות לעצב ולהרחיב פתרונות AI שמביאים השפעה מדידה. מהכנת דאטה ועד פריסת מערכות מוכנות לפרודקשן, אנחנו מתמקדים בהאצת תוצאות, הגנה על התפעול, ומניעת ROI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:from-blue-500/20 group-hover:to-violet-500/20 transition-all duration-300">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
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
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors text-lg">
              לא בטוחים מה מתאים? בואו נדבר
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
