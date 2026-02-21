import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Target, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const principles = [
  {
    icon: Users,
    title: 'סוכנים, לא כלים',
    description: 'אנחנו לא בונים כלים שצריך להפעיל — אנחנו בונים סוכנים שעובדים בעצמם, לומדים ומשתפרים עם הזמן.'
  },
  {
    icon: Target,
    title: 'AI בלי תהליך = רעש',
    description: 'טכנולוגיה בלי הבנה עמוקה של התהליכים הארגוניים לא תייצר ערך. אנחנו מתחילים תמיד מהעבודה האמיתית.'
  },
  {
    icon: Zap,
    title: 'הטמעה חשובה יותר מהדגמה',
    description: 'הדגמה מרשימה היא רק ההתחלה. ההצלחה נמדדת בשימוש יומיומי של הסוכנים בארגון.'
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
              ORMA מתמחה בסוכני AI ואוטומציות לארגונים.
              <br />
              אנחנו בונים סוכנים חכמים שמנהלים תהליכים, עונים ללקוחות ומקבלים החלטות – 
              כמו עובדים מסורים שעובדים 24/7.
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

      {/* Founders */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              המייסדים
            </h2>
            <p className="text-xl text-slate-600">
              שילוב של טכנולוגיה, ניהול וחזון
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Inna */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6 text-white text-2xl font-bold">
                IG
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Inna Grois
              </h3>
              <p className="text-violet-600 font-medium mb-4">מייסדת שותפה</p>
              <p className="text-slate-600 leading-relaxed mb-4">
                למעלה מ-20 שנות ניסיון בתעשיית ההייטק. כמעט עשור כ-Senior Software Engineer ב-Oracle, 
                עם התמחות בפיתוח מוצרי Enterprise ומערכות OLAP מורכבות. 
                הייתה חלק מצוות HyperRoll שנרכש על ידי Oracle.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                "אחרי שנים של פיתוח מערכות ארגוניות מורכבות, הבנתי שהאתגר האמיתי הוא לא הטכנולוגיה – 
                אלא לגרום לה לעבוד בשירות האנשים. ב-ORMA אנחנו מביאים את הניסיון הזה לעולם ה-AI."
              </p>
              <a 
                href="https://il.linkedin.com/in/inna-grois-45b9094" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-violet-600 hover:text-violet-700 font-medium text-sm"
              >
                LinkedIn →
              </a>
            </motion.div>

            {/* Ami */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6 text-white text-2xl font-bold">
                AM
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Ami Meidar
              </h3>
              <p className="text-violet-600 font-medium mb-4">מייסד שותף</p>
              <p className="text-slate-600 leading-relaxed mb-4">
                למעלה מ-20 שנות ניסיון בתעשיית ההייטק. 17 שנים ב-Oracle, כולל 7+ שנים 
                כ-Software Development Senior Manager. ניהל צוותי פיתוח והוביל פרויקטים מורכבים בסביבות Enterprise.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                "ראיתי ארגונים מבזבזים משאבים על כלים שלא מתחברים לעבודה האמיתית. 
                ב-ORMA אנחנו בונים פתרונות שעובדים – לא רק מדגימים טוב."
              </p>
              <a 
                href="https://www.linkedin.com/in/ami-meidar-4649084/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-violet-600 hover:text-violet-700 font-medium text-sm"
              >
                LinkedIn →
              </a>
            </motion.div>
          </div>
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