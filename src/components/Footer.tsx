import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Heart className="h-8 w-8 text-accent-100" />
              <div>
                <h3 className="text-lg font-bold">Hope Foundation Trust</h3>
                <p className="text-sm text-neutral-200">Building Better Communities</p>
              </div>
            </div>
            <p className="text-neutral-200 text-sm leading-relaxed">
              Empowering communities through education, healthcare, and sustainable development initiatives. 
              Together, we create lasting change.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-neutral-300 hover:text-accent-100 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-neutral-300 hover:text-accent-100 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-neutral-300 hover:text-accent-100 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-neutral-300 hover:text-accent-100 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['about', 'projects', 'volunteer', 'transparency'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => onPageChange(page)}
                    className="text-neutral-200 hover:text-accent-100 text-sm transition-colors capitalize"
                  >
                    {page === 'projects' ? 'Our Impact' : page.replace('_', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  123 Community Street<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <p className="text-gray-300 text-sm">+91 22 1234 5678</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400" />
                <p className="text-gray-300 text-sm">info@hopefoundation.org</p>
              </div>
            </div>
          </div>

          {/* Legal & Registration */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Legal Information</h4>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">
                <strong>Registration No:</strong><br />
                12AB3456789012345
              </p>
              <p className="text-gray-300 text-sm">
                <strong>80G Certificate:</strong><br />
                DIT(E)/MC/80G/2023/1234
              </p>
              <div className="space-y-1 pt-2">
                <button className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </button>
                <button className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Terms & Conditions
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Hope Foundation Trust. All rights reserved. | Building Better Communities Since 2010
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;