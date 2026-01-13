import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Save, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SiteSettings() {
  const [formData, setFormData] = useState({
    company_phone: '',
    company_email: '',
    linkedin_url: '',
    whatsapp_number: '',
    stats_hours_saved: '',
    stats_processes: '',
    stats_organizations: ''
  });
  const [isSaved, setIsSaved] = useState(false);

  const queryClient = useQueryClient();

  const { data: settingsData = [], isLoading } = useQuery({
    queryKey: ['site-settings-admin'],
    queryFn: () => base44.entities.SiteSettings.list(),
    initialData: []
  });

  const settings = settingsData[0];

  useEffect(() => {
    if (settings) {
      setFormData({
        company_phone: settings.company_phone || '',
        company_email: settings.company_email || '',
        linkedin_url: settings.linkedin_url || '',
        whatsapp_number: settings.whatsapp_number || '',
        stats_hours_saved: settings.stats_hours_saved || '',
        stats_processes: settings.stats_processes || '',
        stats_organizations: settings.stats_organizations || ''
      });
    }
  }, [settings]);

  const saveMutation = useMutation({
    mutationFn: async (data) => {
      const cleanData = {
        ...data,
        stats_hours_saved: data.stats_hours_saved ? Number(data.stats_hours_saved) : null,
        stats_processes: data.stats_processes ? Number(data.stats_processes) : null,
        stats_organizations: data.stats_organizations ? Number(data.stats_organizations) : null
      };
      
      if (settings?.id) {
        return base44.entities.SiteSettings.update(settings.id, cleanData);
      } else {
        return base44.entities.SiteSettings.create(cleanData);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['site-settings-admin'] });
      queryClient.invalidateQueries({ queryKey: ['site-settings'] });
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    saveMutation.mutate(formData);
  };

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">הגדרות האתר</h1>
          <p className="text-slate-600">נהל את פרטי הקשר והסטטיסטיקות המוצגות באתר</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>פרטי קשר</CardTitle>
              <CardDescription>פרטים אלה יוצגו בפוטר ובעמוד יצירת קשר</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">אימייל</label>
                <Input
                  type="email"
                  value={formData.company_email}
                  onChange={(e) => setFormData({ ...formData, company_email: e.target.value })}
                  placeholder="contact@orma-ai.com"
                  dir="ltr"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">טלפון</label>
                <Input
                  value={formData.company_phone}
                  onChange={(e) => setFormData({ ...formData, company_phone: e.target.value })}
                  placeholder="050-0000000"
                  dir="ltr"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">לינקדאין</label>
                <Input
                  value={formData.linkedin_url}
                  onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })}
                  placeholder="https://linkedin.com/company/orma-ai"
                  dir="ltr"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">וואטסאפ</label>
                <Input
                  value={formData.whatsapp_number}
                  onChange={(e) => setFormData({ ...formData, whatsapp_number: e.target.value })}
                  placeholder="972501234567"
                  dir="ltr"
                />
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>סטטיסטיקות</CardTitle>
              <CardDescription>מספרים אלה יוצגו באזור ההוכחות בעמוד הבית</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">שעות עבודה שנחסכו</label>
                <Input
                  type="number"
                  value={formData.stats_hours_saved}
                  onChange={(e) => setFormData({ ...formData, stats_hours_saved: e.target.value })}
                  placeholder="5000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">תהליכים שהוטמעו</label>
                <Input
                  type="number"
                  value={formData.stats_processes}
                  onChange={(e) => setFormData({ ...formData, stats_processes: e.target.value })}
                  placeholder="120"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">ארגונים</label>
                <Input
                  type="number"
                  value={formData.stats_organizations}
                  onChange={(e) => setFormData({ ...formData, stats_organizations: e.target.value })}
                  placeholder="30"
                />
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={saveMutation.isPending}
              className="bg-slate-900 hover:bg-slate-800 min-w-[120px]"
            >
              {saveMutation.isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : isSaved ? (
                <>
                  <CheckCircle2 className="w-4 h-4 ml-2 text-emerald-400" />
                  נשמר!
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 ml-2" />
                  שמור
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}