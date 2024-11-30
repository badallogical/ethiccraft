import { Menu, X, Phone, Mail, ChevronRight, Users, School, 
  Calendar, Star, ChevronLeft, Quote, Globe, Award, BookOpen } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "7,500+", label: "Members" },
    { icon: <Globe className="w-8 h-8" />, value: "50+", label: "Countries" },
    { icon: <School className="w-8 h-8" />, value: "100+", label: "Colleges" },
    { icon: <Award className="w-8 h-8" />, value: "95%", label: "Success Rate" }
  ];

  const programs = [
    {
      title: "Leadership Excellence",
      duration: "12 Weeks",
      level: "Advanced",
      description: "Master ethical leadership principles and practical management skills",
      features: ["Weekly Live Sessions", "1-on-1 Mentoring", "Real Project Work"]
    },
    {
      title: "Community Building",
      duration: "8 Weeks",
      level: "Intermediate",
      description: "Learn to create and nurture meaningful communities",
      features: ["Group Activities", "Case Studies", "Networking Events"]
    },
    {
      title: "Personal Growth",
      duration: "6 Weeks",
      level: "Beginner",
      description: "Develop essential life skills and emotional intelligence",
      features: ["Self-paced Learning", "Weekly Workshops", "Personal Coach"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Community Leader",
      image: "/api/placeholder/80/80",
      text: "The Leadership Excellence program transformed my approach to community building. The practical skills and mentoring were invaluable.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Student Ambassador",
      image: "/api/placeholder/80/80",
      text: "Joining Ethicraft was the best decision I made this year. The personal growth program helped me discover my true potential.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "NGO Director",
      image: "/api/placeholder/80/80",
      text: "The impact of this program extends far beyond personal development. It's creating a network of ethical leaders worldwide.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Section */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollPosition > 50 ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Ethicraft</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Events
              </a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Join Us
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                  Home
                </a>
                <a href="#" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </a>
                <a href="#" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                  Events
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Remaining Content */}
      {/* All other sections would be here as written. */}
    </div>
  );
};

export default HomePage;
