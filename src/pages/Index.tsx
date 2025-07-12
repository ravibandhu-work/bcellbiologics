
import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ComparisonSection from '../components/ComparisonSection';
import PricingSection from '../components/PricingSection';
import VideoSection from '../components/VideoSection';
import DiseasePanelsSection from '../components/DiseasePanelsSection';
import RapidTestSection from '../components/RapidTestSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DiseasePanelsSection />
        <RapidTestSection />
        <ComparisonSection />
        {/* <PricingSection /> */}
        <VideoSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
