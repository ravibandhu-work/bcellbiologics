
import React from 'react';
import { Play, Shield, Clock, Home } from 'lucide-react';
import heroImage from '../assets/hero-woman-health.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 medical-gradient opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-teal-100 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-medical-100 rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-teal-200 rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Text Content */}
          <div className="lg:pr-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 leading-tight">
              <span className="text-gradient py-2 block">Cervical Cancer Screening Reinvented</span>
              <span className="text-gray-800 py-2 block">Self-Sampling | Rapid Results</span>
              <span className="text-base md:text-lg font-normal text-gray-600 block mt-4">
              No speculum. No discomfort. Just a gentle, self-collected sample — empowering women to screen faster, earlier
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Transform your health journey with B-Cell's innovation. 
              Get accurate HPV and cervical cancer detection from the comfort and privacy.
            </p>

            {/* Key benefits */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">15 Min Results</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">99% Accurate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mb-8">
              <a href="#video">
                <button className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all hover-lift">
                  <Play className="w-5 h-5" />
                  Watch How It Works
                </button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Ongoing Clinical Validation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Trusted by Clinical Professionals</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Woman celebrating health awareness" 
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-200/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
