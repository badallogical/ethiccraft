import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const images = [
  "https://ethiccraft.org/assets/img/home-slider/New_Banner.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://ethiccraft.org/assets/img/home-slider/slider1.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://ethiccraft.org/assets/img/home-slider/quate.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
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
    <div className="relative w-full mt-[64px] overflow-hidden">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full flex justify-center items-center">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white text-opacity-80 hover:text-opacity-100 transition-all z-10"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white text-opacity-80 hover:text-opacity-100 transition-all z-10"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
