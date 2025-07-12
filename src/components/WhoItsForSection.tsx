
import React from 'react';
import { Users, Heart, Shield, Clock } from 'lucide-react';

const WhoItsForSection = () => {
  const targetGroups = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Women Over 15",
      description: "Especially those who have been sexually active and need regular cervical screening as recommended by healthcare guidelines.",
      highlight: "Age 15-65 years"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: "Privacy-Conscious Women",
      description: "For people who value privacy, comfort, and dignity—our self‑sampling kit lets you collect your own sample gently and discreetly, without the stress of a traditional clinic visit.",
      highlight: "Complete privacy"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Never Screened Before",
      description: "Women who have avoided cervical screening due to fear, embarrassment, or lack of access to healthcare facilities.",
      highlight: "First-time friendly"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "Busy Professionals",
      description: "Working women who find it difficult to take time off for medical appointments but want to prioritize their health.",
      highlight: "Convenient timing"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Who Can <span className="text-gradient">Benefit</span> from B-Cell?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our test kit is designed for every Indian women who value their health, privacy, and convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {targetGroups.map((group, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gray-50">
                  {group.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 font-display">
                      {group.title}
                    </h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {group.highlight}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {group.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional considerations */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center font-display">
            Important Considerations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🩺</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Medical History</h4>
              <p className="text-sm text-gray-600">
                Suitable for women with or without symptoms. Not a replacement for regular gynecological care.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Rural & Urban</h4>
              <p className="text-sm text-gray-600">
                Perfect for women in both rural and urban areas where access to quality healthcare is limited.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cost-Conscious</h4>
              <p className="text-sm text-gray-600">
                Affordable alternative to expensive clinic visits and laboratory tests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
