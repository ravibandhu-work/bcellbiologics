import React from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-display">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using B-Cell Biologics services, you accept and agree to be bound by 
              the terms and provision of this agreement. These terms are governed by Indian law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Medical Device Usage</h2>
            <p className="text-gray-600 mb-4">
              Our test kits are intended for diagnostic purposes and should be used as directed. 
              This service does not replace professional medical advice, diagnosis, or treatment.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Follow all instructions provided with the test kit</li>
              <li>Consult healthcare professionals for medical advice</li>
              <li>Report any adverse reactions immediately</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600 mb-4">Users are responsible for:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Providing accurate information</li>
              <li>Using the service lawfully</li>
              <li>Maintaining confidentiality of account information</li>
              <li>Following all applicable Indian regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              B-Cell Biologics shall not be liable for any indirect, incidental, special, or 
              consequential damages arising from the use of our services, subject to Indian 
              consumer protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These terms shall be governed by and construed in accordance with the laws of India. 
              Any disputes shall be subject to the jurisdiction of courts in Bangalore, Karnataka.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Information</h2>
            <p className="text-gray-600">
              For questions regarding these terms, contact us at:
              <br />
              Email: legal@bcellbiologics.com
              <br />
              Address: 258/A, Hosur Rd, Bommasandra Industrial Area, Bangalore, Karnataka 560099
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;