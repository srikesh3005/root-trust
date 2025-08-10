import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Shield, Award, BarChart3, PieChart, Calendar, CheckCircle, ExternalLink, TrendingUp } from 'lucide-react';

interface TransparencyPageProps {
  onPageChange: (page: string) => void;
}

const TransparencyPage: React.FC<TransparencyPageProps> = ({ onPageChange }) => {
  const [activeTab, setActiveTab] = useState<'reports' | 'financials' | 'certifications' | 'impact'>('reports');

  const annualReports = [
    {
      year: '2023-24',
      title: 'Annual Impact Report 2023-24',
      description: 'Comprehensive overview of our programs, achievements, and financial performance.',
      pages: 45,
      highlights: ['Reached 15,000+ beneficiaries', '95% program efficiency', '8 new partnerships'],
      downloadUrl: '#',
      size: '3.2 MB'
    },
    {
      year: '2022-23',
      title: 'Annual Impact Report 2022-23',
      description: 'Our journey through recovery and growth during challenging times.',
      pages: 38,
      highlights: ['Adapted programs for COVID-19', '12,000+ lives impacted', '5 innovation awards'],
      downloadUrl: '#',
      size: '2.8 MB'
    },
    {
      year: '2021-22',
      title: 'Annual Impact Report 2021-22',
      description: 'Demonstrating resilience and continued impact during the pandemic.',
      pages: 42,
      highlights: ['Emergency relief programs', '10,000+ families supported', '3 new states covered'],
      downloadUrl: '#',
      size: '3.1 MB'
    }
  ];

  const financialData = [
    { category: 'Program Expenses', percentage: 85, amount: '₹4.25 Cr', color: 'bg-teal-600' },
    { category: 'Administrative Costs', percentage: 10, amount: '₹50 L', color: 'bg-blue-600' },
    { category: 'Fundraising Expenses', percentage: 5, amount: '₹25 L', color: 'bg-orange-600' }
  ];

  const certifications = [
    {
      title: '80G Tax Exemption Certificate',
      issueDate: '2023-04-15',
      validUntil: '2025-04-14',
      issuingAuthority: 'Income Tax Department, Government of India',
      certificateNo: 'DIT(E)/MC/80G/2023/1234',
      status: 'Valid',
      description: 'Allows donors to claim tax deduction up to 50% of donation amount'
    },
    {
      title: 'FCRA Registration Certificate',
      issueDate: '2022-10-20',
      validUntil: '2027-10-19',
      issuingAuthority: 'Ministry of Home Affairs, Government of India',
      certificateNo: 'FCRA-083781234',
      status: 'Valid',
      description: 'Permits receipt of foreign contributions for social activities'
    },
    {
      title: '12A Registration Certificate',
      issueDate: '2020-06-30',
      validUntil: 'Permanent',
      issuingAuthority: 'Income Tax Department, Government of India',
      certificateNo: '12A-456789012',
      status: 'Valid',
      description: 'Exempts the organization from paying income tax on surplus income'
    },
    {
      title: 'CSR Eligibility Certificate',
      issueDate: '2023-01-10',
      validUntil: '2024-12-31',
      issuingAuthority: 'Ministry of Corporate Affairs',
      certificateNo: 'CSR-2023-0012345',
      status: 'Valid',
      description: 'Eligible to receive CSR funds from corporations'
    }
  ];

  const impactMetrics = [
    {
      metric: 'Lives Impacted',
      current: 50247,
      previous: 38950,
      growth: 29,
      icon: TrendingUp,
      description: 'Total individuals who have directly benefited from our programs'
    },
    {
      metric: 'Projects Completed',
      current: 203,
      previous: 158,
      growth: 28,
      icon: CheckCircle,
      description: 'Successfully completed development projects across all focus areas'
    },
    {
      metric: 'Communities Served',
      current: 85,
      previous: 67,
      growth: 27,
      icon: Shield,
      description: 'Villages and communities where we have active interventions'
    },
    {
      metric: 'Partner Organizations',
      current: 42,
      previous: 35,
      growth: 20,
      icon: Award,
      description: 'Local NGOs, government agencies, and corporations we collaborate with'
    }
  ];

  const auditReports = [
    {
      year: '2023-24',
      auditor: 'Deloitte Haskins & Sells LLP',
      opinion: 'Unqualified Opinion',
      dateCompleted: '2024-06-30',
      keyFindings: [
        'All financial records maintained appropriately',
        'No material misstatements identified',
        'Strong internal controls and governance'
      ]
    },
    {
      year: '2022-23',
      auditor: 'Deloitte Haskins & Sells LLP',
      opinion: 'Unqualified Opinion',
      dateCompleted: '2023-06-30',
      keyFindings: [
        'Transparent fund utilization',
        'Effective program implementation',
        'Compliance with all regulatory requirements'
      ]
    }
  ];

  const programEfficiency = [
    { program: 'Education Initiative', efficiency: 92, beneficiaries: 2500, budget: '₹45 L' },
    { program: 'Healthcare Program', efficiency: 88, beneficiaries: 15000, budget: '₹80 L' },
    { program: 'Livelihood Development', efficiency: 90, beneficiaries: 3200, budget: '₹35 L' },
    { program: 'Emergency Relief', efficiency: 95, beneficiaries: 8000, budget: '₹25 L' }
  ];

  const TabButton = ({ id, label, isActive, onClick }: { id: string, label: string, isActive: boolean, onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-medium rounded-lg transition-all duration-200 ${
        isActive 
          ? 'bg-teal-600 text-white shadow-lg' 
          : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">Transparency & Accountability</h1>
          <p className="text-xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            We believe in complete transparency. Here you'll find detailed information about our finances, 
            impact measurements, certifications, and governance practices.
          </p>
        </div>

        {/* Trust Indicators */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Commitment to Transparency</h2>
            <p className="text-gray-600">Key indicators of our accountability and trustworthiness</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-50 p-4 rounded-xl">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900 mb-1">95%</p>
                <p className="text-gray-600 font-medium text-sm">Funds to Programs</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 p-4 rounded-xl">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900 mb-1">15</p>
                <p className="text-gray-600 font-medium text-sm">Years Certified</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-teal-50 p-4 rounded-xl">
                <BarChart3 className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900 mb-1">A+</p>
                <p className="text-gray-600 font-medium text-sm">Accountability Rating</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-orange-50 p-4 rounded-xl">
                <CheckCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900 mb-1">100%</p>
                <p className="text-gray-600 font-medium text-sm">Audit Compliance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <TabButton
            id="reports"
            label="Annual Reports"
            isActive={activeTab === 'reports'}
            onClick={() => setActiveTab('reports')}
          />
          <TabButton
            id="financials"
            label="Financial Information"
            isActive={activeTab === 'financials'}
            onClick={() => setActiveTab('financials')}
          />
          <TabButton
            id="certifications"
            label="Certifications"
            isActive={activeTab === 'certifications'}
            onClick={() => setActiveTab('certifications')}
          />
          <TabButton
            id="impact"
            label="Impact Measurement"
            isActive={activeTab === 'impact'}
            onClick={() => setActiveTab('impact')}
          />
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Annual Reports Tab */}
          {activeTab === 'reports' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Annual Reports</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive reports detailing our activities, achievements, challenges, and financial performance.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {annualReports.map((report, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-8 w-8 text-teal-600" />
                        <div>
                          <h3 className="font-bold text-gray-900">{report.year}</h3>
                          <p className="text-sm text-gray-600">{report.pages} pages</p>
                        </div>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Latest
                      </span>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">{report.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{report.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Key Highlights:</h5>
                      <ul className="space-y-1">
                        {report.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm text-gray-500">{report.size}</span>
                      <button className="flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Financial Information Tab */}
          {activeTab === 'financials' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Transparency</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Complete breakdown of how your donations are utilized and our financial performance.
                </p>
              </div>

              {/* Fund Allocation */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Fund Allocation (2023-24)</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-4">
                      {financialData.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-900">{item.category}</span>
                            <div className="text-right">
                              <span className="font-bold text-gray-900">{item.percentage}%</span>
                              <p className="text-sm text-gray-600">{item.amount}</p>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className={`h-3 rounded-full ${item.color} transition-all duration-300`}
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="h-32 w-32 text-teal-600 mx-auto mb-4" />
                      <p className="text-lg font-semibold text-gray-900">Total Annual Budget</p>
                      <p className="text-3xl font-bold text-teal-600">₹5.2 Crores</p>
                      <p className="text-gray-600">Fiscal Year 2023-24</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Efficiency */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Efficiency</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Program</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Efficiency</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Beneficiaries</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Budget</th>
                      </tr>
                    </thead>
                    <tbody>
                      {programEfficiency.map((program, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">{program.program}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-green-600 h-2 rounded-full"
                                  style={{ width: `${program.efficiency}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium text-gray-900">{program.efficiency}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-900">{program.beneficiaries.toLocaleString()}</td>
                          <td className="py-3 px-4 font-medium text-gray-900">{program.budget}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Audit Reports */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Independent Audit Reports</h3>
                <div className="space-y-6">
                  {auditReports.map((audit, index) => (
                    <div key={index} className="border rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-bold text-gray-900">Financial Year {audit.year}</h4>
                          <p className="text-gray-600">Audited by: {audit.auditor}</p>
                          <p className="text-sm text-gray-500">Completed: {audit.dateCompleted}</p>
                        </div>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {audit.opinion}
                        </span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Key Findings:</h5>
                        <ul className="space-y-1">
                          {audit.keyFindings.map((finding, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start space-x-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                              <span>{finding}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Certifications & Compliance</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  All necessary legal registrations and certifications that validate our operations and ensure compliance.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-8 w-8 text-teal-600" />
                        <div>
                          <h3 className="font-bold text-gray-900">{cert.title}</h3>
                          <p className="text-sm text-gray-600">{cert.certificateNo}</p>
                        </div>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {cert.status}
                      </span>
                    </div>

                    <p className="text-gray-700 text-sm mb-4">{cert.description}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Issued:</span>
                        <span className="font-medium text-gray-900">{cert.issueDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Valid Until:</span>
                        <span className="font-medium text-gray-900">{cert.validUntil}</span>
                      </div>
                      <div className="pt-2 border-t">
                        <p className="text-gray-600 text-xs">{cert.issuingAuthority}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t flex justify-between items-center">
                      <span className="text-sm text-gray-500">Certificate #{cert.certificateNo.split('/').pop()}</span>
                      <button className="flex items-center space-x-1 text-teal-600 hover:text-teal-700 text-sm font-medium">
                        <ExternalLink className="h-4 w-4" />
                        <span>Verify</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Impact Measurement Tab */}
          {activeTab === 'impact' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact Measurement & Outcomes</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  How we measure success and track the long-term impact of our programs on communities.
                </p>
              </div>

              {/* Key Metrics */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Impact Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {impactMetrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-teal-50 p-4 rounded-xl mb-4">
                        <metric.icon className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-gray-900 mb-1">
                          {metric.current.toLocaleString()}
                        </p>
                        <p className="text-gray-600 font-medium text-sm">{metric.metric}</p>
                        <div className="flex items-center justify-center space-x-1 mt-2">
                          <TrendingUp className="h-3 w-3 text-green-600" />
                          <span className="text-green-600 font-medium text-xs">+{metric.growth}%</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">{metric.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Measurement Methodology */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Measurement Methodology</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Baseline Studies</h4>
                    <p className="text-gray-600 text-sm">Comprehensive assessments before program implementation</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Regular Monitoring</h4>
                    <p className="text-gray-600 text-sm">Monthly tracking of key performance indicators</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-orange-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">External Evaluation</h4>
                    <p className="text-gray-600 text-sm">Independent assessments by third-party evaluators</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Impact Assessment</h4>
                    <p className="text-gray-600 text-sm">Long-term outcome evaluation and sustainability analysis</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <section className="mt-16 text-center bg-teal-600 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Questions About Our Operations?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            We're committed to complete transparency. If you need any additional information 
            or have questions about our reports, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => onPageChange('contact')}
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us
            </button>
            <button
              onClick={() => onPageChange('donate')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-200"
            >
              Support Our Work
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TransparencyPage;