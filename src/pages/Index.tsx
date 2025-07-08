
import React from 'react';
import { Lenis } from '@lenis/react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ComparisonSection from '../components/ComparisonSection';
import TestimonialSection from '../components/TestimonialSection';
import PricingSection from '../components/PricingSection';
import WhoItsForSection from '../components/WhoItsForSection';
import VideoSection from '../components/VideoSection';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <Lenis root>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <HeroSection />
          <StatsSection />
          <FeaturesSection />
          <HowItWorksSection />
          <ComparisonSection />
          <TestimonialSection />
          <PricingSection />
          <WhoItsForSection />
          <VideoSection />
          <CTASection />
          <FAQSection />
          <ContactSection />
        </main>
      </div>
    </Lenis>
  );
};

export default Index;
