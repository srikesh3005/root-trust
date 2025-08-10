import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, MapPin, Heart, CheckCircle, Mail, Phone, Calendar, Award, Globe, Briefcase } from 'lucide-react';

interface VolunteerPageProps {
  onPageChange: (page: string) => void;
}

const VolunteerPage: React.FC<VolunteerPageProps> = ({ onPageChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    skills: '',
    availability: '',
    interest: '',
    experience: '',
    motivation: ''
  });

  const volunteerRoles = [
    {
      title: 'Education Coordinator',
      category: 'Education',
      location: 'Mumbai, Pune, Delhi',
      timeCommitment: '10-15 hours/week',
      duration: '6 months minimum',
      description: 'Help design and implement educational programs for underprivileged children.',
      requirements: [
        'Background in education or child development',
        'Excellent communication skills',
        'Patience and creativity in teaching',
        'Ability to work with diverse communities'
      ],
      skills: ['Teaching', 'Curriculum Development', 'Child Psychology', 'Communication'],
      icon: Users
    },
    {
      title: 'Healthcare Volunteer',
      category: 'Healthcare',
      location: 'Rural areas across Maharashtra',
      timeCommitment: '2-3 days/month',
      duration: '1 year commitment',
      description: 'Assist in mobile medical camps and health awareness programs in rural communities.',
      requirements: [
        'Medical background (MBBS, Nursing, Paramedical)',
        'Willingness to travel to remote areas',
        'Basic Hindi or local language skills',
        'Compassionate and patient demeanor'
      ],
      skills: ['Medical Knowledge', 'Patient Care', 'First Aid', 'Community Health'],
      icon: Heart
    },
    {
      title: 'Digital Marketing Specialist',
      category: 'Marketing',
      location: 'Remote/Hybrid',
      timeCommitment: '5-8 hours/week',
      duration: '3 months minimum',
      description: 'Help increase our reach and engagement through social media and digital campaigns.',
      requirements: [
        'Experience in social media marketing',
        'Knowledge of content creation tools',
        'Understanding of nonprofit sector',
        'Creative and strategic thinking'
      ],
      skills: ['Social Media', 'Content Creation', 'Analytics', 'Graphic Design'],
      icon: Globe
    },
    {
      title: 'Program Manager',
      category: 'Administration',
      location: 'Field locations',
      timeCommitment: '20+ hours/week',
      duration: '1 year minimum',
      description: 'Oversee project implementation and coordinate with local communities and partners.',
      requirements: [
        'Project management experience',
        'Strong organizational skills',
        'Experience working with communities',
        'Leadership and problem-solving abilities'
      ],
      skills: ['Project Management', 'Leadership', 'Community Relations', 'Data Analysis'],
      icon: Briefcase
    },
    {
      title: 'Event Coordinator',
      category: 'Events',
      location: 'Major cities',
      timeCommitment: '8-12 hours/week',
      duration: '4 months minimum',
      description: 'Plan and execute fundraising events, awareness campaigns, and donor engagement activities.',
      requirements: [
        'Event planning experience',
        'Strong networking abilities',
        'Excellent organizational skills',
        'Creative and detail-oriented mindset'
      ],
      skills: ['Event Planning', 'Vendor Management', 'Public Speaking', 'Fundraising'],
      icon: Calendar
    },
    {
      title: 'Financial Analyst',
      category: 'Finance',
      location: 'Mumbai office/Remote',
      timeCommitment: '6-10 hours/week',
      duration: '6 months minimum',
      description: 'Support financial planning, budgeting, and impact measurement for various projects.',
      requirements: [
        'Background in finance or accounting',
        'Proficiency in Excel and financial modeling',
        'Attention to detail and accuracy',
        'Understanding of nonprofit financial management'
      ],
      skills: ['Financial Analysis', 'Budgeting', 'Excel', 'Report Writing'],
      icon: Award
    }
  ];

  const volunteerTestimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Education Volunteer',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Volunteering with Hope Foundation has been incredibly rewarding. Seeing children learn and grow gives my life new meaning.',
      duration: '2 years'
    },
    {
      name: 'Dr. Rajesh Patel',
      role: 'Healthcare Volunteer',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'The mobile medical camps allowed me to serve communities that rarely have access to healthcare. It\'s truly impactful work.',
      duration: '3 years'
    },
    {
      name: 'Anita Sharma',
      role: 'Program Coordinator',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Leading livelihood programs has taught me so much about resilience and community strength. Every day brings new inspiration.',
      duration: '18 months'
    }
  ];

  const volunteerBenefits = [
    'Professional development opportunities',
    'Networking with like-minded professionals',
    'Certificate of appreciation and recommendation letters',
    'Flexible scheduling to accommodate your availability',
    'Training and skill development workshops',
    'Transportation and meal allowances for field work',
    'Annual volunteer recognition events',
    'Opportunity to create lasting social impact'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Volunteer application submitted:', formData);
    alert('Thank you for your interest! We will contact you within 48 hours.');
  };

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
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">Join Our Volunteer Community</h1>
          <p className="text-xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            Make a difference with your skills and passion. Join over 500 volunteers who are creating 
            positive change in communities across India.
          </p>
        </div>

        {/* Volunteer Impact Stats */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg border border-primary-600">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-2">Volunteer Impact</h2>
            <p className="text-primary-700">See the collective impact of our volunteer community</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-accent-100 p-4 rounded-xl border border-primary-600">
                <p className="text-2xl md:text-3xl font-bold text-primary-700 mb-1">500+</p>
                <p className="text-primary-700 font-medium">Active Volunteers</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-neutral-100 p-4 rounded-xl border border-primary-600">
                <p className="text-2xl md:text-3xl font-bold text-primary-700 mb-1">25,000+</p>
                <p className="text-primary-700 font-medium">Hours Contributed</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-2xl md:text-3xl font-bold text-green-600 mb-1">50+</p>
                <p className="text-gray-600 font-medium">Communities Served</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-orange-50 p-4 rounded-xl">
                <p className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">15</p>
                <p className="text-gray-600 font-medium">States Covered</p>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Volunteer Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find the perfect role that matches your skills, interests, and availability. 
              All roles include comprehensive training and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerRoles.map((role, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <role.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{role.title}</h3>
                        <p className="text-teal-600 font-medium">{role.category}</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Open
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4">{role.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{role.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{role.timeCommitment}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{role.duration}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {role.requirements.slice(0, 2).map((req, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-teal-600 text-white py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-200">
                  Apply for This Role
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteer Benefits */}
        <section className="mb-16 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Volunteer With Us?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join a community of passionate individuals and gain valuable experience while making a real difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteerBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteer Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hear From Our Volunteers</h2>
            <p className="text-lg text-gray-600">Real stories from volunteers who are making a difference</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {volunteerTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-teal-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">Volunteering for {testimonial.duration}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteer Registration Form */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-gray-600">Fill out this form and we'll contact you within 48 hours to discuss opportunities.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Area of Interest</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="">Select an area</option>
                    <option value="education">Education</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="livelihood">Livelihood Development</option>
                    <option value="marketing">Marketing & Communications</option>
                    <option value="events">Event Management</option>
                    <option value="finance">Finance & Administration</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="">Select availability</option>
                    <option value="weekends">Weekends only</option>
                    <option value="evenings">Weekday evenings</option>
                    <option value="flexible">Flexible schedule</option>
                    <option value="full-time">Full-time commitment</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Skills & Experience</label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Tell us about your relevant skills, qualifications, and experience..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to volunteer with us?</label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Share your motivation and what you hope to achieve through volunteering..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Heart className="h-5 w-5" />
                <span>Submit Application</span>
              </button>

              <p className="text-center text-gray-500 text-sm">
                By submitting this form, you agree to our volunteer terms and conditions
              </p>
            </form>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-teal-600 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Have Questions?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Our volunteer coordinator is here to help you find the perfect opportunity 
            to make a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2 text-white">
              <Mail className="h-5 w-5" />
              <span>volunteers@hopefoundation.org</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Phone className="h-5 w-5" />
              <span>+91 22 1234 5679</span>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default VolunteerPage;