import React from "react";
import { Users, BookOpen, Target, Award, Heart } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Alex Morgan",
      position: "Program Director",
      bio: "10+ years experience in ethical leadership development and community building.",
      image: "/api/placeholder/400/400"
    },
    {
      name: "Jamie Lee",
      position: "Head Mentor",
      bio: "Specializes in youth mentorship and cultural preservation initiatives.",
      image: "/api/placeholder/400/400"
    },
    {
      name: "Sam Taylor",
      position: "Community Manager",
      bio: "Passionate about creating supportive environments for personal growth.",
      image: "/api/placeholder/400/400"
    },
    {
      name: "Jordan Riley",
      position: "Value Education Specialist",
      bio: "Expert in integrating ethical values into educational frameworks.",
      image: "/api/placeholder/400/400"
    }
  ];

  // Programs data
  const programs = [
    {
      title: "Youth Mentorship Program",
      description: "Personalized guidance for young adults focusing on ethical leadership and personal development.",
      icon: <Users size={24} className="text-emerald-600" />,
      image: "https://iskconeasy.com/wp-content/uploads/2021/04/87506794_102409148030391_2842996963853467648_o.jpg"
    },
    {
      title: "Cultural Preservation Initiative",
      description: "Workshops and activities designed to connect participants with traditional values and cultural heritage.",
      icon: <BookOpen size={24} className="text-emerald-600" />,
      image: "https://bloximages.newyork1.vip.townnews.com/trinidadexpress.com/content/tncms/assets/v3/editorial/5/ae/5ae5e67c-f5ad-11e9-a81a-9f0c3ee5a1ab/5db094959370f.preview.jpg?crop=1603%2C842%2C0%2C225&resize=1200%2C630&order=crop%2Cresize"
    },
    //https://1.bp.blogspot.com/-aH9t1yzq-KU/VUhnixNfd1I/AAAAAAAAAEU/lK3FF5kfdeI/s1600/IMG-20150505-WA0004.jpg
    
    {
      title: "Community Impact Projects",
      description: "Collaborative initiatives that allow members to apply ethical values through meaningful community service.",
      icon: <Heart size={24} className="text-emerald-600" />,
      image: "https://events.iskcon.org/wp-content/uploads/sites/3/2016/01/Prerana-845x321.jpg"
    }
  ];

  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-emerald-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">About EthicCraft</h1>
              <p className="text-xl mb-8">
                A community dedicated to fostering positive values, personal growth, and responsible citizenship through structured mentorship and ethical initiatives.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
                onClick={() => navigate('/join')}
                >
                  Join Our Community
                </button>
                <button className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition"
                onClick={() => navigate('/about')}>
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://i.pinimg.com/736x/88/20/bb/8820bb574cd98f7b31c1b5c98cdfe938.jpg" 
                alt="Community gathering" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)" }}></div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-emerald-500">
            <div className="flex items-center mb-4">
              <Target size={28} className="text-emerald-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower individuals with ethical values, foster personal growth, and create a community of responsible citizens
              who contribute positively to society through intentional mentorship and value-based initiatives.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-emerald-500">
            <div className="flex items-center mb-4">
              <Award size={28} className="text-emerald-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be a leading platform that nurtures value-centered lifestyles, promotes
              cultural preservation, and enables individuals to achieve life equilibrium while developing the next generation of ethical leaders.
            </p>
          </div>
        </div>
      </div>

      {/* Our Programs Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformative initiatives designed to nurture ethical values and personal development through structured guidance and community involvement.
            </p>
          </div>
          
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                  />
                </div>
                <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="flex items-center mb-4">
                    {program.icon}
                    <h3 className="text-2xl font-bold text-gray-800 ml-3">{program.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our People Section */}
      {/* <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our People</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated team behind EthicCraft who bring expertise, passion, and commitment to our mission.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition">
              Meet Our Full Team
            </button>
          </div>
        </div>
      </div> */}

      {/* Core Values Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { title: "Platform for Expressing Goodness", desc: "Providing a space for individuals to showcase and nurture their inherent goodness." },
              { title: "Promote Value-Centered Lifestyle", desc: "Encouraging transformational efforts to integrate values into everyday life." },
              { title: "Supportive Association", desc: "Facilitating knowledge transmission and thoughtful discussions for personal growth." },
              { title: "Personalized Mentorship", desc: "Offering customized guidance to address unique goals and challenges." },
              { title: "Community Building", desc: "Fostering teamwork and collaboration through value-based initiatives." },
              { title: "Preserving Culture", desc: "Promoting education through cultural rehabilitation and traditional values." }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-emerald-500 hover:shadow-lg transition">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-emerald-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8">
            Be part of a movement that's creating positive change through ethical values and meaningful connections.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            onClick={() => navigate('/join')}>
              Sign Up Today
            </button>
            <button className="border border-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-600 transition"
            onClick={() => navigate('/contact')}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;