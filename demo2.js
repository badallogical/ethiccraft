

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronRight, Users, School, Calendar, Star, ChevronLeft, Quote, Globe, Award, BookOpen } from 'lucide-react';

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
      {/* Navbar - Same as before */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        {/* ... Previous navbar code ... */}
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 z-10"></div>
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Marching Towards Values
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Transform your potential into impact through our specialized programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Explore Programs
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Watch Video
            </button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-6">
                  <div className="h-48 mb-6 rounded-lg bg-blue-100 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      {program.duration}
                    </span>
                    <span className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                      {program.level}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-white/10 transition-all">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Success Stories</h2>
          <div className="relative">
            <div className="flex items-center justify-between">
              <button 
                onClick={prevTestimonial}
                className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="overflow-hidden px-12">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="max-w-3xl mx-auto text-center">
                      <Quote className="w-12 h-12 mx-auto mb-6 text-blue-600" />
                      <p className="text-xl mb-6">{testimonial.text}</p>
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="flex items-center justify-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full mr-4"
                        />
                        <div className="text-left">
                          <div className="font-bold">{testimonial.name}</div>
                          <div className="text-gray-600">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join thousands of others who have transformed their lives through our programs</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Apply Now
          </button>
        </div>
      </section>

      {/* Contact Section - Enhanced version */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our programs? We're here to help you choose the right path for your journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>contact@ethicraft.org</span>
                </div>
              </div>
              <img 
                src="/api/placeholder/600/400" 
                alt="Office" 
                className="mt-8 rounded-lg"
              />
            </div>
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Program</option>
                  <option value="leadership">Leadership Excellence</option>
                  <option value="community">Community Building</option>
                  <option value="personal">Personal Growth</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Same as before */}
      <footer className="bg-gray-900 text-white py-12">
        {/* ... Previous footer code ... */}
      </footer>
    </div>
  );
};

export default HomePage;