import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            MERN Stack <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
            Each project includes title, description, tech stack, deployed URL, and Code links.
          </p>
          <div className="title-line"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article className="project-card rounded-xl overflow-hidden card-hover" key={p.title}>
              <img src={p.image} alt={p.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-slate-400 mb-4">{p.description}</p>
                <div className="tech-list">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={p.code} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
