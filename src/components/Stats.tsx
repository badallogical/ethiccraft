// import { useState, useEffect, useRef } from 'react';

// const stats = [
//   { id: 1, label: 'Members', value: 7500, suffix: '+' },
//   { id: 2, label: 'Activities', value: 300, suffix: '+' },
//   { id: 3, label: 'Colleges', value: 100, suffix: '+' },
//   { id: 4, label: 'Volunteers', value: 1000, suffix: '+' }
// ];

// const Stats = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [counts, setCounts] = useState(stats.map(() => 0));
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (isVisible) {
//       stats.forEach((stat, index) => {
//         const duration = 2000; // Animation duration in milliseconds
//         const steps = 50; // Number of steps in the animation
//         const increment = stat.value / steps;
//         let current = 0;
//         const timer = setInterval(() => {
//           current += increment;
//           if (current >= stat.value) {
//             current = stat.value;
//             clearInterval(timer);
//           }
//           setCounts(prev => {
//             const newCounts = [...prev];
//             newCounts[index] = Math.floor(current);
//             return newCounts;
//           });
//         }, duration / steps);
//       });
//     }
//   }, [isVisible]);

//   return (
//     <section ref={sectionRef} className="py-16 bg-emerald-600">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <div key={stat.id} className="text-center">
//               <div className="text-4xl md:text-5xl font-bold text-white mb-2">
//                 {counts[index]}{stat.suffix}
//               </div>
//               <div className="text-emerald-100">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
//           <button className="bg-white text-emerald-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-50">
//             Join Us
//           </button>
//           <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-emerald-600">
//             Donate
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };
import React, { useState, useEffect, useRef } from 'react';
import { Users, Calendar, School, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const stats = [
  { id: 1, label: 'Members', value: 7500, suffix: '+', icon: Users },
  { id: 2, label: 'Activities', value: 300, suffix: '+', icon: Calendar },
  { id: 3, label: 'Colleges', value: 100, suffix: '+', icon: School },
  { id: 4, label: 'Volunteers', value: 1000, suffix: '+', icon: Heart }
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.2 }
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
        const duration = 2500;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;
        
        const easeOutExpo = (t:number) => {
          return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        };
        
        let step = 0;
        const timer = setInterval(() => {
          step++;
          const progress = step / steps;
          const easedProgress = easeOutExpo(progress);
          current = easedProgress * stat.value;
          
          if (step >= steps) {
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
    <section 
  ref={sectionRef} 
  className="bg-gradient-to-br from-emerald-700 to-emerald-800 relative overflow-hidden min-h-[600px] py-20 flex items-center"
>

      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="pattern" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div 
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
            Together we're creating positive change and building a community focused on ethical values and personal growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.id} 
                className="relative bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center flex flex-col items-center justify-center min-h-[220px]"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.8s ease, transform 0.8s ease`,
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="relative w-16 h-16 mb-4">
                  <div className="absolute inset-0 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <IconComponent size={28} className="text-white" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-baseline justify-center">
                  <span className="inline-block">
                    {counts[index].toLocaleString()}
                    <span className="text-emerald-300 ml-1">{stat.suffix}</span>
                  </span>
                </div>
 ''

                <div className="text-emerald-100 font-medium">{stat.label}</div>
                
                <svg className="absolute inset-0 w-full h-full -z-10 opacity-20" viewBox="0 0 120 120">
                  <circle 
                    className="text-white" 
                    strokeWidth="2" 
                    stroke="currentColor" 
                    fill="transparent" 
                    r="58" 
                    cx="60" 
                    cy="60"
                    style={{
                      strokeDasharray: 365,
                      strokeDashoffset: isVisible ? 0 : 365,
                      transition: 'stroke-dashoffset 1.5s ease',
                      transitionDelay: `${index * 150}ms`
                    }}
                  />
                </svg>
              </div>
            );
          })}
        </div>

        <div 
          className="mt-16 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            transitionDelay: '600ms'
          }}
        >
          <button className="relative overflow-hidden group bg-white text-emerald-700 px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:shadow-lg hover:shadow-white/20"  onClick={() => navigate('/join')} >
            <span className="relative z-10">Join Our Community</span>
            <span className="absolute inset-0 bg-emerald-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </button>
          <button className="relative overflow-hidden group bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:shadow-lg hover:shadow-white/20"
          onClick={() => navigate('/about')}
          >
            <span className="relative z-10">Support Our Mission</span>
            <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;