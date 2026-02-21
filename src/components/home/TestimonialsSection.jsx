import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "פתרון AI עם השפעה משמעותית על דיוק ויעילות",
    text: "אורמא הבינה במהירות את החזון שלנו לשפר את דיוק התהליכים ולייעל את תהליכי העבודה. הצוות סיפק פתרון AI חזק שהפחית טעויות, שיפר יעילות ושיפר משמעותית את התוצאות. הם פעלו כהרחבה של הצוות שלנו — מגיבים, אחראיים וממוקדי פתרונות.",
    author: "מנהל טכנולוגי",
    company: "חברת ביטוח מובילה"
  },
  {
    quote: "אפשרו הערכות מהירות ומדויקות יותר",
    text: "מערכת ניתוח השרטוטים של אורמא עזרה לנו להאיץ משמעותית את הערכות העלות והזמן שלנו. האוטומציה והדיוק שהיא הביאה לניתוח שרטוטים הפכו לערך מוסף משמעותי בתהליך הפרה-פרודקשן שלנו.",
    author: "סמנכ\"ל תפעול",
    company: "חברת ייצור"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            מה אומרים עלינו
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-blue-400" />
              </div>

              {/* Quote Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                "{testimonial.quote}"
              </h3>

              {/* Quote Text */}
              <p className="text-slate-400 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-slate-700/50 pt-6">
                <div className="text-white font-semibold">— {testimonial.author}</div>
                <div className="text-slate-500 text-sm">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
