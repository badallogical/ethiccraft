import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: "UDGAAR has transformed my perspective on community service. Their programs have given me the opportunity to make a real difference.",
    author: "Rahul Sharma",
    role: "Student Volunteer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    text: "The dedication and passion of UDGAAR's team in organizing educational programs is truly inspiring. They're making a significant impact.",
    author: "Priya Patel",
    role: "College Coordinator",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    text: "Being part of UDGAAR's initiatives has been a life-changing experience. Their commitment to social causes is remarkable.",
    author: "Amit Kumar",
    role: "Community Leader",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
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