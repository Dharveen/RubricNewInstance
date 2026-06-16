import { ArrowRight, MapPin, Clock, Search } from 'lucide-react';

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
      <section className="bg-graphite text-white pt-24 pb-32 md:pt-40 md:pb-56 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <span className="text-signal-red font-bold tracking-[0.2em] text-xs uppercase mb-6 block">Join the Collective</span>
            <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tight mb-10">
              Where Specialists <br /> <span className="text-signal-red">Evolve.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl">
              We are building a culture of extreme ownership and technical pride. Join a team where your architectural rigor meets measurable digital impact.
            </p>
          </div>
        </div>
        {/* Background Visual Element */}
        <div className="absolute right-0 bottom-0 w-64 h-64 border-r-4 border-b-4 border-signal-red opacity-10 m-20"></div>
      </section>

      {/* Academy Section */}
      <section className="py-32">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <span className="text-signal-red font-bold tracking-widest text-sm uppercase">Rubric Academy</span>
            <h2 className="text-4xl font-bold text-graphite leading-tight">Continuous Growth <br />by Design</h2>
            <p className="text-lg text-slate leading-relaxed">
              We believe that the best engineers are the ones who never stop learning. The Rubric Academy is our internal knowledge catalyst, designed to scale your technical and strategic capabilities through mentorship and specialized certification paths.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="flex items-center gap-4 text-graphite font-bold">
                 <div className="w-6 h-0.5 bg-signal-red"></div>
                 Curriculum Development
              </div>
              <div className="flex items-center gap-4 text-graphite font-bold">
                 <div className="w-6 h-0.5 bg-signal-red"></div>
                 Capability Building
              </div>
            </div>
          </div>
          <div className="bg-fog p-12 border border-slate-200 shadow-sm relative group overflow-hidden">
             <div className="relative z-10">
               <h3 className="text-2xl font-bold mb-6">Staff Enablement</h3>
               <p className="text-slate mb-8 leading-relaxed">Scaling knowledge through the Rubric Academy framework. Empowering our consultants to stay at the absolute frontier of technology shifts.</p>
               <span className="text-signal-red font-bold tracking-widest text-xs uppercase border-b-2 border-signal-red pb-1 cursor-pointer hover:text-graphite transition-colors">Learn about the Academy</span>
             </div>
             <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white rotate-45 group-hover:scale-110 transition-transform"></div>
          </div>
        </div>
      </section>

      {/* Openings Section */}
      <section className="py-32 bg-platinum" id="open-roles">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-graphite tracking-tight">Current Openings</h2>
              <p className="text-slate mt-4 text-lg">Find your place in the next generation of digital consulting.</p>
            </div>
            <div className="relative w-full md:w-auto">
               <select className="w-full md:min-w-[250px] bg-white border-0 border-b-2 border-slate focus:border-signal-red focus:ring-0 font-bold uppercase tracking-widest text-xs py-4 px-2 outline-none appearance-none">
                 <option>All Departments</option>
                 <option>Engineering</option>
                 <option>Consulting</option>
                 <option>ITSM</option>
               </select>
               <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Search size={16} className="text-slate" />
               </div>
            </div>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {openings.map((role, i) => (
              <div key={i} className="group py-10 hover:bg-fog transition-all cursor-pointer px-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div>
                    <h4 className="text-2xl font-bold text-graphite group-hover:text-signal-red transition-colors mb-2">{role.title}</h4>
                    <div className="flex flex-wrap items-center gap-6 text-slate text-sm font-medium">
                      <span className="flex items-center gap-2">
                        <MapPin size={16} className="text-signal-red" /> {role.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={16} className="text-signal-red" /> {role.type}
                      </span>
                    </div>
                  </div>
                  <button className="flex items-center gap-3 font-bold text-sm tracking-widest uppercase text-graphite group-hover:translate-x-3 transition-transform">
                    View Position <ArrowRight size={20} className="text-signal-red" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-lg text-slate mb-8">Don't see a role that fits? We're always looking for exceptional talent.</p>
            <a href="mailto:careers@rubric.co.za" className="text-signal-red font-bold text-lg border-b-2 border-signal-red pb-2 hover:text-graphite transition-colors">
              SEND A SPECULATIVE CV
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-graphite text-white">
        <div className="container-custom">
           <div className="bg-white/5 p-12 md:p-24 border border-white/10 relative overflow-hidden">
             <div className="max-w-2xl relative z-10">
               <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to redefine what's possible?</h2>
               <p className="text-xl text-slate-400 mb-12 leading-relaxed">Experience a culture that values precision, architecture, and impact above all else.</p>
               <button className="bg-signal-red text-white font-bold px-12 py-6 rounded-sm hover:bg-opacity-90 transition-all uppercase tracking-[0.2em] shadow-2xl">
                  Start Your Journey
               </button>
             </div>
             {/* Visual Decor */}
             <div className="absolute bottom-0 right-0 w-48 h-48 border-r-4 border-b-4 border-signal-red opacity-30 m-12"></div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
