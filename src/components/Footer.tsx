import { Link } from 'react-router-dom';
import { Share2, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-graphite text-white pt-32 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/assets/rubric-logo-primary.png"
                alt="Rubric Logo"
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-2xl font-bold tracking-tight text-white group-hover:text-signal-red transition-colors">rubric</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Crafting sustainable digital ecosystems. Delivering precision software quality since 2007 through architectural rigor and strategic impact.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Share2 size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Mail size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Globe size={20} /></a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-8">Navigation</h5>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/careers" className="text-sm text-slate-400 hover:text-white transition-colors font-bold text-signal-red">Careers</Link></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-8">Solutions</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Quality Engineering</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">DevOps Strategy</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Enterprise AMS</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Digital Transformation</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-8">Legal</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
            © {new Date().getFullYear()} Rubric Consulting. Crafting Sustainable Digital Ecosystems.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
             <a href="#" className="hover:text-white transition-colors">Johannesburg</a>
             <a href="#" className="hover:text-white transition-colors">Mauritius</a>
             <a href="#" className="hover:text-white transition-colors">London</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
