import { ArrowRight, BarChart3, ShieldCheck, Code, Layout, Globe, ChevronRight } from 'lucide-react';
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
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
    },
    {
      category: 'ITSM',
      color: 'text-dept-itsm',
      title: 'Logistics Service Management Optimisation',
      desc: 'Streamlining service delivery for a pan-European logistics firm through ServiceNow orchestration. Reduced manual intervention by 65% across regional hubs.',
      impact: '65% Automation Increase',
      tag: 'LOGISTICS',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200'
    },
    {
      category: 'DEVELOPMENT',
      color: 'text-dept-dev',
      title: 'HIPAA-Compliant Patient Portal',
      desc: 'Building a secure, highly-available patient portal for a leading healthcare provider. Implemented rigorous encryption standards while maintaining a frictionless UX.',
      impact: '100% Security Compliance',
      tag: 'HEALTHCARE',
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-graphite text-white pt-24 pb-32 md:pt-48 md:pb-64 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-5xl">
            <span className="text-signal-red font-black tracking-[0.4em] text-[10px] uppercase mb-8 block">The Proof Matrix</span>
            <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-12">
              Measurable <br /> <span className="text-signal-red italic">Architectural</span> <br /> Impact.
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl">
              Exploring how our rigorous engineering standards and strategic oversight deliver tangible value to complex enterprise delivery models.
            </p>
          </div>
        </div>
        {/* Background Visual Element */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
           <img src="/assets/rubric-brand-construction.png" alt="" className="w-full h-full object-contain" />
        </div>
      </section>

      {/* Filter Bar (Premium Styled) */}
      <section className="bg-white border-b border-slate-100 py-10">
         <div className="container-custom flex flex-wrap gap-10 items-center justify-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            <span className="text-graphite border-b-2 border-signal-red pb-1 cursor-pointer">All Sectors</span>
            <span className="hover:text-graphite transition-colors cursor-pointer">Financial Services</span>
            <span className="hover:text-graphite transition-colors cursor-pointer">Logistics & Supply Chain</span>
            <span className="hover:text-graphite transition-colors cursor-pointer">Healthcare Tech</span>
            <span className="hover:text-graphite transition-colors cursor-pointer">Retail Architecture</span>
         </div>
      </section>

      {/* Case Grid */}
      <section className="py-32 container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-24">
          {cases.map((item, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 group ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 relative">
                <div className="aspect-[16/9] md:aspect-video bg-fog rounded-3xl overflow-hidden shadow-2xl relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/40 to-transparent"></div>
                  <div className="absolute top-8 left-8">
                     <span className="bg-white text-graphite px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg shadow-xl">
                        {item.tag}
                     </span>
                  </div>
                </div>
                <div className={`absolute -bottom-6 ${i % 2 !== 0 ? '-left-6' : '-right-6'} w-32 h-32 border-2 border-signal-red opacity-10 rounded-full pointer-events-none`}></div>
              </div>

              <div className="flex-1 space-y-8">
                 <span className={`text-[10px] font-black tracking-[0.3em] uppercase ${item.color}`}>
                   {item.category}
                 </span>
                 <h3 className="text-4xl md:text-6xl font-black text-graphite leading-[0.95] tracking-tighter group-hover:text-signal-red transition-all duration-500">
                   {item.title}
                 </h3>
                 <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
                   {item.desc}
                 </p>
                 <div className="p-10 bg-fog rounded-2xl border-l-8 border-signal-red shadow-inner">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Metric Impact</p>
                    <p className="text-4xl font-black text-graphite tracking-tighter">{item.impact}</p>
                 </div>
                 <Link to="/contact" className="inline-flex items-center gap-4 font-black text-xs uppercase tracking-[0.3em] text-graphite group-hover:translate-x-6 transition-all duration-500">
                   READ FULL STORY <ArrowRight size={20} className="text-signal-red" />
                 </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium CTA */}
      <section className="bg-graphite py-32 text-white relative overflow-hidden">
        <div className="container-custom relative z-10 max-w-4xl text-center mx-auto">
           <h2 className="text-4xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.85]">Ready to see <br /> results?</h2>
           <p className="text-xl text-slate-400 mb-16 leading-relaxed max-w-2xl mx-auto">
             Consult with our technical leaders to define a bespoke service framework tailored to your specific organizational needs.
           </p>
           <div className="flex flex-col sm:flex-row gap-8 justify-center">
             <Link to="/contact" className="bg-signal-red text-white font-black px-12 py-6 rounded-xl hover:bg-white hover:text-graphite transition-all uppercase tracking-[0.3em] text-xs shadow-2xl shadow-signal-red/30">
               SCHEDULE CONSULTATION
             </Link>
             <button className="border-2 border-white/20 text-white font-black px-12 py-6 rounded-xl hover:bg-white hover:text-graphite transition-all uppercase tracking-[0.3em] text-xs">
               ECOSYSTEM SPECS
             </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
