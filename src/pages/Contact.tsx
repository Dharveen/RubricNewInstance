import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-graphite text-white pt-24 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tight mb-8">
              Let's build better <br /> digital outcomes.
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
              We partner with enterprise leaders to engineer stable, scalable, and sophisticated digital ecosystems. Whether you're looking for QA excellence or full-stack development, our team is ready to architect your success.
            </p>
          </div>
        </div>
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-24 container-custom flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-platinum border border-slate-200 p-8 md:p-16 shadow-sm">
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col space-y-3">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">First Name</label>
                  <input type="text" className="bg-fog border-0 border-b-2 border-slate focus:border-signal-red focus:ring-0 transition-colors p-4 outline-none placeholder:text-slate-300" placeholder="E.g. James" />
                </div>
                <div className="flex flex-col space-y-3">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Last Name</label>
                  <input type="text" className="bg-fog border-0 border-b-2 border-slate focus:border-signal-red focus:ring-0 transition-colors p-4 outline-none placeholder:text-slate-300" placeholder="E.g. Smith" />
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Professional Email</label>
                <input type="email" className="bg-fog border-0 border-b-2 border-slate focus:border-signal-red focus:ring-0 transition-colors p-4 outline-none placeholder:text-slate-300" placeholder="james.smith@enterprise.com" />
              </div>

              <div className="flex flex-col space-y-3">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Inquiry Department</label>
                <select className="bg-fog border-0 border-b-2 border-slate focus:border-signal-red focus:ring-0 transition-colors p-4 outline-none appearance-none cursor-pointer">
                  <option disabled defaultValue="">Select a service tier</option>
                  <option value="qa">Quality Assurance (QA)</option>
                  <option value="dev">Software Development (DEV)</option>
                  <option value="itsm">IT Service Management (ITSM)</option>
                  <option value="consulting">Strategic Consulting</option>
                  <option value="training">Corporate Training</option>
                </select>
              </div>

              <div className="flex flex-col space-y-3">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">How can we help?</label>
                <textarea rows={5} className="bg-fog border-0 border-b-2 border-slate focus:border-signal-red focus:ring-0 transition-colors p-4 outline-none placeholder:text-slate-300 resize-none" placeholder="Briefly describe your project requirements..."></textarea>
              </div>

              <button className="bg-signal-red text-white font-bold py-5 px-14 rounded-sm hover:opacity-90 active:scale-95 transition-all w-full md:w-auto uppercase tracking-widest shadow-xl">
                Send Message
              </button>
            </form>
          </div>

          {/* Office Details */}
          <div className="lg:col-span-5 space-y-10">
            {/* Johannesburg Office */}
            <div className="p-10 bg-graphite text-white shadow-xl relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-signal-red font-bold text-xs tracking-widest block mb-4 uppercase">South Africa</span>
                <h3 className="text-3xl font-bold mb-8 tracking-tight">Johannesburg</h3>
                <address className="not-italic space-y-4 text-slate-300 leading-relaxed text-lg mb-10">
                  <p className="flex items-start gap-4">
                     <span className="w-4 h-0.5 bg-signal-red mt-3.5 shrink-0"></span>
                     The District, 8 Arnold Rd<br />
                     Rosebank, Johannesburg, 2196
                  </p>
                </address>
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <a href="tel:+27110000000" className="block text-xl font-bold hover:text-signal-red transition-colors">+27 11 000 0000</a>
                  <a href="mailto:jhb@rubric.com" className="block text-xl font-bold hover:text-signal-red transition-colors">jhb@rubric.com</a>
                </div>
              </div>
              <MapPin size={120} className="absolute -right-8 -bottom-8 text-white opacity-[0.02] group-hover:scale-110 transition-transform" />
            </div>

            {/* Mauritius Office */}
            <div className="p-10 bg-platinum border border-slate-200 shadow-sm relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-signal-red font-bold text-xs tracking-widest block mb-4 uppercase">Mauritius</span>
                <h3 className="text-3xl font-bold mb-8 tracking-tight text-graphite">Grand Baie</h3>
                <address className="not-italic space-y-4 text-slate-500 leading-relaxed text-lg mb-10">
                  <p className="flex items-start gap-4">
                     <span className="w-4 h-0.5 bg-signal-red mt-3.5 shrink-0"></span>
                     Grand Baie Business Quarter<br />
                     Chemin Vingt Pieds, Grand Baie
                  </p>
                </address>
                <div className="space-y-4 pt-6 border-t border-slate-200">
                  <a href="tel:+2300000000" className="block text-xl font-bold text-graphite hover:text-signal-red transition-colors">+230 000 0000</a>
                  <a href="mailto:mau@rubric.com" className="block text-xl font-bold text-graphite hover:text-signal-red transition-colors">mau@rubric.com</a>
                </div>
              </div>
              <MapPin size={120} className="absolute -right-8 -bottom-8 text-graphite opacity-[0.02] group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Stylized Map View */}
      <section className="container-custom pb-24">
         <div className="relative w-full aspect-[21/9] bg-fog border border-slate-200 overflow-hidden flex items-center justify-center grayscale">
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#1E2126 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            <div className="relative z-10 bg-white p-8 border border-slate-200 text-center shadow-2xl">
               <span className="text-signal-red font-bold text-[10px] tracking-widest block mb-2 uppercase">Headquarters</span>
               <p className="text-xl font-bold text-graphite tracking-tight">Johannesburg, South Africa</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
