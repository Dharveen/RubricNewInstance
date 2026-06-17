import { ArrowRight, Zap, Code, Layout, Users, BarChart3, ShieldCheck, Microscope, Database, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-graphite text-white pt-24 pb-32 md:pt-48 md:pb-64 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-5xl">
            <span className="text-signal-red font-black tracking-[0.4em] text-[10px] uppercase mb-8 block">Precision Engineering</span>
            <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-12">
              Services designed for <br /> <span className="text-signal-red italic uppercase">measurable</span> <br /> digital impact.
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl font-medium">
              We deliver the architectural rigor and strategic execution required for enterprise-scale stability and sustainable digital growth.
            </p>
            <div className="mt-16">
               <Link to="/contact" className="bg-white text-graphite px-10 py-5 rounded-sm font-black text-xs tracking-widest uppercase hover:bg-signal-red hover:text-white transition-all inline-flex items-center gap-4 group">
                  ACTIVATE STACK DIAGNOSTICS <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-signal-red group-hover:text-white" />
               </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 grayscale pointer-events-none">
           <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" alt="" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Expertise at Scale Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
           <div className="mb-24">
              <span className="text-slate-400 font-black tracking-widest text-[10px] uppercase mb-6 block">Our Expertise</span>
              <h2 className="text-4xl md:text-7xl font-black text-graphite tracking-tight leading-[0.9] mb-10">Expertise at scale.</h2>
              <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">Our multi-layer approach ensures that every level of your digital ecosystem is optimized for performance, security, and scalability through a vertical execution model.</p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Main Service Card 1 */}
              <div className="lg:col-span-8 bg-fog rounded-3xl border border-slate-100 p-12 md:p-20 relative overflow-hidden group hover:border-signal-red transition-all duration-500">
                 <div className="relative z-10">
                   <div className="text-dept-qa mb-12 group-hover:scale-110 transition-transform origin-left">
                      <ShieldCheck size={72} strokeWidth={1.5} />
                   </div>
                   <h3 className="text-4xl md:text-5xl font-black text-graphite mb-8 tracking-tight">QA & Testing Diagnostics</h3>
                   <p className="text-xl text-slate-500 leading-relaxed mb-16 max-w-2xl">High-fidelity diagnostic audits of your current testing protocols, to identify architectural bottlenecks and latent security vulnerabilities.</p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                      {['Maturity Benchmarking', 'Architectural Roadmaps', 'Risk Analysis Frameworks', 'Process Remediation'].map(item => (
                        <div key={item} className="flex items-center gap-5 text-xs font-black text-graphite uppercase tracking-[0.2em]">
                           <div className="w-2 h-2 bg-signal-red rounded-full shadow-[0_0_10px_rgba(229,57,53,0.5)]"></div>
                           {item}
                        </div>
                      ))}
                   </div>
                   <Link to="/contact" className="text-signal-red font-black text-xs tracking-widest uppercase border-b-2 border-signal-red pb-2 hover:text-graphite transition-colors inline-block">ENGAGE ASSESSMENT SERVICES</Link>
                 </div>
                 <div className="absolute right-[-10%] top-[-10%] w-96 h-96 bg-signal-red/5 rounded-full blur-3xl group-hover:bg-signal-red/10 transition-all duration-1000"></div>
              </div>

              {/* ITSM Strategy Card */}
              <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-12 md:p-16 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all group">
                 <div>
                    <div className="text-dept-itsm mb-12 group-hover:rotate-12 transition-transform duration-500">
                       <Zap size={56} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-3xl font-black text-graphite mb-6 tracking-tight">ITSM Strategy</h4>
                    <p className="text-lg text-slate-500 leading-relaxed mb-10">Aligning IT services with business objectives through rigorous governance and systemic governance.</p>
                 </div>
                 <Link to="/contact" className="text-dept-itsm font-black text-xs tracking-widest uppercase flex items-center gap-4 group-hover:gap-6 transition-all">INITIATE STRATEGY <ArrowRight size={20} /></Link>
              </div>

              {/* Smaller Cards Row */}
              <div className="lg:col-span-4 bg-fog border border-slate-100 rounded-3xl p-12 flex flex-col justify-between hover:border-signal-red transition-all group">
                 <div>
                    <div className="text-signal-red mb-12">
                       <Layout size={48} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-2xl font-bold text-graphite mb-6 uppercase tracking-tighter">QA Consulting</h4>
                    <p className="text-slate-500 leading-relaxed mb-10">Strategic advisory to embed quality-first culture into your delivery pipeline.</p>
                 </div>
                 <Link to="/contact" className="text-graphite font-black text-[10px] tracking-widest uppercase border-b-2 border-slate-200 pb-1 self-start group-hover:border-signal-red transition-all">LEARN MORE</Link>
              </div>

              <div className="lg:col-span-4 bg-fog border border-slate-100 rounded-3xl p-12 flex flex-col justify-between hover:border-signal-red transition-all group">
                 <div>
                    <div className="text-signal-red mb-12">
                       <BarChart3 size={48} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-2xl font-bold text-graphite mb-6 uppercase tracking-tighter">Test Automation</h4>
                    <p className="text-slate-500 leading-relaxed mb-10">Custom-built automation frameworks focused on reducing manual overhead and accelerating speed-to-market.</p>
                 </div>
                 <Link to="/contact" className="text-graphite font-black text-[10px] tracking-widest uppercase border-b-2 border-slate-200 pb-1 self-start group-hover:border-signal-red transition-all">LEARN MORE</Link>
              </div>

              {/* Dark Engineering Card */}
              <div className="lg:col-span-4 bg-graphite text-white rounded-3xl p-12 flex flex-col justify-between group overflow-hidden relative shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                 <div className="z-10">
                    <div className="text-dept-dev mb-12 group-hover:scale-110 transition-transform origin-left duration-700">
                       <Code size={56} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-3xl font-black mb-6 tracking-tight uppercase">Engineering</h4>
                    <p className="text-slate-400 leading-relaxed mb-12 text-lg">Advanced software engineering with a focus on clean architecture, durability, and high-concurrency systems.</p>
                 </div>
                 <button className="z-10 bg-white text-graphite font-black text-xs tracking-widest uppercase px-10 py-4 rounded-full hover:bg-signal-red hover:text-white transition-all self-start shadow-xl shadow-white/5">KNOW MORE</button>
                 <div className="absolute right-0 bottom-0 w-48 h-48 bg-dept-dev opacity-20 blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>
              </div>

              {/* Final Grid Row */}
              <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-12 md:p-16 flex flex-col justify-between group hover:border-dept-consulting transition-all">
                 <div>
                    <div className="text-dept-consulting mb-12 group-hover:scale-110 transition-transform origin-left">
                       <Database size={56} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-3xl font-black text-graphite mb-6 tracking-tight uppercase">Technical Architecture</h4>
                    <p className="text-xl text-slate-500 leading-relaxed mb-12">Bespoke technical strategies for cloud migration, infrastructure overhaul, and legacy system modernization.</p>
                 </div>
                 <Link to="/contact" className="text-dept-consulting font-black text-xs tracking-widest uppercase border-b-2 border-dept-consulting pb-2 self-start transition-all group-hover:gap-8 flex items-center gap-4">CONSULT OUR ARCHITECTS <ArrowRight size={20} /></Link>
              </div>

              <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-12 md:p-16 flex flex-col justify-between group hover:border-dept-training transition-all">
                 <div>
                    <div className="text-dept-training mb-12 group-hover:scale-110 transition-transform origin-left">
                       <Users size={56} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-3xl font-black text-graphite mb-6 tracking-tight uppercase">Capacity Augmentation</h4>
                    <p className="text-xl text-slate-500 leading-relaxed mb-12">Specialist engineers and consultants who integrate seamlessly into your existing delivery pods to accelerate throughput.</p>
                 </div>
                 <Link to="/contact" className="text-dept-training font-black text-xs tracking-widest uppercase border-b-2 border-dept-training pb-2 self-start transition-all group-hover:gap-8 flex items-center gap-4">BOOK YOUR SQUAD <ArrowRight size={20} /></Link>
              </div>

           </div>
        </div>
      </section>

      {/* Workforce Training / Academy Banner */}
      <section className="py-24 bg-fog border-y border-slate-200">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { t: 'Managed Testing', d: 'Rigorous end-to-end planning, execution, and reporting.', c: 'bg-signal-red' },
             { t: '24/7 Support', d: 'High-level technical oversight and rapid-response remediation.', c: 'bg-dept-dev' },
             { t: 'Rubric R&D', d: 'Developing inner-sourced technologies for maturity gaps.', c: 'bg-dept-consulting' }
           ].map(item => (
             <div key={item.t} className="p-10 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between hover:shadow-xl transition-all">
               <h5 className="font-bold text-xl mb-4 text-graphite">{item.t}</h5>
               <p className="text-sm text-slate-500 leading-relaxed mb-10">{item.d}</p>
               <div className={`w-10 h-1 ${item.c}`}></div>
             </div>
           ))}
           <div className="p-10 bg-dept-training text-white rounded-2xl flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h5 className="font-black text-xl mb-4 uppercase tracking-tighter">Workforce Training</h5>
                <p className="text-sm opacity-90 leading-relaxed mb-10">Upskilling internal engineering teams in modern DevOps and QA methodologies.</p>
              </div>
              <div className="absolute right-[-10%] bottom-[-10%] opacity-10 group-hover:scale-125 transition-transform duration-1000">
                 <Globe size={140} />
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="container-custom flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 z-10">
            <span className="text-signal-red font-black tracking-widest text-[10px] mb-8 block uppercase">Next Steps</span>
            <h2 className="text-5xl md:text-[5rem] font-black text-graphite mb-10 leading-[0.9] tracking-tighter">Architect your next <br /> phase of growth.</h2>
            <p className="text-xl text-slate-500 mb-16 leading-relaxed font-medium">Consult with our technical leaders to define a bespoke service framework tailored to your organization's specific technical maturity level.</p>
            <div className="flex flex-wrap gap-8">
              <Link to="/contact" className="bg-signal-red text-white px-16 py-8 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-graphite transition-all shadow-2xl shadow-signal-red/40">
                SCHEDULE CONSULTATION
              </Link>
              <Link to="/case-studies" className="border-2 border-slate-200 text-graphite px-16 py-8 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-fog transition-all">
                VIEW CASE STUDIES
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl grayscale group">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200"
              alt="Elite Boardroom"
              className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-graphite/40 to-transparent"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
