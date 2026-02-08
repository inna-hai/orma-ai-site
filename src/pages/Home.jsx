import React from 'react';
import { caseStudies, faqs, siteSettings } from '@/data/staticData';

import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import MethodSection from '@/components/home/MethodSection';
import ServicesSection from '@/components/home/ServicesSection';
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview';
import StatsSection from '@/components/home/StatsSection';
import CTASection from '@/components/home/CTASection';
import FAQSection from '@/components/home/FAQSection';

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <ProblemSection />
      <MethodSection />
      <ServicesSection />
      <CaseStudiesPreview caseStudies={caseStudies} />
      <CTASection />
      <FAQSection faqs={faqs} />
    </div>
  );
}
