import { profile, infoCards } from '../data';

export default function About() {
  return (
    <section id="about" className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="title-line"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src={profile.aboutImage}
              alt={`About ${profile.name}`}
              className="w-72 h-72 object-cover rounded-2xl border-4 border-slate-800 shadow-xl"
            />
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-5">
              Full Stack Developer focused on practical MERN projects
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              I have completed Full Stack Development training and have hands-on knowledge of
              frontend and backend development. I enjoy creating clean UI, building REST APIs,
              integrating databases, and deploying full-stack applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {infoCards.map((card) => (
                <div className="info-card" key={card.label}>
                  <strong>{card.label}:</strong> {card.value}
                </div>
              ))}
            </div>
            <a href="#contact" className="px-6 py-3 rounded-full btn-primary font-medium inline-block">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
