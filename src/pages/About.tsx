import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-graphite text-white pt-24 pb-32 md:pt-48 md:pb-56 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-5xl">
            <span className="text-signal-red font-black tracking-[0.4em] text-[10px] uppercase mb-8 block">Architecture & Execution</span>
            <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-12">
              Precision is <br /> <span className="text-signal-red">The Rubric Way.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl">
              Since 2007, we have pioneered a structured approach to software quality engineering, ensuring enterprise stability in an increasingly volatile digital landscape.
            </p>
          </div>
        </div>
        {/* Background Visual */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none grayscale">
           <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-32 border-b border-fog">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-7 space-y-12">
            <span className="text-signal-red font-black tracking-widest text-[10px] uppercase">Our Legacy</span>
            <h2 className="text-4xl md:text-6xl font-black text-graphite tracking-tight leading-[0.9]">Engineering Digital Resilience Since 2007.</h2>
            <div className="space-y-8 text-lg text-slate leading-relaxed">
              <p>Rubric was established with a singular vision: to bring mathematical precision and architectural rigor to the world of software quality. We believe that technology should be an asset, not a risk.</p>
              <p>Over the past 17 years, we have evolved from a specialist testing boutique in South Africa into a global technology consultancy, partnering with Fortune 500 institutions to architect high-performance delivery ecosystems.</p>
            </div>
            <Link to="/case-studies" className="bg-graphite text-white px-10 py-5 rounded-sm font-black text-xs tracking-widest uppercase hover:bg-signal-red transition-all inline-block">
               EXPLORE OUR IMPACT
            </Link>
          </div>
          <div className="lg:col-span-5 relative">
             <div className="bg-graphite p-12 md:p-16 rounded-3xl text-white relative overflow-hidden group shadow-2xl">
                <div className="text-8xl font-black text-signal-red mb-6 tracking-tighter">17<span className="text-3xl text-white">+</span></div>
                <h4 className="text-2xl font-bold mb-4">Years of Apex Focus</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Continuous evolution from niche QA specialists to global technology transformation consultants.</p>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-32 bg-graphite text-white">
        <div className="container-custom">
           <div className="max-w-2xl mb-24">
             <span className="text-signal-red font-black tracking-widest text-[10px] uppercase mb-6 block">Operational Philosophy</span>
             <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.9]">Guided by Immutable Core Principles.</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-12 border border-white/10 rounded-2xl bg-white/5 hover:border-signal-red transition-colors group">
                 <div className="w-10 h-1 bg-signal-red mb-10"></div>
                 <h3 className="text-2xl font-bold mb-6">Precision. Integrity. Assurance.</h3>
                 <p className="text-slate-400 leading-relaxed">We deliver high-fidelity diagnostics across your entire technology stack. No shallow metrics—only deep, actionable insights that drive engineering excellence.</p>
              </div>
              <div className="p-12 border border-white/10 rounded-2xl bg-white/5 hover:border-signal-red transition-colors group">
                 <div className="w-10 h-1 bg-signal-red mb-10"></div>
                 <h3 className="text-2xl font-bold mb-6">Continuous Transformation.</h3>
                 <p className="text-slate-400 leading-relaxed">Stagnation is risk. We partner with teams to continuously evolve their people, processes, and platforms, ensuring long-term digital sustainability.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Bento About Grid */}
      <section className="py-32 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="p-12 bg-fog rounded-3xl border border-slate-100 flex flex-col justify-between h-96">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Vision</span>
              <h4 className="text-3xl font-black text-graphite leading-tight">Elite Tech Ecosystems.</h4>
              <p className="text-sm text-slate leading-relaxed">Crafting systems where performance, security, and quality are designed-in from the first architectural line.</p>
           </div>
           <div className="p-12 bg-fog rounded-3xl border border-slate-100 flex flex-col justify-between h-96">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Strategy</span>
              <h4 className="text-3xl font-black text-graphite leading-tight">Transformation at Scale.</h4>
              <p className="text-sm text-slate leading-relaxed">Scaling engineering maturity across complex enterprise organizations through proven frameworks.</p>
           </div>
           <div className="p-12 bg-graphite rounded-3xl text-white flex flex-col justify-between h-96 relative overflow-hidden group">
              <span className="text-[10px] font-black uppercase text-signal-red tracking-[0.2em]">Impact</span>
              <h4 className="text-3xl font-black leading-tight z-10">Measurable Outcomes.</h4>
              <p className="text-sm text-slate-400 leading-relaxed z-10">We focus on hard metrics: throughput, stability, and speed-to-market. Quality as a business accelerator.</p>
              <div className="absolute bottom-0 right-0 w-32 h-1 bg-signal-red group-hover:w-full transition-all duration-700"></div>
           </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="py-32 bg-platinum overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
             <div className="aspect-square bg-graphite rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
                  alt="Rubric Specialists"
                  className="w-full h-full object-cover grayscale opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-graphite to-transparent"></div>
             </div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-8 border-b-8 border-signal-red opacity-20"></div>
          </div>
          <div className="space-y-12">
            <span className="text-signal-red font-black tracking-widest text-[10px] uppercase">Elite Talent</span>
            <h2 className="text-4xl md:text-7xl font-black text-graphite leading-[0.85] tracking-tighter">Specialists, <br />Not Generalists</h2>
            <p className="text-xl text-slate leading-relaxed">
              At Rubric, we don't hire 'resources'. We cultivate high-end specialist talent—engineers and consultants who possess both the technical depth and the strategic foresight to navigate enterprise complexity.
            </p>
            <div className="space-y-6">
              {[
                { t: 'Extreme Ownership', d: 'A culture rooted in technical pride and accountability.' },
                { t: 'Rubric Academy', d: 'Continuous upskilling via our internal mentorship framework.' },
                { t: 'Domain Mapped', d: 'Teams specialized in specific enterprise industries.' }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/50 border border-slate-200 rounded-2xl group hover:border-signal-red transition-all">
                  <h5 className="font-bold text-graphite mb-1">{item.t}</h5>
                  <p className="text-sm text-slate">{item.d}</p>
                </div>
              ))}
            </div>
            <Link to="/careers" className="bg-graphite text-white px-10 py-5 rounded-xl font-black text-xs tracking-widest uppercase hover:bg-signal-red transition-all inline-flex items-center gap-4 group">
               JOIN THE TEAM <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-graphite text-white text-center">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">Ready to Architect <br /> Your Success?</h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect with our strategic consultants to define your path toward digital certainty and quality engineering excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="bg-signal-red text-white px-12 py-6 rounded-xl font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-graphite transition-all shadow-2xl shadow-signal-red/20">
              REQUEST CONSULTATION
            </Link>
            <Link to="/case-studies" className="border-2 border-white/20 text-white px-12 py-6 rounded-xl font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-graphite transition-all">
              VIEW CASE STUDIES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
