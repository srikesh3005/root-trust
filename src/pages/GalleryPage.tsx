import React, { useState } from 'react';
import { Play, Calendar, MapPin, Users, Eye, Heart, Share2, Download, X } from 'lucide-react';

interface GalleryPageProps {
  onPageChange: (page: string) => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ onPageChange }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'education' | 'healthcare' | 'events' | 'videos'>('all');
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const categories = [
    { id: 'all', label: 'All Media', count: 127 },
    { id: 'education', label: 'Education Programs', count: 45 },
    { id: 'healthcare', label: 'Healthcare Initiatives', count: 38 },
    { id: 'events', label: 'Events & Campaigns', count: 29 },
    { id: 'videos', label: 'Video Stories', count: 15 }
  ];

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      category: 'education',
      title: 'Digital Classroom Initiative',
      description: 'Students learning with new tablets in rural Maharashtra school',
      location: 'Pune, Maharashtra',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 156,
      views: 2340
    },
    {
      id: 2,
      type: 'image',
      category: 'healthcare',
      title: 'Mobile Medical Camp',
      description: 'Free health checkup camp in remote village of Rajasthan',
      location: 'Jaipur, Rajasthan',
      date: '2024-01-20',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 203,
      views: 3120
    },
    {
      id: 3,
      type: 'video',
      category: 'education',
      title: 'Success Story: Arjun\'s Journey',
      description: 'From struggling student to engineering aspirant - a transformation story',
      location: 'Delhi',
      date: '2024-02-01',
      image: 'https://images.pexels.com/photos/8363026/pexels-photo-8363026.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 445,
      views: 8920,
      duration: '3:45'
    },
    {
      id: 4,
      type: 'image',
      category: 'events',
      title: 'Annual Fundraising Gala',
      description: 'Our supporters gathered for an evening of impact and celebration',
      location: 'Mumbai, Maharashtra',
      date: '2024-02-14',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 78,
      views: 1560
    },
    {
      id: 5,
      type: 'image',
      category: 'healthcare',
      title: 'Clean Water Initiative',
      description: 'Installing water purification systems in rural communities',
      location: 'Odisha',
      date: '2024-02-18',
      image: 'https://images.pexels.com/photos/6152440/pexels-photo-6152440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 267,
      views: 4230
    },
    {
      id: 6,
      type: 'image',
      category: 'education',
      title: 'Women\'s Literacy Program',
      description: 'Adult education classes empowering women in rural Gujarat',
      location: 'Ahmedabad, Gujarat',
      date: '2024-02-25',
      image: 'https://images.pexels.com/photos/8926553/pexels-photo-8926553.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 189,
      views: 2890
    },
    {
      id: 7,
      type: 'video',
      category: 'healthcare',
      title: 'Telemedicine Program Launch',
      description: 'Bringing healthcare to remote areas through technology',
      location: 'Chhattisgarh',
      date: '2024-03-05',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 312,
      views: 6540,
      duration: '5:12'
    },
    {
      id: 8,
      type: 'image',
      category: 'events',
      title: 'Volunteer Training Workshop',
      description: 'Training new volunteers for our education programs',
      location: 'Chennai, Tamil Nadu',
      date: '2024-03-12',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 95,
      views: 1820
    },
    {
      id: 9,
      type: 'image',
      category: 'education',
      title: 'Solar-Powered Learning Center',
      description: 'Sustainable education infrastructure in off-grid village',
      location: 'Uttarakhand',
      date: '2024-03-20',
      image: 'https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 234,
      views: 3450
    }
  ];

  const pressHighlights = [
    {
      title: 'Hope Foundation Wins National Education Award',
      publication: 'The Times of India',
      date: '2024-03-15',
      excerpt: 'Recognized for innovative digital education programs in rural areas...',
      link: '#'
    },
    {
      title: 'Transforming Healthcare in Rural India',
      publication: 'Indian Express',
      date: '2024-02-28',
      excerpt: 'Mobile medical units reach 50,000 people in remote communities...',
      link: '#'
    },
    {
      title: 'Women Entrepreneurs: Breaking Barriers',
      publication: 'Hindu Business Line',
      date: '2024-02-10',
      excerpt: 'Livelihood program helps 500+ women start their own businesses...',
      link: '#'
    }
  ];

  const filteredMedia = activeCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory);

  const openModal = (item: any) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="min-h-screen py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">Our Impact in Pictures</h1>
          <p className="text-xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            Experience the stories of transformation, hope, and community development through our 
            comprehensive media gallery. Every image tells a story of positive change.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as any)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-md'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => openModal(item)}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                      <div className="bg-white bg-opacity-90 rounded-full p-3">
                        <Play className="h-6 w-6 text-teal-600" />
                      </div>
                    </div>
                  )}
                  {item.duration && (
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                      {item.duration}
                    </div>
                  )}
                  <div className="absolute top-2 left-2">
                    <span className="bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-medium capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Heart className="h-4 w-4" />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Eye className="h-4 w-4" />
                        <span>{item.views.toLocaleString()}</span>
                      </div>
                    </div>
                    <button className="text-teal-600 hover:text-teal-700 font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Press Coverage */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Press Coverage</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our work has been featured in leading publications, highlighting the impact 
              we're creating in communities across India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pressHighlights.map((article, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">
                  <h3 className="font-bold text-gray-900 mb-2">{article.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="font-medium">{article.publication}</span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                </div>
                <button className="flex items-center space-x-1 text-teal-600 hover:text-teal-700 font-medium text-sm">
                  <span>Read Full Article</span>
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Archive */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Newsletter Archive</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with our quarterly newsletters featuring project updates, 
              success stories, and upcoming initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Q4 2023', 'Q3 2023', 'Q2 2023'].map((quarter, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">Impact Newsletter {quarter}</h3>
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Quarterly highlights including project milestones, beneficiary stories, 
                  and financial updates.
                </p>
                <button className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium text-sm">
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-teal-600 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Be Part of Our Story</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            These images represent real lives transformed through your support. 
            Join us in creating more stories of hope and change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => onPageChange('donate')}
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Support Our Work
            </button>
            <button
              onClick={() => onPageChange('volunteer')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-200"
            >
              Volunteer With Us
            </button>
          </div>
        </section>

        {/* Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img
                  src={selectedMedia.image}
                  alt={selectedMedia.title}
                  className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                  <X className="h-6 w-6" />
                </button>
                {selectedMedia.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-4">
                      <Play className="h-8 w-8 text-teal-600" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedMedia.title}</h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedMedia.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(selectedMedia.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {selectedMedia.category}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4">{selectedMedia.description}</p>
                
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Heart className="h-5 w-5" />
                      <span>{selectedMedia.likes} likes</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Eye className="h-5 w-5" />
                      <span>{selectedMedia.views.toLocaleString()} views</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm font-medium text-gray-700">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                    <button className="flex items-center space-x-1 bg-teal-600 hover:bg-teal-700 px-3 py-2 rounded-lg text-sm font-medium text-white">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;