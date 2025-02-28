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
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What People Say About Us</h2>
        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={goToPrevious}
              className="absolute left-0 lg:left-10 z-10 p-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="text-center max-w-3xl mx-auto px-8">
              <div className="mb-8">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-xl italic text-gray-600 mb-6">"{testimonials[currentIndex].text}"</p>
                <h3 className="font-semibold text-lg">{testimonials[currentIndex].author}</h3>
                <p className="text-emerald-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>

            <button
              onClick={goToNext}
              className="absolute right-0 lg:right-10 z-10 p-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-emerald-600' : 'bg-gray-300'
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