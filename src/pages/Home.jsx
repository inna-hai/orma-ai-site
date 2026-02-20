import React from 'react';
import { caseStudies, faqs } from '@/data/staticData';

import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview';
import TrainingsSection from '@/components/home/TrainingsSection';
import StatsSection from '@/components/home/StatsSection';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <CaseStudiesPreview caseStudies={caseStudies} />
      <TrainingsSection />
      <StatsSection />
      <FAQSection faqs={faqs} />
      <CTASection />
    </div>
  );
}
