import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQSection({ faqs = [] }) {
  const publishedFaqs = faqs
    .filter(faq => faq.is_published)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  if (publishedFaqs.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            שאלות נפוצות
          </h2>
          <p className="text-slate-600 text-lg">
            תשובות לשאלות שאנחנו שומעות הכי הרבה
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {publishedFaqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={`item-${index}`}
                className="bg-slate-50 rounded-xl border border-slate-100 px-6 data-[state=open]:bg-white data-[state=open]:border-violet-200 data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-right text-lg font-semibold text-slate-900 hover:text-violet-600 py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-5 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}