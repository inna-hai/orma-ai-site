import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer({ settings }) {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold">
                ORMA<span className="text-violet-400">.AI</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              סוכנות לבינה מלאכותית יישומית.
              <br />
              בינה שמתחברת לעשייה.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {settings?.linkedin_url && (
                <a
                  href={settings.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-violet-600 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {settings?.company_email && (
                <a
                  href={`mailto:${settings.company_email}`}
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-violet-600 flex items-center justify-center transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
              {settings?.company_phone && (
                <a
                  href={`tel:${settings.company_phone}`}
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-violet-600 flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">ניווט מהיר</h4>
            <ul className="space-y-3">
              <li>
                <Link to={createPageUrl('Home')} className="text-slate-400 hover:text-violet-400 transition-colors">
                  ראשי
                </Link>
              </li>
              <li>
                <Link to={createPageUrl('CaseStudies')} className="text-slate-400 hover:text-violet-400 transition-colors">
                  סיפורי הצלחה
                </Link>
              </li>
              <li>
                <Link to={createPageUrl('About')} className="text-slate-400 hover:text-violet-400 transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link to={createPageUrl('Contact')} className="text-slate-400 hover:text-violet-400 transition-colors">
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">מידע נוסף</h4>
            <ul className="space-y-3">
              <li>
                <Link to={createPageUrl('Privacy')} className="text-slate-400 hover:text-violet-400 transition-colors">
                  מדיניות פרטיות
                </Link>
              </li>
              <li>
                <Link to={createPageUrl('Terms')} className="text-slate-400 hover:text-violet-400 transition-colors">
                  תנאי שימוש
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} ORMA.AI. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}