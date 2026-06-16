import { Link } from 'react-router-dom';
import { Share2, Mail, Globe, ArrowRight } from 'lucide-react';

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
              Precision in execution. Architectural rigor in technology consulting. Crafting sustainable digital ecosystems since 2007.
            </p>
            <a href="https://linkedin.com" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
               LinkedIn <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Navigation Column */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-signal-red mb-8">Explore</h5>
            <ul className="space-y-4">
              <li><Link to="/insights" className="text-sm text-slate-400 hover:text-white transition-colors">Insights</Link></li>
              <li><Link to="/partners" className="text-sm text-slate-400 hover:text-white transition-colors">Partners</Link></li>
              <li><Link to="/case-studies" className="text-sm text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/careers" className="text-sm text-slate-400 hover:text-white transition-colors font-bold text-signal-red">Careers</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-signal-red mb-8">Legal</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Expertise Column */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-signal-red mb-8">Expertise</h5>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">QA & Automation</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">DevOps & Cloud</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">IT Service Management</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Digital Strategy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
            © {new Date().getFullYear()} Rubric Consulting. Precision in Execution.
          </p>
          <div className="flex items-center gap-4">
             <div className="w-2 h-2 bg-signal-red rounded-full"></div>
             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Architected Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
