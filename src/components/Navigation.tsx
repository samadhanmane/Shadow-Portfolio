import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code2, Briefcase, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'About', icon: User },
    { name: 'Skills', icon: Code2 },
    { name: 'Projects', icon: Briefcase },
    { name: 'Contact', icon: Mail }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={handleHomeClick}
              className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              SM
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map(({ name, icon: Icon }) => (
                name === 'Home' ? (
                  <button
                    key={name}
                    onClick={handleHomeClick}
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors relative group flex items-center"
                  >
                    <Icon size={16} className="mr-1" />
                    {name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ) : (
                  <a
                    key={name}
                    href={`#${name.toLowerCase()}`}
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors relative group flex items-center"
                  >
                    <Icon size={16} className="mr-1" />
                    {name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md border-b border-gray-800">
            {navItems.map(({ name, icon: Icon }) => (
              name === 'Home' ? (
                <button
                  key={name}
                  onClick={handleHomeClick}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium flex items-center w-full text-left"
                >
                  <Icon size={16} className="mr-2" />
                  {name}
                </button>
              ) : (
                <a
                  key={name}
                  href={`#${name.toLowerCase()}`}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon size={16} className="mr-2" />
                  {name}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
