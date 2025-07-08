
import React from 'react';
import { Check, Star, Users, Repeat } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Single Test",
      price: "₹899",
      originalPrice: "₹1,499",
      description: "Perfect for first-time screening",
      icon: <Star className="w-8 h-8 text-primary" />,
      features: [
        "1 Self-sampling kit",
        "15-minute results",
        "E6/E7 cancer markers",
        "Digital result guide",
        "WhatsApp support",
        "Free shipping"
      ],
      popular: false,
      cta: "Order Now"
    },
    {
      name: "Family Pack",
      price: "₹2,399",
      originalPrice: "₹4,497",
      description: "For mothers, daughters, sisters",
      icon: <Users className="w-8 h-8 text-teal-600" />,
      features: [
        "3 Self-sampling kits",
        "15-minute results each",
        "E6/E7 cancer markers",
        "Digital result guide",
        "Priority WhatsApp support",
        "Free express shipping",
        "Family health tracking"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Annual Care",
      price: "₹3,999",
      originalPrice: "₹5,996",
      description: "Complete yearly protection",
      icon: <Repeat className="w-8 h-8 text-green-600" />,
      features: [
        "4 Self-sampling kits",
        "Quarterly testing",
        "E6/E7 cancer markers",
        "Digital health tracking",
        "Dedicated health advisor",
        "Free shipping all year",
        "Reminder notifications",
        "Telehealth consultation"
      ],
      popular: false,
      cta: "Coming Soon"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Affordable <span className="text-gradient">Healthcare</span> for Every Woman
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best fits your health needs and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-primary/5 to-teal-50 border-2 border-primary shadow-xl scale-105' 
                  : 'bg-white border border-gray-200 shadow-lg'
              } hover-lift`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold text-gray-900 font-display">
                    {plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      {plan.originalPrice}
                    </span>
                  )}
                </div>
                {plan.originalPrice && (
                  <div className="text-sm text-green-600 font-semibold">
                    Save ₹{parseInt(plan.originalPrice.replace('₹', '').replace(',', '')) - parseInt(plan.price.replace('₹', '').replace(',', ''))}
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-lg'
                    : plan.cta === 'Coming Soon'
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
                disabled={plan.cta === 'Coming Soon'}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-gray-600">
              We're confident in our technology. If you're not satisfied with your experience, 
              we'll refund your purchase within 30 days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
