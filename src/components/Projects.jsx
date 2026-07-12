import { useState } from 'react';
import { projects } from '../data';
import ScrollReveal from './ScrollReveal';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'All') return true;
    const isFullStack = p.tech.includes('Node.js') || p.tech.includes('Express.js') || p.tech.includes('MongoDB');
    if (filter === 'Full Stack') return isFullStack;
    if (filter === 'Frontend') return !isFullStack;
    return true;
  });

  return (
    <section id="projects" className="py-12 relative">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="section-title text-slate-900 font-display">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-sm">
              Explore some of my work, categorized by technical stack. Click 'Details' to view complete spotlights.
            </p>
            <div className="title-line"></div>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-350 text-sm border ${
                  filter === cat
                    ? 'bg-gradient-to-r from-primary to-secondary border-transparent text-white shadow-lg shadow-primary/20 scale-105'
                    : 'border-slate-200 bg-white/70 text-slate-500 hover:text-slate-800 hover:border-slate-400 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p, idx) => (
            <ScrollReveal key={p.title} delay={idx * 100}>
              <article className="project-card rounded-2xl overflow-hidden glass-card glass-card-hover flex flex-col h-full shadow-md shadow-slate-100/50">
                <div className="relative overflow-hidden group h-52">
                  <div className="absolute inset-0 bg-slate-900/5 z-10 group-hover:bg-slate-950/0 transition-colors duration-300"></div>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-slate-800 font-display">{p.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">{p.description}</p>
                    <div className="tech-list mb-6">
                      {p.tech.slice(0, 4).map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                      {p.tech.length > 4 && <span className="bg-slate-100 text-primary border border-slate-200 font-semibold">+{p.tech.length - 4} more</span>}
                    </div>
                  </div>
                  <div className="project-links mt-auto">
                    <a href={p.demo} target="_blank" rel="noreferrer" className="text-xs">
                      <i className="fas fa-external-link-alt"></i> Demo
                    </a>
                    <a href={p.code} target="_blank" rel="noreferrer" className="text-xs">
                      <i className="fab fa-github"></i> Code
                    </a>
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="text-primary text-center rounded-xl px-3 py-2.5 border border-primary/25 bg-primary/5 hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:border-transparent transition-all duration-300 text-xs font-semibold"
                    >
                      <i className="fas fa-info-circle"></i> Details
                    </button>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal spotlight */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
