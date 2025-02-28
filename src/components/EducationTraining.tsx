import React from 'react';
import { CheckCircle, Users, Brain, Heart } from 'lucide-react';

const phases = [
  {
    id: 1,
    title: "Values Awareness",
    description: "Putting the seed of values in the life of the students by kindling interest in the values through life changing and basic value based seminars.",
    icon: CheckCircle,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Values Education",
    description: "Once the interest is awakened, initialization of values in the life of the individual become the utmost need.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Values Cultivation",
    description: "After the seed of values is sown and heart becomes fertile through knowledge transmission, the background is set for deeper understanding and practice.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Values in Action",
    description: "While being empowered by necessary values in one's life, youth becomes inspired to distribute the values for the benefit of others.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const EducationTraining = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">EDUCATION & <span className="text-emerald-600">TRAINING</span></h2>
        
        <div className="mt-12 space-y-16">
          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={phase.id} className="flex flex-col md:flex-row items-center gap-8">
                {!isEven && (
                  <div className="w-full md:w-1/2">
                    <img
                      src={phase.image}
                      alt={phase.title}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                )}
                
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-8 h-8 text-emerald-600" />
                    <h3 className="text-2xl font-semibold">Phase-{phase.id}</h3>
                  </div>
                  <h4 className="text-xl font-semibold text-emerald-600">{phase.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                  <button className="bg-emerald-100 text-emerald-600 px-6 py-2 rounded-full hover:bg-emerald-200 transition-colors">
                    Read More
                  </button>
                </div>
                
                {isEven && (
                  <div className="w-full md:w-1/2">
                    <img
                      src={phase.image}
                      alt={phase.title}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationTraining;