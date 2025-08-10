import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Globe, Calendar, MapPin } from 'lucide-react';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onPageChange }) => {
  const trustees = [
    {
      name: 'Dr. Anita Patel',
      position: 'Chairperson & Founder',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Former Director of Public Health with 25+ years in community development. Passionate about creating sustainable change through education and healthcare initiatives.',
      qualifications: 'MBBS, MPH, PhD in Public Health'
    },
    {
      name: 'Rajesh Sharma',
      position: 'Managing Trustee',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Social entrepreneur with expertise in rural development and microfinance. Led multiple successful community development programs across 8 states.',
      qualifications: 'MBA in Rural Management, MA in Social Work'
    },
    {
      name: 'Prof. Sarah Mitchell',
      position: 'Education Director',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'International education specialist who has developed innovative learning programs for underserved communities worldwide.',
      qualifications: 'PhD in Education Policy, MEd in Special Education'
    },
    {
      name: 'Mr. Vikram Singh',
      position: 'Financial Controller',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Chartered accountant with 20 years experience in nonprofit financial management. Ensures transparent and efficient use of funds.',
      qualifications: 'CA, CPA, MBA in Finance'
    }
  ];

  const milestones = [
    { year: 2010, event: 'Root Lamp Trust established with mission to serve underserved communities' },
    { year: 2012, event: 'First education center opened in rural Maharashtra, serving 200 children' },
    { year: 2015, event: 'Launched mobile healthcare program, reaching 50 remote villages' },
    { year: 2018, event: 'Achieved 80G tax exemption status and expanded to 5 states' },
    { year: 2020, event: 'Adapted to COVID-19 with emergency relief programs and digital education' },
    { year: 2023, event: 'Reached milestone of impacting 50,000+ lives through various programs' },
    { year: 2024, event: 'Launched sustainable livelihood program with international partnerships' }
  ];

  const awards = [
    {
      title: 'NGO Excellence Award 2023',
      organization: 'National Voluntary Organizations Council',
      description: 'For outstanding contribution to rural education and healthcare'
    },
    {
      title: 'Best Practices in Transparency 2022',
      organization: 'Charity Assessment Institute',
      description: 'Recognized for exemplary financial transparency and reporting'
    },
    {
      title: 'Community Impact Award 2021',
      organization: 'India Development Foundation',
      description: 'For innovative approaches to sustainable development'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen py-16 bg-neutral-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">About Root Lamp Trust</h1>
          <p className="text-xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            Since 2010, we have been dedicated to creating sustainable positive change in underserved communities 
            across India through innovative programs in education, healthcare, and sustainable development.
          </p>
        </div>

        {/* Our Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary-800">Our Story</h2>
              <p className="text-lg text-primary-700 leading-relaxed">
                Root Lamp Trust was born from a simple yet powerful belief: every individual deserves access to 
                quality education and healthcare, regardless of their socioeconomic background. Founded by Dr. Anita Patel 
                after witnessing the challenges faced by rural communities during her medical practice, our organization 
                has grown from serving a single village to impacting lives across multiple states.
              </p>
              <p className="text-lg text-primary-700 leading-relaxed">
                What started as weekend medical camps and informal education classes has evolved into a comprehensive 
                network of programs addressing the root causes of poverty and inequality. Our community-centered approach 
                ensures that every intervention is sustainable and locally relevant.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-accent-100 rounded-lg border border-primary-600">
                  <Globe className="h-8 w-8 text-primary-700 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary-800">8</p>
                  <p className="text-primary-700">States Covered</p>
                </div>
                <div className="text-center p-4 bg-neutral-100 rounded-lg border border-primary-600">
                  <Users className="h-8 w-8 text-primary-700 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary-800">150+</p>
                  <p className="text-primary-700">Team Members</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Our team working with community members"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/8363026/pexels-photo-8363026.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                alt="Community healthcare program"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-20 bg-white rounded-2xl p-8 md:p-12 border border-primary-600">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-primary-800">Our Vision</h2>
              </div>
              <p className="text-lg text-primary-700 leading-relaxed">
                A world where every individual, regardless of their background, has access to quality education, 
                healthcare, and opportunities to reach their full potential. We envision thriving communities 
                that are self-reliant and empowered to create their own positive change.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-accent-500" />
                <h2 className="text-2xl font-bold text-primary-800">Our Mission</h2>
              </div>
              <p className="text-lg text-primary-700 leading-relaxed">
                To create sustainable positive change by providing access to quality education, essential healthcare, 
                and economic opportunities for underserved communities. We work with local partners to develop 
                community-driven solutions that address the root causes of poverty and inequality.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who guide our mission and ensure that every rupee donated 
              creates maximum impact in the communities we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustees.map((trustee, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={trustee.image}
                  alt={trustee.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{trustee.name}</h3>
                    <p className="text-teal-600 font-medium">{trustee.position}</p>
                    <p className="text-sm text-gray-500">{trustee.qualifications}</p>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{trustee.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to impacting thousands of lives, here are the key milestones 
              that have shaped our organization.
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0">
                  <div className="bg-teal-100 text-teal-600 w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200">
                    {milestone.year}
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.year}</h3>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recognition & Awards */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognition & Awards</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to transparency, efficiency, and impact has been recognized by various national 
              and international organizations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                  <div>
                    <h3 className="font-bold text-gray-900">{award.title}</h3>
                    <p className="text-sm text-gray-600">{award.organization}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{award.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-teal-600 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Be part of our story. Whether through donations, volunteering, or partnerships, 
            there are many ways to contribute to positive change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => onPageChange('donate')}
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Make a Donation
            </button>
            <button
              onClick={() => onPageChange('volunteer')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-200"
            >
              Become a Volunteer
            </button>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default AboutPage;