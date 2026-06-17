import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Platform', path: '/platform' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Insights', path: '/insights' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 transition-all duration-500 border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-24 md:h-32 transition-all duration-500">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group" onClick={() => setIsOpen(false)}>
            <img
              src="/assets/rubric-logo-primary.png"
              alt="Rubric Logo"
              className="h-10 md:h-12 w-auto group-hover:scale-105 transition-transform"
            />
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-graphite group-hover:text-signal-red transition-colors uppercase">rubric</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${
                  location.pathname === link.path ? 'text-signal-red' : 'text-slate hover:text-signal-red hover:tracking-[0.4em]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-signal-red text-white px-10 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-graphite transition-all shadow-xl shadow-signal-red/20">
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-graphite focus:outline-none p-2"
            >
              {isOpen ? <X size={40} strokeWidth={3} /> : <Menu size={40} strokeWidth={3} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white fixed inset-0 top-24 z-40 px-8 py-16 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-5xl font-black text-graphite tracking-tighter uppercase border-b-2 border-slate-50 pb-8 hover:text-signal-red transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block bg-signal-red text-white py-8 rounded-2xl text-center font-black text-2xl uppercase tracking-[0.2em]"
            onClick={() => setIsOpen(false)}
          >
            GET IN TOUCH
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
