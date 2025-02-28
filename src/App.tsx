import React, { useState } from 'react';
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

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutUs />
      case 'education':
        return <EducationTraining />;
      case 'events':
        return <Events />;
      case 'contact':
          return <Contact />
      case 'join':
          return <JoinUsForm/>
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