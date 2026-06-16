import { ArrowRight, CheckCircle2, Zap, Layout, ShieldCheck, Code2, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: 'QA & Testing',
      desc: 'Precision-led software quality engineering to ensure your systems perform flawlessly.',
      icon: <ShieldCheck className="text-dept-qa" size={32} />,
      color: 'border-dept-qa'
    },
    {
      title: 'Consulting',
      desc: 'Strategic digital transformation and specialized technology advisory.',
      icon: <Layout className="text-dept-consulting" size={32} />,
      color: 'border-dept-consulting'
    },
    {
      title: 'Development',
      desc: 'Premium software development focusing on developer experience and excellence.',
      icon: <Code2 className="text-dept-dev" size={32} />,
      color: 'border-dept-dev'
    },
    {
      title: 'Training',
      desc: 'Industry-leading specialized training for high-performance engineering teams.',
      icon: <GraduationCap className="text-dept-training" size={32} />,
      color: 'border-dept-training'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
              Structure. <br />
              Transformation. <br />
              <span className="text-signal-red underline decoration-4 underline-offset-8">Impact.</span>
            </h1>
            <p className="text-xl text-slate mb-10 leading-relaxed max-w-2xl">
              Rubric is a premium technology consulting and software quality engineering company. We bridge the gap between architectural rigor and measurable business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
                Work with Us <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary text-center">
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Background Geometric Pattern Placeholder */}
        <div className="absolute right-0 top-0 w-1/3 h-full hidden lg:block opacity-5">
           <img src="/assets/rubric-brand-construction.png" alt="" className="object-cover h-full" />
        </div>
      </section>

      {/* Brand Identity / Value Prop Section */}
      <section className="bg-fog py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <div className="h-1 w-12 bg-signal-red mb-6"></div>
              <h3 className="text-2xl font-bold">Structural Precision</h3>
              <p className="text-slate leading-relaxed">
                We believe that excellence starts with structure. Our engineering frameworks are built on geometric precision and architectural integrity.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-1 w-12 bg-signal-red mb-6"></div>
              <h3 className="text-2xl font-bold">Seamless Transformation</h3>
              <p className="text-slate leading-relaxed">
                Evolving your digital ecosystem requires more than just code—it requires a strategic transformation that aligns with your business goals.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-1 w-12 bg-signal-red mb-6"></div>
              <h3 className="text-2xl font-bold">Measurable Impact</h3>
              <p className="text-slate leading-relaxed">
                Everything we do is driven by results. We provide clear, data-driven insights into your software performance and delivery quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="container-custom">
          <div className="text-center mb-20">
            <span className="text-signal-red font-bold tracking-widest text-sm uppercase mb-4 block">Our Expertise</span>
            <h2 className="section-title">Specialized Software Quality Engineering</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white border-t-4 ${service.color} p-10 shadow-sm hover:shadow-xl transition-all group`}
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-slate text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link to="/services" className="text-graphite font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:text-signal-red">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-graphite py-24 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to transform your digital quality?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Partner with Rubric to bring premium software engineering and consulting excellence to your next project.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Let's Start a Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
