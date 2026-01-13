import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Target, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const principles = [
  {
    icon: Target,
    title: 'AI בלי תהליך = רעש',
    description: 'טכנולוגיה בלי הבנה עמוקה של התהליכים הארגוניים לא תייצר ערך. אנחנו מתחילים תמיד מהעבודה האמיתית.'
  },
  {
    icon: Zap,
    title: 'תהליך בלי AI = בזבוז',
    description: 'בעידן הנוכחי, ארגונים שלא מטמיעים AI מפספסים הזדמנויות אדירות לחיסכון וצמיחה.'
  },
  {
    icon: Users,
    title: 'הטמעה חשובה יותר מהדגמה',
    description: 'הדגמה מרשימה היא רק ההתחלה. ההצלחה נמדדת בשימוש יומיומי של הצוותים בכלים החדשים.'
  }
];

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100/80 text-violet-700 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              אודות ORMA
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              בינה שמתחברת לעשייה
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              ORMA היא סוכנות לבינה מלאכותית יישומית.
              <br />
              אנחנו מחברות בין טכנולוגיה, תהליכים ואנשים – 
              והופכות AI לכלי עבודה יומיומי שמייצר ערך אמיתי.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              העקרונות שלנו
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center mb-6">
                  <principle.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 border border-slate-100 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              המייסדת
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              רקע של מעל 15 שנות פיתוח ו-6 שנות ניהול, 
              שילוב בין חינוך, תעשייה ו-AI יישומי.
            </p>
            <p className="text-slate-600 leading-relaxed">
              התחלתי את המסע הטכנולוגי שלי כמפתחת, 
              עברתי דרך תפקידי ניהול שונים והבנתי דבר אחד – 
              הטכנולוגיה הכי מתקדמת שווה מעט אם היא לא מתחברת לעבודה האמיתית של האנשים בשטח.
              <br /><br />
              ORMA נולדה מתוך הרצון לגשר על הפער הזה – 
              להביא את הכוח של AI לכל ארגון, בצורה פרקטית ומדידה.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              מוכנים להתחיל?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              נשמח לשמוע על האתגרים שלכם ולבדוק איך נוכל לעזור.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                קביעת שיחת אבחון
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}