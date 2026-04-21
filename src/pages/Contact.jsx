import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2, Mail, Phone, Linkedin, ArrowLeft } from 'lucide-react';
import { siteSettings } from '@/data/staticData';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const fieldCls = "w-full h-12 px-4 rounded-lg bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-white/30 focus:outline-none focus:border-lavender-400/60 focus:bg-white/[0.06] transition-colors text-[15px]";

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: '', email: '', phone: '', company: '', role: '', company_size: '', challenge_area: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submitted:', formData);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  if (isSuccess) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center px-6 py-16 max-w-xl">
          <div className="w-16 h-16 mx-auto mb-8 rounded-full border-2 border-lavender-400/40 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-lavender-300" />
          </div>
          <div className="meta-label mb-4">נקלט בהצלחה</div>
          <h1 className="heading-section mb-6">תודה על הפנייה.</h1>
          <p className="text-white/60 text-lg">נחזור אליכם תוך 24 שעות עם הצעד הבא.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,109,226,0.18) 0%, transparent 60%)' }} />
        <div className="relative container-editorial">
          <motion.div {...fadeUp} className="max-w-3xl">
            <div className="meta-label mb-6">Contact</div>
            <h1 className="heading-display mb-6">בואו <span className="text-lavender-300">נדבר.</span></h1>
            <p className="text-white/60 text-lg md:text-xl leading-[1.75] max-w-xl">
              שיחת 30 דקות בלי מצגות. נבחן את האתגרים שלכם ונראה אם יש התאמה בינינו.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 md:py-24 border-t border-white/[0.06]">
        <div className="container-editorial grid lg:grid-cols-12 gap-12 md:gap-16">
          {/* Info side */}
          <motion.aside {...fadeUp} className="lg:col-span-4 space-y-8">
            <div>
              <div className="meta-label mb-4">דרכי יצירת קשר</div>
              <div className="divider-thin mb-6" />
            </div>
            <a href={`mailto:${siteSettings.email}`} className="block group">
              <div className="meta-label mb-2 text-white/50">אימייל</div>
              <div className="flex items-center gap-3 text-white group-hover:text-lavender-300 transition-colors text-[17px]" dir="ltr">
                <Mail className="w-4 h-4" />
                {siteSettings.email}
              </div>
            </a>
            <a href={`tel:${siteSettings.phone}`} className="block group">
              <div className="meta-label mb-2 text-white/50">טלפון</div>
              <div className="flex items-center gap-3 text-white group-hover:text-lavender-300 transition-colors text-[17px]" dir="ltr">
                <Phone className="w-4 h-4" />
                {siteSettings.phone}
              </div>
            </a>
            <a href="https://www.linkedin.com/company/orma-ai" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="meta-label mb-2 text-white/50">לינקדאין</div>
              <div className="flex items-center gap-3 text-white group-hover:text-lavender-300 transition-colors text-[17px]">
                <Linkedin className="w-4 h-4" />
                Forward / ORMA.AI
              </div>
            </a>
          </motion.aside>

          {/* Form side */}
          <motion.form
            {...fadeUp}
            onSubmit={handleSubmit}
            className="lg:col-span-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10"
          >
            <div className="meta-label mb-6">טופס פנייה</div>

            <div className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] text-white/70 mb-2">שם מלא *</label>
                  <input required value={formData.full_name} onChange={(e) => setFormData({ ...formData, full_name: e.target.value })} className={fieldCls} placeholder="השם שלך" />
                </div>
                <div>
                  <label className="block text-[13px] text-white/70 mb-2">אימייל *</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={fieldCls} placeholder="email@company.com" dir="ltr" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] text-white/70 mb-2">טלפון</label>
                  <input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={fieldCls} placeholder="050-0000000" dir="ltr" />
                </div>
                <div>
                  <label className="block text-[13px] text-white/70 mb-2">חברה</label>
                  <input value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={fieldCls} placeholder="שם החברה" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] text-white/70 mb-2">תפקיד</label>
                  <input value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className={fieldCls} placeholder="התפקיד שלך" />
                </div>
                <div>
                  <label className="block text-[13px] text-white/70 mb-2">גודל חברה</label>
                  <select value={formData.company_size} onChange={(e) => setFormData({ ...formData, company_size: e.target.value })} className={fieldCls}>
                    <option value="" className="bg-night-900">בחר גודל</option>
                    <option value="1-10" className="bg-night-900">1-10 עובדים</option>
                    <option value="11-50" className="bg-night-900">11-50 עובדים</option>
                    <option value="51-200" className="bg-night-900">51-200 עובדים</option>
                    <option value="200+" className="bg-night-900">200+ עובדים</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[13px] text-white/70 mb-2">תחום האתגר</label>
                <select value={formData.challenge_area} onChange={(e) => setFormData({ ...formData, challenge_area: e.target.value })} className={fieldCls}>
                  <option value="" className="bg-night-900">בחר תחום</option>
                  <option value="CRM" className="bg-night-900">CRM ומכירות</option>
                  <option value="אוטומציה" className="bg-night-900">אוטומציה של תהליכים</option>
                  <option value="בוטים" className="bg-night-900">בוטים ושירות</option>
                  <option value="הטמעת AI" className="bg-night-900">הטמעת AI</option>
                  <option value="חיבור" className="bg-night-900">חיבור מערכות</option>
                  <option value="אחר" className="bg-night-900">אחר</option>
                </select>
              </div>

              <div>
                <label className="block text-[13px] text-white/70 mb-2">ספר/י לנו קצת על האתגר</label>
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${fieldCls} h-auto py-3 min-h-[120px] resize-none`} placeholder="מה האתגר המרכזי שאת/ה רוצה לפתור?" />
              </div>

              <button type="submit" disabled={isSubmitting} className="mt-4 btn-pill-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 ml-2 animate-spin" /> שולח...</>
                ) : (
                  <><ArrowLeft className="w-4 h-4 ml-2" /> שליחת פנייה</>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
