import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onPageChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: 'general',
    message: ''
  });

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'donations', label: 'Donations & Funding' },
    { value: 'volunteer', label: 'Volunteering Opportunities' },
    { value: 'partnerships', label: 'Partnerships & Collaboration' },
    { value: 'media', label: 'Media & Press Inquiries' },
    { value: 'transparency', label: 'Financial Transparency' },
    { value: 'programs', label: 'Program Information' },
    { value: 'support', label: 'Technical Support' }
  ];

  const offices = [
    {
      name: 'Head Office - Mumbai',
      address: '123 Community Street, Bandra West, Mumbai 400050, Maharashtra, India',
      phone: '+91 22 1234 5678',
      email: 'info@hopefoundation.org',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      mapUrl: 'https://maps.google.com/embed?pb=!1m18!1m12!1m3!1d3770.814!2d72.8261!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
      isHeadOffice: true
    },
    {
      name: 'Regional Office - Delhi',
      address: '456 Development Avenue, Connaught Place, New Delhi 110001, India',
      phone: '+91 11 2345 6789',
      email: 'delhi@hopefoundation.org',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      mapUrl: 'https://maps.google.com/embed?pb=!1m18!1m12!1m3!1d3502.23!2d77.2167!3d28.6353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
      isHeadOffice: false
    },
    {
      name: 'Field Office - Pune',
      address: '789 Social Center, Koregaon Park, Pune 411001, Maharashtra, India',
      phone: '+91 20 3456 7890',
      email: 'pune@hopefoundation.org',
      hours: 'Mon-Sat: 8:00 AM - 5:00 PM',
      mapUrl: 'https://maps.google.com/embed?pb=!1m18!1m12!1m3!1d3782.86!2d73.8878!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
      isHeadOffice: false
    }
  ];

  const departmentContacts = [
    {
      department: 'Executive Office',
      contact: 'Dr. Anita Patel - Chairperson',
      email: 'chairperson@hopefoundation.org',
      phone: '+91 22 1234 5678',
      icon: MessageSquare
    },
    {
      department: 'Program Management',
      contact: 'Rajesh Sharma - Managing Director',
      email: 'programs@hopefoundation.org',
      phone: '+91 22 1234 5679',
      icon: Calendar
    },
    {
      department: 'Donations & Partnerships',
      contact: 'Sarah Mitchell - Development Director',
      email: 'partnerships@hopefoundation.org',
      phone: '+91 22 1234 5680',
      icon: Globe
    },
    {
      department: 'Volunteer Coordination',
      contact: 'Priya Gupta - Volunteer Manager',
      email: 'volunteers@hopefoundation.org',
      phone: '+91 22 1234 5681',
      icon: Calendar
    }
  ];

  const socialLinks = [
    { platform: 'Facebook', icon: Facebook, url: 'https://facebook.com/hopefoundation', followers: '12.5K' },
    { platform: 'Twitter', icon: Twitter, url: 'https://twitter.com/hopefoundation', followers: '8.2K' },
    { platform: 'Instagram', icon: Instagram, url: 'https://instagram.com/hopefoundation', followers: '15.3K' },
    { platform: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/hopefoundation', followers: '5.1K' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will respond within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      inquiryType: 'general',
      message: ''
    });
  };

  return (
    <div className="min-h-screen py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">Get in Touch</h1>
          <p className="text-xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you have questions about our programs, want to volunteer, 
            or are interested in partnerships, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>

                <p className="text-center text-primary-600 text-sm">
                  We typically respond within 24 hours during business days
                </p>
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-primary-800 mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-600" />
                  <div>
                    <p className="font-medium text-primary-800">+91 22 1234 5678</p>
                    <p className="text-sm text-primary-700">Main Office</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-600" />
                  <div>
                    <p className="font-medium text-primary-800">info@hopefoundation.org</p>
                    <p className="text-sm text-primary-700">General Inquiries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-600 mt-1" />
                  <div>
                    <p className="font-medium text-primary-800">123 Community Street</p>
                    <p className="text-sm text-primary-700">Mumbai, Maharashtra 400050</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary-600" />
                  <div>
                    <p className="font-medium text-primary-800">Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-primary-700">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Contacts */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-primary-800 mb-4">Department Contacts</h3>
              <div className="space-y-4">
                {departmentContacts.map((dept, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0">
                    <div className="flex items-start space-x-3">
                      <dept.icon className="h-4 w-4 text-primary-600 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-medium text-primary-800 text-sm">{dept.department}</h4>
                        <p className="text-xs text-primary-700 mb-1">{dept.contact}</p>
                        <div className="flex flex-col space-y-1">
                          <a href={`mailto:${dept.email}`} className="text-xs text-primary-600 hover:text-teal-700">
                            {dept.email}
                          </a>
                          <a href={`tel:${dept.phone}`} className="text-xs text-primary-700 hover:text-primary-600">
                            {dept.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-primary-800 mb-4">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 p-2 rounded-lg border hover:bg-accent-100 hover:border-teal-200 transition-colors"
                  >
                    <social.icon className="h-4 w-4 text-primary-600" />
                    <div>
                      <p className="text-xs font-medium text-primary-800">{social.platform}</p>
                      <p className="text-xs text-primary-600">{social.followers}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Our Locations</h2>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto">
              Visit us at any of our offices across India. We're always happy to meet with 
              supporters, partners, and community members.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <iframe
                    src={office.mapUrl}
                    className="w-full h-full"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {office.isHeadOffice && (
                    <div className="absolute top-2 left-2">
                      <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Head Office
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-primary-800 mb-2">{office.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                      <p className="text-primary-700">{office.address}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <a href={`tel:${office.phone}`} className="text-primary-700 hover:text-primary-600">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <a href={`mailto:${office.email}`} className="text-primary-700 hover:text-primary-600">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <p className="text-primary-700">{office.hours}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <button className="w-full bg-accent-100 text-primary-600 py-2 rounded-lg font-medium hover:bg-teal-100 transition-colors">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-primary-700">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-primary-800 mb-2">How can I donate to Hope Foundation?</h3>
              <p className="text-primary-700 text-sm mb-4">
                You can donate online through our secure donation portal, by bank transfer, 
                or by visiting any of our offices. All donations are eligible for 80G tax benefits.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary-800 mb-2">What volunteer opportunities are available?</h3>
              <p className="text-primary-700 text-sm mb-4">
                We offer various volunteer roles in education, healthcare, event management, 
                and administrative support. Visit our volunteer page for current openings.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary-800 mb-2">How do you ensure transparency?</h3>
              <p className="text-primary-700 text-sm mb-4">
                We publish annual reports, undergo independent audits, and maintain all necessary 
                certifications. Our transparency page provides detailed financial information.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary-800 mb-2">Can corporations partner with you?</h3>
              <p className="text-primary-700 text-sm mb-4">
                Yes! We work with corporations on CSR initiatives, employee volunteering programs, 
                and custom partnership projects. Contact our partnerships team for details.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center bg-primary-600 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Don't wait to create positive change. Get in touch today and discover how you can 
            be part of our mission to build better communities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => onPageChange('donate')}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Donating
            </button>
            <button
              onClick={() => onPageChange('volunteer')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200"
            >
              Become a Volunteer
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;