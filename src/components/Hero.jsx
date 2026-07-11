import { profile } from '../data';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-primary font-semibold mb-3">Hello, I am</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {profile.name} <span className="gradient-text">{profile.lastName}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-300">
            {profile.title}
          </h2>
          <p className="text-lg mb-8 text-slate-400 max-w-xl">{profile.tagline}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 rounded-full btn-primary font-medium">
              View Projects
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-slate-600 text-slate-200 font-medium hover:border-primary hover:text-primary transition"
            >
              Contact Me
            </a>
          </div>
          <div className="flex mt-8 space-x-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="social-icon text-xl w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 hover:bg-primary"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-icon text-xl w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="social-icon text-xl w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 hover:bg-secondary"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-30"></div>
            <img
              src={profile.profileImage}
              alt={`${profile.name} ${profile.lastName}`}
              className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 animate-floating"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
