import { MapPin, Globe, ArrowRight, ChevronRight } from 'lucide-react';

const Careers = () => {
  const openings = [
    { title: 'Senior Automation Engineer', location: 'Johannesburg', type: 'Full-time' },
    { title: 'Test Data Architect', location: 'Mauritius', type: 'Remote' },
    { title: 'DevOps Quality Consultant', location: 'Johannesburg', type: 'Hybrid' }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-graphite text-white pt-24 pb-20 md:pt-48 md:pb-40 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-5xl">
            <span className="text-signal-red font-black tracking-[0.4em] text-[10px] uppercase mb-8 block">Career Pathways</span>
            <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-12">
              Join the <br /> <span className="text-signal-red uppercase italic">Collective.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl font-medium">
              We are seeking specialists who prioritize engineering excellence over convenience. Join an elite squad of architects, engineers, and consultants.
            </p>
          </div>
        </div>
        <div className="absolute right-[-10%] bottom-[-10%] w-[60%] aspect-square border border-white/5 rounded-full pointer-events-none"></div>
      </section>

      {/* Culture Section */}
      <section className="py-32 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
             <div className="aspect-[4/5] bg-fog rounded-[4rem] overflow-hidden shadow-2xl grayscale group">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000"
                  alt="Rubric Culture"
                  className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-graphite/20 to-transparent"></div>
             </div>
             <div className="absolute -top-12 -left-12 w-48 h-48 border-l-8 border-t-8 border-signal-red opacity-10 rounded-tl-[3rem] pointer-events-none"></div>
          </div>
          <div className="space-y-16">
            <span className="text-signal-red font-black tracking-widest text-[10px] uppercase">Elite Culture</span>
            <h2 className="text-5xl md:text-7xl font-black text-graphite tracking-tighter leading-[0.9]">Architected for <br /> Exponential Growth.</h2>
            <div className="space-y-10">
              {[
                { t: 'Extreme Ownership', d: 'We empower our teams to own the outcome, not just the task. Accountability is the core of our culture.' },
                { t: 'Technical Pride', d: 'A collective commitment to clean code, structural integrity, and architectural beauty.' },
                { t: 'Global Exposure', d: 'Collaborate with enterprise leaders and complex stacks across multiple continents.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-10 group">
                   <div className="text-5xl font-black text-slate-100 group-hover:text-signal-red transition-colors duration-500">0{i+1}</div>
                   <div>
                      <h4 className="text-2xl font-black text-graphite mb-2 uppercase tracking-tighter">{item.t}</h4>
                      <p className="text-slate-500 text-lg font-medium leading-relaxed">{item.d}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section className="py-32 bg-graphite text-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7">
            <span className="text-signal-red font-black tracking-widest text-[10px] uppercase mb-8 block">Rubric Academy</span>
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-12">Continuous growth <br /> by design.</h2>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-16 font-medium">
              The Rubric Academy is our internal engine for technical and strategic evolution. We invest heavily in specialized certification paths and masterclass mentorship for every consultant.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="p-10 bg-white/5 border border-white/10 rounded-[2rem] group hover:border-signal-red transition-all">
                  <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Curriculum Development</h4>
                  <p className="text-slate-500 leading-relaxed">Bespoke learning tracks mapped to the latest shifts in QA and Cloud architecture.</p>
               </div>
               <div className="p-10 bg-white/5 border border-white/10 rounded-[2rem] group hover:border-signal-red transition-all">
                  <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Capability Building</h4>
                  <p className="text-slate-500 leading-relaxed">Hands-on labs and peer reviews to ensure absolute technical consistency across teams.</p>
               </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white rounded-[3rem] p-12 md:p-20 text-graphite shadow-2xl relative overflow-hidden group">
             <div className="relative z-10">
               <h3 className="text-4xl font-black mb-8 tracking-tighter uppercase leading-none">Staff <br /> Enablement</h3>
               <p className="text-slate-500 text-lg leading-relaxed mb-12 font-medium">Scaling knowledge through the Rubric Academy framework. Empowering our consultants to stay at the absolute frontier of technology shifts.</p>
               <button className="bg-graphite text-white px-10 py-5 rounded-xl font-black text-xs tracking-widest uppercase hover:bg-signal-red transition-all shadow-xl">LEARN MORE</button>
             </div>
             <div className="absolute right-[-10%] bottom-[-10%] w-64 h-64 bg-fog rounded-full opacity-50 group-hover:scale-125 transition-transform duration-1000 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Openings Section */}
      <section className="py-32 bg-platinum" id="open-roles">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-[5rem] font-black text-graphite tracking-tighter leading-[0.9]">Current <br /> Openings.</h2>
              <p className="text-slate-500 mt-8 text-xl font-medium">Find your place in the next generation of digital consulting.</p>
            </div>
            <div className="relative w-full md:w-auto">
               <select className="w-full md:min-w-[350px] bg-white border-b-4 border-graphite rounded-xl font-black uppercase tracking-[0.3em] text-[10px] py-6 px-8 outline-none appearance-none shadow-2xl focus:border-signal-red transition-all">
                 <option>All Departments</option>
                 <option>Engineering</option>
                 <option>Consulting</option>
                 <option>ITSM</option>
               </select>
               <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronRight size={20} className="text-graphite rotate-90" />
               </div>
            </div>
          </div>

          <div className="space-y-6">
            {openings.map((role, i) => (
              <div key={i} className="group bg-white border border-slate-50 rounded-3xl p-10 md:p-14 hover:shadow-2xl hover:-translate-y-1 hover:border-signal-red transition-all duration-500 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-12">
                <div>
                  <h4 className="text-3xl md:text-4xl font-black text-graphite group-hover:text-signal-red transition-colors mb-6 tracking-tighter uppercase">{role.title}</h4>
                  <div className="flex flex-wrap items-center gap-10 text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">
                    <span className="flex items-center gap-3">
                      <MapPin size={18} className="text-signal-red" /> {role.location}
                    </span>
                    <span className="flex items-center gap-3">
                      <Globe size={18} className="text-signal-red" /> {role.type}
                    </span>
                  </div>
                </div>
                <button className="shrink-0 bg-fog text-graphite p-10 rounded-2xl group-hover:bg-signal-red group-hover:text-white transition-all shadow-inner">
                  <ArrowRight size={32} strokeWidth={3} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-32 text-center mb-32">
            <p className="text-xl text-slate-500 mb-10 font-medium italic">Don't see a role that fits? We're always looking for exceptional talent for our talent pool.</p>
            <button className="bg-signal-red text-white px-16 py-8 rounded-xl font-black text-sm uppercase tracking-[0.3em] hover:bg-graphite transition-all shadow-2xl shadow-signal-red/30">
              SUBMIT SPECULATIVE APPLICATION
            </button>
          </div>

          {/* New Career Application Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-graphite rounded-t-3xl p-10 md:p-12">
               <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Career Application Form</h2>
               <p className="text-slate-400 font-medium">Join our collective of elite engineers. Please provide your details below.</p>
            </div>
            <div className="bg-white border border-slate-100 p-8 md:p-16 shadow-2xl rounded-b-3xl">
              <form className="space-y-16">

                {/* Job Interested */}
                <div className="space-y-8">
                  <h3 className="text-signal-red font-black text-[10px] uppercase tracking-[0.3em] border-b border-slate-100 pb-4">Job Interested</h3>
                  <div className="flex flex-col space-y-4 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-focus-within:text-signal-red transition-colors">Post Interested *</label>
                    <input type="text" className="bg-fog border-0 border-b-2 border-slate-200 focus:border-signal-red focus:ring-0 transition-all p-4 outline-none font-bold text-graphite" placeholder="e.g. Senior Automation Engineer" required />
                  </div>
                </div>

                {/* Personal Details */}
                <div className="space-y-8">
                  <h3 className="text-signal-red font-black text-[10px] uppercase tracking-[0.3em] border-b border-slate-100 pb-4">Personal Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col space-y-4 group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-focus-within:text-signal-red transition-colors">Name *</label>
                      <input type="text" className="bg-fog border-0 border-b-2 border-slate-200 focus:border-signal-red focus:ring-0 transition-all p-4 outline-none font-bold text-graphite" required />
                    </div>
                    <div className="flex flex-col space-y-4 group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-focus-within:text-signal-red transition-colors">Surname *</label>
                      <input type="text" className="bg-fog border-0 border-b-2 border-slate-200 focus:border-signal-red focus:ring-0 transition-all p-4 outline-none font-bold text-graphite" required />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-focus-within:text-signal-red transition-colors">Email Address *</label>
                    <input type="email" className="bg-fog border-0 border-b-2 border-slate-200 focus:border-signal-red focus:ring-0 transition-all p-4 outline-none font-bold text-graphite" required />
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-8">
                  <h3 className="text-signal-red font-black text-[10px] uppercase tracking-[0.3em] border-b border-slate-100 pb-4">Contact Details</h3>
                  <div className="flex flex-col space-y-4 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-focus-within:text-signal-red transition-colors">Address</label>
                    <input type="text" className="bg-fog border-0 border-b-2 border-slate-200 focus:border-signal-red focus:ring-0 transition-all p-4 outline-none font-bold text-graphite" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col space-y-4 group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-focus-within:text-signal-red transition-colors">City</label>
                      <input type="text" className="bg-fog border-0 border-b-2 border-slate-200 focus:border-signal-red focus:ring-0 transition-all p-4 outline-none font-bold text-graphite" />
                    </div>
                    <div className="flex flex-col space-y-4 group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-focus-within:text-signal-red transition-colors">Post Code</label>
                      <input type="text" className="bg-fog border-0 border-b-2 border-slate-200 focus:border-signal-red focus:ring-0 transition-all p-4 outline-none font-bold text-graphite" />
                    </div>
                    <div className="flex flex-col space-y-4 group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-focus-within:text-signal-red transition-colors">Country</label>
                      <input type="text" className="bg-fog border-0 border-b-2 border-slate-200 focus:border-signal-red focus:ring-0 transition-all p-4 outline-none font-bold text-graphite" />
                    </div>
                    <div className="flex flex-col space-y-4 group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-focus-within:text-signal-red transition-colors">Telephone</label>
                      <input type="tel" className="bg-fog border-0 border-b-2 border-slate-200 focus:border-signal-red focus:ring-0 transition-all p-4 outline-none font-bold text-graphite" />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-focus-within:text-signal-red transition-colors">Cell Phone *</label>
                    <input type="tel" className="bg-fog border-0 border-b-2 border-slate-200 focus:border-signal-red focus:ring-0 transition-all p-4 outline-none font-bold text-graphite" required />
                  </div>
                </div>

                {/* Qualifications */}
                <div className="space-y-8">
                  <h3 className="text-signal-red font-black text-[10px] uppercase tracking-[0.3em] border-b border-slate-100 pb-4">Qualifications</h3>
                  <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Do you have a degree?</label>
                    <div className="flex gap-12">
                      <label className="flex items-center gap-3 cursor-pointer group/radio">
                        <input type="radio" name="degree" value="yes" className="w-5 h-5 text-signal-red focus:ring-signal-red border-slate-300" />
                        <span className="font-bold text-graphite">Yes</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group/radio">
                        <input type="radio" name="degree" value="no" className="w-5 h-5 text-signal-red focus:ring-signal-red border-slate-300" />
                        <span className="font-bold text-graphite">No</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-focus-within:text-signal-red transition-colors">Where did you complete your degree?</label>
                    <input type="text" className="bg-fog border-0 border-b-2 border-slate-200 focus:border-signal-red focus:ring-0 transition-all p-4 outline-none font-bold text-graphite" />
                  </div>
                  <div className="flex flex-col space-y-4 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-focus-within:text-signal-red transition-colors">Title of your degree</label>
                    <input type="text" className="bg-fog border-0 border-b-2 border-slate-200 focus:border-signal-red focus:ring-0 transition-all p-4 outline-none font-bold text-graphite" />
                  </div>
                  <div className="flex flex-col space-y-4 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-focus-within:text-signal-red transition-colors">Upload your CV *</label>
                    <input type="file" className="bg-fog border-0 border-b-2 border-slate-200 focus:border-signal-red focus:ring-0 transition-all p-4 outline-none font-bold text-graphite file:mr-6 file:py-2 file:px-6 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-graphite file:text-white hover:file:bg-signal-red transition-all cursor-pointer" required />
                  </div>
                </div>

                <button className="bg-signal-red text-white font-black py-8 rounded-xl hover:bg-graphite transition-all w-full uppercase tracking-[0.4em] text-sm shadow-2xl shadow-signal-red/30 active:scale-[0.98]">
                  Submit Your Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-graphite text-white relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
           <h2 className="text-5xl md:text-[7rem] font-black mb-12 tracking-tighter leading-[0.85] italic">Ready to redefine <br /> what's possible?</h2>
           <p className="text-xl text-slate-400 mb-20 max-w-2xl mx-auto leading-relaxed font-medium">Experience a culture that values precision, architecture, and impact above all else.</p>
           <button className="bg-signal-red text-white font-black px-16 py-8 rounded-2xl hover:bg-white hover:text-graphite transition-all uppercase tracking-[0.4em] text-sm shadow-2xl shadow-signal-red/30">
              START YOUR JOURNEY
           </button>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl opacity-[0.03] pointer-events-none">
           <img src="/assets/rubric-logo-primary.png" alt="" className="w-full brightness-0 invert" />
        </div>
      </section>
    </div>
  );
};

export default Careers;
