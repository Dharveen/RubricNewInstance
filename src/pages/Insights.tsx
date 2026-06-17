import { ArrowRight, ChevronRight, Hash, Search, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Insights = () => {
  const posts = [
    {
      category: 'QA STRATEGY',
      title: 'Shift-Left Architecture: More Than a Buzzword',
      desc: 'Exploring the mathematical impact of early-stage defect detection in enterprise financial systems.',
      date: 'May 24, 2024',
      readTime: '8 min read'
    },
    {
      category: 'ITSM',
      title: 'Orchestrating Resilience: ServiceNow vs. Legacy',
      desc: 'How automated service workflows reduce mean-time-to-repair (MTTR) by 40% in large-scale logistics.',
      date: 'May 18, 2024',
      readTime: '12 min read'
    },
    {
      category: 'DEVX',
      title: 'The Internal Developer Portal (IDP) Revolution',
      desc: 'Scaling software delivery through platform engineering and specialized developer tooling.',
      date: 'May 12, 2024',
      readTime: '10 min read'
    }
  ];

  const tags = ['QAAutomation', 'ServiceNow', 'AIOps', 'EnterpriseRisk', 'ShiftLeft', 'DigitalTransformation'];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-24 pb-20 md:pt-48 md:pb-32 bg-fog relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <span className="text-signal-red font-black tracking-[0.4em] text-[10px] uppercase mb-8 block">The Rubric Ledger</span>
            <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter text-graphite mb-12">
              Technical <br /> <span className="text-signal-red italic">Insights.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl">
              Precision delivered to your inbox. Exploring the architectural shifts and engineering standards driving modern enterprise success.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
           <img src="/assets/rubric-brand-construction.png" alt="" className="w-full h-full object-contain" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 container-custom">
        <div className="flex flex-col lg:flex-row gap-24">

          {/* Main Feed */}
          <div className="lg:w-2/3 space-y-32">
            {posts.map((post, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="flex items-center gap-6 mb-8">
                  <span className="bg-graphite text-white font-black tracking-widest text-[10px] px-3 py-1 uppercase">
                    {post.category}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.readTime}</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-graphite group-hover:text-signal-red transition-all duration-500 mb-8 tracking-tighter leading-[0.95]">
                  {post.title}
                </h2>
                <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl">
                  {post.desc}
                </p>
                <div className="flex items-center justify-between pt-10 border-t border-slate-100">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{post.date}</span>
                  <div className="flex items-center gap-4 text-graphite font-black text-xs uppercase tracking-widest group-hover:translate-x-4 transition-transform duration-500">
                    READ ARTICLE <ArrowRight size={18} className="text-signal-red" />
                  </div>
                </div>
              </article>
            ))}

            {/* Enhanced Pagination */}
            <div className="pt-20 flex items-center gap-4">
              <button className="w-14 h-14 flex items-center justify-center bg-graphite text-white font-black text-sm rounded-xl">1</button>
              <button className="w-14 h-14 flex items-center justify-center border border-slate-200 text-graphite hover:border-signal-red transition-all font-black text-sm rounded-xl">2</button>
              <button className="w-14 h-14 flex items-center justify-center border border-slate-200 text-graphite hover:border-signal-red transition-all font-black text-sm rounded-xl">3</button>
              <button className="w-14 h-14 flex items-center justify-center border border-slate-200 text-graphite hover:border-signal-red transition-all rounded-xl">
                 <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-20">

            {/* Search Bar */}
            <div className="relative">
               <input type="text" className="w-full bg-fog border-0 border-b-2 border-slate-200 p-5 outline-none focus:border-signal-red transition-all font-bold placeholder:text-slate-300" placeholder="SEARCH INSIGHTS..." />
               <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
            </div>

            {/* Newsletter Signup */}
            <div className="bg-graphite p-10 md:p-12 text-white rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-3xl font-black mb-6 tracking-tight leading-none">Precision <br /> Delivered.</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-10">
                  Join 5,000+ technology leaders receiving our bi-weekly breakdown of QA and DevOps shifts.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-5 outline-none focus:border-signal-red transition-all font-medium placeholder:text-slate-600"
                    placeholder="Work Email Address"
                  />
                  <button className="w-full bg-signal-red text-white font-black py-5 rounded-xl hover:bg-white hover:text-graphite transition-all tracking-widest uppercase text-xs">
                    SUBSCRIBE
                  </button>
                </form>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
            </div>

            {/* Trending Topics */}
            <div className="p-10 border border-slate-100 rounded-3xl">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10 pb-4 border-b border-slate-50">Trending Topics</h4>
              <div className="flex flex-wrap gap-3">
                {tags.map(tag => (
                  <a key={tag} href="#" className="bg-fog px-4 py-2 text-[10px] font-black uppercase tracking-widest text-graphite hover:bg-signal-red hover:text-white transition-all rounded-lg">
                    #{tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Featured Case Study */}
            <div className="relative bg-fog p-10 text-graphite min-h-[450px] flex flex-col justify-end overflow-hidden group rounded-3xl border border-slate-100">
               <div className="absolute inset-0 grayscale opacity-40 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000 pointer-events-none">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="" className="w-full h-full object-cover" />
               </div>
               <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl">
                  <span className="text-signal-red font-black text-[10px] tracking-widest block mb-4 uppercase">Success Story</span>
                  <h4 className="text-2xl font-bold mb-6 tracking-tight leading-tight">60% Reduction in Release Cycle Time</h4>
                  <Link to="/case-studies" className="inline-flex items-center gap-3 font-black text-[10px] uppercase tracking-widest group-hover:text-signal-red transition-colors">
                    VIEW CASE STUDY <ArrowRight size={14} />
                  </Link>
               </div>
            </div>
          </aside>

        </div>
      </section>

      {/* Final Bottom Bar */}
      <section className="bg-graphite py-24 text-white relative overflow-hidden">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div>
            <h3 className="text-4xl font-black mb-4 tracking-tighter leading-none">Execute with precision.</h3>
            <p className="text-slate-400 text-lg">Speak with a consultant about your technical challenges.</p>
          </div>
          <Link to="/contact" className="bg-signal-red text-white font-black px-12 py-6 rounded-xl hover:bg-white hover:text-graphite transition-all tracking-[0.2em] uppercase text-xs shadow-2xl shadow-signal-red/20">
            BOOK A CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Insights;
