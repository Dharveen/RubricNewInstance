import { ArrowRight, BarChart3, ShieldCheck, Code, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const cases = [
    {
      category: 'QUALITY ASSURANCE',
      color: 'text-dept-qa',
      title: 'Automated Precision for Enterprise Finance',
      desc: 'Transitioning a legacy banking core to a high-speed CI/CD pipeline using Rubric’s precision frameworks. Resulted in a 90% reduction in regression failure rates.',
      impact: '90% Failure Reduction',
      tag: 'FINTECH',
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
    },
    {
      category: 'ITSM',
      color: 'text-dept-itsm',
      title: 'Logistics Service Management Optimisation',
      desc: 'Streamlining service delivery for a pan-European logistics firm through ServiceNow orchestration. Reduced manual intervention by 65% across regional hubs.',
      impact: '65% Automation Increase',
      tag: 'LOGISTICS',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
    },
    {
      category: 'DEVELOPMENT',
      color: 'text-dept-dev',
      title: 'HIPAA-Compliant Patient Portal',
      desc: 'Building a secure, highly-available patient portal for a leading healthcare provider. Implemented rigorous encryption standards while maintaining a frictionless UX.',
      impact: '100% Security Compliance',
      tag: 'HEALTHCARE',
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-graphite text-white pt-24 pb-32 md:pt-40 md:pb-56 relative">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <span className="text-signal-red font-bold tracking-[0.2em] text-xs uppercase mb-6 block">The Proof Matrix</span>
            <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tight mb-10">
              Architectural <br /> <span className="text-signal-red">Impact.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl">
              Measurable results across complex delivery landscapes. Explore how our architectural rigor transforms enterprise software quality.
            </p>
          </div>
        </div>
      </section>

      {/* Case Grid */}
      <section className="py-32 container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cases.map((item, i) => (
            <div key={i} className="group flex flex-col bg-white border border-slate-200 hover:border-signal-red transition-all duration-500 shadow-sm overflow-hidden">
              <div className="h-72 relative overflow-hidden">
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-white/90 backdrop-blur-md text-graphite px-4 py-2 text-[10px] font-bold uppercase tracking-widest border border-slate-200">
                    {item.tag}
                  </span>
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 to-transparent opacity-60"></div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                 <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-4 ${item.color}`}>
                   {item.category}
                 </span>
                 <h3 className="text-2xl font-bold text-graphite mb-6 leading-tight group-hover:text-signal-red transition-colors">
                   {item.title}
                 </h3>
                 <p className="text-slate text-sm leading-relaxed mb-10 flex-grow">
                   {item.desc}
                 </p>
                 <div className="mb-10 p-6 bg-fog border-l-4 border-signal-red">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Core Impact</p>
                    <p className="text-2xl font-bold text-signal-red">{item.impact}</p>
                 </div>
                 <Link to="/contact" className="flex items-center gap-3 font-bold text-xs uppercase tracking-[0.2em] text-graphite group-hover:translate-x-3 transition-transform">
                   Read Full Story <ArrowRight size={18} className="text-signal-red" />
                 </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-graphite py-32 text-white text-center relative overflow-hidden">
        <div className="container-custom relative z-10 max-w-4xl">
           <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-tight">Ready to see measurable results?</h2>
           <p className="text-xl text-slate-400 mb-16 leading-relaxed">
             Let's discuss how our architectural approach can transform your technical delivery model and drive sustainable value.
           </p>
           <div className="flex flex-col sm:flex-row gap-8 justify-center">
             <Link to="/contact" className="bg-signal-red text-white font-bold px-12 py-6 rounded-sm hover:scale-105 transition-transform uppercase tracking-widest shadow-2xl">
               Schedule a Consultation
             </Link>
             <button className="border border-white text-white font-bold px-12 py-6 rounded-sm hover:bg-white hover:text-graphite transition-all uppercase tracking-widest">
               Download Services Overview
             </button>
           </div>
        </div>
        {/* Background Visual Lines */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <svg className="w-full h-full stroke-white stroke-[0.5]" viewBox="0 0 100 100">
            <line x1="0" y1="20" x2="100" y2="80" />
            <line x1="0" y1="40" x2="100" y2="100" />
            <line x1="20" y1="0" x2="80" y2="100" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
