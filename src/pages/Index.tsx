import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
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
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
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
  );
};

export default Index;
