import { useState, useEffect } from 'react';
import { navLinks } from '../data';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      sections.forEach((sec) => {
        if (sec && scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
          setActive(`#${sec.id}`);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed w-full bg-darker/90 backdrop-blur-sm z-50 shadow-lg border-b border-slate-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold gradient-text">
            Portfolio
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-slate-200 hover:text-primary focus:outline-none"
            aria-label="Open menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
          <div className="hidden md:flex space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${active === link.href ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-4 pb-2 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 nav-link ${active === link.href ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
