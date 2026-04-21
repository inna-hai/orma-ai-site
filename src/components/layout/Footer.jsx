import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#08030f]">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-[22px] font-black text-white tracking-tight">
                Forward<span className="text-lavender-400">.</span>
              </span>
              <span className="logo-mark">
                <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
              </span>
            </div>
            <p className="text-white/60 text-[15px] leading-[1.75] max-w-sm mb-8">
              סוכני AI אוטונומיים שמנהלים CRM, משאבי אנוש וכספים בארגון.
              מערכת חושבת. לא עוד כלים.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:info@hai.tech" className="text-[13px] text-white/70 hover:text-white transition-colors">
                info@hai.tech
              </a>
              <span className="text-white/30">·</span>
              <a href="tel:+972533009742" className="text-[13px] text-white/70 hover:text-white transition-colors" dir="ltr">
                +972-53-300-9742
              </a>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="meta-label mb-4">מוצר</div>
              <ul className="space-y-2.5">
                <li><Link to={createPageUrl('Platform')} className="text-[14px] text-white/75 hover:text-white transition-colors">הפלטפורמה</Link></li>
                <li><Link to={createPageUrl('Industries')} className="text-[14px] text-white/75 hover:text-white transition-colors">תחומים</Link></li>
                <li><Link to={createPageUrl('Pricing')} className="text-[14px] text-white/75 hover:text-white transition-colors">מחירים</Link></li>
              </ul>
            </div>
            <div>
              <div className="meta-label mb-4">חברה</div>
              <ul className="space-y-2.5">
                <li><Link to={createPageUrl('About')} className="text-[14px] text-white/75 hover:text-white transition-colors">אודות</Link></li>
                <li><Link to={createPageUrl('CaseStudies')} className="text-[14px] text-white/75 hover:text-white transition-colors">סיפורי הצלחה</Link></li>
                <li><Link to={createPageUrl('Contact')} className="text-[14px] text-white/75 hover:text-white transition-colors">צור קשר</Link></li>
              </ul>
            </div>
            <div>
              <div className="meta-label mb-4">משפטי</div>
              <ul className="space-y-2.5">
                <li><Link to={createPageUrl('Privacy')} className="text-[14px] text-white/75 hover:text-white transition-colors">פרטיות</Link></li>
                <li><Link to={createPageUrl('Terms')} className="text-[14px] text-white/75 hover:text-white transition-colors">תנאי שימוש</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-[12px] text-white/40">
            © {new Date().getFullYear()} Forward · דרך ההיי.טק בע&quot;מ. כל הזכויות שמורות.
          </p>
          <p className="text-[12px] text-white/40">
            Made with care in Beer Sheva, Israel.
          </p>
        </div>
      </div>
    </footer>
  );
}
