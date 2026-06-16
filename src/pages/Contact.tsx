import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20 pb-32">
      <div className="container-custom">
        <div className="max-w-3xl mb-24">
          <span className="text-signal-red font-bold tracking-widest text-sm uppercase mb-4 block">Contact Us</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Let's discuss your <span className="text-signal-red">digital evolution.</span>
          </h1>
          <p className="text-xl text-slate leading-relaxed">
            Partner with Rubric to bring premium consulting and software quality engineering to your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Form */}
          <div className="bg-white border border-fog p-10 md:p-16 shadow-xl rounded-sm">
            <h3 className="text-2xl font-bold mb-10">Send us a message</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                  <input type="text" className="w-full border-b-2 border-fog focus:border-signal-red outline-none py-3 px-1 transition-colors" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                  <input type="email" className="w-full border-b-2 border-fog focus:border-signal-red outline-none py-3 px-1 transition-colors" placeholder="jane@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Service Required</label>
                <select className="w-full border-b-2 border-fog focus:border-signal-red outline-none py-3 px-1 transition-colors bg-transparent">
                  <option>Software Quality Engineering</option>
                  <option>Digital Consulting</option>
                  <option>Specialized Training</option>
                  <option>Developer Experience</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                <textarea className="w-full border-b-2 border-fog focus:border-signal-red outline-none py-3 px-1 transition-colors h-32 resize-none" placeholder="How can we help you transform?"></textarea>
              </div>
              <button type="button" className="btn-primary w-full md:w-auto px-12">
                Send Message
              </button>
            </form>
          </div>

          {/* Office Info */}
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold mb-8">Our Presence</h3>
              <div className="space-y-10">
                <div className="flex gap-6">
                   <MapPin className="text-signal-red shrink-0" size={28} />
                   <div>
                     <h4 className="font-bold mb-2">Johannesburg Office</h4>
                     <p className="text-slate text-sm leading-relaxed">
                       Main Campus, Technology Hub<br />
                       Johannesburg, South Africa
                     </p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <MapPin className="text-signal-red shrink-0" size={28} />
                   <div>
                     <h4 className="font-bold mb-2">Cape Town Office</h4>
                     <p className="text-slate text-sm leading-relaxed">
                       Waterfront Innovation Center<br />
                       Cape Town, South Africa
                     </p>
                   </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-fog">
               <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
               <div className="space-y-6">
                  <div className="flex items-center gap-4 text-slate hover:text-signal-red transition-colors cursor-pointer">
                    <Mail size={20} />
                    <span>info@rubric.co.za</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate hover:text-signal-red transition-colors cursor-pointer">
                    <Phone size={20} />
                    <span>+27 (0) 11 000 0000</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
