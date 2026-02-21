import React from 'react';

import HeroSection from '@/components/home/HeroSection';
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import TrainingsSection from '@/components/home/TrainingsSection';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CaseStudiesPreview />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <TrainingsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
