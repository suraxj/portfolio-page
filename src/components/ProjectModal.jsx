import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Close modal on Escape key press
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-darker/80 backdrop-blur-md transition-all duration-300">
      {/* Background click overlay */}
      <div className="absolute inset-0" onClick={onClose}></div>
      
      {/* Modal Card */}
      <div className="relative w-full max-w-3xl glass-card rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-y-visible z-10 animate-floating">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/70 hover:bg-white text-slate-800 rounded-full flex items-center justify-center border border-slate-200/50 transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <i className="fas fa-times text-lg"></i>
        </button>

        {/* Left Side: Image / Visuals */}
        <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[250px] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent z-10 md:hidden"></div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Right Side: Description Content */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">
              Project Spotlight
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1 mb-4 font-display">
              {project.title}
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-slate-100 text-primary border border-slate-200/60 text-xs px-3 py-1 rounded-full font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-all text-sm shadow-lg shadow-primary/20"
            >
              <i className="fas fa-external-link-alt"></i> Live Preview
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-primary font-medium transition-all text-sm shadow-sm"
            >
              <i className="fab fa-github"></i> Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
