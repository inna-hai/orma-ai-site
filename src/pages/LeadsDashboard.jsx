import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { 
  Search, Filter, Building2, Mail, Phone, Calendar, 
  Star, Eye, MoreVertical, ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

const statusColors = {
  'חדש': 'bg-blue-100 text-blue-800',
  'נוצר קשר': 'bg-yellow-100 text-yellow-800',
  'בתהליך': 'bg-purple-100 text-purple-800',
  'סגור-זכייה': 'bg-emerald-100 text-emerald-800',
  'סגור-הפסד': 'bg-red-100 text-red-800'
};

export default function LeadsDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedLead, setSelectedLead] = useState(null);

  const queryClient = useQueryClient();

  const { data: leads = [], isLoading } = useQuery({
    queryKey: ['leads'],
    queryFn: () => base44.entities.Lead.list('-created_date'),
    initialData: []
  });

  const updateLeadMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Lead.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
    }
  });

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'חדש').length,
    inProgress: leads.filter(l => l.status === 'בתהליך').length,
    won: leads.filter(l => l.status === 'סגור-זכייה').length,
    enterprise: leads.filter(l => l.is_enterprise).length
  };

  const handleStatusChange = (lead, newStatus) => {
    updateLeadMutation.mutate({ id: lead.id, data: { status: newStatus } });
  };

  const handleNotesUpdate = (notes) => {
    if (selectedLead) {
      updateLeadMutation.mutate({ 
        id: selectedLead.id, 
        data: { notes } 
      });
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">ניהול לידים</h1>
          <p className="text-slate-600">צפה ונהל את כל הפניות מהאתר</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <p className="text-sm text-slate-500">סה"כ</p>
            <p className="text-2xl font-bold text-slate-900">{stats.total}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <p className="text-sm text-slate-500">חדשים</p>
            <p className="text-2xl font-bold text-blue-600">{stats.new}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <p className="text-sm text-slate-500">בתהליך</p>
            <p className="text-2xl font-bold text-purple-600">{stats.inProgress}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <p className="text-sm text-slate-500">זכיות</p>
            <p className="text-2xl font-bold text-emerald-600">{stats.won}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <p className="text-sm text-slate-500">Enterprise</p>
            <p className="text-2xl font-bold text-violet-600">{stats.enterprise}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              placeholder="חיפוש לפי שם, חברה או אימייל..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 h-12"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48 h-12">
              <Filter className="w-4 h-4 ml-2" />
              <SelectValue placeholder="סינון לפי סטטוס" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">כל הסטטוסים</SelectItem>
              <SelectItem value="חדש">חדש</SelectItem>
              <SelectItem value="נוצר קשר">נוצר קשר</SelectItem>
              <SelectItem value="בתהליך">בתהליך</SelectItem>
              <SelectItem value="סגור-זכייה">סגור-זכייה</SelectItem>
              <SelectItem value="סגור-הפסד">סגור-הפסד</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center text-slate-500">טוען...</div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              לא נמצאו לידים
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-right px-6 py-4 text-sm font-medium text-slate-600">שם</th>
                    <th className="text-right px-6 py-4 text-sm font-medium text-slate-600">חברה</th>
                    <th className="text-right px-6 py-4 text-sm font-medium text-slate-600">סטטוס</th>
                    <th className="text-right px-6 py-4 text-sm font-medium text-slate-600">תחום</th>
                    <th className="text-right px-6 py-4 text-sm font-medium text-slate-600">תאריך</th>
                    <th className="text-right px-6 py-4 text-sm font-medium text-slate-600">פעולות</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredLeads.map((lead, index) => (
                    <motion.tr
                      key={lead.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {lead.is_enterprise && (
                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                          )}
                          <div>
                            <p className="font-medium text-slate-900">{lead.full_name}</p>
                            <p className="text-sm text-slate-500">{lead.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-700">{lead.company || '-'}</span>
                        </div>
                        {lead.company_size && (
                          <p className="text-sm text-slate-500">{lead.company_size} עובדים</p>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-1">
                              <Badge className={`${statusColors[lead.status || 'חדש']} cursor-pointer`}>
                                {lead.status || 'חדש'}
                                <ChevronDown className="w-3 h-3 mr-1" />
                              </Badge>
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {Object.keys(statusColors).map(status => (
                              <DropdownMenuItem
                                key={status}
                                onClick={() => handleStatusChange(lead, status)}
                              >
                                <Badge className={statusColors[status]}>{status}</Badge>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-slate-700">{lead.challenge_area || '-'}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-slate-500">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">
                            {lead.created_date ? format(new Date(lead.created_date), 'dd/MM/yyyy') : '-'}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setSelectedLead(lead)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          {lead.phone && (
                            <a href={`tel:${lead.phone}`}>
                              <Button variant="ghost" size="icon">
                                <Phone className="w-4 h-4" />
                              </Button>
                            </a>
                          )}
                          <a href={`mailto:${lead.email}`}>
                            <Button variant="ghost" size="icon">
                              <Mail className="w-4 h-4" />
                            </Button>
                          </a>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Lead Detail Dialog */}
        <Dialog open={!!selectedLead} onOpenChange={() => setSelectedLead(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>פרטי ליד</DialogTitle>
            </DialogHeader>
            {selectedLead && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-500">שם</p>
                    <p className="font-medium">{selectedLead.full_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">אימייל</p>
                    <p className="font-medium">{selectedLead.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">טלפון</p>
                    <p className="font-medium">{selectedLead.phone || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">חברה</p>
                    <p className="font-medium">{selectedLead.company || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">תפקיד</p>
                    <p className="font-medium">{selectedLead.role || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">גודל חברה</p>
                    <p className="font-medium">{selectedLead.company_size || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">תחום האתגר</p>
                    <p className="font-medium">{selectedLead.challenge_area || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">מקור</p>
                    <p className="font-medium text-xs">
                      {selectedLead.utm_source || '-'} / {selectedLead.utm_medium || '-'} / {selectedLead.utm_campaign || '-'}
                    </p>
                  </div>
                </div>

                {selectedLead.message && (
                  <div>
                    <p className="text-sm text-slate-500 mb-2">הודעה</p>
                    <p className="bg-slate-50 rounded-lg p-4 text-slate-700">
                      {selectedLead.message}
                    </p>
                  </div>
                )}

                <div>
                  <p className="text-sm text-slate-500 mb-2">הערות פנימיות</p>
                  <Textarea
                    defaultValue={selectedLead.notes || ''}
                    placeholder="הוסף הערות..."
                    className="min-h-[100px]"
                    onBlur={(e) => handleNotesUpdate(e.target.value)}
                  />
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}