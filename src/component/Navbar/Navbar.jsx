import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Star, Bed, Home, Utensils, Wifi, Car } from 'lucide-react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(false);
    }
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-amber-300/40 transition-all duration-300">
            <Home className="text-white" size={24} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-serif font-bold text-amber-800 tracking-wide">ANNAPURNA ATITHI NIWAS</h1>
            <p className="text-xs text-amber-600 font-medium">Your Home Away From Home</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium ${location.pathname === '/' ? (isScrolled ? 'text-slate-700' : 'text-slate-200') : 'text-slate-700'} hover:text-amber-700 px-4 py-2 rounded-lg transition-colors duration-300`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="tel:+919830431930"
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2.5 rounded-xl font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2"
          >
            <Phone size={18} />
            <span>Book Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-amber-100 shadow-xl absolute top-full left-0 right-0">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 rounded-lg font-medium text-slate-700 hover:text-amber-700 hover:bg-amber-50/50 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+919748517824"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-3 rounded-xl font-medium mt-4"
            >
              <Phone size={18} />
              <span>Book Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;