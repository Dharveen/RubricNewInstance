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
        <div className="flex justify-between items-center h-24 md:h-28 transition-all duration-500">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group" onClick={() => setIsOpen(false)}>
            <img
              src="/assets/rubric-logo-primary.png"
              alt="Rubric Logo"
              className="h-10 md:h-12 w-auto group-hover:scale-110 transition-transform duration-500"
            />
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-graphite group-hover:text-signal-red transition-colors uppercase">rubric</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-12">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 relative group/link ${
                    location.pathname === link.path ? 'text-signal-red' : 'text-slate-400 hover:text-graphite'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-signal-red transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
                </Link>
              ))}
            </div>
            <Link to="/contact" className="bg-signal-red text-white px-10 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-graphite transition-all shadow-xl shadow-signal-red/20">
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-graphite focus:outline-none p-2"
            >
              {isOpen ? <X size={36} strokeWidth={2.5} /> : <Menu size={36} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden bg-white fixed inset-0 top-24 z-40 px-8 py-12 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-5xl font-black text-graphite tracking-tighter uppercase border-b border-slate-50 pb-8 hover:text-signal-red transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block bg-signal-red text-white py-8 rounded-2xl text-center font-black text-2xl uppercase tracking-[0.3em] shadow-2xl"
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
