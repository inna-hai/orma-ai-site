import React from 'react';
import { motion } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';

const sources = [
  { name: 'Airtable', method: 'API ישיר — הורדה אוטומטית מלאה', complexity: 'low' },
  { name: 'Monday.com', method: 'GraphQL API — מיפוי בורדים וטבלאות', complexity: 'low' },
  { name: 'HubSpot', method: 'REST API — contacts, deals, tickets', complexity: 'medium' },
  { name: 'Salesforce', method: 'Bulk API / SOQL — כל האובייקטים', complexity: 'medium' },
  { name: 'Google Sheets / Excel', method: 'ייבוא ישיר — המרה אוטומטית', complexity: 'low' },
  { name: 'Zoho / Pipedrive', method: 'REST API — modules + records', complexity: 'medium' },
  { name: 'מערכת מותאמת / DB', method: 'SQL export / custom connector', complexity: 'high' },
];

const complexityLabel = {
  low: { text: 'נמוכה', className: 'bg-green-100 text-green-800' },
  medium: { text: 'בינונית', className: 'bg-amber-100 text-amber-800' },
  high: { text: 'בינונית-גבוהה', className: 'bg-amber-100 text-amber-800' },
};

export default function TrainingsSection() {
  return (
    <section className="py-24 bg-white" id="migration">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-indigo-600 text-sm font-bold tracking-widest uppercase">תאימות מלאה</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 mt-2">
            מערכות מקור נתמכות למיגרציה
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            לא משנה מאיפה אתם מגיעים — אנחנו מעבירים הכל
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-x-auto"
        >
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="bg-slate-900 text-white px-5 py-3 text-right font-semibold rounded-tr-xl">מערכת</th>
                <th className="bg-slate-900 text-white px-5 py-3 text-right font-semibold">שיטת חיבור</th>
                <th className="bg-slate-900 text-white px-5 py-3 text-right font-semibold rounded-tl-xl">מורכבות</th>
              </tr>
            </thead>
            <tbody>
              {sources.map((source, i) => {
                const comp = complexityLabel[source.complexity];
                return (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-semibold text-slate-900">{source.name}</td>
                    <td className="px-5 py-4 text-slate-600">{source.method}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-block px-3 py-1 rounded-md text-xs font-semibold ${comp.className}`}>
                        {comp.text}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
