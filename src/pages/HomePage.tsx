import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Users, Heart, Award, TrendingUp, 
  BookOpen, Stethoscope, Home, Lightbulb, Star, 
  Shield, HandHeart, Globe, TreePine, Smile,
  GraduationCap, Activity, Building, Gift,
  type LucideIcon
} from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatOffset, setFloatOffset] = useState({ x: 0, y: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [rainDrops, setRainDrops] = useState<Array<{
    id: number;
    x: number;
    y: number;
    icon: LucideIcon;
    opacity: number;
    speed: number;
    column: number;
  }>>([]);
  
  const animatedWords = ['Change', 'Impact', 'Growth', 'Progress', 'Future'];
  
  const rainIcons = React.useMemo(() => [
    Heart, Users, BookOpen, Stethoscope, Home, Lightbulb, 
    Star, Shield, HandHeart, Globe, TreePine, Smile,
    GraduationCap, Activity, Building, Gift, Award
  ], []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animateFloat = () => {
      const time = Date.now() * 0.001; // Convert to seconds
      const x = Math.sin(time * 0.5) * 15 + Math.cos(time * 0.3) * 10; // Random slow float X
      const y = Math.cos(time * 0.4) * 12 + Math.sin(time * 0.6) * 8;  // Random slow float Y
      setFloatOffset({ x, y });
    };

    const interval = setInterval(animateFloat, 50); // Update every 50ms for smooth animation
    return () => clearInterval(interval);
  }, []);

  // Word cycling animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [animatedWords.length]);

  // Matrix rain effect
  useEffect(() => {
    const createRainDrop = () => {
      if (typeof window === 'undefined') return;
      
      const column = Math.floor(Math.random() * 10); // 10 columns for more structured rain
      const columnWidth = window.innerWidth / 10;
      
      const newDrop = {
        id: Date.now() + Math.random(),
        x: column * columnWidth + Math.random() * (columnWidth * 0.8), // Slight randomness within column
        y: -50,
        icon: rainIcons[Math.floor(Math.random() * rainIcons.length)],
        opacity: Math.random() * 0.5 + 0.3, // Consistent opacity (0.3-0.8)
        speed: Math.random() * 1.5 + 1, // Smoother, consistent speed (1-2.5px per frame)
        column: column,
      };
      
      setRainDrops(prev => [...prev, newDrop]);
    };

    const updateRainDrops = () => {
      setRainDrops(prev => 
        prev
          .map(drop => ({
            ...drop,
            y: drop.y + drop.speed,
            opacity: drop.y > 500 ? Math.max(0, drop.opacity - 0.02) : drop.opacity, // Fade out near bottom
          }))
          .filter(drop => drop.y < 650 && drop.opacity > 0) // Smooth removal
      );
    };

    // More frequent, seamless rain creation
    const createInterval = setInterval(createRainDrop, 800); // Every 0.8 seconds for continuous flow
    
    // Smoother updates - higher FPS
    const updateInterval = setInterval(updateRainDrops, 33); // 30 FPS for smoother animation

    return () => {
      clearInterval(createInterval);
      clearInterval(updateInterval);
    };
  }, [rainIcons]);
  const impactStats = [
    { icon: Users, value: '50,000+', label: 'Lives Impacted' },
    { icon: Heart, value: '200+', label: 'Projects Completed' },
    { icon: Award, value: '15+', label: 'Years of Service' },
    { icon: TrendingUp, value: '95%', label: 'Funds to Programs' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Beneficiary Parent',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Thanks to Hope Foundation, my daughter received quality education and now works as a teacher in our community.',
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Healthcare Partner',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Their medical camps have brought essential healthcare to remote villages, saving countless lives.',
    },
    {
      name: 'Sarah Johnson',
      role: 'International Volunteer',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Working with Hope Foundation was life-changing. The transparency and impact are truly remarkable.',
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen relative"
      style={{
        backgroundColor: '#EBEDE8',
        backgroundImage: `
          linear-gradient(rgba(0, 72, 56, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 72, 56, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}
    >
      {/* Main Content */}
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden" style={{ backgroundColor: 'rgba(235, 237, 232, 0.8)' }}>
        {/* Matrix Rain Effect - Only in Hero Section */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {rainDrops.map((drop) => {
            const IconComponent = drop.icon;
            return (
              <div
                key={drop.id}
                className="absolute transition-all duration-75 ease-linear"
                style={{
                  left: `${drop.x}px`,
                  top: `${drop.y}px`,
                  opacity: drop.opacity,
                  transform: 'translateZ(0) translateY(0px)',
                  willChange: 'transform, opacity',
                }}
              >
                <IconComponent 
                  className="text-primary-600 drop-shadow-sm" 
                  size={18}
                  style={{
                    filter: 'blur(0.2px)',
                    transition: 'opacity 0.3s ease-out',
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 leading-tight">
                  Building
                  <span className="text-primary-600"> Hope</span>,
                  <br />Creating&nbsp; 
                  <motion.span 
                    key={currentWordIndex} 
                    className="text-accent-500 inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {animatedWords[currentWordIndex]}
                  </motion.span>
                </h1>
                <motion.p 
                  className="text-xl text-primary-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  Empowering communities through education, healthcare, and sustainable development. 
                  Join us in creating lasting positive impact across India.
                </motion.p>
              </div>
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <button
                  onClick={() => onPageChange('donate')}
                  className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Heart className="h-5 w-5" />
                  <span>Donate Now</span>
                </button>
                <button
                  onClick={() => onPageChange('projects')}
                  className="border-2 border-primary-600 text-primary-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-100 hover:text-primary-800 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>See Our Impact</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div 
                className="floating-image-container"
                style={{
                  transform: typeof window !== 'undefined' 
                    ? `translate(${floatOffset.x + (mousePosition.x - window.innerWidth / 2) * 0.02}px, ${floatOffset.y + (mousePosition.y - window.innerHeight / 2) * 0.02}px)`
                    : `translate(${floatOffset.x}px, ${floatOffset.y}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <img
                  src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Children learning in classroom"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                />
              </div>
              <div 
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg floating-card"
                style={{
                  transform: typeof window !== 'undefined'
                    ? `translate(${(mousePosition.x - window.innerWidth / 2) * -0.015}px, ${(mousePosition.y - window.innerHeight / 2) * -0.015}px)`
                    : 'translate(0px, 0px)',
                  transition: 'transform 0.15s ease-out'
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-accent-100 p-2 rounded-full border border-primary-600">
                    <TrendingUp className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary-800">50,000+</p>
                    <p className="text-primary-700">Lives Transformed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white bg-opacity-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Every donation creates ripple effects of positive change in communities across India.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto border border-primary-600">
                  <stat.icon className="h-8 w-8 text-primary-700" />
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-primary-800">{stat.value}</p>
                  <p className="text-primary-700 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16" style={{ backgroundColor: 'rgba(235, 237, 232, 0.6)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800">Our Mission</h2>
            <p className="text-xl text-primary-700 leading-relaxed">
              To create sustainable positive change by providing access to quality education, essential healthcare, 
              and economic opportunities for underserved communities across India. We believe every individual 
              deserves the chance to reach their full potential.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-md border border-primary-600">
                <div className="bg-accent-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-600">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Education</h3>
                <p className="text-primary-700">Providing quality education and skill development to empower the next generation.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-primary-600">
                <div className="bg-accent-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-600">
                  <Heart className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Healthcare</h3>
                <p className="text-primary-700">Ensuring access to essential medical care and health awareness programs.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-primary-600">
                <div className="bg-accent-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-600">
                  <TrendingUp className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-primary-800 mb-2">Development</h3>
                <p className="text-primary-700">Creating sustainable economic opportunities for long-term community growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white bg-opacity-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Stories of Impact</h2>
            <p className="text-xl text-primary-700">Hear from those whose lives have been transformed through your support.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-100 p-6 rounded-xl border border-primary-600 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className="floating-avatar"
                    style={{
                      transform: typeof window !== 'undefined'
                        ? `translate(${(mousePosition.x - window.innerWidth / 2) * (0.01 + index * 0.005)}px, ${(mousePosition.y - window.innerHeight / 2) * (0.01 + index * 0.005)}px)`
                        : 'translate(0px, 0px)',
                      transition: 'transform 0.2s ease-out'
                    }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800">{testimonial.name}</h4>
                    <p className="text-sm text-primary-700">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-primary-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-neutral-100">
              Join thousands of supporters who are helping us create positive change. 
              Every contribution, no matter the size, makes a real difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => onPageChange('donate')}
                className="bg-accent-100 text-primary-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-200 transition-colors duration-200"
              >
                Start Donating Today
              </button>
              <button
                onClick={() => onPageChange('volunteer')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-700 transition-all duration-200"
              >
                Become a Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </motion.div>
  );
};

export default HomePage;