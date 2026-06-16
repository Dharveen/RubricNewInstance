import { ShieldCheck, Layout, Code2, GraduationCap, BarChart3 } from 'lucide-react';

const Services = () => {
  const allServices = [
    {
      id: 'qa',
      title: 'Software Quality Engineering',
      icon: <ShieldCheck className="text-dept-qa" size={40} />,
      color: 'bg-dept-qa',
      description: 'End-to-end QA transformation, automated testing frameworks, and performance engineering.',
      features: ['Automated Testing Systems', 'Performance & Load Testing', 'Security Assurance', 'SQE Culture Transformation']
    },
    {
      id: 'consulting',
      title: 'Digital Consulting',
      icon: <Layout className="text-dept-consulting" size={40} />,
      color: 'bg-dept-consulting',
      description: 'Strategic roadmap development for legacy modernization and cloud-native adoption.',
      features: ['Architecture Reviews', 'Legacy Modernization', 'Agile Transformation', 'ITSM Strategy']
    },
    {
      id: 'dev',
      title: 'Developer Experience (DevX)',
      icon: <Code2 className="text-dept-dev" size={40} />,
      color: 'bg-dept-dev',
      description: 'Optimizing the software delivery lifecycle by empowering developers with better tools and workflows.',
      features: ['CI/CD Pipeline Design', 'Toolchain Optimization', 'DevOps Engineering', 'Internal Developer Portals']
    },
    {
      id: 'training',
      title: 'Specialized Training',
      icon: <GraduationCap className="text-dept-training" size={40} />,
      color: 'bg-dept-training',
      description: 'Upskilling engineering teams in modern testing methodologies and specialized technologies.',
      features: ['QA Automation Workshops', 'Performance Engineering Labs', 'Leadership for Engineers', 'Customized Tech Programs']
    }
  ];

  return (
    <div className="pt-20 pb-32">
      <div className="container-custom">
        <div className="max-w-3xl mb-24">
          <span className="text-signal-red font-bold tracking-widest text-sm uppercase mb-4 block">Our Expertise</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Premium services for <span className="text-signal-red">high-performance</span> teams.
          </h1>
          <p className="text-xl text-slate leading-relaxed">
            From strategic consulting to hands-on software quality engineering, we provide the expertise required to scale your digital capabilities with confidence.
          </p>
        </div>

        <div className="space-y-12">
          {allServices.map((service) => (
            <div key={service.id} className="group border border-fog hover:border-slate-300 transition-all bg-white rounded-sm overflow-hidden flex flex-col lg:flex-row">
              <div className={`lg:w-2 ${service.color}`}></div>
              <div className="p-12 lg:w-2/3">
                <div className="mb-8">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-slate text-lg mb-8 leading-relaxed max-w-2xl">{service.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-graphite font-medium">
                      <div className="h-1.5 w-1.5 bg-signal-red"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/3 bg-fog p-12 flex items-center justify-center border-l border-fog">
                 <div className="text-center group-hover:scale-105 transition-transform">
                   <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Domain Focus</p>
                   <BarChart3 size={64} className="mx-auto text-slate-300" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
