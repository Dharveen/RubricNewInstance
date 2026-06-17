import { ArrowRight, ShieldCheck, Zap, Code2, Layout, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const domains = [
    { name: 'QA', label: 'Quality Assurance', color: 'text-dept-qa', icon: <ShieldCheck size={28} /> },
    { name: 'ITSM', label: 'Service Management', color: 'text-dept-itsm', icon: <Zap size={28} /> },
    { name: 'DEV', label: 'Software Engineering', color: 'text-dept-dev', icon: <Code2 size={28} /> },
    { name: 'Consulting', label: 'Strategic Advisory', color: 'text-dept-consulting', icon: <Layout size={28} /> },
    { name: 'Training', label: 'Specialised Training', color: 'text-dept-training', icon: <GraduationCap size={28} /> },
  ];

  const solutions = [
    { title: 'SQE & Technical Assessments', desc: 'Identify gaps and opportunities in your current software lifecycle with precision metrics.' },
    { title: 'Test Automation', desc: 'Scaling speed and reliability through architectural automation frameworks.' },
    { title: 'Managed Testing', desc: 'Complete end-to-end testing ownership, delivering peace of mind for mission-critical apps.' },
    { title: 'Staff Augmentation', desc: 'On-demand technical experts who integrate seamlessly into your delivery teams.' },
    { title: 'Risk Consulting', desc: 'Deep expertise in mobile, performance, and security testing architectures.' },
    { title: 'R&D Labs', desc: 'Continuous innovation through internal labs, exploring next-gen tech for our partners.' }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-40 md:pb-48 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 z-10">
          <span className="text-signal-red font-black tracking-[0.4em] text-[10px] uppercase mb-8 block">Technology Consulting & SQE</span>
          <h1 className="text-6xl md:text-[5.5rem] font-black leading-[0.9] tracking-tighter mb-10 text-graphite">
            Structured <br /> quality. <br />
            <span className="text-signal-red uppercase italic">Measurable</span> <br />
            digital impact.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
            Rubric engineers sustainable digital outcomes through architectural rigor, strategy, and software quality excellence.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link to="/contact" className="bg-signal-red text-white px-12 py-6 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-graphite transition-all shadow-2xl shadow-signal-red/30">
              CONTACT US
            </Link>
            <Link to="/services" className="border-2 border-slate-200 text-graphite px-12 py-6 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-fog transition-all">
              SERVICES
            </Link>
          </div>
        </div>
        <div className="flex-1 relative">
           <div className="aspect-square relative overflow-hidden group">
              {/* This represents the isometric graphic from the stitch refresh */}
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000"
                alt="Architectural Block Graphic"
                className="w-full h-full object-cover rounded-3xl grayscale brightness-90 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="w-full h-1 bg-signal-red -rotate-45 blur-sm opacity-50"></div>
                 <div className="absolute w-3/4 h-1 bg-signal-red -rotate-45 shadow-[0_0_30px_rgba(229,57,53,0.5)]"></div>
              </div>
           </div>
        </div>
      </section>

      {/* Specialised Department Domains */}
      <section className="py-24 bg-white border-y border-slate-50">
        <div className="container-custom">
           <div className="text-center mb-20">
             <span className="text-signal-red font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">Our Specialisation</span>
             <h2 className="text-4xl md:text-5xl font-black text-graphite tracking-tighter">Specialised Department Domains</h2>
             <div className="w-20 h-1 bg-signal-red mx-auto mt-8 opacity-20"></div>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
             {domains.map((domain) => (
               <div key={domain.name} className="p-10 bg-white border border-slate-50 rounded-2xl hover:shadow-2xl hover:border-slate-100 transition-all text-center group cursor-pointer">
                 <div className={`${domain.color} mb-8 flex justify-center group-hover:scale-110 transition-transform duration-500`}>
                   {domain.icon}
                 </div>
                 <h4 className="text-xl font-black text-graphite mb-2 uppercase tracking-tighter">{domain.name}</h4>
                 <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none">{domain.label}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-32 bg-graphite text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
             <div className="max-w-2xl">
                <span className="text-signal-red font-black tracking-widest text-[10px] uppercase mb-4 block">SQE Frameworks</span>
                <h2 className="text-4xl md:text-[4rem] font-black tracking-tighter leading-[0.9]">End-to-end digital solutions for modern enterprise.</h2>
             </div>
             <Link to="/services" className="text-white font-black text-xs uppercase tracking-[0.3em] border-b-2 border-signal-red pb-2 flex items-center gap-4 group">
                EXPLORE ALL <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform text-signal-red" />
             </Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
             {solutions.map((sol, i) => (
               <div key={i} className="p-12 bg-[#23262B] border border-white/5 hover:bg-signal-red transition-all duration-500 group">
                 <h3 className="text-2xl font-bold mb-6 group-hover:text-white transition-colors">{sol.title}</h3>
                 <p className="text-slate-400 group-hover:text-white/80 leading-relaxed text-sm font-medium">{sol.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Why enterprises trust rubric */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <span className="text-slate-400 font-black tracking-[0.3em] text-[10px] uppercase mb-8 block">The Difference</span>
            <h2 className="text-4xl md:text-[4rem] font-black text-graphite mb-12 tracking-tighter leading-[0.9]">Why Enterprises <br /> Trust Rubric</h2>
            <div className="space-y-12">
              {[
                { t: 'Structured delivery approach', d: 'Our methodology follows rigorous architectural logic to ensure consistent success.' },
                { t: 'Expert-led consultancy', d: 'Over 15 years of navigating complex ecosystems with elite technical talent.' },
                { t: 'Practical business outcomes', d: 'We focus on metrics that move the needle: velocity, stability, and ROI.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="shrink-0 w-1.5 h-1.5 bg-signal-red rounded-full mt-3 group-hover:scale-150 transition-transform"></div>
                  <div>
                    <h5 className="text-2xl font-black text-graphite mb-2">{item.t}</h5>
                    <p className="text-slate-500 leading-relaxed text-lg font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 relative">
             <div className="absolute -inset-10 border-2 border-fog rounded-full -z-0 pointer-events-none opacity-50"></div>
             {[
               { val: '2007', label: 'Established', bg: 'bg-fog', col: 'text-graphite' },
               { val: '15+', label: 'Global Partners', bg: 'bg-white', col: 'text-signal-red' },
               { val: '100%', label: 'Quality Focused', bg: 'bg-white', col: 'text-signal-red' },
               { val: '24/7', label: 'Support Presence', bg: 'bg-fog', col: 'text-graphite' }
             ].map((stat, i) => (
               <div key={i} className={`p-12 ${stat.bg} border border-slate-50 rounded-3xl text-center shadow-2xl shadow-graphite/5 hover:-translate-y-2 transition-all duration-500 ${i % 2 !== 0 ? 'translate-y-12' : '-translate-y-12 md:translate-y-0'}`}>
                  <div className={`text-6xl font-black ${stat.col} mb-3 tracking-tighter`}>{stat.val}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{stat.label}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Ready to architect success */}
      <section className="bg-graphite py-40 text-white text-center relative overflow-hidden">
        <div className="container-custom relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-[5.5rem] font-black mb-10 leading-[0.9] tracking-tighter">Ready to architect <br /> your success?</h2>
          <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
            Connect with our strategic consultants to define your path toward digital certainty and quality engineering excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/contact" className="bg-signal-red text-white px-16 py-8 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-graphite transition-all shadow-2xl shadow-signal-red/40">
              CONTACT RUBRIC
            </Link>
            <Link to="/case-studies" className="border-2 border-white/20 text-white px-16 py-8 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-graphite transition-all">
              VIEW CASE STUDIES
            </Link>
          </div>
        </div>
        {/* Large Watermark */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl opacity-[0.03] pointer-events-none">
           <img src="/assets/rubric-logo-primary.png" alt="" className="w-full brightness-0 invert" />
        </div>
      </section>
    </div>
  );
};

export default Home;
