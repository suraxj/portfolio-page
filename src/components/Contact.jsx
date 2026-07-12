import { useState } from 'react';
import { profile } from '../data';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const result = await response.json();
      if (response.ok && result.success === "true") {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-12 relative">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="section-title text-slate-900 font-display">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-slate-500 mt-4 text-sm">Open to fresher Full Stack Developer opportunities.</p>
            <div className="title-line"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal delay={100}>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900 font-display">Contact Information</h3>
              <p className="text-slate-500 mb-8 leading-relaxed text-sm">
                Feel free to contact me for job opportunities, internships, project discussions, or
                collaboration.
              </p>
              <div className="space-y-5">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4 className="text-slate-800 font-bold">Location</h4>
                    <p className="text-sm text-slate-600">{profile.location}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4 className="text-slate-800 font-bold">Email</h4>
                    <p className="text-sm">
                      <a href={`mailto:${profile.email}`} className="text-primary hover:text-secondary transition">{profile.email}</a>
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <h4 className="text-slate-800 font-bold">Phone</h4>
                    <p className="text-sm text-slate-600">{profile.phone}</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:bg-primary hover:text-white hover:border-transparent text-slate-700"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:bg-blue-600 hover:text-white hover:border-transparent text-slate-700"
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:bg-secondary hover:text-white hover:border-transparent text-slate-700"
                >
                  <i className="fas fa-envelope text-xl"></i>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-100/50">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 font-display">Send Me a Message</h3>
              
              {formStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-10 text-center animate-pulse">
                  <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                    <i className="fas fa-check text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2 font-display">Message Sent!</h4>
                  <p className="text-slate-500 max-w-xs mb-6 text-xs leading-relaxed">
                    Thank you. I've received your query and will reply as soon as possible.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 hover:text-white hover:border-primary hover:bg-primary transition duration-300 text-xs font-semibold shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" name="name" placeholder="Your Name" className="contact-input" required />
                    <input type="email" name="email" placeholder="Your Email" className="contact-input" required />
                  </div>
                  <input type="text" name="subject" placeholder="Subject" className="contact-input" required />
                  <textarea name="message" rows="4" placeholder="Message" className="contact-input" required></textarea>
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="px-8 py-3.5 rounded-full btn-primary font-medium w-full flex items-center justify-center gap-2 hover:scale-[1.01] transition disabled:opacity-50"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <i className="fas fa-spinner animate-spin"></i> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <i className="fas fa-paper-plane text-xs"></i>
                      </>
                    )}
                  </button>
                  {formStatus === 'error' && (
                    <p className="text-red-500 text-xs text-center mt-2">
                      Failed to send message. Please try emailing directly.
                    </p>
                  )}
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
