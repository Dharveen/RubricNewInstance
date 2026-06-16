import { ArrowRight, ShieldCheck, Layout, Code2, GraduationCap, Zap, Users, BarChart3, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const serviceCategories = [
    {
      title: 'QA Assessments',
      desc: 'Identifying gaps and opportunities in your current software lifecycle with precision metrics.',
      icon: <ShieldCheck className="text-white" size={32} />,
    },
    {
      title: 'Test Automation',
      desc: 'Scaling speed and reliability through architectural automation frameworks.',
      icon: <Zap className="text-white" size={32} />,
    },
    {
      title: 'Managed Testing',
      desc: 'Complete end-to-end testing ownership, delivering peace of mind for mission-critical apps.',
      icon: <BarChart3 className="text-white" size={32} />,
    },
    {
      title: 'Staff Augmentation',
      desc: 'On-demand technical experts who integrate seamlessly into your delivery teams.',
      icon: <Users className="text-white" size={32} />,
    },
    {
      title: 'Specialist Tech Consulting',
      desc: 'Deep expertise in mobile, performance, and security testing architectures.',
      icon: <Layout className="text-white" size={32} />,
    },
    {
      title: 'Research & Development',
      desc: 'Stay ahead of technology shifts with our dedicated labs and innovation frameworks.',
      icon: <Microscope className="text-white" size={32} />,
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-32 md:pt-40 md:pb-56 border-b border-fog">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <span className="text-signal-red font-bold tracking-[0.2em] text-xs uppercase mb-6 block">Premium Software Quality Engineering</span>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight mb-10 text-graphite">
              Structured Quality. <br />
              Measurable <span className="text-signal-red">Impact.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate mb-12 leading-relaxed max-w-3xl">
              Rubric is a premium technology consulting company. We craft sustainable digital ecosystems through architectural precision and software quality excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="bg-signal-red text-white px-10 py-5 rounded-sm font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl flex items-center justify-center gap-3">
                Contact Rubric <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="border-2 border-graphite text-graphite px-10 py-5 rounded-sm font-bold text-lg hover:bg-graphite hover:text-white transition-all flex items-center justify-center">
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Geometric Element */}
        <div className="absolute right-[-10%] bottom-0 w-1/2 h-full hidden lg:block opacity-[0.03] pointer-events-none">
           <img src="/assets/rubric-brand-construction.png" alt="" className="object-contain w-full h-full" />
        </div>
      </section>

      {/* Expertise / Services Grid */}
      <section className="bg-graphite py-32 text-white">
        <div className="container-custom">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-signal-red font-bold tracking-widest text-sm uppercase mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold">Solutions for high-stakes engineering.</h2>
            </div>
            <p className="text-slate-400 max-w-sm text-lg">
              We specialize in the complex architectures that drive enterprise-level transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {serviceCategories.map((service, index) => (
              <div
                key={index}
                className="p-12 bg-[#2A2E35] border border-white/5 hover:bg-signal-red transition-all duration-300 group cursor-default"
              >
                <div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="text-slate-400 group-hover:text-white transition-colors leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rubric / Stats */}
      <section className="py-32 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-slate font-bold tracking-[0.2em] text-xs uppercase mb-6 block">The Rubric Advantage</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-graphite">Why Enterprise Partners Choose Us</h2>
            <ul className="space-y-8">
              {[
                { title: 'Structured delivery approach', desc: 'Every project follows our proven architectural construction logic.' },
                { title: 'Experienced consultants', desc: 'Over 15 years of enterprise delivery experience in complex environments.' },
                { title: 'Practical quality improvement', desc: 'We focus on measurable business outcomes, not just check-boxes.' },
                { title: 'Scalable delivery teams', desc: 'From single experts to entire managed pods.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-6">
                  <div className="mt-1 shrink-0 w-6 h-6 border-2 border-signal-red flex items-center justify-center">
                     <div className="w-2 h-2 bg-signal-red rotate-45"></div>
                  </div>
                  <div>
                    <strong className="block text-xl mb-1">{item.title}</strong>
                    <p className="text-slate">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
             {[
               { val: '2007', label: 'Established' },
               { val: '15+', label: 'Enterprise Partners' },
               { val: '100%', label: 'Quality Focused' },
               { val: '24/7', label: 'Global Support' }
             ].map((stat, i) => (
               <div key={i} className="p-10 bg-fog border border-fog hover:border-slate-300 transition-colors">
                  <div className="text-5xl font-bold text-signal-red mb-2">{stat.val}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-32 border-t border-fog relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-graphite leading-tight">Ready to build better <br /> digital outcomes?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="bg-signal-red text-white px-12 py-6 rounded-sm font-bold text-xl hover:bg-opacity-90 transition-all shadow-2xl">
               Contact Rubric
            </Link>
            <Link to="/services" className="border-2 border-graphite text-graphite px-12 py-6 rounded-sm font-bold text-xl hover:bg-graphite hover:text-white transition-all">
               Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
