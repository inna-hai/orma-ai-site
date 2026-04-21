import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,109,226,0.18) 0%, transparent 60%)' }} />
        <div className="relative container-editorial">
          <motion.div {...fadeUp} className="max-w-4xl">
            <div className="meta-label mb-6">אודות</div>
            <h1 className="heading-display mb-8">
              בינה שמתחברת<br />
              <span className="text-lavender-300">לעשייה.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-[1.75] max-w-2xl">
              Forward מתמחה בסוכני AI ואוטומציות לארגונים. אנחנו בונים סוכנים חכמים
              שמנהלים תהליכים, עונים ללקוחות ומקבלים החלטות — כמו עובדים מסורים שעובדים 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 md:py-32 border-t border-white/[0.06]">
        <div className="container-editorial">
          <motion.div {...fadeUp} className="mb-14">
            <div className="meta-label mb-4">העקרונות שלנו</div>
            <h2 className="heading-section max-w-3xl">שלושה קווים שמנחים כל מה שאנחנו בונים.</h2>
          </motion.div>

          <div className="space-y-16">
            {[
              { num: '01', t: 'סוכנים, לא כלים', d: 'אנחנו לא בונים כלים שצריך להפעיל — אנחנו בונים סוכנים שעובדים בעצמם, לומדים ומשתפרים עם הזמן.' },
              { num: '02', t: 'AI בלי תהליך = רעש', d: 'טכנולוגיה בלי הבנה עמוקה של התהליכים הארגוניים לא תייצר ערך. אנחנו מתחילים תמיד מהעבודה האמיתית.' },
              { num: '03', t: 'הטמעה חשובה יותר מהדגמה', d: 'הדגמה מרשימה היא רק ההתחלה. ההצלחה נמדדת בשימוש יומיומי של הסוכנים בארגון.' },
            ].map((p, i) => (
              <motion.article
                key={p.num}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="grid md:grid-cols-12 gap-8 md:gap-12 items-start border-t border-white/[0.06] pt-12"
              >
                <div className="md:col-span-3">
                  <div className="text-5xl md:text-6xl font-black text-lavender-400/80 tracking-tight">{p.num}</div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">{p.t}</h3>
                  <p className="text-white/65 text-lg leading-[1.8] max-w-2xl">{p.d}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-night-900/40 to-transparent">
        <div className="container-editorial">
          <motion.div {...fadeUp} className="mb-14">
            <div className="meta-label mb-4">המייסדים</div>
            <h2 className="heading-section">שילוב של טכנולוגיה, ניהול וחזון.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                initials: 'IG',
                name: 'Inna Grois',
                role: 'מייסדת שותפה',
                bio: "למעלה מ-20 שנות ניסיון בתעשיית ההייטק. כמעט עשור כ-Senior Software Engineer ב-Oracle, עם התמחות בפיתוח מוצרי Enterprise ומערכות OLAP מורכבות. הייתה חלק מצוות HyperRoll שנרכש על ידי Oracle.",
                quote: "אחרי שנים של פיתוח מערכות ארגוניות מורכבות, הבנתי שהאתגר האמיתי הוא לא הטכנולוגיה – אלא לגרום לה לעבוד בשירות האנשים.",
                linkedin: 'https://il.linkedin.com/in/inna-grois-45b9094',
              },
              {
                initials: 'AM',
                name: 'Ami Meidar',
                role: 'מייסד שותף',
                bio: 'למעלה מ-20 שנות ניסיון בתעשיית ההייטק. 17 שנים ב-Oracle, כולל 7+ שנים כ-Software Development Senior Manager. ניהל צוותי פיתוח והוביל פרויקטים מורכבים בסביבות Enterprise.',
                quote: 'ראיתי ארגונים מבזבזים משאבים על כלים שלא מתחברים לעבודה האמיתית. ב-Forward אנחנו בונים פתרונות שעובדים – לא רק מדגימים טוב.',
                linkedin: 'https://www.linkedin.com/in/ami-meidar-4649084/',
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lavender-500 to-lavender-700 flex items-center justify-center text-white text-xl font-black mb-6">
                  {f.initials}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{f.name}</h3>
                <div className="meta-label mb-5">{f.role}</div>
                <p className="text-white/65 text-[15px] leading-[1.8] mb-5">{f.bio}</p>
                <blockquote className="text-white/80 text-[14px] leading-[1.85] border-r-2 border-lavender-400/50 pr-4 italic">
                  &quot;{f.quote}&quot;
                </blockquote>
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-lavender-300 hover:text-lavender-200 text-[13px] font-medium"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 md:py-36 overflow-hidden border-t border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(139,109,226,0.2) 0%, transparent 70%)' }} />
        <div className="relative container-editorial text-center">
          <motion.div {...fadeUp}>
            <h2 className="heading-section max-w-3xl mx-auto mb-8">מוכנים להתחיל?</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">נשמח לשמוע על האתגרים שלכם ולבדוק איך נוכל לעזור.</p>
            <Link to={createPageUrl('Contact')} className="btn-pill-primary">
              <ArrowLeft className="w-4 h-4 ml-2" />
              קביעת שיחת אבחון
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
