import { ShieldCheck, BarChart3, Lock, Cpu, Globe, ArrowRight, Zap, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnterprisePlatform = () => {
  const metrics = [
    { label: 'Uptime SLA', val: '99.99%' },
    { label: 'Data Encryption', val: 'AES-256' },
    { label: 'Global Nodes', val: '12+' },
    { label: 'Support Cycle', val: '24/7' }
  ];

  return (
    <div className="bg-graphite text-white min-h-screen">
      {/* Header/Hero */}
      <section className="pt-32 pb-24 border-b border-white/5 relative overflow-hidden">
        <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-8">
            <span className="bg-signal-red text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.4em] rounded-sm">Enterprise Platform</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">Architectural Control.</h1>
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              The Rubric Enterprise Platform provides high-fidelity visibility and control over your entire software delivery lifecycle, from code to production.
            </p>
            <div className="flex gap-6">
               <button className="bg-white text-graphite px-10 py-5 rounded-xl font-black text-xs tracking-widest uppercase hover:bg-signal-red hover:text-white transition-all">REQUEST ACCESS</button>
               <button className="border border-white/20 text-white px-10 py-5 rounded-xl font-black text-xs tracking-widest uppercase hover:bg-white hover:text-graphite transition-all">VIEW DOCS</button>
            </div>
          </div>
          <div className="flex-1 relative">
             <div className="aspect-video bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                <div className="w-full h-full border border-white/10 rounded-xl bg-graphite p-6 flex flex-col gap-6">
                   <div className="flex justify-between items-center border-b border-white/5 pb-4">
                      <div className="flex gap-2">
                         <div className="w-3 h-3 rounded-full bg-signal-red"></div>
                         <div className="w-3 h-3 rounded-full bg-dept-itsm"></div>
                         <div className="w-3 h-3 rounded-full bg-dept-dev"></div>
                      </div>
                      <div className="text-[10px] font-mono text-slate-500">PLATFORM_V2.0_STABLE</div>
                   </div>
                   <div className="flex-grow grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg border border-white/5 p-4 flex flex-col justify-between">
                         <div className="text-dept-qa"><BarChart3 size={20} /></div>
                         <div className="text-2xl font-black">94.2%</div>
                         <div className="text-[8px] font-bold text-slate-500 uppercase">Quality Score</div>
                      </div>
                      <div className="bg-white/5 rounded-lg border border-white/5 p-4 flex flex-col justify-between">
                         <div className="text-signal-red"><Zap size={20} /></div>
                         <div className="text-2xl font-black">12ms</div>
                         <div className="text-[8px] font-bold text-slate-500 uppercase">Latency Apex</div>
                      </div>
                   </div>
                </div>
                {/* Overlay Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-signal-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="py-20 bg-black/20 border-b border-white/5">
         <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-12">
            {metrics.map(m => (
              <div key={m.label} className="text-center group">
                 <p className="text-4xl font-black mb-2 group-hover:text-signal-red transition-colors">{m.val}</p>
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">{m.label}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 bg-graphite">
         <div className="container-custom">
            <div className="max-w-2xl mb-24">
               <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.9] mb-8">Engineered for absolute certainty.</h2>
               <p className="text-lg text-slate-400">Our platform layers provide the diagnostic depth required to scale enterprise digital operations without compromising on security or performance.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { t: 'Zero-Trust Protocol', d: 'End-to-end identity and access management for every microservice interaction.', i: <Lock size={32} /> },
                 { t: 'Apex Visibility', d: 'Real-time telemetry and predictive performance modeling across multi-cloud environments.', i: <Globe size={32} /> },
                 { t: 'CI/CD Guardrails', d: 'Automated policy enforcement and quality gates integrated into the delivery core.', i: <Cpu size={32} /> }
               ].map((f, i) => (
                 <div key={i} className="p-12 border border-white/5 bg-white/5 rounded-3xl hover:border-signal-red transition-all group">
                    <div className="text-signal-red mb-10 group-hover:scale-110 transition-transform">{f.i}</div>
                    <h4 className="text-2xl font-bold mb-4">{f.t}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Integration Bento */}
      <section className="py-32 bg-white text-graphite rounded-t-[4rem]">
         <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
               <div className="flex-1 space-y-10">
                  <span className="text-signal-red font-black tracking-widest text-[10px] uppercase">Unified Stack</span>
                  <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9]">Deep Technical Integration.</h2>
                  <p className="text-xl text-slate leading-relaxed">The platform integrates at the core architectural level, ensuring data integrity and performance across your entire technology stack. No shallow overlays—only pure engineering alignment.</p>
                  <ul className="space-y-6">
                     {['ServiceNow Orchestration', 'AWS/Azure/GCP Native', 'Legacy Core Connectivity', 'K8s Multi-cluster Support'].map(item => (
                       <li key={item} className="flex items-center gap-5 text-sm font-bold uppercase tracking-widest">
                          <div className="w-1.5 h-1.5 bg-signal-red rounded-full"></div>
                          {item}
                       </li>
                     ))}
                  </ul>
               </div>
               <div className="flex-1 grid grid-cols-2 gap-6 w-full">
                  <div className="bg-fog p-10 rounded-3xl border border-slate-100 flex flex-col justify-between h-64">
                     <Database className="text-dept-dev" size={32} />
                     <h5 className="font-bold text-lg">Data Integrity</h5>
                  </div>
                  <div className="bg-graphite p-10 rounded-3xl text-white flex flex-col justify-between h-64 shadow-2xl">
                     <ShieldCheck className="text-signal-red" size={32} />
                     <h5 className="font-bold text-lg">Security Apex</h5>
                  </div>
                  <div className="col-span-2 bg-fog p-10 rounded-3xl border border-slate-100 flex items-center justify-between">
                     <div>
                        <h5 className="font-bold text-xl mb-1">Global Delivery</h5>
                        <p className="text-xs text-slate-500 uppercase font-black tracking-widest">Architected for 100+ countries</p>
                     </div>
                     <Globe className="text-dept-consulting" size={48} />
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default EnterprisePlatform;
