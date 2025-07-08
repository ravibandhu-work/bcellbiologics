
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is the B-Cell test kit painful or uncomfortable?",
      answer: "Not at all! The self-sampling process is designed to be comfortable and non-invasive. Unlike traditional Pap smears that require a speculum, our test uses a simple swab that you can use yourself in the privacy of your home. Most women find it much more comfortable than conventional screening methods."
    },
    {
      question: "How accurate is the B-Cell test compared to traditional lab tests?",
      answer: "Our test has been clinically validated with 99%+ accuracy for detecting both HPV and cancer progression markers. The E6/E7 oncoprotein detection actually provides more comprehensive information than traditional HPV tests, as it identifies not just the presence of HPV but also active cancer development."
    },
    {
      question: "Can I use the test during menstruation?",
      answer: "For best results, we recommend using the test when you're not menstruating. Ideally, test 5 days after your period ends and before it begins again. However, light spotting won't significantly affect the results."
    },
    {
      question: "What happens if my test shows positive results?",
      answer: "A positive result doesn't mean you have cancer - it indicates the presence of HPV or cancer progression markers that require follow-up. We provide clear guidance on next steps, including recommendations to consult with a gynecologist for confirmatory testing and appropriate treatment if needed."
    },
    {
      question: "Is my privacy protected when ordering and using the kit?",
      answer: "Absolutely. We use discreet packaging with no medical labeling. Your personal health information is completely confidential and never shared with third parties. The entire process from ordering to testing to results is designed with your privacy in mind."
    },
    {
      question: "How often should I use the B-Cell test kit?",
      answer: "For women aged 21-30, we recommend testing every 3 years if results are normal. For women over 30, testing every 3-5 years is typically sufficient. However, consult with your healthcare provider for personalized recommendations based on your health history and risk factors."
    },
    {
      question: "What if I need help interpreting my results?",
      answer: "Every kit comes with a detailed result interpretation guide. Additionally, our trained health advisors are available via WhatsApp and phone to help you understand your results and guide you on appropriate next steps. We also provide telehealth consultation options."
    },
    {
      question: "Is the test kit approved and safe to use?",
      answer: "Yes, our test kit uses FDA-approved technology and has undergone rigorous clinical validation. All components are sterile, safe, and manufactured under strict quality control standards. The test has been developed by experienced scientists and validated through multiple clinical studies."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Frequently <span className="text-gradient">Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about B-Cell's at-home HPV & cervical cancer test kit
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our health advisors are here to help you make informed decisions about your cervical health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                Chat on WhatsApp
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
