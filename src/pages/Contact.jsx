import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2, Mail, Phone, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    company_size: '',
    challenge_area: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { data: settingsData = [] } = useQuery({
    queryKey: ['site-settings'],
    queryFn: () => base44.entities.SiteSettings.list(),
    initialData: []
  });

  const settings = settingsData[0] || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const urlParams = new URLSearchParams(window.location.search);
    
    await base44.entities.Lead.create({
      ...formData,
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      is_enterprise: formData.company_size === '200+'
    });

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center px-6 py-16"
        >
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-emerald-100 flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            תודה על הפנייה!
          </h1>
          <p className="text-xl text-slate-600 max-w-md mx-auto">
            קיבלנו את הפרטים ונחזור אליך תוך 24 שעות עם הצעד הבא.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                בואו נדבר
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                רוצים לדעת איך AI יכול לחסוך לכם זמן וכסף?
                <br />
                השאירו פרטים ונחזור אליכם עם תובנות ראשוניות.
              </p>

              {/* Contact Info */}
              <div className="space-y-6">
                {settings?.company_email && (
                  <a 
                    href={`mailto:${settings.company_email}`}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-violet-200 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">אימייל</p>
                      <p className="text-slate-900 font-medium" dir="ltr">{settings.company_email}</p>
                    </div>
                  </a>
                )}

                {settings?.company_phone && (
                  <a 
                    href={`tel:${settings.company_phone}`}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-violet-200 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">טלפון</p>
                      <p className="text-slate-900 font-medium" dir="ltr">{settings.company_phone}</p>
                    </div>
                  </a>
                )}

                {settings?.linkedin_url && (
                  <a 
                    href={settings.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-violet-200 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">לינקדאין</p>
                      <p className="text-slate-900 font-medium">ORMA.AI</p>
                    </div>
                  </a>
                )}
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <form 
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  השאירו פרטים
                </h2>

                <div className="grid gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        שם מלא *
                      </label>
                      <Input
                        required
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                        className="h-12"
                        placeholder="השם שלך"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        אימייל *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12"
                        placeholder="email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        טלפון
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12"
                        placeholder="050-0000000"
                        dir="ltr"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        חברה
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="h-12"
                        placeholder="שם החברה"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        תפקיד
                      </label>
                      <Input
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="h-12"
                        placeholder="התפקיד שלך"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        גודל חברה
                      </label>
                      <Select
                        value={formData.company_size}
                        onValueChange={(value) => setFormData({ ...formData, company_size: value })}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="בחר גודל" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 עובדים</SelectItem>
                          <SelectItem value="11-50">11-50 עובדים</SelectItem>
                          <SelectItem value="51-200">51-200 עובדים</SelectItem>
                          <SelectItem value="200+">200+ עובדים</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      תחום האתגר
                    </label>
                    <Select
                      value={formData.challenge_area}
                      onValueChange={(value) => setFormData({ ...formData, challenge_area: value })}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="בחר תחום" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="אוטומציה">אוטומציה</SelectItem>
                        <SelectItem value="בוטים ושירות">בוטים ושירות</SelectItem>
                        <SelectItem value="הטמעת AI">הטמעת AI</SelectItem>
                        <SelectItem value="חיבור מערכות">חיבור מערכות</SelectItem>
                        <SelectItem value="הכשרות">הכשרות</SelectItem>
                        <SelectItem value="אחר">אחר</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      ספר/י לנו קצת על האתגר
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="מה האתגר המרכזי שאת/ה רוצה לפתור?"
                      className="min-h-[120px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        שולח...
                      </>
                    ) : (
                      <>
                        שליחה
                        <Send className="w-5 h-5 mr-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}