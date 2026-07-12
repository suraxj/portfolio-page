import { skillCategories, tools } from '../data';
import ScrollReveal from './ScrollReveal';

export default function Skills() {
  return (
    <section id="skills" className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="section-title text-slate-900 font-display">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <div className="title-line"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <ScrollReveal key={cat.title} delay={idx * 100}>
              <div className="glass-card glass-card-hover p-6 rounded-2xl h-full shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-slate-800 font-display">{cat.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{cat.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-5 mt-16">
            {tools.map((tool) => (
              <div
                className="tool-card group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
                key={tool.label}
              >
                <i className={`${tool.icon} ${tool.color} group-hover:scale-110 transition-transform duration-300`}></i>
                <span className="group-hover:text-slate-900 transition-colors duration-300">{tool.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
