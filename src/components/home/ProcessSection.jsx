import React from 'react';
import { Rocket, Layers, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const approaches = [
  {
    icon: Rocket,
    title: "POC תוך 4-6 שבועות",
    description: "רואים השפעה מהר עם גישת האב-טיפוס המהירה שלנו.",
  },
  {
    icon: Layers,
    title: "הטמעת AI מקצה לקצה",
    description: "מהכנת דאטה ועד פריסה ומעקב — אנחנו מטפלים בהכל.",
  },
  {
    icon: Shield,
    title: "תאימות רגולטורית",
    description: "תקני אבטחה ופרטיות מיושמים מהיסוד — כדי שה-AI שלכם מאובטח ומוכן להתרחב.",
  },
  {
    icon: TrendingUp,
    title: "ROI מוכח",
    description: "Case studies מתועדים עם תוצאות מדידות וניתנות לכימות.",
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-slate-50" id="approach">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6">
            הגישה שלנו להצלחה ב-AI
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            אנחנו משלבים תובנה אסטרטגית, טכנולוגיה מתקדמת ומחויבות למצוינות כדי להניע תוצאות טרנספורמטיביות לעסק שלכם.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
