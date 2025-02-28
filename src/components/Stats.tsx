import { useState, useEffect, useRef } from 'react';

const stats = [
  { id: 1, label: 'Members', value: 7500, suffix: '+' },
  { id: 2, label: 'Activities', value: 300, suffix: '+' },
  { id: 3, label: 'Colleges', value: 100, suffix: '+' },
  { id: 4, label: 'Volunteers', value: 1000, suffix: '+' }
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000; // Animation duration in milliseconds
        const steps = 50; // Number of steps in the animation
        const increment = stat.value / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-emerald-100">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-50">
            Join Us
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-emerald-600">
            Donate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;