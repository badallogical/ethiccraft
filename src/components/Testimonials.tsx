import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: "While pursuing my studies, I was trying to know the various secrets associated with a happy and satisfied life. I got answers to all my queries after getting a meeting with the members of Ethiccraft Club. Ethiccraft Rocks!!",
    author: "Shubhum Sagar",
    role: "Faculty of Law, Delhi University",
    image: "https://ethiccraft.org/assets/img/testinomial/t3.jpg"
  },
  {
    id: 2,
    text: "After getting connected with Ethiccraft Club, I feel that my outlook towards life has completely changed. My thoughts have gained clarity and wisdom. I am very thankful to the club for shaping my life.",
    author: "Shubham Chaudhary",
    role: "Chemical Engineering, IIT Delhi",
    image: "https://ethiccraft.org/assets/img/testinomial/T1.PNG"
  },
  {
    id: 3,
    text: "I got connected with Ethiccraft Club during my third year of Engineering. Earlier, I would not interact with people much but after getting connected with the club, I started interacting with many people and learnt the art of situation tackling.",
    author: "Muskan Verma",
    role: "Information Technology, RKGIT",
    image: "https://ethiccraft.org/assets/img/testinomial/t2.jpg"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic sliding
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What People Say About Us
        </h2>
        <div className="relative">
          {/* Testimonial Slider */}
          <div className="flex items-center justify-center">
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 lg:left-10 z-10 p-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Testimonial Content */}
            <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto px-8 py-10 bg-gray-50 rounded-xl shadow-md">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-200">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <p className="text-xl md:text-2xl italic text-gray-800 mb-6 animate-fade-in">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="w-16 h-0.5 bg-emerald-500 mx-auto md:mx-0 mb-4"></div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {testimonials[currentIndex].author}
                </h3>
                <p className="text-emerald-600 text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            <button
              onClick={goToNext}
              className="absolute right-4 lg:right-10 z-10 p-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-emerald-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;