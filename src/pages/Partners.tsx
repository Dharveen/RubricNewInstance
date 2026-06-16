import { Cloud, ShieldCheck, BarChart3, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
  const alliances = [
    { title: 'Cloud Infrastructure', desc: 'Scalable DevOps & Managed Hosting', icon: <Cloud size={32} />, color: 'bg-dept-dev' },
    { title: 'Cybersecurity Systems', desc: 'Zero-Trust Network Architecture', icon: <ShieldCheck size={32} />, color: 'bg-dept-qa' },
    { title: 'Big Data & AI', desc: 'Predictive Modeling & Insights', icon: <BarChart3 size={32} />, color: 'bg-dept-itsm' },
    { title: 'Automation RPA', desc: 'Optimized Workflow Execution', icon: <Zap size={32} />, color: 'bg-dept-training' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-graphite text-white pt-24 pb-32 md:pt-40 md:pb-56 relative overflow-hidden">
        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-signal-red font-bold tracking-[0.2em] text-xs uppercase mb-6 block">Our Ecosystem</span>
            <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tight mb-10">
              Architectural <br /> <span className="text-signal-red">Alliances.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-xl">
              We partner with industry leaders to deliver integrated, high-performance technology stacks that meet the absolute standard of enterprise precision.
            </p>
          </div>
          <div className="relative group">
            <div className="aspect-video bg-white/5 border border-white/10 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                alt="Partnership Workshop"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-signal-red"></div>
          </div>
        </div>
      </section>

      {/* Strategic Tech Grid */}
      <section className="py-32 bg-fog">
        <div className="container-custom">
          <div className="text-center mb-20">
            <span className="text-signal-red font-bold tracking-widest text-sm uppercase mb-4 block">Our Alliances</span>
            <h2 className="text-4xl md:text-5xl font-bold text-graphite tracking-tight">The Strategic Tech Grid</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {alliances.map((partner, i) => (
              <div key={i} className="bg-white border border-slate-200 p-10 flex flex-col justify-between h-72 hover:border-signal-red transition-all group shadow-sm">
                <div>
                  <div className={`w-14 h-14 ${partner.color}/10 ${partner.color.replace('bg-', 'text-')} mb-8 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {partner.icon}
                  </div>
                  <h3 className="text-xl font-bold text-graphite mb-2">{partner.title}</h3>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Partner */}
      <section className="py-32">
        <div className="container-custom">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-6">How we partner.</h2>
            <p className="text-xl text-slate max-w-2xl leading-relaxed">Integration is not just about APIs; it's about architectural alignment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-graphite p-12 lg:p-20 relative overflow-hidden text-white group shadow-xl">
              <div className="relative z-10">
                <span className="text-signal-red font-bold tracking-widest text-sm mb-6 block uppercase">01. Strategic</span>
                <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Deep Technical Integration</h3>
                <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                  We don't provide shallow overlays. Rubric partners are selected for their ability to integrate at the core architectural level, ensuring data integrity and performance across your entire stack.
                </p>
              </div>
              <div className="absolute right-0 top-0 w-64 h-64 bg-signal-red opacity-10 blur-3xl -mr-32 -mt-32"></div>
            </div>
            <div className="md:col-span-4 bg-fog p-12 border border-slate-200 flex flex-col justify-end shadow-sm">
              <span className="text-xs font-bold text-slate-500 mb-4 block tracking-widest uppercase">02. Resilient</span>
              <h3 className="text-2xl font-bold text-graphite mb-4">Scalability Gates</h3>
              <p className="text-slate text-sm leading-relaxed">Every partnership is stress-tested against enterprise-level scale demands.</p>
            </div>
            <div className="md:col-span-4 bg-fog p-12 border border-slate-200 flex flex-col justify-end shadow-sm">
              <span className="text-xs font-bold text-slate-500 mb-4 block tracking-widest uppercase">03. Audited</span>
              <h3 className="text-2xl font-bold text-graphite mb-4">Compliance Alignment</h3>
              <p className="text-slate text-sm leading-relaxed">Mandatory security vetting for all software and service alliances.</p>
            </div>
            <div className="md:col-span-8 bg-white p-12 border border-slate-200 flex items-center shadow-sm">
              <div className="grid grid-cols-2 gap-12 w-full">
                <div>
                  <h4 className="text-4xl md:text-6xl font-bold text-graphite mb-2">99.9%</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Uptime SLA commitment</p>
                </div>
                <div>
                  <h4 className="text-4xl md:text-6xl font-bold text-graphite mb-2">24/7</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Joint operations support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-32 bg-graphite text-white relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">Ready to join the ecosystem?</h2>
          <p className="text-xl text-slate-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            Rubric seeks partners who prioritize engineering excellence and measurable impact. If your technology aligns with our standard of precision, let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="bg-signal-red text-white font-bold px-12 py-6 rounded-sm hover:scale-105 transition-transform uppercase tracking-widest shadow-2xl">
              Partner with Rubric
            </button>
            <button className="border border-white text-white font-bold px-12 py-6 rounded-sm hover:bg-white hover:text-graphite transition-all uppercase tracking-widest">
              Download Ecosystem Specs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
