import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white border-b border-fog sticky top-0 z-50 transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/rubric-logo-primary.png"
              alt="Rubric Logo"
              className="h-10 w-auto group-hover:scale-105 transition-transform"
            />
            <span className="text-2xl font-bold tracking-tight text-graphite group-hover:text-signal-red transition-colors">rubric</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm uppercase tracking-widest font-bold transition-colors ${
                  location.pathname === link.path ? 'text-signal-red' : 'text-slate hover:text-signal-red'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-signal-red text-white px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-lg">
              Talk to us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-graphite focus:outline-none p-2"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-fog px-8 py-10 space-y-8 shadow-2xl absolute w-full left-0 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-2xl text-graphite font-bold"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block bg-signal-red text-white py-5 rounded-sm text-center font-bold text-xl uppercase tracking-widest"
            onClick={() => setIsOpen(false)}
          >
            Talk to us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
