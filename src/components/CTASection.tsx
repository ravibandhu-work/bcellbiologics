
import React from 'react';
import { ArrowRight, Shield, Clock, Heart } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 medical-gradient text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
          Get Informed. Get Screened. 
          <br />
          <span className="text-cyan-300">Get Stronger.</span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
          Take control of your cervical health today. Early detection saves lives, 
          and with B-Cell's innovative at-home test kit, prevention has never been more accessible.
        </p>

        {/* Key benefits showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">99% Accurate</h3>
            <p className="text-white/80">Clinically validated technology</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">15 Minutes</h3>
            <p className="text-white/80">Fast, reliable results at home</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Complete Privacy</h3>
            <p className="text-white/80">Comfortable and dignified testing</p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover-lift flex items-center gap-2 group">
            Order Your Kit Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all">
            Talk to Our Health Advisor
          </button>
        </div>

        {/* Urgency message */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">Don't Wait. Your Health Can't Wait.</h3>
          <p className="text-white/90 mb-4">
            Cervical cancer is preventable when detected early. Join thousands of women 
            who have taken charge of their health with B-Cell.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Free shipping across India
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              24/7 WhatsApp support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
