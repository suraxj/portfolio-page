import { profile, infoCards } from '../data';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-12 relative">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="section-title text-slate-900 font-display">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="title-line"></div>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <ScrollReveal className="flex justify-center" delay={100}>
            <div className="relative group">
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-primary via-accent to-secondary opacity-40 group-hover:opacity-85 blur-md transition duration-500"></div>
              <img
                src={profile.aboutImage}
                alt={`About ${profile.name}`}
                className="relative w-72 h-72 object-cover rounded-2xl border-4 border-white shadow-xl z-10"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="lg:col-span-2" delay={200}>
            <div>
              <h3 className="text-2xl font-bold mb-5 text-slate-900 font-display">
                Full Stack Developer focused on practical MERN projects
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-base">
                I have completed Full Stack Development training and have hands-on knowledge of
                frontend and backend development. I enjoy creating clean UI, building REST APIs,
                integrating databases, and deploying full-stack applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {infoCards.map((card) => (
                  <div className="glass-card glass-card-hover p-4 rounded-xl flex items-center justify-between" key={card.label}>
                    <span className="text-slate-500 text-sm font-semibold">{card.label}</span>
                    <span className="text-slate-800 font-medium text-sm text-right">{card.value}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="px-6 py-3 rounded-full btn-primary font-medium inline-block hover:scale-105 transition duration-300">
                Hire Me
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
