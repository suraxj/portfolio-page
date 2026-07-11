import { profile } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 mt-4">Open to fresher Full Stack Developer opportunities.</p>
          <div className="title-line"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-slate-400 mb-8">
              Feel free to contact me for job opportunities, internships, project discussions, or
              collaboration.
            </p>
            <div className="space-y-5">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>{profile.location}</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <h4>Phone</h4>
                  <p>{profile.phone}</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-8">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-primary"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-secondary"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form
              action={`https://formsubmit.co/${profile.email}`}
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="Your Name" className="contact-input" required />
                <input type="email" name="email" placeholder="Your Email" className="contact-input" required />
              </div>
              <input type="text" name="subject" placeholder="Subject" className="contact-input" required />
              <textarea name="message" rows="5" placeholder="Message" className="contact-input" required></textarea>
              <button type="submit" className="px-8 py-3 rounded-full btn-primary font-medium w-full">
                Send Message <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
