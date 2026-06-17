import { Link } from 'react-router-dom';
import { Share2, Mail, Globe, ArrowRight, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-graphite pt-32 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">

          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <Link to="/" className="flex items-center gap-4 group">
              <img
                src="/assets/rubric-logo-primary.png"
                alt="Rubric Logo"
                className="h-10 w-auto"
              />
              <span className="text-3xl font-black tracking-tighter text-graphite uppercase">rubric</span>
            </Link>
            <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
              Crafting sustainable digital ecosystems through precision engineering and strategic insight. Delivering software quality excellence since 2007.
            </p>
            <div className="flex gap-8">
              <a href="#" className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-graphite hover:text-white transition-all"><Share2 size={18} /></a>
              <a href="#" className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-graphite hover:text-white transition-all"><Mail size={18} /></a>
              <a href="#" className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-graphite hover:text-white transition-all"><Globe size={18} /></a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2">
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-graphite mb-10">Services</h5>
            <ul className="space-y-6 text-sm font-bold text-slate-400">
              <li><Link to="/services" className="hover:text-signal-red transition-colors">QA Assessments</Link></li>
              <li><Link to="/services" className="hover:text-signal-red transition-colors">Test Automation</Link></li>
              <li><Link to="/services" className="hover:text-signal-red transition-colors">Staff Augmentation</Link></li>
              <li><Link to="/services" className="hover:text-signal-red transition-colors">Managed Testing</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-graphite mb-10">Company</h5>
            <ul className="space-y-6 text-sm font-bold text-slate-400">
              <li><Link to="/about" className="hover:text-signal-red transition-colors">Our Story</Link></li>
              <li><Link to="/careers" className="hover:text-signal-red transition-colors">Careers</Link></li>
              <li><Link to="/insights" className="hover:text-signal-red transition-colors">Insights</Link></li>
              <li><Link to="/case-studies" className="hover:text-signal-red transition-colors text-signal-red">Case Studies</Link></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-3">
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-graphite mb-10">Connect</h5>
            <ul className="space-y-8 text-sm font-bold text-slate-400">
              <li className="flex items-start gap-4">
                 <MapPin size={20} className="text-signal-red shrink-0" />
                 <span>Rosebank, Johannesburg,<br />South Africa</span>
              </li>
              <li className="flex items-center gap-4 hover:text-signal-red transition-colors cursor-pointer">
                 <Mail size={20} className="text-signal-red shrink-0" />
                 <span>hello@rubricconsulting.com</span>
              </li>
              <li className="flex items-center gap-4 hover:text-signal-red transition-colors cursor-pointer">
                 <Phone size={20} className="text-signal-red shrink-0" />
                 <span>+27 (0) 11 000 0000</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest font-black text-slate-300">
            © {new Date().getFullYear()} Rubric Consulting. All Rights Reserved.
          </p>
          <div className="flex gap-12 text-[10px] font-black text-slate-300 uppercase tracking-widest">
             <a href="#" className="hover:text-graphite transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-graphite transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-graphite transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
