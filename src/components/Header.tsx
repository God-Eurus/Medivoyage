import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onChatToggle: () => void;
}

export default function Header({ onChatToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Listen for custom event to open chat
  useEffect(() => {
    const handleOpenChat = () => onChatToggle();
    window.addEventListener('openChat', handleOpenChat);
    return () => window.removeEventListener('openChat', handleOpenChat);
  }, [onChatToggle]);

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20" ref={menuRef}>
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="MediVoyage Logo"
              className="h-8 w-auto object-contain"
            />
            <span className="ml-2 text-lg sm:text-xl font-bold text-white">
              MediVoyage
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('showTreatment'))}
              className="text-white hover:text-orange-400 transition-colors text-sm xl:text-base font-medium"
            >
              Treatments
            </button>
            {['wellness', 'doctors', 'hospitals', 'hotels', 'blogs'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-white hover:text-orange-400 transition-colors text-sm xl:text-base font-medium"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('showLogin'))}
              className="text-white hover:text-orange-400 transition-colors text-sm xl:text-base font-medium"
            >
              Join as a Partner
            </button>
          </nav>

          {/* Right Side Utilities */}
          <div className="flex items-center space-x-3">
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

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen((prev) => !prev);
              }}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20 bg-black/80 backdrop-blur-sm rounded-b-lg mt-2">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('showTreatment'));
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-orange-400 transition-colors text-left px-4 py-3 font-medium"
              >
                Treatments
              </button>
              {['wellness', 'doctors', 'hospitals', 'hotels', 'blogs'].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-orange-400 transition-colors px-4 py-3 font-medium"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
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
