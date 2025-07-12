import React, { useState } from 'react';
import { Heart, Menu, X, Plane, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onChatToggle: () => void;
}

export default function Header({ onChatToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Listen for chat events from Hero component
  React.useEffect(() => {
    const handleOpenChat = () => onChatToggle();
    window.addEventListener('openChat', handleOpenChat);
    return () => window.removeEventListener('openChat', handleOpenChat);
  }, [onChatToggle]);

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            <span className="ml-2 text-lg sm:text-xl font-bold text-white">MediVoyage</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('showTreatment'))}
              className="text-white hover:text-orange-400 transition-colors bg-orange-500 px-4 py-2 rounded-lg font-medium text-sm xl:text-base"
            >
              Treatments
            </button>
            <a href="#wellness" className="text-white hover:text-orange-400 transition-colors text-sm xl:text-base font-medium">
              Wellness
            </a>
            <a href="#doctors" className="text-white hover:text-orange-400 transition-colors text-sm xl:text-base font-medium">
              Doctors
            </a>
            <a href="#hospitals" className="text-white hover:text-orange-400 transition-colors text-sm xl:text-base font-medium">
              Hospitals
            </a>
            <a href="#hotels" className="text-white hover:text-orange-400 transition-colors text-sm xl:text-base font-medium">
              Hotels
            </a>
            <a href="#blogs" className="text-white hover:text-orange-400 transition-colors text-sm xl:text-base font-medium">
              Blogs
            </a>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('showLogin'))}
              className="text-white hover:text-orange-400 transition-colors text-sm xl:text-base font-medium"
            >
              Join as a Partner
            </button>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3">
            {/* Language and utilities - Desktop only */}
            <div className="hidden xl:flex items-center space-x-3 text-white text-sm">
              <button className="hover:text-orange-400 transition-colors">🔍</button>
              <button className="hover:text-orange-400 transition-colors">💬</button>
              <button className="hover:text-orange-400 transition-colors">📞</button>
              <button className="hover:text-orange-400 transition-colors">🇬🇧 EN</button>
            </div>
            
            {/* Chat Assistant Button */}
            <button
              onClick={onChatToggle}
              className="p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              title="AI Assistant"
            >
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20 bg-black/80 backdrop-blur-sm rounded-b-lg mt-2">
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('showTreatment'));
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-orange-400 transition-colors text-left px-4 py-3 rounded bg-orange-500/20 font-medium"
              >
                Treatments
              </button>
              <a 
                href="#wellness" 
                className="text-white hover:text-orange-400 transition-colors px-4 py-3 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Wellness
              </a>
              <a 
                href="#doctors" 
                className="text-white hover:text-orange-400 transition-colors px-4 py-3 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Doctors
              </a>
              <a 
                href="#hospitals" 
                className="text-white hover:text-orange-400 transition-colors px-4 py-3 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Hospitals
              </a>
              <a 
                href="#hotels" 
                className="text-white hover:text-orange-400 transition-colors px-4 py-3 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Hotels
              </a>
              <a 
                href="#blogs" 
                className="text-white hover:text-orange-400 transition-colors px-4 py-3 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </a>
              <button 
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('showLogin'));
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-orange-400 transition-colors text-left px-4 py-3 font-medium"
              >
                Join as a Partner
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}