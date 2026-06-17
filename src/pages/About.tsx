import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-graphite text-white pt-24 pb-32 md:pt-48 md:pb-64 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-5xl">
            <span className="text-signal-red font-black tracking-[0.4em] text-[10px] uppercase mb-8 block">Precision & Resilience</span>
            <h1 className="text-6xl md:text-[7rem] font-black leading-[0.85] tracking-tighter mb-12">
              Engineering <br /> Digital <span className="text-signal-red">Certainty</span> <br /> Since 2007.
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl font-medium">
              We provide the architectural rigor and strategic execution required to deliver mission-critical software outcomes for the modern enterprise.
            </p>
            <div className="mt-16 flex gap-6">
               <button className="bg-signal-red text-white px-10 py-5 rounded-sm font-black text-xs tracking-widest uppercase hover:bg-white hover:text-graphite transition-all shadow-xl">OUR STORY</button>
               <button className="border-2 border-white/20 text-white px-10 py-5 rounded-sm font-black text-xs tracking-widest uppercase hover:bg-white hover:text-graphite transition-all">CONNECT NOW</button>
            </div>
          </div>
        </div>
        {/* Background Visual */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none grayscale brightness-150">
           <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-32 bg-white border-b border-fog">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-7 space-y-12">
            <span className="text-slate-400 font-black tracking-widest text-[10px] uppercase">The Narrative</span>
            <h2 className="text-4xl md:text-[4.5rem] font-black text-graphite tracking-tighter leading-[0.9]">Over 17 Years of <br /> Engineering Focus.</h2>
            <div className="space-y-10 text-xl text-slate-500 leading-relaxed font-medium">
              <p>Rubric was established with a singular vision: to bring mathematical precision and architectural rigor to the world of software quality. We believe that technology should be an asset, not a risk.</p>
              <p>Since our inception in 2007, we have specialized in the high-stakes environments where performance, security, and scalability are non-negotiable. Today, we partner with enterprise leaders globally to architect resilience into their delivery core.</p>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
             <div className="bg-graphite p-12 md:p-16 rounded-[3rem] text-white relative overflow-hidden group shadow-2xl hover:scale-[1.02] transition-transform duration-700">
                <div className="text-[10rem] font-black text-signal-red leading-none mb-6 tracking-tighter opacity-80">17<span className="text-4xl text-white ml-2">+</span></div>
                <h4 className="text-3xl font-bold mb-4 uppercase tracking-tighter">Years of Apex Focus</h4>
                <p className="text-slate-400 text-lg leading-relaxed">Continuous evolution from niche QA specialists to global technology transformation consultants.</p>
                <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-fog">
        <div className="container-custom">
           <div className="max-w-3xl mb-24">
             <span className="text-signal-red font-black tracking-widest text-[10px] uppercase mb-6 block">Care Principles</span>
             <h2 className="text-4xl md:text-6xl font-black text-graphite tracking-tight leading-[0.9]">Guided by Immutable <br /> Core Principles.</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-12 border border-slate-200 rounded-3xl bg-white hover:border-signal-red transition-all group shadow-sm">
                 <div className="text-signal-red mb-12 group-hover:scale-110 transition-transform origin-left">
                    <CheckCircle size={48} strokeWidth={1} />
                 </div>
                 <h3 className="text-3xl font-black mb-6 text-graphite uppercase tracking-tighter">Precision. Identity. Assurance.</h3>
                 <p className="text-slate-500 text-lg leading-relaxed font-medium">We deliver high-fidelity diagnostics across your entire technology stack. No shallow metrics—only deep, actionable insights that drive engineering excellence.</p>
              </div>
              <div className="p-12 border border-slate-200 rounded-3xl bg-white hover:border-signal-red transition-all group shadow-sm">
                 <div className="text-signal-red mb-12 group-hover:scale-110 transition-transform origin-left">
                    <CheckCircle size={48} strokeWidth={1} />
                 </div>
                 <h3 className="text-3xl font-black mb-6 text-graphite uppercase tracking-tighter">Continuous Transformation.</h3>
                 <p className="text-slate-500 text-lg leading-relaxed font-medium">Stagnation is risk. We partner with teams to continuously evolve their people, processes, and platforms, ensuring long-term digital sustainability.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
             <div className="aspect-[4/5] bg-graphite rounded-[4rem] overflow-hidden shadow-2xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
                  alt="Rubric Specialists"
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-graphite/60 to-transparent"></div>
             </div>
             <div className="absolute -bottom-12 -right-12 w-48 h-48 border-r-8 border-b-8 border-signal-red opacity-10 rounded-full pointer-events-none"></div>
          </div>
          <div className="space-y-16">
            <div className="space-y-6">
              <span className="text-signal-red font-black tracking-widest text-[10px] uppercase">Elite Talent</span>
              <h2 className="text-5xl md:text-[5.5rem] font-black text-graphite leading-[0.85] tracking-tighter">Specialists, <br />Not Generalists</h2>
              <p className="text-2xl text-slate-500 leading-relaxed font-medium">
                At Rubric, we don't hire 'resources'. We cultivate specialist talent who possess both the technical depth and strategic foresight.
              </p>
            </div>
            <div className="space-y-8">
              {[
                { t: 'Extreme Ownership', d: 'A culture rooted in technical pride and accountability for outcomes.' },
                { t: 'Rubric Academy', d: 'Continuous upskilling via our internal masterclass framework.' },
                { t: 'Domain Mapped', d: 'Teams specialized in specific enterprise sectors for deeper impact.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-10 group">
                  <div className="text-4xl font-black text-slate-100 group-hover:text-signal-red transition-colors duration-500">0{i+1}</div>
                  <div>
                    <h5 className="text-2xl font-black text-graphite mb-2 uppercase tracking-tighter">{item.t}</h5>
                    <p className="text-slate-500 font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/careers" className="bg-graphite text-white px-12 py-6 rounded-xl font-black text-xs tracking-widest uppercase hover:bg-signal-red transition-all inline-flex items-center gap-6 group shadow-2xl">
               JOIN THE TEAM <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-graphite text-white text-center relative overflow-hidden">
        <div className="container-custom relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-[6.5rem] font-black mb-12 leading-[0.9] tracking-tighter uppercase italic">Ready to execute?</h2>
          <p className="text-xl text-slate-400 mb-20 max-w-2xl mx-auto leading-relaxed font-medium">
            Connect with our strategic consultants to define your path toward digital certainty and quality engineering excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            <Link to="/contact" className="bg-signal-red text-white px-16 py-8 rounded-xl font-black text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-graphite transition-all shadow-2xl shadow-signal-red/30">
              REQUEST CONSULTATION
            </Link>
            <Link to="/services" className="border-2 border-white/20 text-white px-16 py-8 rounded-xl font-black text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-graphite transition-all">
              VIEW SERVICES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
