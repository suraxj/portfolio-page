import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StatsSection from './components/StatsSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="bg-grid-pattern min-h-screen relative text-slate-800">
      <CustomCursor />
      
      {/* Background Animated Glow Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-primary/15 blur-[100px] animate-blob"></div>
        <div className="absolute top-[45%] right-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/15 blur-[120px] animate-blob [animation-delay:3s]"></div>
        <div className="absolute bottom-[5%] left-[15%] w-[380px] h-[380px] rounded-full bg-primary/10 blur-[110px] animate-blob [animation-delay:6s]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <StatsSection />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
