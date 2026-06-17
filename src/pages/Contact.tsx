import { MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-graphite text-white pt-24 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-5xl">
            <span className="text-signal-red font-black tracking-[0.4em] text-[10px] uppercase mb-8 block">Global Reach</span>
            <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-12">
              Let's build <br /> better <span className="text-signal-red">digital.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
              We partner with enterprise leaders to engineer stable, scalable, and sophisticated digital ecosystems. Our team is ready to architect your success.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </section>

      {/* Main Grid: Form + Office Details */}
      <section className="py-32 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-100 p-8 md:p-16 shadow-2xl shadow-graphite/5 rounded-3xl">
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col space-y-4 group">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-signal-red transition-colors">First Name</label>
                  <input type="text" className="bg-fog border-0 border-b-2 border-slate-200 focus:border-signal-red focus:ring-0 transition-all p-4 outline-none font-bold text-graphite" placeholder="E.g. James" />
                </div>
                <div className="flex flex-col space-y-4 group">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-signal-red transition-colors">Last Name</label>
                  <input type="text" className="bg-fog border-0 border-b-2 border-slate-200 focus:border-signal-red focus:ring-0 transition-all p-4 outline-none font-bold text-graphite" placeholder="E.g. Smith" />
                </div>
              </div>

              <div className="flex flex-col space-y-4 group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-signal-red transition-colors">Professional Email</label>
                <input type="email" className="bg-fog border-0 border-b-2 border-slate-200 focus:border-signal-red focus:ring-0 transition-all p-4 outline-none font-bold text-graphite" placeholder="james.smith@enterprise.com" />
              </div>

              <div className="flex flex-col space-y-4 group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-signal-red transition-colors">Inquiry Department</label>
                <select className="bg-fog border-0 border-b-2 border-slate-200 focus:border-signal-red focus:ring-0 transition-all p-4 outline-none appearance-none cursor-pointer font-bold text-graphite">
                  <option disabled defaultValue="">Select a service tier</option>
                  <option value="qa">Quality Assurance (QA)</option>
                  <option value="dev">Software Development (DEV)</option>
                  <option value="itsm">IT Service Management (ITSM)</option>
                  <option value="consulting">Strategic Consulting</option>
                  <option value="training">Corporate Training</option>
                </select>
              </div>

              <div className="flex flex-col space-y-4 group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-signal-red transition-colors">How can we help?</label>
                <textarea rows={4} className="bg-fog border-0 border-b-2 border-slate-200 focus:border-signal-red focus:ring-0 transition-all p-4 outline-none font-bold text-graphite resize-none" placeholder="Describe your project requirements..."></textarea>
              </div>

              <button className="bg-signal-red text-white font-black py-6 px-16 rounded-xl hover:bg-graphite transition-all w-full md:w-auto uppercase tracking-[0.3em] text-xs shadow-xl shadow-signal-red/20">
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Office Details */}
          <div className="lg:col-span-5 space-y-8">

            {/* Johannesburg Office */}
            <div className="p-12 bg-graphite text-white rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-signal-red font-black text-[10px] tracking-widest block mb-6 uppercase">South Africa</span>
                <h3 className="text-4xl font-black mb-8 tracking-tighter">Johannesburg</h3>
                <address className="not-italic space-y-6 text-slate-400 leading-relaxed text-lg mb-12">
                  <p className="flex items-start gap-5">
                     <span className="w-6 h-1 bg-signal-red mt-3 shrink-0"></span>
                     The District, 8 Arnold Rd<br />
                     Rosebank, Johannesburg, 2196
                  </p>
                </address>
                <div className="space-y-6 pt-10 border-t border-white/5">
                  <a href="tel:+27110000000" className="flex items-center gap-4 text-xl font-bold hover:text-signal-red transition-colors duration-500">
                    <Phone size={20} className="text-signal-red" /> +27 11 000 0000
                  </a>
                  <a href="mailto:jhb@rubric.com" className="flex items-center gap-4 text-xl font-bold hover:text-signal-red transition-colors duration-500">
                    <Mail size={20} className="text-signal-red" /> jhb@rubric.com
                  </a>
                </div>
              </div>
              <MapPin size={160} className="absolute -right-12 -bottom-12 text-white opacity-[0.03] group-hover:scale-110 transition-transform duration-1000" />
            </div>

            {/* Mauritius Office */}
            <div className="p-12 bg-platinum border border-slate-100 rounded-3xl shadow-sm relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-signal-red font-black text-[10px] tracking-widest block mb-6 uppercase">Mauritius</span>
                <h3 className="text-4xl font-black mb-8 tracking-tighter text-graphite">Grand Baie</h3>
                <address className="not-italic space-y-6 text-slate-500 leading-relaxed text-lg mb-12">
                  <p className="flex items-start gap-5">
                     <span className="w-6 h-1 bg-signal-red mt-3 shrink-0"></span>
                     Grand Baie Business Quarter<br />
                     Chemin Vingt Pieds, Grand Baie
                  </p>
                </address>
                <div className="space-y-6 pt-10 border-t border-slate-200 font-bold text-graphite">
                  <a href="tel:+2300000000" className="flex items-center gap-4 text-xl hover:text-signal-red transition-colors">+230 000 0000</a>
                  <a href="mailto:mau@rubric.com" className="flex items-center gap-4 text-xl hover:text-signal-red transition-colors">mau@rubric.com</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stylized Footer Bar */}
      <section className="bg-fog py-20 border-t border-slate-100 text-center">
         <div className="container-custom">
            <span className="text-slate-400 font-black text-[10px] tracking-[0.4em] uppercase block mb-6">Global Presence</span>
            <div className="flex flex-wrap justify-center gap-12 text-graphite font-black uppercase tracking-widest text-xs">
               <span className="hover:text-signal-red transition-colors cursor-pointer">London</span>
               <span className="hover:text-signal-red transition-colors cursor-pointer">Cape Town</span>
               <span className="hover:text-signal-red transition-colors cursor-pointer">Amsterdam</span>
               <span className="hover:text-signal-red transition-colors cursor-pointer">Singapore</span>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
