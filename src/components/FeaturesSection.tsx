
import React from 'react';
import { TestTube, Clock, Search, Shield, DollarSign, Heart } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <TestTube className="w-8 h-8 text-primary" />,
      title: "Self-Sampling Simplicity",
      description: "Collect your sample at your convenience with our easy-to-use, sterile collection kit."
    },
    {
      icon: <Clock className="w-8 h-8 text-teal-600" />,
      title: "Rapid 30-Minute Results",
      description: "Get your results in just 30 minutes. No waiting days or weeks for lab reports."
    },
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Dual Biomarker Detection",
      description: "Advanced E6/E7 oncoprotein detection identifies both HPV presence and cancer progression indicators."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Non-Invasive & Comfortable",
      description: "No speculum examination needed. Maintain your dignity and comfort throughout the process."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-orange-600" />,
      title: "Affordable Healthcare",
      description: "Cost-effective solution making cervical cancer screening accessible to all economic backgrounds."
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: "Privacy & Stigma-Free",
      description: "Complete privacy. No embarrassment, no judgment, just empowered healthcare."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            <span className="block">Why Choose</span>
            <span className="text-gradient">B-Cell's</span> Cervical Cancer Screening Kit?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed for every women who value convenience, accuracy, and privacy in their healthcare journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-teal-50 transition-all duration-300 hover-lift"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-xl bg-gray-50 group-hover:bg-white transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-display">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Trusted by Healthcare Professionals
            </h3>
            <p className="text-gray-600 max-w-2xl">
              Our patented E6/E7 oncoprotein detection technology has been validated through 
              rigorous clinical trials and is recommended by gynecologists across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
