import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Plus, Pencil, Trash2, Save, Eye, EyeOff, GripVertical } from 'lucide-react';
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

const emptyFaq = {
  question: '',
  answer: '',
  order: 0,
  is_published: true
};

export default function FAQEditor() {
  const [isEditing, setIsEditing] = useState(false);
  const [currentFaq, setCurrentFaq] = useState(emptyFaq);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const queryClient = useQueryClient();

  const { data: faqs = [], isLoading } = useQuery({
    queryKey: ['faqs-admin'],
    queryFn: () => base44.entities.FAQ.list('order'),
    initialData: []
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.FAQ.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['faqs-admin'] });
      setIsEditing(false);
      setCurrentFaq(emptyFaq);
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.FAQ.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['faqs-admin'] });
      setIsEditing(false);
      setCurrentFaq(emptyFaq);
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.FAQ.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['faqs-admin'] });
      setDeleteTarget(null);
    }
  });

  const handleSave = () => {
    if (currentFaq.id) {
      updateMutation.mutate({ id: currentFaq.id, data: currentFaq });
    } else {
      createMutation.mutate({ ...currentFaq, order: faqs.length });
    }
  };

  const handleEdit = (faq) => {
    setCurrentFaq(faq);
    setIsEditing(true);
  };

  const handleNew = () => {
    setCurrentFaq(emptyFaq);
    setIsEditing(true);
  };

  const togglePublished = (faq) => {
    updateMutation.mutate({ id: faq.id, data: { is_published: !faq.is_published } });
  };

  const moveUp = (index) => {
    if (index === 0) return;
    const updates = [
      { id: faqs[index].id, data: { order: faqs[index - 1].order } },
      { id: faqs[index - 1].id, data: { order: faqs[index].order } }
    ];
    updates.forEach(({ id, data }) => updateMutation.mutate({ id, data }));
  };

  const moveDown = (index) => {
    if (index === faqs.length - 1) return;
    const updates = [
      { id: faqs[index].id, data: { order: faqs[index + 1].order } },
      { id: faqs[index + 1].id, data: { order: faqs[index].order } }
    ];
    updates.forEach(({ id, data }) => updateMutation.mutate({ id, data }));
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">עריכת שאלות נפוצות</h1>
            <p className="text-slate-600">נהל את השאלות והתשובות המוצגות באתר</p>
          </div>
          <Button onClick={handleNew} className="bg-slate-900 hover:bg-slate-800">
            <Plus className="w-4 h-4 ml-2" />
            שאלה חדשה
          </Button>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {isLoading ? (
            <div className="bg-white rounded-xl p-8 text-center text-slate-500">טוען...</div>
          ) : faqs.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center text-slate-500">
              אין שאלות נפוצות. צור את השאלה הראשונה!
            </div>
          ) : (
            faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-4 border border-slate-200 flex items-start gap-4"
              >
                <div className="flex flex-col gap-1 pt-1">
                  <button
                    onClick={() => moveUp(index)}
                    disabled={index === 0}
                    className="text-slate-400 hover:text-slate-600 disabled:opacity-30"
                  >
                    ▲
                  </button>
                  <button
                    onClick={() => moveDown(index)}
                    disabled={index === faqs.length - 1}
                    className="text-slate-400 hover:text-slate-600 disabled:opacity-30"
                  >
                    ▼
                  </button>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-slate-900">{faq.question}</h3>
                    <Badge className={faq.is_published ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}>
                      {faq.is_published ? 'פורסם' : 'מוסתר'}
                    </Badge>
                  </div>
                  <p className="text-slate-500 text-sm line-clamp-2">{faq.answer}</p>
                </div>

                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => togglePublished(faq)}
                    className={faq.is_published ? 'text-emerald-500' : 'text-slate-400'}
                  >
                    {faq.is_published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(faq)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setDeleteTarget(faq)}>
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Edit Dialog */}
        <Dialog open={isEditing} onOpenChange={setIsEditing}>
          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle>
                {currentFaq.id ? 'עריכת שאלה' : 'שאלה חדשה'}
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">שאלה *</label>
                <Input
                  value={currentFaq.question}
                  onChange={(e) => setCurrentFaq({ ...currentFaq, question: e.target.value })}
                  placeholder="הקלד את השאלה"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">תשובה *</label>
                <Textarea
                  value={currentFaq.answer}
                  onChange={(e) => setCurrentFaq({ ...currentFaq, answer: e.target.value })}
                  placeholder="הקלד את התשובה"
                  className="min-h-[150px]"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <Switch
                  checked={currentFaq.is_published}
                  onCheckedChange={(checked) => setCurrentFaq({ ...currentFaq, is_published: checked })}
                />
                <span className="text-sm text-slate-700">פרסם</span>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  ביטול
                </Button>
                <Button 
                  onClick={handleSave} 
                  disabled={!currentFaq.question || !currentFaq.answer}
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
              <AlertDialogTitle>מחיקת שאלה</AlertDialogTitle>
              <AlertDialogDescription>
                האם למחוק את השאלה "{deleteTarget?.question}"? פעולה זו לא ניתנת לביטול.
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