import React from 'react';

import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import StatsSection from '@/components/home/StatsSection';
import MethodSection from '@/components/home/MethodSection';
import TrainingsSection from '@/components/home/TrainingsSection';
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <StatsSection />
      <ProcessSection />
      <MethodSection />
      <CaseStudiesPreview />
      <TrainingsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
