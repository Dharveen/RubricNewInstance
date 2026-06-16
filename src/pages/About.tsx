import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-32 md:pt-40 md:pb-56 border-b border-fog">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-signal-red font-bold tracking-[0.2em] text-xs uppercase mb-6 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-10 text-graphite">
              Architecting <span className="text-signal-red">Digital Certainty</span> Since 2007.
            </h1>
            <p className="text-xl md:text-2xl text-slate leading-relaxed max-w-3xl">
              Rubric was founded on the principle that software excellence is not an accident—it's the result of architectural rigor and strategic execution.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-graphite">The Rubric Philosophy</h2>
            <p className="text-lg text-slate leading-relaxed">
              We don't just test software; we engineer quality into the very fabric of your digital ecosystem. Our approach combines deep technical expertise with the strategic foresight necessary to navigate enterprise complexity.
            </p>
            <p className="text-lg text-slate leading-relaxed">
              From our origins in Johannesburg to our global presence today, we have remained committed to a single mission: crafting sustainable digital outcomes through measurable impact.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-10 bg-fog border border-fog shadow-sm">
              <div className="text-5xl font-bold text-signal-red mb-2">2007</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Established</div>
            </div>
            <div className="p-10 bg-fog border border-fog shadow-sm">
              <div className="text-5xl font-bold text-signal-red mb-2">15+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Enterprise Partners</div>
            </div>
            <div className="p-10 bg-fog border border-fog shadow-sm">
              <div className="text-5xl font-bold text-signal-red mb-2">100%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Quality Focused</div>
            </div>
            <div className="p-10 bg-fog border border-fog shadow-sm">
              <div className="text-5xl font-bold text-signal-red mb-2">24/7</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Global Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="py-32 bg-platinum">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="aspect-[4/5] bg-fog relative overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                  alt="Rubric Specialists"
                  className="w-full h-full object-cover grayscale"
                />
             </div>
             <div className="absolute -top-12 -left-12 w-48 h-48 border-2 border-signal-red -z-10 opacity-20"></div>
          </div>
          <div className="order-1 lg:order-2 space-y-10">
            <span className="text-signal-red font-bold tracking-widest text-sm uppercase">Elite Talent</span>
            <h2 className="text-4xl md:text-5xl font-bold text-graphite leading-tight">Specialists, <br />Not Generalists</h2>
            <p className="text-xl text-slate leading-relaxed">
              At Rubric, we don't hire 'resources'. We cultivate high-end specialist talent—engineers and consultants who possess both the technical depth and the strategic foresight to navigate enterprise complexity.
            </p>
            <ul className="space-y-6">
              {[
                'Culture of extreme ownership and technical pride.',
                'Continuous education via Rubric Academy mentorship.',
                'Specialized teams mapped to industry domains.'
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="text-signal-red mt-1 shrink-0" size={24} />
                  <span className="text-lg text-graphite font-medium">{text}</span>
                </li>
              ))}
            </ul>
            <Link to="/careers" className="bg-graphite text-white px-10 py-5 rounded-sm font-bold inline-flex items-center gap-3 hover:bg-signal-red transition-all group">
              JOIN THE TEAM <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-graphite text-white text-center">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">Ready to Architect Your Success?</h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Connect with our strategic consultants to define your path toward digital certainty and quality engineering excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-signal-red text-white px-10 py-5 rounded-sm font-bold text-lg hover:bg-opacity-90 transition-all">
              REQUEST A CONSULTATION
            </Link>
            <Link to="/services" className="border border-white text-white px-10 py-5 rounded-sm font-bold text-lg hover:bg-white hover:text-graphite transition-all">
              VIEW CASE STUDIES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
