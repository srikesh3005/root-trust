import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Briefcase, ArrowRight, Users, Calendar, MapPin, Target, TrendingUp, Award } from 'lucide-react';

interface ProjectsPageProps {
  onPageChange: (page: string) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onPageChange }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: Target },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'healthcare', label: 'Healthcare', icon: Heart },
    { id: 'livelihood', label: 'Livelihood', icon: Briefcase },
  ];

  const projects = [
    {
      id: 1,
      title: 'Quality Education Initiative',
      category: 'education',
      status: 'active',
      image: 'https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'Providing quality education to children in remote villages through innovative teaching methods and technology integration.',
      location: 'Maharashtra, Rajasthan, Gujarat',
      beneficiaries: 2500,
      budget: '₹45,00,000',
      progress: 75,
      startDate: 'Jan 2023',
      endDate: 'Dec 2024',
      achievements: [
        '15 schools equipped with digital classrooms',
        '200+ teachers trained in modern pedagogy',
        '95% improvement in literacy rates'
      ]
    },
    {
      id: 2,
      title: 'Mobile Healthcare Program',
      category: 'healthcare',
      status: 'active',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'Bringing essential healthcare services to remote communities through mobile medical units and telemedicine.',
      location: 'Madhya Pradesh, Chhattisgarh',
      beneficiaries: 15000,
      budget: '₹80,00,000',
      progress: 85,
      startDate: 'Mar 2022',
      endDate: 'Mar 2025',
      achievements: [
        '50,000+ medical consultations conducted',
        '12 mobile medical units deployed',
        '80% reduction in preventable diseases'
      ]
    },
    {
      id: 3,
      title: 'Women Empowerment & Livelihood',
      category: 'livelihood',
      status: 'active',
      image: 'https://images.pexels.com/photos/8926553/pexels-photo-8926553.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'Empowering rural women through skill development, microfinance, and sustainable livelihood opportunities.',
      location: 'Karnataka, Tamil Nadu, Andhra Pradesh',
      beneficiaries: 3200,
      budget: '₹35,00,000',
      progress: 60,
      startDate: 'Jun 2023',
      endDate: 'Jun 2025',
      achievements: [
        '500+ women received vocational training',
        '200+ micro-enterprises established',
        '150% increase in average household income'
      ]
    },
    {
      id: 4,
      title: 'Clean Water & Sanitation',
      category: 'healthcare',
      status: 'completed',
      image: 'https://images.pexels.com/photos/6152440/pexels-photo-6152440.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'Installing water purification systems and sanitation facilities in rural communities to improve public health.',
      location: 'Odisha, Jharkhand',
      beneficiaries: 8000,
      budget: '₹60,00,000',
      progress: 100,
      startDate: 'Jan 2021',
      endDate: 'Dec 2022',
      achievements: [
        '25 communities now have clean water access',
        '100 sanitation facilities constructed',
        '70% reduction in waterborne diseases'
      ]
    },
    {
      id: 5,
      title: 'Digital Literacy Program',
      category: 'education',
      status: 'completed',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'Teaching basic computer skills and digital literacy to rural youth and adults for better employment opportunities.',
      location: 'Punjab, Haryana, Uttar Pradesh',
      beneficiaries: 1800,
      budget: '₹25,00,000',
      progress: 100,
      startDate: 'Aug 2020',
      endDate: 'Jul 2022',
      achievements: [
        '1,200+ people trained in digital skills',
        '60% participants secured better employment',
        '30 digital learning centers established'
      ]
    }
  ];

  const impactStats = [
    { value: '50,000+', label: 'Lives Impacted', change: '+20%' },
    { value: '200+', label: 'Projects Completed', change: '+15%' },
    { value: '₹5.2 Cr', label: 'Funds Deployed', change: '+25%' },
    { value: '85%', label: 'Success Rate', change: '+5%' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">Our Impact & Projects</h1>
          <p className="text-xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            Discover how your support translates into real change. Each project is carefully designed 
            to create sustainable impact in the communities we serve.
          </p>
        </div>

        {/* Impact Statistics */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-2">Impact Overview</h2>
            <p className="text-primary-700">Our cumulative impact across all projects and initiatives</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-neutral-100 p-4 rounded-xl border border-primary-600">
                  <p className="text-2xl md:text-3xl font-bold text-primary-800 mb-1">{stat.value}</p>
                  <p className="text-primary-700 font-medium mb-2">{stat.label}</p>
                  <div className="flex items-center justify-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-accent-500" />
                    <span className="text-accent-500 font-medium text-sm">{stat.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-primary-800 hover:bg-accent-100 hover:text-primary-700 shadow-md border border-primary-600'
              }`}
            >
              <category.icon className="h-5 w-5" />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status === 'active' ? 'Active' : 'Completed'}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{project.beneficiaries.toLocaleString()} beneficiaries</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{project.startDate} - {project.endDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">Budget: {project.budget}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-bold text-primary-600">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.slice(0, 2).map((achievement, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                        <span className="text-primary-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">Real stories of transformation from our projects</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/8926553/pexels-photo-8926553.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                alt="Success story"
                className="w-full h-48 object-cover rounded-xl"
              />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Sunita's Transformation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  From a daily wage earner to running her own tailoring business, Sunita now employs 5 other women 
                  from her village. Her monthly income increased from ₹3,000 to ₹15,000.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                alt="Success story"
                className="w-full h-48 object-cover rounded-xl"
              />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Arjun's Educational Journey</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Once struggling with basic literacy, Arjun is now pursuing engineering. Our digital education 
                  program helped him pass his 12th grade with 92% marks.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                alt="Success story"
                className="w-full h-48 object-cover rounded-xl"
              />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Healthy Village Initiative</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Khadakpur village went from having the highest child mortality rate in the district to achieving 
                  zero preventable deaths in the last two years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Measure Impact */}
        <section className="mb-16 bg-gradient-to-br from-neutral-100 to-accent-50 rounded-2xl p-8 border border-primary-600">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">How We Measure Impact</h2>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto">
              Transparency and accountability are core to our operations. Here's how we track and measure success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center border border-primary-600">
              <div className="bg-accent-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="font-bold text-primary-800 mb-2">Baseline Assessment</h3>
              <p className="text-gray-600 text-sm">Comprehensive community needs analysis before project initiation</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Regular Monitoring</h3>
              <p className="text-gray-600 text-sm">Monthly progress tracking with key performance indicators</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Community Feedback</h3>
              <p className="text-gray-600 text-sm">Regular surveys and feedback sessions with beneficiaries</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Third-party Evaluation</h3>
              <p className="text-gray-600 text-sm">Independent assessments by external evaluation agencies</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-primary-600 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Be Part of Our Next Success Story</h2>
          <p className="text-xl text-neutral-100 mb-8 max-w-2xl mx-auto">
            Your support can help us expand these life-changing programs to more communities. 
            Join us in creating sustainable impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => onPageChange('donate')}
              className="bg-accent-100 text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-accent-200 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Heart className="h-5 w-5" />
              <span>Support Our Projects</span>
            </button>
            <button
              onClick={() => onPageChange('volunteer')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Volunteer With Us</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;