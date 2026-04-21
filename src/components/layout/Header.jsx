import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'ראשי', page: 'Home' },
  { label: 'הפלטפורמה', page: 'Platform' },
  { label: 'תחומים', page: 'Industries' },
  { label: 'מחירים', page: 'Pricing' },
  { label: 'סיפורי הצלחה', page: 'CaseStudies' },
  { label: 'אודות', page: 'About' },
  { label: 'צור קשר', page: 'Contact' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-slate-950/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-3">
            <img 
              src="/logo-180.png" 
              alt="ORMA AI" 
              className="h-10 w-10 object-contain"
            />
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              ORMA AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === createPageUrl(item.page);
              return (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled 
                      ? (isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600')
                      : (isActive ? 'text-white' : 'text-slate-300 hover:text-white')
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to={createPageUrl('Contact')}>
              <Button className={`rounded-lg transition-all ${
                isScrolled 
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white'
                  : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}>
                שיחת אסטרטגיה
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-slate-600' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => {
                const isActive = location.pathname === createPageUrl(item.page);
                return (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    className={`block py-3 text-lg font-medium transition-colors ${
                      isActive ? 'text-blue-600' : 'text-slate-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link to={createPageUrl('Contact')} className="block pt-4">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg h-12">
                  שיחת אסטרטגיה
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
