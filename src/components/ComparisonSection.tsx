
import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  const comparisons = [
    {
      feature: "Speculum Examination",
      traditional: false,
      bcell: true
    },
    {
      feature: "Detects HPV Only",
      traditional: false,
      bcell: true
    },
    {
      feature: "Detects Cancer Progression",
      traditional: true,
      bcell: false
    },
    {
      feature: "Result Turnaround",
      traditional: "Days to Weeks",
      bcell: "15 Minutes"
    },
    {
      feature: "Privacy & Comfort",
      traditional: false,
      bcell: false
    },
    {
      feature: "Cost Effectiveness",
      traditional: false,
      bcell: false
    },
    {
      feature: "Accessibility",
      traditional: false,
      bcell: false
    }
  ];

  const renderCell = (value: boolean | string, isPositive: boolean = true) => {
    if (typeof value === 'boolean') {
      return value === isPositive ? (
        <Check className="w-6 h-6 text-green-500 mx-auto" />
      ) : (
        <X className="w-6 h-6 text-red-500 mx-auto" />
      );
    }
    return <span className="text-sm font-medium">{value}</span>;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Why <span className="text-gradient">OncoCerv™</span> is Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our innovative approach compares to traditional cervical cancer screening methods
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-primary/5 to-teal-50">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900 font-display">
                    Capability
                  </th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-gray-900 font-display">
                    Traditional Lab Test
                  </th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-primary font-display">
                    B-Cell Solution
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">Speculum Examination</td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-6 h-6 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <X className="w-6 h-6 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">HPV Detection Only</td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-6 h-6 text-orange-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <X className="w-6 h-6 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">Detects Cancer Progression</td>
                  <td className="px-6 py-4 text-center">
                    <X className="w-6 h-6 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-6 h-6 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">Result Turnaround</td>
                  <td className="px-6 py-4 text-center text-red-600 font-medium">
                    3-7 Days
                  </td>
                  <td className="px-6 py-4 text-center text-green-600 font-medium">
                    15 Minutes
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">Privacy & Comfort</td>
                  <td className="px-6 py-4 text-center">
                    <X className="w-6 h-6 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-6 h-6 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">Cost per Test</td>
                  <td className="px-6 py-4 text-center text-red-600 font-medium">
                    5x More expensive
                  </td>
                  <td className="px-6 py-4 text-center text-green-600 font-medium">
                    More affordable
                  </td>
                </tr>
                {/* <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">Accessibility</td>
                  <td className="px-6 py-4 text-center text-red-600 font-medium">
                    Urban Only
                  </td>
                  <td className="px-6 py-4 text-center text-green-600 font-medium">
                    Nationwide
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
              The Clear Choice for Modern Women
            </h3>
            <p className="text-gray-600">
              B-Cell's innovative approach eliminates barriers to cervical cancer screening, 
              making prevention accessible, affordable, and comfortable for every woman.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
