import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-graphite text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <img
              src="/assets/rubric-logo-primary.png"
              alt="Rubric Logo"
              className="h-8 w-auto brightness-0 invert mb-6"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium technology consulting and software quality engineering. We bring structure, transformation, and measurable impact to your digital ecosystem.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/about" className="hover:text-signal-red transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-signal-red transition-colors">Our Services</Link></li>
              <li><Link to="/careers" className="hover:text-signal-red transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-signal-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Expertise</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Software Quality Engineering</li>
              <li>Digital Transformation Consulting</li>
              <li>Developer Experience (DevX)</li>
              <li>IT Service Management</li>
              <li>Specialized Training</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Email: info@rubric.co.za</li>
              <li>Location: Johannesburg, South Africa</li>
              <li>Cape Town, South Africa</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Rubric (Pty) Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
