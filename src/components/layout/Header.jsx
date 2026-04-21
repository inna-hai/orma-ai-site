import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, ArrowLeft } from 'lucide-react';

const navItems = [
  { label: 'הפלטפורמה', page: 'Platform' },
  { label: 'תחומים', page: 'Industries' },
  { label: 'מחירים', page: 'Pricing' },
  { label: 'סיפורי הצלחה', page: 'CaseStudies' },
  { label: 'אודות', page: 'About' },
  { label: 'צור קשר', page: 'Contact' },
];

function ForwardLogo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="text-[22px] font-black text-white tracking-tight leading-none">
        Forward<span className="text-lavender-400">.</span>
      </span>
      <span className="logo-mark group-hover:bg-lavender-400 transition-colors">
        <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
      </span>
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0515]/85 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide h-20 flex items-center justify-between">
        <ForwardLogo />

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map(item => {
            const isActive = location.pathname === createPageUrl(item.page);
            return (
              <Link
                key={item.page}
                to={createPageUrl(item.page)}
                className={`text-[14px] transition-colors ${
                  isActive ? 'text-white font-medium' : 'text-white/65 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline text-[13px] text-white/60 hover:text-white transition-colors">
            EN
          </button>
          <Link to={createPageUrl('Contact')} className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-white text-[#0a0515] text-[14px] font-medium hover:bg-lavender-100 transition-colors">
            שיחת אסטרטגיה
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#0a0515] border-t border-white/[0.08]">
          <nav className="container-wide py-6 flex flex-col gap-1">
            {navItems.map(item => (
              <Link
                key={item.page}
                to={createPageUrl(item.page)}
                className="py-3 text-white/80 hover:text-white border-b border-white/[0.06] text-[16px]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={createPageUrl('Contact')}
              className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-[#0a0515] font-medium"
            >
              שיחת אסטרטגיה
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
