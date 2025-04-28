// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import ImageSlider from './components/ImageSlider';
// import UpcomingEvents from './components/UpcomingEvents';
// import Stats from './components/Stats';
// import Testimonials from './components/Testimonials';
// import RecentEvents from './components/RecentEvents';
// import Causes from './components/Causes';
// import CollegesInvolved from './components/CollegesInvolved';
// import Contact from './components/Contact';
// import EducationTraining from './components/EducationTraining';
// import Events from './components/Events';
// import JoinUsForm from './components/join';
// import AboutUs from './components/about';

// function App() {
//   const [activeTab, setActiveTab] = useState('home');

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'about':
//         return <AboutUs />
//       case 'education':
//         return <EducationTraining />;
//       case 'events':
//         return <Events />;
//       case 'contact':
//           return <Contact />
//       case 'join':
//           return <JoinUsForm/>
//       case 'home':
//       default:
//         return (
//           <>
//             <ImageSlider />
//             <UpcomingEvents />
//             <Stats />
//             <Testimonials />
//             <RecentEvents />
//             <Causes />
//             <CollegesInvolved />
//             <Contact />
//           </>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
//       <main>
//         {renderContent()}
//       </main>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import UpcomingEvents from './components/UpcomingEvents';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import RecentEvents from './components/RecentEvents';
import Causes from './components/Causes';
import CollegesInvolved from './components/CollegesInvolved';
import Contact from './components/Contact';
import EducationTraining from './components/EducationTraining';
import Events from './components/Events';
import JoinUsForm from './components/join';
import AboutUs from './components/about';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for smooth transitions
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;

      e.preventDefault();
      const id = target.getAttribute('href')!.slice(1);
      const element = document.getElementById(id);

      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutUs />;
      case 'education':
        return <EducationTraining />;
      case 'events':
        return <Events />;
      case 'contact':
        return <Contact />;
      case 'join':
        return <JoinUsForm />;
      case 'home':
      default:
        return (
          <>
            <ImageSlider />
            <UpcomingEvents />
            <Stats />
            <Testimonials />
            <RecentEvents />
            <Causes />
            <CollegesInvolved />
            <Contact />
          </>
        );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-2xl font-semibold animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
