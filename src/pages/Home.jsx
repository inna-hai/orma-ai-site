import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';

import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import MethodSection from '@/components/home/MethodSection';
import ServicesSection from '@/components/home/ServicesSection';
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview';
import StatsSection from '@/components/home/StatsSection';
import CTASection from '@/components/home/CTASection';
import FAQSection from '@/components/home/FAQSection';

export default function Home() {
  const { data: caseStudies = [] } = useQuery({
    queryKey: ['case-studies'],
    queryFn: () => base44.entities.CaseStudy.list(),
    initialData: []
  });

  const { data: faqs = [] } = useQuery({
    queryKey: ['faqs'],
    queryFn: () => base44.entities.FAQ.list(),
    initialData: []
  });

  const { data: settingsData = [] } = useQuery({
    queryKey: ['site-settings'],
    queryFn: () => base44.entities.SiteSettings.list(),
    initialData: []
  });

  const settings = settingsData[0] || {};

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