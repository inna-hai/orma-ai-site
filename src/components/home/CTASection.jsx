import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { base44 } from '@/api/base44Client';

export default function CTASection() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    company_size: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get UTM parameters
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
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              תודה על הפנייה!
            </h3>
            <p className="text-slate-600">
              נחזור אליך תוך 24 שעות עם הצעד הבא.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-violet-100/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            רוצה לדעת איפה AI יכול לחסוך לך הכי הרבה?
          </h2>
          <p className="text-slate-600 text-lg">
            השאר פרטים ונחזור אליך עם תובנות ראשוניות – כבר בחודש הקרוב
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100"
        >
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

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                ספר/י לנו קצת על האתגר
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="מה האתגר המרכזי שאת/ה רוצה לפתור?"
                className="min-h-[100px] resize-none"
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
        </motion.form>
      </div>
    </section>
  );
}