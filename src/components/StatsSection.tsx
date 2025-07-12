
import React from 'react';
import { AlertTriangle, Users, TrendingUp, Clock } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      number: "2nd",
      label: "Most common cancer among Indian women",
      description: "Cervical cancer affects millions"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      number: "1.2L+",
      label: "New cases diagnosed annually",
      description: "Every year in India alone"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      number: "77,000+",
      label: "Deaths annually",
      description: "Largely due to late detection"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      number: "80%",
      label: "Women never screened",
      description: "In India have never been tested"
    }
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Cervical Cancer: A <span className="text-red-600">Silent Threat</span> with Preventable Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the urgent need for accessible cervical cancer screening in India and Globally
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover-lift text-center"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2 font-display">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg text-center mb-16">
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-4 font-display">
            "Early intervention isn't just possible — it's <span className="text-primary">imperative</span>"
          </blockquote>
          <p className="text-gray-600">
            With proper screening, cervical cancer is one of the most preventable cancers. 
            B-Cell's cervical cancer screening kit makes early detection accessible to every woman.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
