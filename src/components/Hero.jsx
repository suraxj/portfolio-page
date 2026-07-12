import { useState, useEffect } from 'react';
import { profile } from '../data';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  const titles = ['Full Stack Developer', 'MERN Stack Expert', 'Creative Problem Solver'];
  const [titleIdx, setTitleIdx] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = titles[titleIdx];

    const tick = () => {
      if (!isDeleting) {
        setTypedText(currentFullText.substring(0, typedText.length + 1));
        if (typedText === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
        } else {
          timer = setTimeout(tick, 90);
        }
      } else {
        setTypedText(currentFullText.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setTitleIdx((prev) => (prev + 1) % titles.length);
          timer = setTimeout(tick, 200);
        } else {
          timer = setTimeout(tick, 45);
        }
      }
    };

    timer = setTimeout(tick, isDeleting ? 45 : 90);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, titleIdx]);

  return (
    <section id="home" className="min-h-[85vh] flex items-center pt-28 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <ScrollReveal className="order-2 lg:order-1">
          <div>
            <p className="text-primary font-semibold mb-3 tracking-widest uppercase text-sm">Hello, I am</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 font-display tracking-tight text-slate-900">
              {profile.name} <span className="gradient-text">{profile.lastName}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-800 h-[40px] flex items-center">
              <span>I'm a&nbsp;</span>
              <span className="gradient-text font-display font-bold">{typedText}</span>
              <span className="w-0.5 h-6 ml-1 bg-primary animate-pulse"></span>
            </h2>
            <p className="text-lg mb-8 text-slate-600 max-w-xl leading-relaxed">{profile.tagline}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-6 py-3 rounded-full btn-primary font-medium hover:scale-105 transition duration-300 shadow-lg shadow-primary/20">
                View Projects
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 hover:scale-105 transition duration-300"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 font-medium hover:border-primary hover:text-primary hover:scale-105 transition duration-300"
              >
                Contact Me
              </a>
            </div>
            <div className="flex mt-8 space-x-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="social-icon text-xl w-11 h-11 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:bg-primary hover:text-white hover:border-transparent text-slate-700"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-icon text-xl w-11 h-11 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:bg-blue-600 hover:text-white hover:border-transparent text-slate-700"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="social-icon text-xl w-11 h-11 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:bg-secondary hover:text-white hover:border-transparent text-slate-700"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal className="flex justify-center order-1 lg:order-2" delay={150}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Pulsing Blur Backdrop Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-3xl opacity-30 animate-pulse"></div>
            {/* Glowing Border Rings */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-accent to-secondary opacity-60 blur-sm"></div>
            <div className="absolute -inset-0.5 rounded-full bg-slate-50 z-0"></div>
            <img
              src={profile.profileImage}
              alt={`${profile.name} ${profile.lastName}`}
              className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl animate-floating z-10"
            />
          </div>
        </ScrollReveal>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-1 opacity-70">
        <span className="text-xs text-slate-500 font-semibold uppercase tracking-widest">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
