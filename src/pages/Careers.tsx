import { ArrowRight, MapPin, Search, Globe, ChevronRight } from 'lucide-react';

const Careers = () => {
  const openings = [
    { title: 'Senior Automation Engineer', location: 'Remote / London', type: 'Full-time' },
    { title: 'Lead ITSM Consultant', location: 'Hybrid / New York', type: 'Full-time' },
    { title: 'Full Stack Developer (Next.js/Node)', location: 'Remote', type: 'Full-time' },
    { title: 'QA Strategy Lead', location: 'Amsterdam', type: 'Contract' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-graphite text-white pt-24 pb-32 md:pt-48 md:pb-64 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-5xl">
            <span className="text-signal-red font-black tracking-[0.4em] text-[10px] uppercase mb-8 block">Career Evolution</span>
            <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-12">
              Join the <br /> <span className="text-signal-red">Collective.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl">
              We are seeking specialists who prioritize engineering excellence over convenience. Join an elite squad of architects, engineers, and consultants.
            </p>
          </div>
        </div>
        {/* Background Visual Element */}
        <div className="absolute right-[-5%] bottom-[-5%] w-1/2 aspect-square border-[1px] border-white/5 rounded-full pointer-events-none"></div>
      </section>

      {/* Culture Section */}
      <section className="py-32 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
             <div className="aspect-[4/5] bg-fog rounded-3xl overflow-hidden shadow-2xl grayscale group">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000"
                  alt="Rubric Culture"
                  className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-1000"
                />
             </div>
             <div className="absolute -top-10 -left-10 w-40 h-40 border-l-8 border-t-8 border-signal-red opacity-10"></div>
          </div>
          <div className="space-y-12">
            <span className="text-signal-red font-black tracking-widest text-[10px] uppercase">Elite Culture</span>
            <h2 className="text-4xl md:text-6xl font-black text-graphite tracking-tight leading-[0.9]">Architected for Growth.</h2>
            <div className="space-y-8">
              {[
                { t: 'Extreme Ownership', d: 'We empower our teams to own the outcome, not just the task.' },
                { t: 'Technical Pride', d: 'A collective commitment to clean code and structural integrity.' },
                { t: 'Global Exposure', d: 'Collaborate with enterprise leaders across multiple continents.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                   <div className="text-4xl font-black text-slate-100 group-hover:text-signal-red transition-colors duration-500">0{i+1}</div>
                   <div>
                      <h4 className="text-xl font-bold text-graphite mb-2">{item.t}</h4>
                      <p className="text-slate leading-relaxed">{item.d}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section className="py-32 bg-graphite text-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="text-signal-red font-black tracking-widest text-[10px] uppercase mb-6 block">Rubric Academy</span>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-10">Continuous growth <br /> by design.</h2>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-12">
              The Rubric Academy is our internal engine for technical and strategic evolution. We invest heavily in specialized certification paths and masterclass mentorship for every consultant.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="p-8 bg-white/5 border border-white/10 rounded-2xl group hover:border-signal-red transition-all">
                  <h4 className="font-bold mb-4">Curriculum Development</h4>
                  <p className="text-sm text-slate-500">Bespoke learning tracks mapped to the latest shifts in QA and Cloud architecture.</p>
               </div>
               <div className="p-8 bg-white/5 border border-white/10 rounded-2xl group hover:border-signal-red transition-all">
                  <h4 className="font-bold mb-4">Capability Building</h4>
                  <p className="text-sm text-slate-500">Hands-on labs and peer reviews to ensure absolute technical consistency across teams.</p>
               </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white rounded-3xl p-12 md:p-16 text-graphite shadow-2xl relative overflow-hidden group">
             <div className="relative z-10">
               <h3 className="text-3xl font-black mb-6 tracking-tight">Staff Enablement</h3>
               <p className="text-slate leading-relaxed mb-10">Scaling knowledge through the Rubric Academy framework. Empowering our consultants to stay at the absolute frontier of technology shifts.</p>
               <button className="bg-graphite text-white px-8 py-4 rounded-xl font-black text-[10px] tracking-widest uppercase hover:bg-signal-red transition-all">LEARN MORE</button>
             </div>
             <div className="absolute right-[-10%] bottom-[-10%] w-48 h-48 bg-fog rounded-full opacity-50 group-hover:scale-125 transition-transform duration-1000"></div>
          </div>
        </div>
      </section>

      {/* Openings Section */}
      <section className="py-32 bg-platinum" id="open-roles">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-graphite tracking-tight leading-[0.9]">Current Openings.</h2>
              <p className="text-slate mt-6 text-lg">Find your place in the next generation of digital consulting.</p>
            </div>
            <div className="relative w-full md:w-auto">
               <select className="w-full md:min-w-[300px] bg-white border border-slate-200 rounded-xl font-bold uppercase tracking-widest text-[10px] py-5 px-6 outline-none appearance-none shadow-sm focus:border-signal-red transition-all">
                 <option>All Departments</option>
                 <option>Engineering</option>
                 <option>Consulting</option>
                 <option>ITSM</option>
               </select>
               <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronRight size={16} className="text-slate rotate-90" />
               </div>
            </div>
          </div>

          <div className="space-y-4">
            {openings.map((role, i) => (
              <div key={i} className="group bg-white border border-slate-100 rounded-2xl p-8 md:p-12 hover:shadow-2xl hover:border-signal-red transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <h4 className="text-2xl md:text-3xl font-black text-graphite group-hover:text-signal-red transition-colors mb-4">{role.title}</h4>
                  <div className="flex flex-wrap items-center gap-8 text-slate font-bold uppercase tracking-widest text-[10px]">
                    <span className="flex items-center gap-2">
                      <MapPin size={14} className="text-signal-red" /> {role.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Globe size={14} className="text-signal-red" /> {role.type}
                    </span>
                  </div>
                </div>
                <button className="shrink-0 bg-fog text-graphite p-6 rounded-full group-hover:bg-signal-red group-hover:text-white transition-all">
                  <ArrowRight size={24} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="text-lg text-slate mb-8">Don't see a role that fits? We're always looking for exceptional talent.</p>
            <a href="mailto:careers@rubric.co.za" className="bg-graphite text-white px-12 py-5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-signal-red transition-all shadow-xl shadow-graphite/10">
              SEND SPECULATIVE CV
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-graphite text-white relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
           <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.85]">Ready to redefine <br /> what's possible?</h2>
           <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">Experience a culture that values precision, architecture, and impact above all else.</p>
           <button className="bg-signal-red text-white font-black px-14 py-6 rounded-xl hover:bg-white hover:text-graphite transition-all uppercase tracking-[0.3em] text-sm shadow-2xl shadow-signal-red/20">
              START YOUR JOURNEY
           </button>
        </div>
        {/* Absolute Visual Decor */}
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-8 border-b-8 border-signal-red opacity-10 m-20"></div>
      </section>
    </div>
  );
};

export default Careers;
