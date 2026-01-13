import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Pencil, Trash2, Save, X, Eye, EyeOff, Star, StarOff 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const emptyStudy = {
  title: '',
  slug: '',
  industry: '',
  challenge: '',
  solution: '',
  process: '',
  results: '',
  tools: [],
  metrics: [],
  is_featured: false,
  is_published: false
};

export default function CaseStudyEditor() {
  const [isEditing, setIsEditing] = useState(false);
  const [currentStudy, setCurrentStudy] = useState(emptyStudy);
  const [toolInput, setToolInput] = useState('');
  const [metricValue, setMetricValue] = useState('');
  const [metricLabel, setMetricLabel] = useState('');
  const [deleteTarget, setDeleteTarget] = useState(null);

  const queryClient = useQueryClient();

  const { data: caseStudies = [], isLoading } = useQuery({
    queryKey: ['case-studies-admin'],
    queryFn: () => base44.entities.CaseStudy.list('-created_date'),
    initialData: []
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.CaseStudy.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['case-studies-admin'] });
      setIsEditing(false);
      setCurrentStudy(emptyStudy);
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.CaseStudy.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['case-studies-admin'] });
      setIsEditing(false);
      setCurrentStudy(emptyStudy);
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.CaseStudy.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['case-studies-admin'] });
      setDeleteTarget(null);
    }
  });

  const handleSave = () => {
    const data = {
      ...currentStudy,
      slug: currentStudy.slug || currentStudy.title.toLowerCase().replace(/\s+/g, '-')
    };
    
    if (currentStudy.id) {
      updateMutation.mutate({ id: currentStudy.id, data });
    } else {
      createMutation.mutate(data);
    }
  };

  const handleEdit = (study) => {
    setCurrentStudy(study);
    setIsEditing(true);
  };

  const handleNew = () => {
    setCurrentStudy(emptyStudy);
    setIsEditing(true);
  };

  const addTool = () => {
    if (toolInput.trim()) {
      setCurrentStudy({
        ...currentStudy,
        tools: [...(currentStudy.tools || []), toolInput.trim()]
      });
      setToolInput('');
    }
  };

  const removeTool = (index) => {
    setCurrentStudy({
      ...currentStudy,
      tools: currentStudy.tools.filter((_, i) => i !== index)
    });
  };

  const addMetric = () => {
    if (metricValue.trim() && metricLabel.trim()) {
      setCurrentStudy({
        ...currentStudy,
        metrics: [...(currentStudy.metrics || []), { value: metricValue, label: metricLabel }]
      });
      setMetricValue('');
      setMetricLabel('');
    }
  };

  const removeMetric = (index) => {
    setCurrentStudy({
      ...currentStudy,
      metrics: currentStudy.metrics.filter((_, i) => i !== index)
    });
  };

  const togglePublished = (study) => {
    updateMutation.mutate({ id: study.id, data: { is_published: !study.is_published } });
  };

  const toggleFeatured = (study) => {
    updateMutation.mutate({ id: study.id, data: { is_featured: !study.is_featured } });
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">עריכת סיפורי הצלחה</h1>
            <p className="text-slate-600">נהל את סיפורי ההצלחה המוצגים באתר</p>
          </div>
          <Button onClick={handleNew} className="bg-slate-900 hover:bg-slate-800">
            <Plus className="w-4 h-4 ml-2" />
            סיפור חדש
          </Button>
        </div>

        {/* Case Studies List */}
        <div className="grid gap-4">
          {isLoading ? (
            <div className="bg-white rounded-xl p-8 text-center text-slate-500">טוען...</div>
          ) : caseStudies.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center text-slate-500">
              אין סיפורי הצלחה. צור את הסיפור הראשון!
            </div>
          ) : (
            caseStudies.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-6 border border-slate-200 flex items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">{study.title}</h3>
                    {study.is_featured && (
                      <Badge className="bg-amber-100 text-amber-800">Featured</Badge>
                    )}
                    <Badge className={study.is_published ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}>
                      {study.is_published ? 'פורסם' : 'טיוטה'}
                    </Badge>
                  </div>
                  <p className="text-slate-500 text-sm">{study.industry}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleFeatured(study)}
                    className={study.is_featured ? 'text-amber-500' : 'text-slate-400'}
                  >
                    {study.is_featured ? <Star className="w-4 h-4 fill-current" /> : <StarOff className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => togglePublished(study)}
                    className={study.is_published ? 'text-emerald-500' : 'text-slate-400'}
                  >
                    {study.is_published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(study)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setDeleteTarget(study)}>
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Edit Dialog */}
        <Dialog open={isEditing} onOpenChange={setIsEditing}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {currentStudy.id ? 'עריכת סיפור הצלחה' : 'סיפור הצלחה חדש'}
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6 py-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">כותרת *</label>
                  <Input
                    value={currentStudy.title}
                    onChange={(e) => setCurrentStudy({ ...currentStudy, title: e.target.value })}
                    placeholder="כותרת הסיפור"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Slug</label>
                  <Input
                    value={currentStudy.slug}
                    onChange={(e) => setCurrentStudy({ ...currentStudy, slug: e.target.value })}
                    placeholder="slug-url"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">תחום</label>
                <Input
                  value={currentStudy.industry}
                  onChange={(e) => setCurrentStudy({ ...currentStudy, industry: e.target.value })}
                  placeholder="למשל: היי-טק, חינוך, קמעונאות..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">האתגר</label>
                <Textarea
                  value={currentStudy.challenge}
                  onChange={(e) => setCurrentStudy({ ...currentStudy, challenge: e.target.value })}
                  placeholder="תאר את האתגר שעמד בפני הלקוח"
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">הפתרון</label>
                <Textarea
                  value={currentStudy.solution}
                  onChange={(e) => setCurrentStudy({ ...currentStudy, solution: e.target.value })}
                  placeholder="תאר את הפתרון שסיפקנו"
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">התהליך</label>
                <Textarea
                  value={currentStudy.process}
                  onChange={(e) => setCurrentStudy({ ...currentStudy, process: e.target.value })}
                  placeholder="תאר את תהליך העבודה"
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">התוצאות</label>
                <Textarea
                  value={currentStudy.results}
                  onChange={(e) => setCurrentStudy({ ...currentStudy, results: e.target.value })}
                  placeholder="תאר את התוצאות שהושגו"
                  className="min-h-[100px]"
                />
              </div>

              {/* Metrics */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">מדדים</label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={metricValue}
                    onChange={(e) => setMetricValue(e.target.value)}
                    placeholder="ערך (למשל: 40%)"
                    className="w-32"
                  />
                  <Input
                    value={metricLabel}
                    onChange={(e) => setMetricLabel(e.target.value)}
                    placeholder="תיאור (למשל: חיסכון בזמן)"
                    className="flex-1"
                  />
                  <Button type="button" onClick={addMetric} variant="outline">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentStudy.metrics?.map((metric, idx) => (
                    <Badge key={idx} className="bg-emerald-100 text-emerald-800 gap-2">
                      {metric.value} {metric.label}
                      <button onClick={() => removeMetric(idx)}>
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">כלים</label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={toolInput}
                    onChange={(e) => setToolInput(e.target.value)}
                    placeholder="שם כלי"
                    onKeyPress={(e) => e.key === 'Enter' && addTool()}
                  />
                  <Button type="button" onClick={addTool} variant="outline">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentStudy.tools?.map((tool, idx) => (
                    <Badge key={idx} variant="outline" className="gap-2">
                      {tool}
                      <button onClick={() => removeTool(idx)}>
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div className="flex items-center gap-6 pt-4 border-t">
                <div className="flex items-center gap-2">
                  <Switch
                    checked={currentStudy.is_published}
                    onCheckedChange={(checked) => setCurrentStudy({ ...currentStudy, is_published: checked })}
                  />
                  <span className="text-sm text-slate-700">פרסם</span>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={currentStudy.is_featured}
                    onCheckedChange={(checked) => setCurrentStudy({ ...currentStudy, is_featured: checked })}
                  />
                  <span className="text-sm text-slate-700">הצג בעמוד הבית</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  ביטול
                </Button>
                <Button 
                  onClick={handleSave} 
                  disabled={!currentStudy.title}
                  className="bg-slate-900 hover:bg-slate-800"
                >
                  <Save className="w-4 h-4 ml-2" />
                  שמור
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation */}
        <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>מחיקת סיפור הצלחה</AlertDialogTitle>
              <AlertDialogDescription>
                האם למחוק את "{deleteTarget?.title}"? פעולה זו לא ניתנת לביטול.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>ביטול</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => deleteMutation.mutate(deleteTarget.id)}
                className="bg-red-600 hover:bg-red-700"
              >
                מחק
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}