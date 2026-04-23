import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowLeft, Minus, Check, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const baseFeatures = [
  { name: 'אנשי קשר וחברות', tip: 'ניהול מרכזי של כל הלקוחות, ספקים ואנשי הקשר — שמות, טלפונים, מיילים, היסטוריה.' },
  { name: 'תיבת לידים', tip: 'כל פנייה חדשה (מטופס אתר, מייל, טלפון) מגיעה למקום אחד עם סטטוס ותיוג אוטומטי.' },
  { name: 'Pipeline Kanban', tip: 'לוח ויזואלי של עסקאות לפי שלב — מ"פנייה ראשונה" ועד "עסקה נסגרה". גוררים כרטיסים בין שלבים.' },
  { name: 'משימות ותזכורות', tip: 'רשימת מטלות אישית וצוותית — "להתקשר אליו ביום שלישי", "לשלוח הצעה עד מחר", עם תזכורות אוטומטיות.' },
  { name: 'Timeline פעילויות', tip: 'כל מה שקרה עם לקוח בציר זמן אחד — שיחה, מייל, פגישה, הערה — הכל מתועד ונגיש.' },
  { name: 'דשבורד KPI', tip: 'מסך הבית עם המספרים החשובים — כמה לידים חדשים, אחוז המרה, ביצועי הצוות. עדכון בזמן אמת.' },
  { name: 'משתמשים והרשאות', tip: 'כל עובד עם חשבון משלו ורואה רק את מה שמותר לו. מנהל רואה הכל, סוכן רק את הלקוחות שלו.' },
  { name: 'חיפוש ומסננים', tip: 'חיפוש טקסט חופשי בכל המערכת + אפשרות לסנן ולשמור תצוגות מותאמות ("לידים חמים", "משימות של היום").' },
  { name: 'קבצים מצורפים', tip: 'מצרפים חוזים, תמונות, PDF-ים לכל לקוח. הכל מאוחסן בצורה מאובטחת ונגיש בקליק.' },
  { name: 'ייבוא / ייצוא CSV', tip: 'ייבוא נתונים ממערכת ישנה (אקסל, Fireberry, Monday) + ייצוא של כל מידע בקליק אחד.' },
  { name: 'טפסי Web', tip: 'יוצרים טופס "צור קשר" מוטמע באתר שלך — כל פנייה נכנסת ישירות ל-CRM כליד חדש עם UTM ומקור.' },
  { name: 'הערות ותגיות', tip: 'כותבים הערה פנימית על לקוח ("לא לוקח הצעות בדוא"ל") ומתייגים ("VIP", "חוזר", "ממליץ").' },
];

const moduleCategories = [
  {
    num: '01',
    title: 'תקשורת',
    subtitle: 'Communication',
    modules: [
      {
        name: 'WhatsApp Business',
        desc: 'שליחה וקבלה, Templates, בוט, עדכון ליד אוטומטי',
        tip: 'מחברים את ה-WhatsApp העסקי ל-CRM. כל הודעה שנכנסת ויוצאת נשמרת אוטומטית בכרטיס של הלקוח. אפשר לשלוח תבניות מוכנות (אישור פגישה, תזכורת), ולהריץ בוט שעונה אוטומטית על שאלות נפוצות.',
        setup: '4,000', monthly: '200', popular: true,
      },
      {
        name: 'סנכרון אימייל',
        desc: 'Gmail/Outlook דו-כיווני, Templates, Tracking',
        tip: 'מחברים את Gmail או Outlook שלך ל-CRM. מיילים נכנסים ויוצאים נשמרים אוטומטית בכרטיס הלקוח. תבניות מוכנות חוסכות זמן כתיבה, ו-Tracking מראה מתי הלקוח פתח את המייל וקליק על לינקים.',
        setup: '2,500', monthly: '100',
      },
      {
        name: 'SMS ושיחות',
        desc: 'Inforu/Twilio, Click-to-call, Call logs',
        tip: 'שליחת SMS מהמערכת (דרך Inforu או Twilio), לחיצה על מספר טלפון מתחילה שיחה, וכל השיחות מתועדות אוטומטית בהיסטוריה של הלקוח.',
        setup: '3,000', monthly: '150',
      },
      {
        name: "צ'אט חי באתר",
        desc: 'Widget, Live + bot, Handoff חלק',
        tip: "בועת צ'אט בפינת האתר שלך. הבוט עונה על שאלות בסיסיות, ואם הלקוח רוצה לדבר עם אדם — מועבר חלק לנציג. כל שיחה נשמרת ב-CRM כליד חדש.",
        setup: '4,000', monthly: '150',
      },
      {
        name: 'תיבת דואר משותפת',
        desc: 'Team inbox, SLA, Auto-routing',
        tip: 'תיבת מייל אחת לצוות (info@, sales@) שכולם רואים. כללים אוטומטיים מחלקים פניות לאנשים הנכונים, ומעקב SLA מוודא שאף פנייה לא נשכחת.',
        setup: '5,000', monthly: '200',
      },
      {
        name: 'הודעות המוניות',
        desc: 'WhatsApp Broadcast, SMS Campaigns',
        tip: 'שליחת הודעה אחת לרשימת לקוחות גדולה — WhatsApp Broadcast או SMS. עם תזמון מראש ודוחות שמראים מי פתח/קרא.',
        setup: '3,500', monthly: '150',
      },
    ],
  },
  {
    num: '02',
    title: 'שיווק',
    subtitle: 'Marketing',
    modules: [
      {
        name: 'Email Campaigns',
        desc: 'Drag-and-drop builder, A/B testing, Analytics',
        tip: 'בונים ניוזלטר מעוצב בגרירת בלוקים (לא צריך לדעת HTML), שולחים לרשימת לקוחות, ומקבלים דוחות — מי פתח, מי קליק, ומה הכי עבד.',
        setup: '6,000', monthly: '250',
      },
      {
        name: 'Lead Scoring מתקדם',
        desc: 'ציון דינמי, ML-based, Hot/warm/cold auto-tag',
        tip: 'כל ליד מקבל ציון 0-100 לפי התנהגות (כמה פעמים נכנס לאתר, פתח מיילים, השיב). מדגיש אוטומטית את ה"חמים" ביותר כדי שלא תפספסו.',
        setup: '4,500', monthly: '200',
      },
      {
        name: 'Workflow Automation',
        desc: 'If-this-then-that visual, Triggers, Actions',
        tip: 'בונים תהליכים אוטומטיים בלי קוד: "אם ליד מילא טופס → שלח מייל ברוכים הבאים → חכה 3 ימים → אם לא ענה, שלח SMS". הכל ויזואלי.',
        setup: '7,000', monthly: '300',
      },
      {
        name: 'Landing Pages',
        desc: 'RTL templates, טפסים מחוברים, Custom domain',
        tip: 'בונים דפי נחיתה לקמפיינים (עברית RTL) בלי מעצב. הטופס מחובר ישירות ל-CRM, ואפשר להגדיר subdomain משלך (lp.yoursite.co.il).',
        setup: '5,000', monthly: '200',
      },
      {
        name: 'UTM & Attribution',
        desc: 'Multi-touch, ROI per campaign, Ads sync',
        tip: 'עוקב אחרי מקור של כל ליד — פייסבוק? גוגל? SEO? — ומחשב ROI אמיתי לכל קמפיין. יודעים איזה פרסום משתלם.',
        setup: '3,500', monthly: '150',
      },
      {
        name: 'Referral & Loyalty',
        desc: 'קודי הפניה, Rewards, דוחות מפנים',
        tip: 'לקוחות קיימים מקבלים קוד הפניה ייחודי. מי שמביא לקוח חדש מקבל זיכוי/הנחה אוטומטית, והמערכת עוקבת בדיוק מי הביא את מי.',
        setup: '5,500', monthly: '200',
      },
    ],
  },
  {
    num: '03',
    title: 'מכירות',
    subtitle: 'Sales',
    modules: [
      {
        name: 'הצעות מחיר וחוזים',
        desc: 'PDF מעוצב, E-sign, Templates',
        tip: 'בונים הצעת מחיר ב-30 שניות מתוך תבנית מעוצבת, שולחים ללקוח כקישור, והוא חותם דיגיטלית מהטלפון. חתימה בתוקף משפטי מלא.',
        setup: '5,000', monthly: '200', popular: true,
      },
      {
        name: 'קטלוג מוצרים',
        desc: 'פריטים, מחירונים, variants, bundles',
        tip: 'רשימת כל המוצרים/שירותים שאתם מוכרים — עם מחירים, וריאציות (קטן/בינוני/גדול), וחבילות. נכנס אוטומטית להצעות מחיר.',
        setup: '4,000', monthly: '150',
      },
      {
        name: 'ניהול עמלות',
        desc: 'מבנים מותאמים, חישוב אוטומטי, דוחות',
        tip: 'לסוכני מכירות: חישוב עמלות אוטומטי לפי כללים (% ממכירה, שכבות, Split בין סוכנים). כל סוכן רואה כמה הרוויח החודש.',
        setup: '5,500', monthly: '200',
      },
      {
        name: 'Forecasting',
        desc: 'חיזוי לפי pipeline, Quotas, Scenarios',
        tip: 'המערכת מחזה את המכירות הצפויות החודש/רבעון לפי העסקאות שבצינור וההיסטוריה. עוזר לתכנן תקציב וצוות.',
        setup: '6,000', monthly: '250',
      },
      {
        name: 'Sales Playbooks',
        desc: 'Guided scripts, Next-best-action',
        tip: 'סקריפטים מנחים לסוכנים — מה לשאול בשיחה ראשונה, איך לטפל בהתנגדויות, מתי לשלוח הצעה. מקצר זמן onboarding לסוכן חדש.',
        setup: '4,500', monthly: '150',
      },
      {
        name: 'Multi-stage Deal Mgmt',
        desc: 'Approvals בשלבים, Stage gates, ROI',
        tip: 'לעסקאות מורכבות (B2B, חוזים גדולים): כל שלב דורש אישור של מנהל לפני מעבר לשלב הבא. מונע מעסקאות "לקפוץ" לפני שהן מוכנות.',
        setup: '6,500', monthly: '250',
      },
    ],
  },
  {
    num: '04',
    title: 'שירות לקוחות',
    subtitle: 'Service',
    modules: [
      {
        name: 'Ticketing System',
        desc: 'CRUD, הקצאה אוטומטית, SLA, Portal',
        tip: 'מערכת פניות שירות — לקוח פותח "tiket" עם בעיה, זה מוקצה אוטומטית לאיש הנכון, ומעקב SLA וודא שיטופל בזמן.',
        setup: '6,000', monthly: '250',
      },
      {
        name: 'Knowledge Base',
        desc: 'מאמרים, חיפוש חכם, AI suggestions',
        tip: 'מאגר מאמרים/שאלות נפוצות פנימי (לצוות) + חיצוני (ללקוחות). AI ממליץ מאמר רלוונטי לכל פנייה — חוסך זמן תשובה.',
        setup: '5,000', monthly: '200',
      },
      {
        name: 'Customer Portal',
        desc: "פניות, תשלומים, מסמכים, צ'אט",
        tip: 'כל לקוח מקבל התחברות לפורטל משלו — רואה את הפניות שלו, חשבוניות, מסמכים משותפים, ויכול לשלוח הודעה לצוות.',
        setup: '7,500', monthly: '300',
      },
      {
        name: 'NPS & Surveys',
        desc: 'שאלונים, Sentiment AI, Trends',
        tip: 'שולח סקר "כמה תמליץ עלינו" (NPS) אחרי כל אירוע. AI מנתח את התשובות החופשיות (חיוביות/שליליות) ומזהה בעיות מוקדם.',
        setup: '3,500', monthly: '150',
      },
    ],
  },
  {
    num: '05',
    title: 'תזמון ופגישות',
    subtitle: 'Scheduling',
    modules: [
      {
        name: 'Calendar Integration',
        desc: 'Google/Outlook sync, Multi-user, Conflicts',
        tip: 'היומן שלך (Google/Outlook) מסונכרן עם ה-CRM. רואים את כל הפגישות של הצוות במקום אחד, והמערכת מזהה התנגשויות.',
        setup: '4,000', monthly: '150', popular: true,
      },
      {
        name: 'Online Booking Widget',
        desc: 'לקוח בוחר זמן, Real-time, Auto-confirm',
        tip: 'לקוח נכנס לאתר, רואה את הזמנים הפנויים שלך, בוחר ומזמן — בלי שצריך להתקשר. אישור ותזכורת יוצאים אוטומטית.',
        setup: '5,500', monthly: '200',
      },
      {
        name: 'Resource Scheduling',
        desc: 'חדרים, ציוד, Prevent double-booking',
        tip: 'לא רק יומני אנשים — גם ניהול של חדרים, ציוד, רכבים. מוודא שאותו חדר לא נתפס פעמיים.',
        setup: '6,000', monthly: '250',
      },
      {
        name: 'Automated Reminders',
        desc: 'WhatsApp/SMS/Email, Custom timing',
        tip: 'תזכורות אוטומטיות לפני פגישות (24 שעות + שעה לפני), דרך WhatsApp/SMS/מייל. מוריד אחוז ביטולים/No-shows ב-30-50%.',
        setup: '2,500', monthly: '100',
      },
    ],
  },
  {
    num: '06',
    title: 'מסמכים וחוזים',
    subtitle: 'Documents',
    modules: [
      {
        name: 'Document Templates',
        desc: 'DOCX/PDF, Merge fields, Version control',
        tip: 'תבניות חוזים והצעות ב-Word/PDF עם שדות שמתמלאים אוטומטית מהלקוח ({{שם_לקוח}}, {{תאריך}}). שמירת גרסאות כמו Google Docs.',
        setup: '4,000', monthly: '150',
      },
      {
        name: 'E-Signature',
        desc: 'חתימה דיגיטלית חוקית, Multi-party',
        tip: 'לקוח חותם על חוזה מהטלפון/מחשב בלחיצת אצבע. חתימה בתוקף משפטי מלא (חוק חתימה אלקטרונית). תומך במספר חותמים.',
        setup: '5,000', monthly: '200',
      },
      {
        name: 'Document Storage',
        desc: 'S3 encrypted, Sharing links, Preview',
        tip: 'אחסון מאובטח (מוצפן) לכל המסמכים — תיקייה ללקוח. אפשר לשלוח קישור עם תוקף ("השאר פעיל 7 ימים") ולראות preview בדפדפן.',
        setup: '3,500', monthly: '150',
      },
      {
        name: 'Contract Lifecycle',
        desc: 'חידושים, Alerts, Automation',
        tip: 'מעקב חוזים לאורך זמן — מתריע 30/60/90 יום לפני פקיעה. חידוש אוטומטי אם מותר, התראה לצוות אם צריך לדבר עם הלקוח.',
        setup: '5,500', monthly: '200',
      },
    ],
  },
  {
    num: '07',
    title: 'חיוב וחשבונות',
    subtitle: 'Billing',
    modules: [
      {
        name: 'חשבוניות ישראליות',
        desc: 'חשבוניות מס + קבלות, Morning/iCount',
        tip: 'מפיק חשבונית מס / קבלה בלחיצה אחת, בפורמט של רשות המיסים. חיבור ל-Morning או iCount כדי שתעבור אוטומטית לרואה החשבון.',
        setup: '5,500', monthly: '200', popular: true,
      },
      {
        name: 'תשלומים אונליין',
        desc: 'Tranzila/Cardcom, Subscriptions',
        tip: 'קישור תשלום ללקוח (דרך Tranzila או Cardcom) בווטסאפ/מייל. תומך בתשלום חד-פעמי ובמנוי חודשי עם ניסיון חיוב מחדש אם נכשל.',
        setup: '4,500', monthly: '200',
      },
      {
        name: 'Accounting Sync',
        desc: 'Hashavshevet, סנכרון דו-כיווני',
        tip: 'חיבור ישיר לחשבשבת — כל חשבונית שנוצרת ב-CRM עוברת אוטומטית למערכת החשבונאית. אין העברה ידנית לרואה חשבון.',
        setup: '6,500', monthly: '300',
      },
      {
        name: 'גבייה ודרישות',
        desc: 'Dunning workflows, תזכורות, Late fees',
        tip: 'תהליך גבייה אוטומטי: לקוח שלא שילם → תזכורת במייל → אחרי 7 ימים WhatsApp → אחרי 14 ימים דרישה רשמית. חוסך עבודה ידנית.',
        setup: '4,000', monthly: '150',
      },
    ],
  },
  {
    num: '08',
    title: 'Analytics & BI',
    subtitle: 'Analytics',
    modules: [
      {
        name: 'דשבורדים מותאמים',
        desc: 'Widget builder, Multi-role, Real-time',
        tip: 'בונים מסכי מספרים מותאמים לתפקיד — מנכ"ל רואה תמונת מאקרו, סוכן רואה רק את ה-KPI שלו. מתעדכן בזמן אמת.',
        setup: '5,000', monthly: '200',
      },
      {
        name: 'Report Builder',
        desc: 'ללא קוד, Scheduled, Export, Pivot tables',
        tip: 'בונים דוחות מותאמים בלי איש טכני — בוחרים שדות, סינונים, פורמט. ניתן לתזמן שליחה אוטומטית ("כל יום ב-9 דוח מכירות אתמול למייל").',
        setup: '5,500', monthly: '200',
      },
      {
        name: 'Funnel Analytics',
        desc: 'Conversion, Bottlenecks, Cohorts',
        tip: 'רואים את משפך המכירות — כמה לידים נכנסו, כמה הפכו לשיחה, כמה לפגישה, כמה לעסקה. מזהה איפה נתקעים ומה צריך לתקן.',
        setup: '4,500', monthly: '200',
      },
      {
        name: 'Agent Performance',
        desc: 'Gamification, KPIs, Leaderboards',
        tip: 'לוח ביצועים לצוות — מי הסוכן החם החודש, כמה עסקאות סגר כל אחד, השוואה ליעד. עם gamification להגברת תחרותיות.',
        setup: '4,000', monthly: '150',
      },
    ],
  },
  {
    num: '09',
    title: 'AI & אוטומציה חכמה',
    subtitle: 'AI',
    modules: [
      {
        name: 'AI Conversation Summary',
        desc: 'סיכום שיחות, Action items, Sentiment',
        tip: 'אחרי כל שיחה/מייל/התכתבות, AI כותב סיכום קצר, מזהה משימות שצריך לעשות, ומודד את מצב הרוח של הלקוח (מרוצה/מתוסכל).',
        setup: '6,000', monthly: '300', popular: true,
      },
      {
        name: 'AI Email Draft',
        desc: 'טיוטות context-aware, Tone מותאם',
        tip: 'לוחץ "כתוב תגובה" והמערכת מכינה טיוטה על בסיס כל ההיסטוריה עם הלקוח. אתה רק עורך ושולח. חוסך 50%+ מזמן הכתיבה.',
        setup: '5,500', monthly: '250',
      },
      {
        name: 'Next-Best-Action',
        desc: 'המלצה על פעולה הבאה, ML-based',
        tip: 'AI מסתכל על ליד ואומר "הפעולה הכי נכונה עכשיו היא: להתקשר אליו" (או לשלוח תזכורת, או להעביר לסוכן בכיר). מבוסס על מה שעבד עם לקוחות דומים.',
        setup: '8,000', monthly: '400',
      },
      {
        name: 'AI Chatbot ללקוח',
        desc: 'בוט באתר/WhatsApp, Handoff, Lead capture',
        tip: 'בוט חכם (מבוסס על הידע של העסק שלך) שעונה ללקוחות באתר או בוואטסאפ 24/7. יודע מתי להעביר לנציג אנושי, ואוסף פרטים ליד חדש.',
        setup: '8,500', monthly: '400',
      },
      {
        name: 'Voice-to-Text',
        desc: 'הקלטה → טקסט, עברית איכותית (Whisper)',
        tip: 'מקליטים שיחה (שלכם או עם לקוח), המערכת מתמללת אותה לטקסט בעברית איכותית, ושומרת בכרטיס הלקוח. נפלא אחרי פגישה.',
        setup: '4,500', monthly: '250',
      },
      {
        name: 'Predictive Scoring',
        desc: 'ML לקונברסיה, Churn, Lifetime value',
        tip: 'AI חוזה: איזה לידים הכי סבירים להפוך לעסקה, איזה לקוחות בסיכון עזיבה, ומה השווי הצפוי של כל לקוח לאורך חייו.',
        setup: '9,000', monthly: '400',
      },
    ],
  },
  {
    num: '10',
    title: 'אינטגרציות',
    subtitle: 'Integrations',
    modules: [
      {
        name: 'Fireberry / Powerlink',
        desc: 'סנכרון דו-כיווני, Field mapping',
        tip: 'אם כבר עובדים עם Fireberry — אפשר להשתמש ב-CRM שלנו במקביל, עם סנכרון דו-כיווני. מעבר הדרגתי בלי לאבד כלום.',
        setup: '5,000', monthly: '200',
      },
      {
        name: 'Meta Lead Ads',
        desc: 'לידים אוטומטיים, UTM, Instant response',
        tip: 'כל ליד מטופס פייסבוק/אינסטגרם נכנס ל-CRM אוטומטית תוך שניות. המערכת יכולה לשלוח WhatsApp תגובה מיידית — לפני שהמתחרה מספיק.',
        setup: '3,500', monthly: '150',
      },
      {
        name: 'Google Ads',
        desc: 'Conversions sync, Offline API, ROI',
        tip: 'עסקאות שסגרתם ב-CRM עוברות חזרה ל-Google Ads כ-conversions. Google לומד לאן לשלוח תקציב, וה-ROI משתפר ב-20-40%.',
        setup: '4,000', monthly: '150',
      },
      {
        name: 'Zapier / Make',
        desc: 'Webhooks, 2000+ אפליקציות',
        tip: 'מחבר את ה-CRM ל-2000+ אפליקציות אחרות (Slack, Google Sheets, Mailchimp וכו׳) בלי קוד, דרך Zapier או Make.',
        setup: '2,000', monthly: '100',
      },
      {
        name: 'Priority / SAP B1',
        desc: 'ERP integration, לקוחות ופריטים',
        tip: 'לחברות עם מערכת ERP (Priority, SAP): סנכרון של לקוחות, פריטים, מלאי, חשבוניות בין ה-CRM ל-ERP. מתאים לעסקים בינוניים ומעלה.',
        setup: '12,000', monthly: '500',
      },
      {
        name: 'GeoScale Integration',
        desc: 'Visibility scores, Brand monitoring',
        tip: 'אינטגרציה עם GeoScale (פלטפורמת ניטור AI) — רואים איך המותג שלכם מוזכר ב-ChatGPT/Gemini/Claude, ומקבלים התראות על הזדמנויות.',
        setup: '3,000', monthly: '150',
      },
    ],
  },
];

/**
 * Dark-themed tooltip info trigger, properly styled for the violet theme.
 * Shows on hover/focus on desktop, tap on mobile.
 */
function InfoTip({ children }) {
  return (
    <Tooltip delayDuration={120}>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-white/20 hover:border-lavender-300 text-white/50 hover:text-lavender-200 transition-colors focus:outline-none focus:ring-2 focus:ring-lavender-400/40"
          aria-label="מידע נוסף"
        >
          <Info className="w-3 h-3" strokeWidth={2.5} />
        </button>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        align="start"
        sideOffset={8}
        className="max-w-[340px] bg-night-800 border border-lavender-400/25 text-white/90 text-[13px] leading-[1.7] px-4 py-3 rounded-xl shadow-2xl shadow-black/40"
      >
        {children}
      </TooltipContent>
    </Tooltip>
  );
}

export default function Platform() {
  return (
    <TooltipProvider delayDuration={120}>
      <div>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,109,226,0.18) 0%, transparent 60%)' }}
          />
          <div className="relative container-editorial">
            <motion.div {...fadeUp} className="max-w-4xl">
              <div className="meta-label mb-6">Platform</div>
              <h1 className="heading-display mb-8">
                בסיס אחד.<br />
                <span className="text-lavender-300">50+ מודולים</span> להתאמה מלאה.
              </h1>
              <p className="text-white/60 text-lg md:text-xl leading-[1.75] max-w-2xl">
                לא CRM גנרי ש&quot;מנסה להתאים&quot;. פלטפורמה מודולרית שנבנתה לעסק הישראלי —
                עם חשבוניות מס, WhatsApp native, עברית RTL אמיתית, ו-AI agents מובנים.
              </p>
              <p className="mt-6 text-[13px] text-white/40 flex items-center gap-2">
                <Info className="w-4 h-4" />
                עבור כל מודול — לחצו על כפתור ה-<span className="text-lavender-300">i</span> לקבלת הסבר ידידותי
              </p>
            </motion.div>
          </div>
        </section>

        {/* Base */}
        <section className="py-24 md:py-32 border-t border-white/[0.06]">
          <div className="container-editorial">
            <motion.div {...fadeUp} className="grid md:grid-cols-12 gap-10 md:gap-16 mb-14">
              <div className="md:col-span-4">
                <div className="meta-label mb-4">הבסיס</div>
                <div className="divider-thin mb-6" />
                <div className="flex items-baseline gap-3 mb-2">
                  <div className="text-4xl font-black text-white tracking-tight">₪4,500</div>
                  <div className="text-[13px] text-white/50">הקמה</div>
                </div>
                <div className="flex items-baseline gap-3">
                  <div className="text-4xl font-black text-white tracking-tight">₪299</div>
                  <div className="text-[13px] text-white/50">/חודש</div>
                </div>
                <p className="mt-4 text-[12px] text-white/45 leading-relaxed">
                  זהה למסלול <Link to={createPageUrl('Pricing')} className="text-lavender-300 hover:text-lavender-200">Growth</Link>. בלי מודולים נוספים — רק הבסיס.
                </p>
              </div>
              <div className="md:col-span-8">
                <h2 className="heading-section mb-6">Base CRM — מה שכל לקוח מקבל</h2>
                <p className="text-white/60 text-lg leading-[1.85] max-w-2xl">
                  ליבה חזקה שמספיקה לרוב העסקים הקטנים. הכל בנוי על אותם יסודות של מוצרים שכבר רצים בייצור. משם מוסיפים רק את המודולים שבאמת צריך.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-5 border-t border-white/[0.08] pt-10">
              {baseFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3 py-2">
                  <Check className="w-4 h-4 text-lavender-400 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-white/80 text-[15px] flex-1">{f.name}</span>
                  <InfoTip>{f.tip}</InfoTip>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-night-900/40 to-transparent">
          <div className="container-editorial">
            <motion.div {...fadeUp} className="mb-12">
              <div className="meta-label mb-4">הקטלוג</div>
              <h2 className="heading-section max-w-3xl">10 קטגוריות. 50+ מודולים.</h2>
              <p className="text-white/60 text-lg leading-[1.85] max-w-2xl mt-6">
                כל עסק מרכיב את ה-CRM המושלם שלו — a-la-carte. מתחילים קטן, מרחיבים מתי שצריך, בלי להחליף מערכת.
                המחיר הוא setup חד-פעמי + תחזוקה חודשית לכל מודול.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-[13px] text-white/50">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-lavender-400"></span>
                  Setup = בנייה והגדרה חד-פעמית
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/40"></span>
                  חודשי = תחזוקה, עדכונים ותמיכה
                </div>
                <div className="flex items-center gap-2">
                  <Info className="w-3.5 h-3.5 text-lavender-300" />
                  <span>כפתור <span className="text-lavender-300">i</span> = הסבר ידידותי</span>
                </div>
              </div>
            </motion.div>

            {/* Pricing notice */}
            <motion.div {...fadeUp} className="mb-20 rounded-2xl border border-lavender-400/30 bg-lavender-500/[0.06] p-6 md:p-7">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="meta-label mb-2 text-lavender-300">שימו לב · תמחור A la Carte</div>
                  <p className="text-white/80 text-[15px] leading-[1.75] max-w-3xl">
                    המחירים כאן הם לרכישה <span className="text-white font-semibold">פרטנית של מודולים</span>. לרוב העסקים,
                    ה<Link to={createPageUrl('Pricing')} className="text-lavender-300 hover:text-lavender-200 font-semibold underline decoration-lavender-400/40 underline-offset-4">מסלולים החודשיים</Link>{' '}
                    חוסכים <span className="text-white font-semibold">30-60%</span> — כי הם חבילות מוכנות עם מודולים נפוצים.
                  </p>
                </div>
                <Link to={createPageUrl('Pricing')} className="btn-pill-primary flex-shrink-0 whitespace-nowrap">
                  <ArrowLeft className="w-4 h-4 ml-2" />
                  השוואה למסלולים
                </Link>
              </div>
            </motion.div>

            <div className="space-y-24">
              {moduleCategories.map((cat) => (
                <motion.div key={cat.num} {...fadeUp} className="grid md:grid-cols-12 gap-10 md:gap-12 border-t border-white/[0.06] pt-12">
                  <div className="md:col-span-4">
                    <div className="text-5xl md:text-6xl font-black text-lavender-400/80 tracking-tight mb-3">{cat.num}</div>
                    <div className="meta-label mb-2 text-white/40">{cat.subtitle}</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">{cat.title}</h3>
                    <p className="text-white/40 text-[13px] mt-4">
                      {cat.modules.length} מודולים · החל מ-₪{Math.min(...cat.modules.map(m => parseInt(m.setup.replace(',', '')))).toLocaleString('he-IL')} setup
                    </p>
                  </div>
                  <div className="md:col-span-8 divide-y divide-white/[0.06]">
                    {cat.modules.map((m, i) => (
                      <div key={i} className="py-5 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-5 items-baseline">
                        <div className="sm:col-span-7">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-white font-semibold text-[17px]">{m.name}</span>
                            {m.popular && (
                              <span className="text-[9px] font-bold tracking-widest uppercase text-lavender-300 bg-lavender-500/20 border border-lavender-400/30 px-1.5 py-0.5 rounded">
                                פופולרי
                              </span>
                            )}
                            <InfoTip>{m.tip}</InfoTip>
                          </div>
                          <div className="text-white/55 text-[14px] leading-relaxed">{m.desc}</div>
                        </div>
                        <div className="sm:col-span-5 flex items-baseline gap-5 sm:justify-end">
                          <div className="flex items-baseline gap-1">
                            <span className="text-[11px] text-white/40 uppercase tracking-wider font-semibold">Setup</span>
                            <span className="text-lavender-300 font-bold text-[17px] whitespace-nowrap">₪{m.setup}</span>
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-[11px] text-white/40 uppercase tracking-wider font-semibold">/חודש</span>
                            <span className="text-white font-bold text-[17px] whitespace-nowrap">₪{m.monthly}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Two paths */}
        <section className="py-24 md:py-32">
          <div className="container-editorial">
            <motion.div {...fadeUp} className="mb-14 text-center max-w-2xl mx-auto">
              <div className="meta-label mb-4">איך לקנות</div>
              <h2 className="heading-section">שני מסלולי תמחור.</h2>
            </motion.div>

            <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10">
                <div className="meta-label mb-3">A la Carte</div>
                <h3 className="text-2xl font-black text-white mb-4">מודולים לפי בחירה</h3>
                <p className="text-white/60 text-[15px] leading-[1.8] mb-6">
                  גמישות מלאה. בוחרים בדיוק את המודולים שצריכים ומשלמים על כל אחד בנפרד.
                  טוב למי שיודע בדיוק מה נדרש או שרוצה קונפיגורציה לא-סטנדרטית.
                </p>
                <div className="space-y-2 text-[14px] text-white/80 border-t border-white/[0.08] pt-5">
                  <div className="flex justify-between">
                    <span>Base CRM</span>
                    <span className="text-lavender-300 font-semibold">₪4,500 + ₪299/חודש</span>
                  </div>
                  <div className="flex justify-between">
                    <span>+ כל מודול</span>
                    <span className="text-white/70">₪2,000-8,000 + ₪100-400/חודש</span>
                  </div>
                </div>
                <div className="mt-5 text-[12px] text-white/40">
                  דוגמה: Base + WhatsApp + חשבוניות + Calendar<br />
                  = ₪18,000 setup + ₪849/חודש
                </div>
              </div>

              <div className="rounded-2xl border-2 border-lavender-400/40 bg-lavender-500/[0.06] p-8 md:p-10 relative">
                <div className="absolute -top-3 right-8 text-[10px] font-bold tracking-widest uppercase text-[#0a0515] bg-lavender-400 px-3 py-1 rounded-full">
                  מומלץ לרובם · חסכוני פי 2
                </div>
                <div className="meta-label mb-3 text-lavender-300">Plans (חבילות)</div>
                <h3 className="text-2xl font-black text-white mb-4">מסלול flat חודשי</h3>
                <p className="text-white/70 text-[15px] leading-[1.8] mb-6">
                  חבילות מוכנות שכבר כוללות את הבסיס + מודולים פופולריים. מחיר חודשי קבוע
                  (לא per-user), והעלות נמוכה משמעותית מ-A la Carte כי זו חבילה סטנדרטית בסקייל.
                </p>
                <div className="space-y-2 text-[14px] text-white/90 border-t border-lavender-400/20 pt-5">
                  <div className="flex justify-between">
                    <span>Growth (Base + 3 מודולים)</span>
                    <span className="text-lavender-300 font-semibold">₪4,500 + ₪299/חודש</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Professional (Base + 8 מודולים)</span>
                    <span className="text-lavender-300 font-semibold">₪9,000 + ₪799/חודש</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Business (כל המודולים)</span>
                    <span className="text-lavender-300 font-semibold">₪15,000 + ₪1,499/חודש</span>
                  </div>
                </div>
                <Link to={createPageUrl('Pricing')} className="inline-flex items-center mt-6 text-white hover:text-lavender-200 transition-colors font-medium border-b border-white/30 hover:border-lavender-200 pb-1 text-[14px]">
                  <ArrowLeft className="w-4 h-4 ml-2" />
                  לפירוט המסלולים המלא
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-night-900/40 to-transparent">
          <div className="container-editorial">
            <motion.div {...fadeUp} className="mb-14">
              <div className="meta-label mb-4">למה Forward</div>
              <h2 className="heading-section max-w-3xl">מה שאין לאף מערכת אחרת בשוק.</h2>
            </motion.div>

            <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {[
                { t: 'עברית RTL אמיתית', d: 'לא translation של מערכת אנגלית — RTL מלא, חגי ישראל, תקנות רשות המיסים מובנות.' },
                { t: 'תמחור flat, לא per-user', d: 'לא משנה אם 5 או 25 משתמשים — אותו מחיר. חוסך אלפי שקלים לחודש לעסקים צומחים.' },
                { t: 'AI native עם Claude', d: 'סיכום שיחות, טיוטות מייל, Next-best-action — לא תוספים יקרים, חלק מה-Professional.' },
                { t: 'בנדלים ורטיקליים', d: `נדל"ן, ביטוח, רפואה, משפטים, חשבונאות — לא תבניות. פיצ'רים אמיתיים שנבנו לתחום.` },
                { t: 'חשבוניות ישראליות native', d: 'Morning/iCount integration, ח-ן מזהה, ניכויים, קבלות — הכל מותאם לרשות המיסים.' },
                { t: 'גמישות מלאה', d: 'אנחנו ה-dev. כל custom שרוצים — אפשר לבנות. לא מערכת סגורה שמגבילה אתכם.' },
              ].map((item, i) => (
                <div key={i} className="border-t border-white/[0.08] pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Minus className="w-4 h-4 mt-2 text-lavender-400 flex-shrink-0" strokeWidth={3} />
                    <h3 className="text-xl font-bold text-white">{item.t}</h3>
                  </div>
                  <p className="text-white/60 text-[15px] leading-[1.75] pr-7">{item.d}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-28 md:py-36 overflow-hidden border-t border-white/[0.06]">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(139,109,226,0.2) 0%, transparent 70%)' }} />
          <div className="relative container-editorial text-center">
            <motion.div {...fadeUp}>
              <div className="meta-label mb-6">הצעד הבא</div>
              <h2 className="heading-section max-w-3xl mx-auto mb-8">רוצים לראות איך זה נראה אצלכם?</h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
                שיחת הדגמה של 30 דקות — נבחן ביחד איזה בסיס + מודולים מתאימים לעסק שלכם.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to={createPageUrl('Pricing')} className="btn-pill-primary">
                  <ArrowLeft className="w-4 h-4 ml-2" />
                  מחירים ומסלולים
                </Link>
                <Link to={createPageUrl('Industries')} className="btn-pill-ghost">חבילות לפי תחום</Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </TooltipProvider>
  );
}
