import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'projects', label: 'Our Impact' },
    { id: 'donate', label: 'Donate' },
    { id: 'volunteer', label: 'Volunteer' },
    { id: 'transparency', label: 'Transparency' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-neutral-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onPageChange('home')}>
            <Heart className="h-8 w-8 text-primary-600" />
            <div>
              <h1 className="text-xl font-bold text-primary-800">Hope Foundation Trust</h1>
              <p className="text-sm text-primary-700">Building Better Communities</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-primary-800 hover:text-primary-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => onPageChange('donate')}
              className="bg-accent-100 text-primary-700 px-6 py-2 rounded-lg font-medium hover:bg-accent-200 transition-colors duration-200"
            >
              Donate Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-primary-600 bg-neutral-100'
                      : 'text-primary-800 hover:text-primary-600 hover:bg-neutral-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onPageChange('donate');
                  setIsMenuOpen(false);
                }}
                className="w-full mt-4 bg-accent-100 text-primary-700 px-4 py-2 rounded-lg font-medium hover:bg-accent-200 transition-colors duration-200"
              >
                Donate Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;