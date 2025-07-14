
import React from 'react';
import { Package, TestTube2, Timer, FileText } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Package className="w-10 h-10 text-primary" />,
      title: "Access Self-Sampling Kits",
      description: "Equip your facility with clinically validated HPV self-sampling kits, designed for easy integration into screening programs and remote care pathways.",
      detail: "Each kit includes everything needed for hygienic and dignified sample collection."
    },
    {
      icon: <TestTube2 className="w-10 h-10 text-teal-600" />,
      title: "Collect Sample",
      description: "Follow our simple instructions to collect your sample using the provided sterile swab in complete privacy.",
      detail: "No speculum required - comfortable and dignified process"
    },
    {
      icon: <Timer className="w-10 h-10 text-blue-600" />,
      title: "Read the Cassette",
      description: "Place the sample into the test cassette and wait just 15 minutes for your results to appear.",
      detail: "Color-coded bands indicate HPV presence and cancer progression markers"
    },
    {
      icon: <FileText className="w-10 h-10 text-green-600" />,
      title: "Interpret Results",
      description: "Read your results using our clear interpretation guide.",
      detail: "Follow-up guidance provided for both positive and negative results"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 medical-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            How the <span className="text-gradient">B-Cell Cervical Cancer (OncoCerv™) Kit</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to take control of your cervical health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0" />
              )}
              
              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg hover-lift text-center h-full">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-teal-50">
                    {step.icon}
                  </div>
                </div>
                <div className="text-lg font-bold text-primary mb-2">
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-display">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {step.description}
                </p>
                <p className="text-sm text-gray-500 italic">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Science behind the test */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              The Science Behind Our Technology
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
            Our test doesn’t just see if you have high-risk HPV—it also checks for extra warning signs that the virus might be turning into cancer. That means it’s smarter than regular HPV tests, giving you clearer answers about your risk.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-primary">Cancer Detection</span>
              </div>
              <div className="bg-teal-100 px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-teal-700">Broad Range HPV Screening</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
