import React from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <div className="flex items-center gap-3 mb-8">
          <AlertTriangle className="w-8 h-8 text-amber-500" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">Medical Disclaimer</h1>
        </div>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Medical Notice</h3>
            <p className="text-amber-700">
              The information provided by B-Cell Biologics is for informational purposes only and 
              should not be considered as medical advice, diagnosis, or treatment.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Not a Substitute for Professional Medical Care</h2>
            <p className="text-gray-600 mb-4">
              Our test kits and services are not intended to replace professional medical consultation, 
              diagnosis, or treatment. Always seek the advice of qualified healthcare providers with 
              any questions regarding medical conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Test Limitations</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Test results should be interpreted by qualified medical professionals</li>
              <li>False positives and false negatives are possible with any diagnostic test</li>
              <li>Results may be affected by various factors including sample quality</li>
              <li>Follow-up testing may be required for confirmation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Emergency Situations</h2>
            <p className="text-gray-600 mb-4">
              If you are experiencing a medical emergency, contact emergency services immediately. 
              Do not rely on our test results for emergency medical decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Regulatory Compliance</h2>
            <p className="text-gray-600 mb-4">
              Our products comply with applicable Indian medical device regulations. However, 
              regulatory approval does not guarantee specific outcomes or effectiveness for 
              individual cases.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Age and Health Restrictions</h2>
            <p className="text-gray-600 mb-4">
              This test is intended for women aged 15-65 years. Consult healthcare providers if you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Are pregnant or breastfeeding</li>
              <li>Have a history of cervical abnormalities</li>
              <li>Are immunocompromised</li>
              <li>Have any concerns about your reproductive health</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Liability Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              B-Cell Biologics disclaims all liability for any damages arising from reliance on 
              test results or information provided, except as required under Indian consumer 
              protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact for Medical Concerns</h2>
            <p className="text-gray-600">
              For medical questions or concerns about test results, consult your healthcare provider 
              or contact our medical team at:
              <br />
              Email: medical@bcellbiologics.com
              <br />
              Phone: +91 80012 34567
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;