import React from 'react';

const RapidTestSection = () => {
  const tests = [
    {
      title: "Rapid COVID-19 Test Kits",
      description: "Detect COVID-19 quickly with our reliable and easy-to-use rapid test kits.",
      image: "/lovable-uploads/1ce48187-a24d-452a-bfd3-3273fb3c397d.png"
    },
    {
      title: "Malaria Detection Solutions",
      description: "Fast and accurate malaria detection using advanced diagnostic technology.",
      image: "/lovable-uploads/6ac50e1a-1ce0-4e43-8694-8643958ea479.png"
    },
    {
      title: "HIV Diagnostic Tests",
      description: "Efficiently identify HIV infections with our precise diagnostic tests.",
      image: "/lovable-uploads/bdeeb627-8b0a-4ff5-8563-3745268a94ca.png"
    },
    {
      title: "Tuberculosis Rapid Testing",
      description: "Quickly determine tuberculosis presence with our sensitive testing solutions.",
      image: "/lovable-uploads/eb3bc16b-05b4-41ae-8b6f-b80a9c56c4fb.png"
    },
    {
      title: "Dengue Fever Rapid Kits",
      description: "Identify dengue fever swiftly with our effective and swift test kits.",
      image: "/lovable-uploads/a6968250-cb6e-478a-bb4b-1aea3a8a4ffe.png"
    },
    {
      title: "Influenza Detection Services",
      description: "Accurate influenza virus detection through our advanced rapid test methods.",
      image: "/lovable-uploads/9ec8e93d-9f9e-41ab-a0c8-a150020918a0.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Reliable <span className="text-gradient">Rapid Test Diagnostics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of rapid diagnostic tests for immediate and accurate results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tests.map((test, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover-lift">
              <div className="aspect-w-16 aspect-h-12 bg-white">
                <img 
                  src={test.image} 
                  alt={test.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                  {test.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {test.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RapidTestSection;