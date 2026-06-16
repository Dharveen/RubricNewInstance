import { ArrowRight, Zap, Code, Layout, Users, BarChart3, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-graphite text-white pt-24 pb-32 md:pt-40 md:pb-56">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-signal-red font-bold tracking-[0.2em] text-xs uppercase mb-6 block">Capabilities</span>
            <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tight mb-10">
              Precision <br /> Engineering <span className="text-signal-red">Services.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl">
              We provide the architectural rigor and strategic execution required to deliver mission-critical software at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Services Section */}
      <section className="py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* QA Consulting */}
            <div className="md:col-span-4 bg-fog p-10 border-t-4 border-signal-red shadow-sm hover:shadow-xl transition-all group">
              <div className="text-signal-red mb-8 group-hover:scale-110 transition-transform">
                 <Zap size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-graphite">QA Consulting</h3>
              <p className="text-slate leading-relaxed">Strategic advisory to embed quality-first culture into your delivery pipeline.</p>
            </div>

            {/* Test Automation */}
            <div className="md:col-span-4 bg-fog p-10 border-t-4 border-signal-red shadow-sm hover:shadow-xl transition-all group">
              <div className="text-signal-red mb-8 group-hover:scale-110 transition-transform">
                 <BarChart3 size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-graphite">Test Automation</h3>
              <p className="text-slate leading-relaxed">Robust frameworks built to scale, reducing regression time and human error.</p>
            </div>

            {/* Development */}
            <div className="md:col-span-4 bg-graphite p-10 border-t-4 border-dept-dev shadow-sm hover:shadow-xl transition-all text-white group">
              <div className="text-dept-dev mb-8 group-hover:scale-110 transition-transform">
                 <Code size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Development</h3>
              <p className="text-slate-400 leading-relaxed">Architectural excellence in software engineering, focused on clean code and durability.</p>
            </div>

            {/* Technical Consulting */}
            <div className="md:col-span-6 bg-fog p-10 border-t-4 border-dept-consulting shadow-sm hover:shadow-xl transition-all">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="text-dept-consulting">
                  <Layout size={48} />
                </div>
                <h3 className="text-3xl font-bold text-graphite">Specialist Technical Consulting</h3>
              </div>
              <p className="text-lg text-slate mb-8 leading-relaxed">Bespoke technical strategies for cloud migration, infrastructure overhaul, and legacy system modernization.</p>
              <div className="flex flex-wrap gap-3">
                {['Cloud', 'Security', 'Scale'].map(tag => (
                  <span key={tag} className="px-4 py-1 bg-dept-consulting/10 text-dept-consulting text-xs font-bold border border-dept-consulting/20 uppercase tracking-widest">{tag}</span>
                ))}
              </div>
            </div>

            {/* Staff Augmentation */}
            <div className="md:col-span-6 bg-fog p-10 border-t-4 border-dept-consulting shadow-sm hover:shadow-xl transition-all">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="text-dept-consulting">
                  <Users size={48} />
                </div>
                <h3 className="text-3xl font-bold text-graphite">Staff Augmentation</h3>
              </div>
              <p className="text-lg text-slate leading-relaxed">Embedded experts who integrate seamlessly into your teams to accelerate delivery speed.</p>
            </div>

            {/* Managed Testing */}
            <div className="md:col-span-3 bg-fog p-8 border-t-4 border-signal-red shadow-sm hover:shadow-xl transition-all">
              <h4 className="font-bold text-xl mb-4 text-graphite">Managed Testing</h4>
              <p className="text-sm text-slate leading-relaxed">End-to-end testing ownership, allowing your teams to focus on core innovation.</p>
            </div>

            {/* Software Support */}
            <div className="md:col-span-3 bg-fog p-8 border-t-4 border-dept-dev shadow-sm hover:shadow-xl transition-all">
              <h4 className="font-bold text-xl mb-4 text-graphite">Software Support</h4>
              <p className="text-sm text-slate leading-relaxed">24/7 technical oversight and maintenance for enterprise applications.</p>
            </div>

            {/* R&D */}
            <div className="md:col-span-3 bg-fog p-8 border-t-4 border-dept-consulting shadow-sm hover:shadow-xl transition-all">
              <h4 className="font-bold text-xl mb-4 text-graphite">R&D</h4>
              <p className="text-sm text-slate leading-relaxed">Exploring the frontier of AI and ML to give your business a competitive edge.</p>
            </div>

            {/* Training */}
            <div className="md:col-span-3 bg-dept-training p-8 border-t-4 border-dept-training shadow-sm hover:shadow-xl transition-all text-white">
              <h4 className="font-bold text-xl mb-4">Training</h4>
              <p className="text-sm opacity-90 leading-relaxed">Upskilling your internal workforce in modern DevOps and QA methodologies.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fog py-32 border-y border-slate-200">
        <div className="container-custom flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-8 leading-tight">Ready to architect your success?</h2>
            <p className="text-xl text-slate mb-12 leading-relaxed">Consult with our specialists to define a service package tailored to your organization's specific technical maturity.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="bg-signal-red text-white px-10 py-5 rounded-sm font-bold text-lg hover:bg-opacity-90 transition-all text-center uppercase tracking-widest shadow-xl">
                SCHEDULE CONSULTATION
              </Link>
              <button className="border-2 border-graphite text-graphite px-10 py-5 rounded-sm font-bold text-lg hover:bg-graphite hover:text-white transition-all uppercase tracking-widest">
                VIEW CASE STUDIES
              </button>
            </div>
          </div>
          <div className="flex-1 w-full relative aspect-[16/9] lg:aspect-video rounded-sm overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
              alt="Rubric Architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
