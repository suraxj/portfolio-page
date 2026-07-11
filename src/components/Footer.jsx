import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="bg-darker py-10 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <a href="#home" className="text-2xl font-bold gradient-text">
          Portfolio
        </a>
        <p className="text-slate-400 mt-3">
          © {new Date().getFullYear()} {profile.name} {profile.lastName} | Full Stack Developer
        </p>
        <div className="flex justify-center space-x-6 mt-5">
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary">
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
          <a href={`mailto:${profile.email}`} className="text-slate-400 hover:text-primary">
            <i className="fas fa-envelope text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
