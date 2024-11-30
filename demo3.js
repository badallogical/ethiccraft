import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ChevronRight, 
  Users, 
  School, 
  Calendar, 
  Star, 
  ChevronLeft, 
  Quote, 
  Globe, 
  Award, 
  BookOpen 
} from 'lucide-react';

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
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
          <div className="text-2xl font-bold">Ethicraft</div>
          <div className="flex items-center space-x-6">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 z-10"></div>
        <img src="/api/placeholder/1920/1080" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Marching Towards Values</h1>
          <p className="text-xl md:text-2xl mb-8">Transform your potential into impact through our specialized programs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">Explore Programs</button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">Watch Video</button>
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
                    <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">{program.duration}</span>
                    <span className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full">{program.level}</span>
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
                  <button className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              <button onClick={prevTestimonial} className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextTestimonial} className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-hidden px-12">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full max-w-md mx-auto">
                    <div className="text-center">
                      <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                      <p className="text-xl font-semibold">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                    <p className="text-gray-600 mt-4 italic">“{testimonial.text}”</p>
                    <div className="flex justify-center mt-4">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
