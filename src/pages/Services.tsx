import { ArrowRight, Zap, Code, Layout, Users, BarChart3, GraduationCap, ShieldCheck, Microscope, Database, Globe, Search } from 'lucide-react';
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
              Services designed for <br /> <span className="text-signal-red italic">measurable</span> digital impact.
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl">
              We deliver the architectural rigor and strategic execution required for enterprise-scale stability and sustainable digital growth.
            </p>
            <div className="mt-12">
               <button className="bg-white text-graphite px-10 py-5 rounded-sm font-black text-xs tracking-widest uppercase hover:bg-signal-red hover:text-white transition-all inline-flex items-center gap-4 group">
                  ACTIVATE STACK DIAGNOSTICS <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
          </div>
        </div>
        {/* Background Visual Element */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 grayscale pointer-events-none">
           <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" alt="" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
           <div className="mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-graphite tracking-tight leading-[0.9] mb-8">Expertise at scale.</h2>
              <p className="text-lg text-slate max-w-2xl leading-relaxed">Our multi-layer approach ensures that every level of your digital ecosystem is optimized for performance, security, and scalability through a vertical execution model.</p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              {/* Main Service Card 1 */}
              <div className="lg:col-span-8 bg-fog rounded-3xl border border-slate-100 p-12 md:p-20 relative overflow-hidden group hover:border-signal-red transition-all duration-500">
                 <div className="relative z-10">
                   <div className="text-dept-qa mb-10 group-hover:scale-110 transition-transform origin-left">
                      <ShieldCheck size={64} />
                   </div>
                   <h3 className="text-4xl font-black text-graphite mb-6 tracking-tight">QA & Testing Diagnostics</h3>
                   <p className="text-xl text-slate leading-relaxed mb-12 max-w-2xl">High-fidelity diagnostic audits of your current testing protocols, to identify architectural bottlenecks and latent security vulnerabilities.</p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                      {['Maturity Benchmarking', 'Architectural Roadmaps', 'Risk Analysis Frameworks', 'Process Remediation'].map(item => (
                        <div key={item} className="flex items-center gap-4 text-sm font-bold text-graphite uppercase tracking-widest">
                           <div className="w-1.5 h-1.5 bg-signal-red rounded-full"></div>
                           {item}
                        </div>
                      ))}
                   </div>
                   <Link to="/contact" className="text-signal-red font-black text-xs tracking-widest uppercase border-b-2 border-signal-red pb-1 hover:text-graphite transition-colors">ENGAGE ASSESSMENT SERVICES</Link>
                 </div>
                 <div className="absolute right-[-10%] top-[-10%] w-64 h-64 bg-signal-red/5 rounded-full blur-3xl group-hover:bg-signal-red/10 transition-all"></div>
              </div>

              {/* Side Card 1 */}
              <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-12 flex flex-col justify-between hover:shadow-2xl transition-all group">
                 <div>
                    <div className="text-dept-itsm mb-10 group-hover:rotate-12 transition-transform">
                       <Zap size={48} />
                    </div>
                    <h4 className="text-2xl font-bold text-graphite mb-4">ITSM Strategy</h4>
                    <p className="text-slate leading-relaxed mb-8">Aligning IT services with business objectives through rigorous governance and systemic governance.</p>
                 </div>
                 <Link to="/contact" className="text-dept-itsm font-black text-xs tracking-widest uppercase flex items-center gap-3 group-hover:gap-5 transition-all">INITIATE STRATEGY <ArrowRight size={16} /></Link>
              </div>

              {/* Grid 2 */}
              <div className="lg:col-span-4 bg-fog border border-slate-100 rounded-3xl p-12 flex flex-col justify-between hover:border-signal-red transition-all group">
                 <div>
                    <div className="text-signal-red mb-10">
                       <Layout size={48} />
                    </div>
                    <h4 className="text-2xl font-bold text-graphite mb-4">QA Consulting</h4>
                    <p className="text-slate leading-relaxed mb-8">Strategic advisory to embed quality-first culture into your delivery pipeline.</p>
                 </div>
                 <Link to="/contact" className="text-graphite font-black text-[10px] tracking-widest uppercase border-b border-graphite pb-1 self-start">LEARN MORE</Link>
              </div>

              <div className="lg:col-span-4 bg-fog border border-slate-100 rounded-3xl p-12 flex flex-col justify-between hover:border-signal-red transition-all group">
                 <div>
                    <div className="text-signal-red mb-10">
                       <BarChart3 size={48} />
                    </div>
                    <h4 className="text-2xl font-bold text-graphite mb-4">Test Automation</h4>
                    <p className="text-slate leading-relaxed mb-8">Custom-built automation frameworks focused on reducing manual overhead and accelerating speed-to-market.</p>
                 </div>
                 <Link to="/contact" className="text-graphite font-black text-[10px] tracking-widest uppercase border-b border-graphite pb-1 self-start">LEARN MORE</Link>
              </div>

              {/* Dark Card */}
              <div className="lg:col-span-4 bg-graphite text-white rounded-3xl p-12 flex flex-col justify-between group overflow-hidden relative shadow-2xl">
                 <div className="z-10">
                    <div className="text-dept-dev mb-10 group-hover:scale-110 transition-transform origin-left">
                       <Code size={48} />
                    </div>
                    <h4 className="text-3xl font-black mb-4">Engineering</h4>
                    <p className="text-slate-400 leading-relaxed mb-8">Advanced software engineering with a focus on clean architecture, durability, and high-concurrency systems.</p>
                 </div>
                 <button className="z-10 bg-white text-graphite font-black text-[10px] tracking-widest uppercase px-8 py-3 rounded-full hover:bg-signal-red hover:text-white transition-all self-start">KNOW MORE</button>
                 <div className="absolute right-0 bottom-0 w-32 h-32 bg-dept-dev opacity-10 blur-3xl"></div>
              </div>

              {/* Final Grid Row */}
              <div className="lg:col-span-6 bg-dept-consulting/5 border border-dept-consulting/10 rounded-3xl p-12 group hover:bg-dept-consulting transition-all duration-500 hover:text-white">
                 <div className="text-dept-consulting mb-10 group-hover:text-white transition-colors">
                    <Database size={48} />
                 </div>
                 <h4 className="text-3xl font-black mb-6">Technical Architecture</h4>
                 <p className="text-lg leading-relaxed mb-10 opacity-80 group-hover:opacity-100">Bespoke technical strategies for cloud migration, infrastructure overhaul, and legacy system modernization.</p>
                 <Link to="/contact" className="text-dept-consulting font-black text-xs tracking-widest uppercase border-b border-dept-consulting pb-1 group-hover:text-white group-hover:border-white transition-all">CONSULT OUR ARCHITECTS</Link>
              </div>

              <div className="lg:col-span-6 bg-dept-training/5 border border-dept-training/10 rounded-3xl p-12 group hover:bg-dept-training transition-all duration-500 hover:text-white">
                 <div className="text-dept-training mb-10 group-hover:text-white transition-colors">
                    <Users size={48} />
                 </div>
                 <h4 className="text-3xl font-black mb-6">Capacity Augmentation</h4>
                 <p className="text-lg leading-relaxed mb-10 opacity-80 group-hover:opacity-100">Specialist engineers and consultants who integrate seamlessly into your existing delivery pods to accelerate throughput.</p>
                 <Link to="/contact" className="text-dept-training font-black text-xs tracking-widest uppercase border-b border-dept-training pb-1 group-hover:text-white group-hover:border-white transition-all">BOOK YOUR SQUAD</Link>
              </div>

           </div>
        </div>
      </section>

      {/* R&D and Academy */}
      <section className="py-24 bg-fog border-y border-slate-200">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="p-10 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between hover:shadow-xl transition-all">
              <h5 className="font-bold text-lg mb-4 text-graphite">Managed Testing</h5>
              <p className="text-sm text-slate leading-relaxed mb-8">Rigorous end-to-end planning, execution, and reporting for mission-critical apps.</p>
              <div className="w-8 h-0.5 bg-signal-red"></div>
           </div>
           <div className="p-10 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between hover:shadow-xl transition-all">
              <h5 className="font-bold text-lg mb-4 text-graphite">24/7 Support</h5>
              <p className="text-sm text-slate leading-relaxed mb-8">High-level technical oversight and rapid-response remediation for legacy apps.</p>
              <div className="w-8 h-0.5 bg-dept-dev"></div>
           </div>
           <div className="p-10 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between hover:shadow-xl transition-all">
              <h5 className="font-bold text-lg mb-4 text-graphite">Rubric R&D</h5>
              <p className="text-sm text-slate leading-relaxed mb-8">Developing inner-sourced technologies to solve specific technical maturity gaps.</p>
              <div className="w-8 h-0.5 bg-dept-consulting"></div>
           </div>
           <div className="p-10 bg-dept-training text-white rounded-2xl flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h5 className="font-black text-lg mb-4">Workforce Training</h5>
                <p className="text-sm opacity-90 leading-relaxed mb-8">Upskilling internal engineering teams in modern DevOps and QA methodologies.</p>
              </div>
              <div className="absolute right-[-20%] bottom-[-20%] opacity-10 group-hover:scale-125 transition-transform duration-700">
                 <School size={120} />
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="container-custom flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 z-10">
            <span className="text-signal-red font-black tracking-widest text-[10px] mb-6 block uppercase">Next Steps</span>
            <h2 className="text-4xl md:text-7xl font-black text-graphite mb-10 leading-[0.9] tracking-tighter">Architect your next <br /> phase of growth.</h2>
            <p className="text-xl text-slate mb-12 leading-relaxed">Consult with our technical leaders to define a bespoke service framework tailored to your organization's specific technical maturity level.</p>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact" className="bg-signal-red text-white px-12 py-6 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-graphite transition-all shadow-2xl shadow-signal-red/30">
                SCHEDULE CONSULTATION
              </Link>
              <Link to="/case-studies" className="border-2 border-slate-200 text-graphite px-12 py-6 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-fog transition-all">
                VIEW CASE STUDIES
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full relative aspect-video rounded-3xl overflow-hidden shadow-2xl grayscale group">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200"
              alt="Elite Boardroom"
              className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
