import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import {
  Users, Inbox, LayoutGrid, CheckSquare, Clock, BarChart3, Shield, Search,
  Paperclip, Upload, Globe, Tag,
  MessageCircle, Mail, Phone, MessageSquare, Send, Megaphone,
  Mailbox, Target, Zap, Layers, LineChart, Gift,
  FileText, Package, Percent, TrendingUp, BookOpen, Workflow,
  HeadphonesIcon, Library, UserCheck, Star,
  Calendar, CalendarCheck, DoorOpen, Bell,
  FileSignature, PenTool, FolderLock, RefreshCw,
  Receipt, CreditCard, Calculator, AlertCircle,
  PieChart, FileBarChart, GitBranch, Trophy,
  Sparkles, Wand2, Brain, Bot, Mic, Gauge,
  Plug, Facebook, Chrome, Link2, Database,
  Rocket, ArrowLeft, Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const baseFeatures = [
  { icon: Users, label: 'אנשי קשר וחברות' },
  { icon: Inbox, label: 'תיבת לידים' },
  { icon: LayoutGrid, label: 'Pipeline Kanban' },
  { icon: CheckSquare, label: 'משימות ותזכורות' },
  { icon: Clock, label: 'Timeline פעילויות' },
  { icon: BarChart3, label: 'דשבורד KPI' },
  { icon: Shield, label: 'משתמשים והרשאות' },
  { icon: Search, label: 'חיפוש ומסננים' },
  { icon: Paperclip, label: 'קבצים מצורפים' },
  { icon: Upload, label: 'ייבוא / ייצוא CSV' },
  { icon: Globe, label: 'טפסי Web' },
  { icon: Tag, label: 'הערות ותגיות' },
];

const moduleCategories = [
  {
    title: 'תקשורת',
    subtitle: 'Communication',
    color: 'from-blue-500 to-indigo-600',
    icon: MessageCircle,
    modules: [
      { icon: MessageCircle, name: 'WhatsApp Business', desc: 'שליחה וקבלה, Templates, בוט, עדכון ליד אוטומטי', popular: true },
      { icon: Mail, name: 'סנכרון אימייל', desc: 'Gmail/Outlook דו-כיווני, Templates, Tracking' },
      { icon: Phone, name: 'SMS ושיחות', desc: 'Inforu/Twilio, Click-to-call, Call logs' },
      { icon: MessageSquare, name: 'צ\'אט חי באתר', desc: 'Widget, Live + bot, Handoff חלק' },
      { icon: Mailbox, name: 'תיבת דואר משותפת', desc: 'Team inbox, SLA, Auto-routing' },
      { icon: Send, name: 'הודעות המוניות', desc: 'WhatsApp Broadcast, SMS Campaigns' },
    ],
  },
  {
    title: 'שיווק',
    subtitle: 'Marketing',
    color: 'from-rose-500 to-pink-600',
    icon: Megaphone,
    modules: [
      { icon: Mail, name: 'Email Campaigns', desc: 'Drag-and-drop builder, A/B testing, Analytics' },
      { icon: Target, name: 'Lead Scoring מתקדם', desc: 'ציון דינמי, ML-based, Hot/warm/cold auto-tag' },
      { icon: Workflow, name: 'Workflow Automation', desc: 'If-this-then-that visual, Triggers, Actions' },
      { icon: Layers, name: 'Landing Pages', desc: 'RTL templates, טפסים מחוברים, Custom domain' },
      { icon: LineChart, name: 'UTM &amp; Attribution', desc: 'Multi-touch, ROI per campaign, Ads sync' },
      { icon: Gift, name: 'Referral &amp; Loyalty', desc: 'קודי הפניה, Rewards, דוחות מפנים' },
    ],
  },
  {
    title: 'מכירות',
    subtitle: 'Sales',
    color: 'from-emerald-500 to-teal-600',
    icon: TrendingUp,
    modules: [
      { icon: FileText, name: 'הצעות מחיר וחוזים', desc: 'PDF מעוצב, E-sign, Templates', popular: true },
      { icon: Package, name: 'קטלוג מוצרים', desc: 'פריטים, מחירונים, variants, bundles' },
      { icon: Percent, name: 'ניהול עמלות', desc: 'מבנים מותאמים, חישוב אוטומטי, דוחות' },
      { icon: TrendingUp, name: 'Forecasting', desc: 'חיזוי לפי pipeline, Quotas, Scenarios' },
      { icon: BookOpen, name: 'Sales Playbooks', desc: 'Guided scripts, Next-best-action' },
      { icon: GitBranch, name: 'Multi-stage Deal Mgmt', desc: 'Approvals בשלבים, Stage gates, ROI' },
    ],
  },
  {
    title: 'שירות לקוחות',
    subtitle: 'Service',
    color: 'from-amber-500 to-orange-600',
    icon: HeadphonesIcon,
    modules: [
      { icon: HeadphonesIcon, name: 'Ticketing System', desc: 'CRUD, הקצאה אוטומטית, SLA, Portal' },
      { icon: Library, name: 'Knowledge Base', desc: 'מאמרים, חיפוש חכם, AI suggestions' },
      { icon: UserCheck, name: 'Customer Portal', desc: 'פניות, תשלומים, מסמכים, צ\'אט' },
      { icon: Star, name: 'NPS &amp; Surveys', desc: 'שאלונים, Sentiment AI, Trends' },
    ],
  },
  {
    title: 'תזמון ופגישות',
    subtitle: 'Scheduling',
    color: 'from-violet-500 to-purple-600',
    icon: Calendar,
    modules: [
      { icon: Calendar, name: 'Calendar Integration', desc: 'Google/Outlook sync, Multi-user, Conflicts', popular: true },
      { icon: CalendarCheck, name: 'Online Booking Widget', desc: 'לקוח בוחר זמן, Real-time, Auto-confirm' },
      { icon: DoorOpen, name: 'Resource Scheduling', desc: 'חדרים, ציוד, Prevent double-booking' },
      { icon: Bell, name: 'Automated Reminders', desc: 'WhatsApp/SMS/Email, Custom timing' },
    ],
  },
  {
    title: 'מסמכים וחוזים',
    subtitle: 'Documents',
    color: 'from-cyan-500 to-blue-600',
    icon: FileSignature,
    modules: [
      { icon: FileText, name: 'Document Templates', desc: 'DOCX/PDF, Merge fields, Version control' },
      { icon: PenTool, name: 'E-Signature', desc: 'חתימה דיגיטלית חוקית, Multi-party' },
      { icon: FolderLock, name: 'Document Storage', desc: 'S3 encrypted, Sharing links, Preview' },
      { icon: RefreshCw, name: 'Contract Lifecycle', desc: 'חידושים, Alerts, Automation' },
    ],
  },
  {
    title: 'חיוב וחשבונות',
    subtitle: 'Billing',
    color: 'from-yellow-500 to-amber-600',
    icon: Receipt,
    modules: [
      { icon: Receipt, name: 'חשבוניות ישראליות', desc: 'חשבוניות מס + קבלות, תקני רשות המיסים, Morning/iCount', popular: true },
      { icon: CreditCard, name: 'תשלומים אונליין', desc: 'Tranzila/Cardcom, Subscriptions, Auto-retry' },
      { icon: Calculator, name: 'Accounting Sync', desc: 'Fireberry/Hashavshevet, סנכרון דו-כיווני' },
      { icon: AlertCircle, name: 'גבייה ודרישות', desc: 'Dunning workflows, תזכורות, Late fees' },
    ],
  },
  {
    title: 'Analytics & BI',
    subtitle: 'Analytics',
    color: 'from-slate-500 to-slate-700',
    icon: PieChart,
    modules: [
      { icon: PieChart, name: 'דשבורדים מותאמים', desc: 'Widget builder, Multi-role, Real-time' },
      { icon: FileBarChart, name: 'Report Builder', desc: 'ללא קוד, Scheduled, Export, Pivot tables' },
      { icon: LineChart, name: 'Funnel Analytics', desc: 'Conversion, Bottlenecks, Cohorts' },
      { icon: Trophy, name: 'Agent Performance', desc: 'Gamification, KPIs, Leaderboards' },
    ],
  },
  {
    title: 'AI & אוטומציה חכמה',
    subtitle: 'AI',
    color: 'from-fuchsia-500 to-purple-600',
    icon: Sparkles,
    modules: [
      { icon: Sparkles, name: 'AI Conversation Summary', desc: 'סיכום שיחות, Action items, Sentiment', popular: true },
      { icon: Wand2, name: 'AI Email Draft', desc: 'טיוטות context-aware, Tone מותאם' },
      { icon: Brain, name: 'Next-Best-Action', desc: 'המלצה על פעולה הבאה, ML-based' },
      { icon: Bot, name: 'AI Chatbot ללקוח', desc: 'בוט באתר/WhatsApp, Handoff, Lead capture' },
      { icon: Mic, name: 'Voice-to-Text', desc: 'הקלטה → טקסט, עברית איכותית (Whisper)' },
      { icon: Gauge, name: 'Predictive Scoring', desc: 'ML לקונברסיה, Churn, Lifetime value' },
    ],
  },
  {
    title: 'אינטגרציות',
    subtitle: 'Integrations',
    color: 'from-sky-500 to-blue-600',
    icon: Plug,
    modules: [
      { icon: Plug, name: 'Fireberry / Powerlink', desc: 'סנכרון דו-כיווני, Field mapping' },
      { icon: Facebook, name: 'Meta Lead Ads', desc: 'לידים אוטומטיים, UTM, Instant response' },
      { icon: Chrome, name: 'Google Ads', desc: 'Conversions sync, Offline API, ROI' },
      { icon: Link2, name: 'Zapier / Make', desc: 'Webhooks, 2000+ אפליקציות' },
      { icon: Database, name: 'Priority / SAP B1', desc: 'ERP integration, לקוחות ופריטים' },
      { icon: Sparkles, name: 'GeoScale Integration', desc: 'Visibility scores, Brand monitoring' },
    ],
  },
];

export default function Platform() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(160deg, #020617 0%, #0f172a 35%, #1e1b4b 70%, #312e81 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/5 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-indigo-400 text-sm font-bold tracking-widest uppercase mb-6"
          >
            הפלטפורמה
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-100 leading-[1.2] mb-6"
          >
            בסיס CRM אחד.<br />
            <span className="text-indigo-400">50+ מודולים</span> להתאמה מלאה.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            לא CRM כללי ש&quot;מנסה להתאים&quot;. פלטפורמה מודולרית שנבנתה לעסק הישראלי —
            עם חשבוניות מס, WhatsApp native, עברית RTL אמיתית, ו-AI agents מובנים.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to={createPageUrl('Pricing')}>
              <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white px-8 py-6 text-lg rounded-xl">
                צפייה במחירים
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </Link>
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-xl">
                הדגמה חיה
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Base CRM */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-indigo-600 text-sm font-bold tracking-widest uppercase">הבסיס</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 mt-2">
              Base CRM — מה שכל לקוח מקבל
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              ליבה חזקה שמספיקה לרוב העסקים הקטנים. הכל בנוי על אותם יסודות של מוצרים שכבר רצים בייצור.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-12"
          >
            <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-8 text-white text-center shadow-2xl">
              <div className="text-sm font-bold tracking-widest uppercase text-indigo-300 mb-2">Core Platform</div>
              <div className="text-2xl font-black mb-1">Multi-tenant · Hebrew RTL · Mobile · REST API</div>
              <div className="text-slate-300 text-sm">Role-based Security · Audit Trail · Real-time</div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {baseFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="bg-white rounded-xl p-5 border border-slate-100 flex items-center gap-3 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="font-medium text-slate-900 text-sm">{feature.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules Catalog */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-indigo-600 text-sm font-bold tracking-widest uppercase">הקטלוג</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 mt-2">
              10 קטגוריות. 50+ מודולים.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              כל עסק מרכיב את ה-CRM המושלם שלו. מתחילים קטן, מרחיבים מתי שצריך — בלי להחליף מערכת.
            </p>
          </motion.div>

          <div className="space-y-16">
            {moduleCategories.map((category, catIdx) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={catIdx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <CategoryIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase text-slate-400">{category.subtitle}</div>
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900">{category.title}</h3>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {category.modules.map((mod, modIdx) => {
                      const ModIcon = mod.icon;
                      return (
                        <div
                          key={modIdx}
                          className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/40 transition-all duration-300"
                        >
                          {mod.popular && (
                            <span className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full tracking-wider">
                              פופולרי
                            </span>
                          )}
                          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <ModIcon className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-lg font-bold text-slate-900 mb-2" dangerouslySetInnerHTML={{ __html: mod.name }} />
                          <p className="text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: mod.desc }} />
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Orma */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-indigo-600 text-sm font-bold tracking-widest uppercase">למה ORMA AI</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 mt-2">
              מה שאין לאף מערכת אחרת בשוק
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'עברית RTL אמיתית', desc: 'לא translation של מערכת אנגלית — RTL מלא, חגי ישראל, תקנות רשות המיסים מובנות.' },
              { title: 'תמחור flat, לא per-user', desc: 'לא משנה אם 5 או 25 משתמשים — אותו מחיר. חוסך אלפי שקלים לחודש לעסקים צומחים.' },
              { title: 'AI native עם Claude', desc: 'סיכום שיחות, טיוטות מייל, Next-best-action — לא תוספים יקרים, חלק מה-Professional.' },
              { title: 'בנדלים ורטיקליים', desc: 'נדל&quot;ן, ביטוח, רפואה, משפטים, חשבונאות — לא תבניות. פיצ\'רים אמיתיים שנבנו לתחום.' },
              { title: 'חשבוניות ישראליות native', desc: 'Morning/iCount integration, ח-ן מזהה, ניכויים, קבלות — הכל מותאם לרשות המיסים.' },
              { title: 'גמישות מלאה', desc: 'אנחנו ה-dev. כל custom שרוצים — אפשר לבנות. לא מערכת סגורה שמגבילה אתכם.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-indigo-300 text-sm font-medium mb-8 border border-white/10">
              <Rocket className="w-4 h-4" />
              הזמן להתחיל
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              רוצים לראות איך זה נראה אצלכם?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              שיחת הדגמה של 30 דקות — נבחן ביחד איזה בסיס + מודולים מתאימים לעסק שלכם.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to={createPageUrl('Pricing')}>
                <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white px-8 py-6 text-lg rounded-xl">
                  מחירים ומסלולים
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </Link>
              <Link to={createPageUrl('Industries')}>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-xl">
                  חבילות לפי תחום
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
