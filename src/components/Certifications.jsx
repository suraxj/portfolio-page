import { certifications } from '../data';
import ScrollReveal from './ScrollReveal';

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 relative">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="section-title text-slate-900 font-display">
              My <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-slate-500 mt-4 text-sm">
              Relevant certificates for Full Stack Development and web technologies.
            </p>
            <div className="title-line"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8">
          {certifications.map((c, idx) => (
            <ScrollReveal key={c.title} delay={idx * 100}>
              <div className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between h-full text-center shadow-md shadow-slate-100/50">
                <div>
                  <i className="fas fa-certificate text-primary text-3xl mb-4 inline-block"></i>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 font-display">{c.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">{c.text}</p>
                </div>
                <div>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-5 py-2.5 rounded-full border border-slate-200 hover:border-primary text-primary hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 text-sm font-semibold shadow-sm"
                  >
                    Verify Credential
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
