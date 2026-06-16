const About = () => {
  return (
    <div className="pt-20 pb-32">
      <div className="container-custom">
        <div className="max-w-3xl mb-24">
          <span className="text-signal-red font-bold tracking-widest text-sm uppercase mb-4 block">About Rubric</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            We are architects of <span className="text-signal-red">software excellence.</span>
          </h1>
          <p className="text-xl text-slate leading-relaxed">
            Rubric is a premium technology consulting firm specializing in Software Quality Engineering (SQE) and digital transformation. We help enterprise organizations build resilient, high-performance digital ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Rubric Philosophy</h2>
            <p className="text-slate leading-relaxed mb-6">
              The name "Rubric" represents structure and standard. In an increasingly complex digital landscape, we bring the frameworks and precision necessary to ensure that technology delivers measurable value.
            </p>
            <p className="text-slate leading-relaxed">
              Our approach combines deep technical expertise in software quality with strategic consulting, ensuring that transformation is not just about adopting new tools, but about evolving engineering culture and impact.
            </p>
          </div>
          <div className="bg-fog p-12 rounded-sm border border-slate-200">
             <div className="grid grid-cols-2 gap-8 text-center">
               <div>
                  <p className="text-4xl font-bold text-graphite mb-2">10+</p>
                  <p className="text-slate text-sm">Years Expertise</p>
               </div>
               <div>
                  <p className="text-4xl font-bold text-graphite mb-2">50+</p>
                  <p className="text-slate text-sm">Enterprise Clients</p>
               </div>
               <div>
                  <p className="text-4xl font-bold text-graphite mb-2">100%</p>
                  <p className="text-slate text-sm">Quality Focus</p>
               </div>
               <div>
                  <p className="text-4xl font-bold text-graphite mb-2">24/7</p>
                  <p className="text-slate text-sm">Resilient Labs</p>
               </div>
             </div>
          </div>
        </div>

        <div className="bg-graphite text-white p-16 md:p-24 rounded-sm">
           <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-signal-red text-4xl mb-6">01</div>
                <h4 className="text-xl font-bold mb-4">Precision</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Detailed accuracy in every test case and structural design.</p>
              </div>
              <div className="text-center">
                <div className="text-signal-red text-4xl mb-6">02</div>
                <h4 className="text-xl font-bold mb-4">Transformation</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Continuous evolution of systems, people, and processes.</p>
              </div>
              <div className="text-center">
                <div className="text-signal-red text-4xl mb-6">03</div>
                <h4 className="text-xl font-bold mb-4">Accountability</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Ownership of quality outcomes and business impact.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
