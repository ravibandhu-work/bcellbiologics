import React from 'react';
import { TestTube, Microscope, Activity } from 'lucide-react';

const DiseasePanelsSection = () => {
  const panels = [
    {
      icon: TestTube,
      title: "Comprehensive Disease Panels",
      description: "Rapidly detect multiple diseases with our integrated testing panels.",
      image: "/api/placeholder/400/300" // Replace with your first medical image
    },
    {
      icon: Activity,
      title: "Point-of-Care Testing Solutions",
      description: "Facilitate immediate diagnosis with our user-friendly testing kits.",
      image: "/api/placeholder/400/300" // Replace with your second medical image
    },
    {
      icon: Microscope,
      title: "Innovative Biomarker Detection",
      description: "Utilize cutting-edge technology for accurate biomarker identification.",
      image: "/api/placeholder/400/300" // Replace with your third medical image
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Advanced <span className="text-gradient">Diagnostic Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge medical technology for accurate and rapid disease detection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {panels.map((panel, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover-lift">
              <div className="aspect-w-16 aspect-h-10 bg-gray-100">
                <img 
                  src={panel.image} 
                  alt={panel.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-8">
                <div className="p-3 bg-primary/10 rounded-xl w-12 h-12 mb-6 flex items-center justify-center">
                  <panel.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">
                  {panel.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {panel.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiseasePanelsSection;