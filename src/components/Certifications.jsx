import { certifications } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 mt-4">
            Relevant certificates for Full Stack Development and web technologies.
          </p>
          <div className="title-line"></div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {certifications.map((c) => (
            <div className="certificate-card" key={c.title}>
              <i className="fas fa-certificate"></i>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <a href={c.link} target="_blank" rel="noreferrer">
                Certificate Link
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
