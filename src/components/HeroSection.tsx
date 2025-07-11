
import React from 'react';
import { Play, Shield, Clock, Home } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 medical-gradient opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-teal-100 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-medical-100 rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-teal-200 rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight">
            <span className="text-gradient block">Empowering Women's Health</span>
            <span className="text-sm md:text-lg font-normal text-gray-600 block mt-4">
              Revolutionary At-Home HPV & Cervical Cancer Screening
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your health journey with B-Cell's innovative self-sampling test kit. 
            Get accurate HPV and cervical cancer detection from the comfort and privacy of your home.
          </p>

          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <Home className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">At Home</span>
            </div>
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
          <div className="flex justify-center items-center">
            <button className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all hover-lift">
              <Play className="w-5 h-5" />
              Watch How It Works
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Clinically Validated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>FDA Approved Technology</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Trusted by 10,000+ Women</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
