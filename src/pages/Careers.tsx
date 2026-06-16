const Careers = () => {
  const values = [
    { title: 'Growth Mindset', desc: 'We invest in our people through continuous learning and specialized certification paths.' },
    { title: 'High Performance', desc: 'We foster an environment where excellence is the standard and impact is measured.' },
    { title: 'Engineering Culture', desc: 'Work with some of the best minds in SQE and technology consulting.' }
  ];

  return (
    <div className="pt-20 pb-32">
      <div className="container-custom">
        <div className="max-w-3xl mb-24">
          <span className="text-signal-red font-bold tracking-widest text-sm uppercase mb-4 block">Join Our Team</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Build the future of <span className="text-signal-red">Software Quality.</span>
          </h1>
          <p className="text-xl text-slate leading-relaxed">
            We are looking for exceptional engineers, architects, and consultants who are passionate about bringing structure and precision to the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {values.map((v, i) => (
            <div key={i} className="p-10 border border-fog bg-white hover:shadow-lg transition-shadow">
               <h4 className="text-xl font-bold mb-4">{v.title}</h4>
               <p className="text-slate text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-fog p-16 rounded-sm border border-slate-200 text-center">
           <h2 className="text-3xl font-bold mb-8">Ready to evolve your career?</h2>
           <p className="text-slate mb-10 max-w-xl mx-auto">
             We are constantly seeking talent in Software Quality Engineering, Performance Engineering, and DevOps.
           </p>
           <a href="mailto:careers@rubric.co.za" className="btn-primary inline-block">
             Send us your CV
           </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;
