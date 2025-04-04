import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://ethiccraft.org/assets/img/home-slider/New_Banner.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://ethiccraft.org/assets/img/home-slider/slider1.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://ethiccraft.org/assets/img/home-slider/quate.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic sliding
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Slide every 4 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-[600px] mt-16 overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Inspirational Text, Subtitle, and Button on First Image */}
            {index === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/20">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in-down">
                  Making a Difference Together
                </h2>
                <p className="text-lg md:text-xl font-light max-w-md text-center mb-6 animate-fade-in-up">
                  Unite for a brighter future-empower, uplift, and inspire change.
                </p>
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 animate-fade-in-up">
                  Let's Dive in
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md hover:bg-white transition-colors"
      >
        <ChevronLeft size={24} className="text-gray-800" />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md hover:bg-white transition-colors"
      >
        <ChevronRight size={24} className="text-gray-800" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;