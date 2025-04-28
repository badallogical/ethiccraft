import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (tab: string) => {
    onTabChange(tab);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <img 
          src="https://ethiccraft.org/assets/img/navmenu/Ethicraft-logo.png" 
          alt="Ethiccraft Logo" 
          className="h-20 w-20 object-contain" 
        />
          {/* Logo */}
          {/* <span className="text-1xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-black to-black">
            Ethiccraft
          </span> */}
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleTabClick('home')}
              className={`text-gray-700 hover:text-emerald-600 ${activeTab === 'home' ? 'text-emerald-600' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleTabClick('about')}
              className={`text-gray-700 hover:text-emerald-600 ${activeTab === 'about' ? 'text-emerald-600' : ''}`}
            >
              About Us
            </button>
            <button 
              onClick={() => handleTabClick('events')}
              className={`text-gray-700 hover:text-emerald-600 ${activeTab === 'events' ? 'text-emerald-600' : ''}`}
            >
              Events
            </button>
            <button 
              onClick={() => handleTabClick('education')}
              className={`text-gray-700 hover:text-emerald-600 ${activeTab === 'education' ? 'text-emerald-600' : ''}`}
            >
              Education & Training
            </button>
            <button 
              onClick={() => handleTabClick('contact')}
              className={`text-gray-700 hover:text-emerald-600 ${activeTab === 'contact' ? 'text-emerald-600' : ''}`}
            >
              Contact Us
            </button>
            <button
            onClick={ ()=> handleTabClick('join')}
             className= {`bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 ${activeTab === 'join' ? 'text-emerald-600' : ''}`}>
              Join Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button 
                onClick={() => handleTabClick('home')}
                className={`block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 ${activeTab === 'home' ? 'text-emerald-600' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => handleTabClick('about')}
                className={`block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 ${activeTab === 'about' ? 'text-emerald-600' : ''}`}
              >
                About Us
              </button>
              <button 
                onClick={() => handleTabClick('events')}
                className={`block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 ${activeTab === 'events' ? 'text-emerald-600' : ''}`}
              >
                Events
              </button>
              <button 
                onClick={() => handleTabClick('education')}
                className={`block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 ${activeTab === 'education' ? 'text-emerald-600' : ''}`}
              >
                Education & Training
              </button>
              <button 
                onClick={() => handleTabClick('contact')}
                className={`block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 ${activeTab === 'contact' ? 'text-emerald-600' : ''}`}
              >
                Contact Us
              </button>
              <button 
              onClick={() => handleTabClick('join')}
              className={`w-full mt-2 bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 ${activeTab === 'join' ? 'text-emerald-600' :  ''}`} >
                Join Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;