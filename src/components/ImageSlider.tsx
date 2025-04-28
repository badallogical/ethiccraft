// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useState, useEffect } from "react";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const images = [
  "https://ethiccraft.org/assets/img/home-slider/slider1.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://ethiccraft.org/assets/img/home-slider/New_Banner.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://ethiccraft.org/assets/img/home-slider/quate.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const sliderRef = useRef(null);
//   const timerRef = useRef<number | null>(null);

//   const resetAutoplay = () => {
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//     }
    
//     if (!isPaused) {
//       timerRef.current = setInterval(() => {
//         goToNext();
//       }, 6000);
//     }
//   };

//   useEffect(() => {
//     resetAutoplay();
    
//     return () => {
//       if (timerRef.current) {
//         clearInterval(timerRef.current);
//       }
//     };
//   }, [currentIndex, isPaused]);

//   const goToPrevious = () => {
//     if (isAnimating) return;
    
//     setIsAnimating(true);
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
    
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 700);
//   };

//   const goToNext = () => {
//     if (isAnimating) return;
    
//     setIsAnimating(true);
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 700);
//   };
  
//   const goToSlide = (index: number) => {
//     if (isAnimating || index === currentIndex) return;
    
//     setIsAnimating(true);
//     setCurrentIndex(index);
    
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 700);
//   };

//   return (
//     <div 
//       ref={sliderRef}
//       className="relative w-full mt-[64px] h-[60vh] md:h-[80vh] overflow-hidden"
//     >
//       {/* Slides */}
//       <div 
//         className="h-full transition-transform duration-700 ease-in-out" 
//         style={{ transform: `translateX(-${currentIndex * 100}%)`, display: 'flex', width: `${slides.length * 100}%` }}
//       >
//         {slides.map((slide, index) => {
//           const isActive = index === currentIndex;
          
//           return (
//             <div key={index} className="w-full h-full relative flex-shrink-0">
//               {/* Slide background */}
//               <img
//                 src={slide.image}
//                 alt={`Slide ${index + 1}`}
//                 className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ${isActive ? "scale-100" : "scale-110"}`}
//               />
//             </div>
//           );
//         })}
//       </div>

//       {/* Arrows */}
//       <button
//         onClick={() => {
//           goToPrevious();
//           setIsPaused(false);
//         }}
//         className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-all z-20"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft size={24} />
//       </button>
      
//       <button
//         onClick={() => {
//           goToNext();
//           setIsPaused(false);
//         }}
//         className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-all z-20"
//         aria-label="Next slide"
//       >
//         <ChevronRight size={24} />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               goToSlide(index);
//               setIsPaused(false);
//             }}
//             aria-label={`Go to slide ${index + 1}`}
//             className={`relative h-3 transition-all duration-300 ${
//               index === currentIndex ? "w-8 bg-white" : "w-3 bg-white/50 hover:bg-white/80"
//             } rounded-full`}
//           />
//         ))}
//       </div>

//       {/* Play/Pause control */}
//       <button
//         onClick={() => setIsPaused(!isPaused)}
//         className="absolute bottom-6 right-6 z-20 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-all"
//         aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
//       >
//         {isPaused ? (
//           <Play size={16} className="fill-white ml-0.5" />
//         ) : (
//           <div className="w-3 h-3 flex">
//             <span className="w-1 h-full bg-white mr-1"></span>
//             <span className="w-1 h-full bg-white"></span>
//           </div>
//         )}
//       </button>
      
//       {/* Progress bar */}
//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
//         <div
//           className={`h-full bg-emerald-500 transition-all ${isPaused ? 'pause-animation' : ''}`}
//           style={{
//             width: isPaused ? `${(currentIndex / slides.length) * 100}%` : '100%',
//             animation: isPaused ? 'none' : `progressAnimation 6s linear ${isAnimating ? 'infinite' : ''}`
//           }}
//         ></div>
//       </div>
      
//       {/* Animation keyframes */}
//       <style>{`
//         @keyframes progressAnimation {
//           0% { width: 0; }
//           100% { width: 100%; }
//         }
//         .pause-animation {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ImageSlider;


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
