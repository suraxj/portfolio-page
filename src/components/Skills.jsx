import { skillCategories, tools } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="title-line"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div className="skill-category" key={cat.title}>
              <h3>{cat.title}</h3>
              <p>{cat.text}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-5 mt-12">
          {tools.map((tool) => (
            <div className="tool-card" key={tool.label}>
              <i className={`${tool.icon} ${tool.color}`}></i>
              <span>{tool.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
