import { useEffect, useState, useRef } from 'react';
import ScrollReveal from './ScrollReveal';

function Counter({ endValue, duration = 1500, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const end = parseInt(endValue, 10);
    if (isNaN(end)) {
      setCount(endValue);
      return;
    }

    const increment = Math.ceil(end / 40);
    const stepTime = Math.max(Math.floor(duration / 40), 20);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, endValue, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  const stats = [
    { label: 'MERN Stack Apps', value: '4', suffix: '+' },
    { label: 'Hours Coded', value: '1200', suffix: '+' },
    { label: 'GitHub Commits', value: '10', suffix: '+' },
    { label: 'Cups of Coffee', value: '1500', suffix: ' ☕' },
  ];

  return (
    <section className="py-12 bg-slate-100/40 border-y border-slate-200/50">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-2xl text-center flex flex-col items-center justify-center border border-slate-100 hover:border-primary/30 shadow-md shadow-slate-100/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-3xl md:text-5xl font-extrabold gradient-text mb-2 font-display">
                  <Counter endValue={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm font-semibold tracking-wider text-slate-500 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
