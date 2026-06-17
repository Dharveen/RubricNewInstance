import { ArrowRight, ChevronRight, Hash } from 'lucide-react';
import { Link } from 'react-router-dom';

const Insights = () => {
  const posts = [
    {
      category: 'QA STRATEGY',
      title: 'Shift-Left Architecture: More Than a Buzzword',
      desc: 'Exploring the mathematical impact of early-stage defect detection in enterprise financial systems.',
      date: 'May 24, 2024'
    },
    {
      category: 'ITSM',
      title: 'Orchestrating Resilience: ServiceNow vs. Legacy',
      desc: 'How automated service workflows reduce mean-time-to-repair (MTTR) by 40% in large-scale logistics.',
      date: 'May 18, 2024'
    },
    {
      category: 'DEVX',
      title: 'The Internal Developer Portal (IDP) Revolution',
      desc: 'Scaling software delivery through platform engineering and specialized developer tooling.',
      date: 'May 12, 2024'
    }
  ];

  const tags = ['QAAutomation', 'ServiceNow', 'AIOps', 'EnterpriseRisk', 'ShiftLeft', 'DigitalTransformation'];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-24 pb-20 md:pt-40 md:pb-32 bg-fog">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-signal-red font-bold tracking-[0.2em] text-xs uppercase mb-6 block">The Rubric Ledger</span>
            <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tight text-graphite mb-10">
              Technical <br /> <span className="text-signal-red">Insights.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate leading-relaxed max-w-3xl">
              Precision delivered to your inbox. Exploring the architectural shifts and engineering standards driving modern enterprise success.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 container-custom">
        <div className="flex flex-col lg:flex-row gap-20">

          {/* Main Feed */}
          <div className="lg:w-2/3 space-y-20">
            {posts.map((post, i) => (
              <article key={i} className="group cursor-pointer">
                <span className="text-signal-red font-bold tracking-widest text-[10px] uppercase border-l-2 border-signal-red pl-4 mb-6 block">
                  {post.category}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-graphite group-hover:text-signal-red transition-colors mb-6 leading-tight">
                  {post.title}
                </h2>
                <p className="text-lg text-slate mb-8 leading-relaxed">
                  {post.desc}
                </p>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-2 group-hover:translate-x-3 transition-transform text-graphite group-hover:text-signal-red">
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </article>
            ))}

            {/* Pagination Placeholder */}
            <div className="pt-16 border-t border-slate-100 flex gap-4">
              <button className="w-12 h-12 flex items-center justify-center bg-graphite text-white font-bold">1</button>
              <button className="w-12 h-12 flex items-center justify-center border border-slate-200 text-graphite hover:border-signal-red transition-colors font-bold">2</button>
              <button className="w-12 h-12 flex items-center justify-center border border-slate-200 text-graphite hover:border-signal-red transition-colors font-bold">3</button>
              <button className="w-12 h-12 flex items-center justify-center border border-slate-200 text-graphite hover:border-signal-red transition-colors font-bold">
                 <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-16">
            {/* Newsletter Signup */}
            <div className="bg-fog p-10 border-l-4 border-signal-red shadow-sm">
              <h4 className="text-2xl font-bold text-graphite mb-4 tracking-tight">Precision Delivered</h4>
              <p className="text-slate text-sm leading-relaxed mb-8">
                Join 5,000+ technology leaders receiving our bi-weekly breakdown of QA and DevOps shifts.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  className="w-full bg-white border-b-2 border-slate p-4 outline-none focus:border-signal-red transition-colors placeholder:text-slate-300 font-medium"
                  placeholder="Work Email Address"
                />
                <button className="w-full bg-graphite text-white font-bold py-5 hover:bg-signal-red transition-colors tracking-widest uppercase text-xs">
                  SUBSCRIBE TO INSIGHTS
                </button>
              </form>
            </div>

            {/* Trending Topics */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 border-b border-slate-100 pb-2">Trending Topics</h4>
              <div className="flex flex-wrap gap-3">
                {tags.map(tag => (
                  <a key={tag} href="#" className="bg-white border border-slate-200 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:border-signal-red hover:text-signal-red transition-all">
                    #{tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Featured Case Study */}
            <div className="relative bg-graphite p-10 text-white min-h-[400px] flex flex-col justify-end overflow-hidden group shadow-2xl">
               <div className="absolute inset-0 grayscale opacity-20 group-hover:scale-105 transition-transform duration-700 pointer-events-none">
                  <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="" className="w-full h-full object-cover" />
               </div>
               <div className="relative z-10">
                  <span className="text-signal-red font-bold text-[10px] tracking-widest block mb-3 uppercase">Success Story</span>
                  <h4 className="text-2xl font-bold mb-6 leading-tight">60% Reduction in Release Cycle Time</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-10">
                    See how we overhauled the QA pipeline for a Fortune 500 financial institution.
                  </p>
                  <Link to="/case-studies" className="inline-flex items-center gap-3 font-bold text-xs uppercase tracking-widest group-hover:text-signal-red transition-colors">
                    View Case Study <ArrowRight size={16} />
                  </Link>
               </div>
            </div>
          </aside>

        </div>
      </section>

      {/* Bottom Bar CTA */}
      <section className="bg-graphite py-20 text-white border-t border-white/5">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-3 tracking-tight">Ready to execute with precision?</h3>
            <p className="text-slate-400 text-lg leading-relaxed">Speak with a consultant about your technical challenges.</p>
          </div>
          <Link to="/contact" className="bg-signal-red text-white font-bold px-12 py-5 hover:opacity-90 transition-opacity tracking-widest uppercase text-sm shadow-2xl">
            BOOK A CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Insights;
