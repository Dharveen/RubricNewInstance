import { ArrowRight, ShieldCheck, Zap, Code2, Layout, GraduationCap, Users, BarChart3, Microscope, Database, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const domains = [
    { name: 'QA', label: 'Quality Assurance', color: 'text-dept-qa', icon: <ShieldCheck size={24} /> },
    { name: 'ITSM', label: 'Service Management', color: 'text-dept-itsm', icon: <Zap size={24} /> },
    { name: 'DEV', label: 'Software Engineering', color: 'text-dept-dev', icon: <Code2 size={24} /> },
    { name: 'Consulting', label: 'Strategic Advisory', color: 'text-dept-consulting', icon: <Layout size={24} /> },
    { name: 'Training', label: 'Specialised Training', color: 'text-dept-training', icon: <GraduationCap size={24} /> },
  ];

  const solutions = [
    { title: 'QA & Technical Assessments', desc: 'Deep-dive diagnostics of your engineering maturity and delivery risk.' },
    { title: 'Test Automation', desc: 'Architecting robust, scalable frameworks for continuous delivery.' },
    { title: 'Managed Testing', desc: 'Complete ownership of quality outcomes for mission-critical systems.' },
    { title: 'Staff Augmentation', desc: 'High-end specialist talent embedded directly into your delivery pods.' },
    { title: 'DevX Consulting', desc: 'Optimising the developer experience to accelerate throughput.' },
    { title: 'Rubric Academy', desc: 'Specialised enablement and upskilling for high-performance teams.' }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-40 md:pb-48 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 z-10">
          <span className="text-signal-red font-black tracking-[0.3em] text-[10px] uppercase mb-6 block">Technology Consulting & SQE</span>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter mb-8 text-graphite">
            Structured <br /> quality. <br />
            <span className="text-signal-red">Measurable</span> <br />
            digital impact.
          </h1>
          <p className="text-lg md:text-xl text-slate mb-10 max-w-lg leading-relaxed">
            Rubric engineers sustainable digital outcomes through architectural rigor, strategy, and software quality excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-signal-red text-white px-10 py-5 rounded-sm font-bold hover:bg-graphite transition-all shadow-xl shadow-signal-red/20">
              CONTACT US
            </Link>
            <Link to="/services" className="border border-slate-200 text-graphite px-10 py-5 rounded-sm font-bold hover:bg-fog transition-all">
              SERVICES
            </Link>
          </div>
        </div>
        <div className="flex-1 relative">
           <div className="aspect-square bg-fog rounded-3xl overflow-hidden shadow-2xl relative group">
              <img
                src="/assets/rubric-brand-construction.png"
                alt="Architectural Quality"
                className="w-full h-full object-contain p-12 opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
           </div>
           {/* Floating Accent */}
           <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-signal-red/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Specialized Domains */}
      <section className="py-24 bg-white border-y border-fog">
        <div className="container-custom">
           <div className="text-center mb-16">
             <span className="text-slate font-bold tracking-widest text-[10px] uppercase mb-4 block">Our Specialisation</span>
             <h2 className="text-3xl md:text-4xl font-black text-graphite tracking-tight">Specialised Department Domains</h2>
             <div className="w-12 h-1 bg-signal-red mx-auto mt-6"></div>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
             {domains.map((domain) => (
               <div key={domain.name} className="p-8 bg-white border border-slate-100 rounded-xl hover:shadow-xl hover:border-signal-red transition-all text-center group">
                 <div className={`${domain.color} mb-6 flex justify-center group-hover:scale-110 transition-transform`}>
                   {domain.icon}
                 </div>
                 <h4 className="text-sm font-black text-graphite mb-1 uppercase tracking-tighter">{domain.name}</h4>
                 <p className="text-[10px] text-slate font-bold uppercase tracking-widest leading-none">{domain.label}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Solutions Section (Dark) */}
      <section className="py-32 bg-graphite text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
             <div className="max-w-2xl">
                <span className="text-signal-red font-bold tracking-widest text-[10px] uppercase mb-4 block">SQE Frameworks</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.9]">End-to-end digital solutions for modern enterprise.</h2>
             </div>
             <Link to="/services" className="text-white font-black text-xs uppercase tracking-widest border-b-2 border-signal-red pb-2 flex items-center gap-3 group">
                EXPLORE ALL <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
             </Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {solutions.map((sol, i) => (
               <div key={i} className="p-12 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group">
                 <span className="text-signal-red font-black text-[10px] mb-6 block tracking-widest">0{i+1}. {sol.title.split(' ')[0].toUpperCase()}</span>
                 <h3 className="text-2xl font-bold mb-4 group-hover:text-signal-red transition-colors">{sol.title}</h3>
                 <p className="text-slate-400 leading-relaxed text-sm">{sol.desc}</p>
               </div>
             ))}
           </div>
        </div>
        {/* Large Watermark */}
        <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-1/2 opacity-[0.02] pointer-events-none">
           <img src="/assets/rubric-logo-primary.png" alt="" className="w-full brightness-0 invert" />
        </div>
      </section>

      {/* Why Rubric / Stats */}
      <section className="py-32 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-slate font-black tracking-[0.3em] text-[10px] uppercase mb-6 block">The Difference</span>
            <h2 className="text-4xl md:text-6xl font-black text-graphite mb-12 tracking-tight leading-[0.9]">Why Enterprises Trust Rubric</h2>
            <div className="space-y-10">
              {[
                { t: 'Structured delivery approach', d: 'Our methodology follows rigorous architectural logic to ensure consistent success.' },
                { t: 'Expert-led consultancy', d: 'Over 15 years of navigating complex ecosystems with elite technical talent.' },
                { t: 'Practical business outcomes', d: 'We focus on metrics that move the needle: velocity, stability, and ROI.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="shrink-0 w-1 h-12 bg-slate-100 group-hover:bg-signal-red transition-colors"></div>
                  <div>
                    <h5 className="text-xl font-bold text-graphite mb-2">{item.t}</h5>
                    <p className="text-slate leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 relative">
             <div className="absolute inset-0 bg-fog rounded-full opacity-30 blur-3xl -z-10"></div>
             {[
               { val: '2007', label: 'Established' },
               { val: '15+', label: 'Global Partners' },
               { val: '100%', label: 'Quality Focused' },
               { val: '24/7', label: 'Support Presence' }
             ].map((stat, i) => (
               <div key={i} className={`p-12 bg-white border border-slate-100 rounded-3xl text-center shadow-2xl shadow-graphite/5 hover:-translate-y-2 transition-all duration-500 ${i % 2 !== 0 ? 'translate-y-8' : '-translate-y-8 md:translate-y-0'}`}>
                  <div className="text-5xl font-black text-graphite mb-2 group-hover:text-signal-red">{stat.val}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-graphite py-32 text-white text-center relative overflow-hidden">
        <div className="container-custom relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">Ready to architect <br /> your success?</h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect with our strategic consultants to define your path toward digital certainty and quality engineering excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="bg-signal-red text-white px-12 py-6 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-graphite transition-all shadow-2xl shadow-signal-red/20">
              CONTACT RUBRIC
            </Link>
            <Link to="/case-studies" className="border-2 border-white/20 text-white px-12 py-6 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-graphite transition-all">
              VIEW CASE STUDIES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
