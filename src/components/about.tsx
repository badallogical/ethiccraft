import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 mb-12">
          Welcome to EthicCraft, a platform dedicated to fostering positive values,
          community building, and holistic development through structured mentorship
          and value-based initiatives.
        </p>
      </div>
      
      {/* Mission Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h3 className="text-3xl font-semibold text-gray-700 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-600">
          To empower individuals with ethical values, foster personal growth, and create a community of responsible citizens
          who contribute positively to society.
        </p>
      </div>
      
      {/* Vision Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h3 className="text-3xl font-semibold text-gray-700 mb-4">Our Vision</h3>
        <p className="text-lg text-gray-600">
          To be a leading platform that nurtures value-centered lifestyles, promotes
          cultural preservation, and enables individuals to achieve life equilibrium.
        </p>
      </div>
      
      {/* Objectives Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-semibold text-gray-700 mb-6">Our Objectives</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[ 
            { title: "Platform for Expressing Goodness", desc: "Providing a space for individuals to showcase and nurture their inherent goodness." },
            { title: "Promote Value-Centered Lifestyle", desc: "Encouraging transformational efforts to integrate values into everyday life." },
            { title: "Association", desc: "Facilitating knowledge transmission and thoughtful discussions for personal growth." },
            { title: "Support System", desc: "Creating an environment conducive to success through guidance and motivation." },
            { title: "Personalized Mentorship", desc: "Offering customized mentorship to address unique goals and challenges." },
            { title: "Community Building", desc: "Fostering teamwork and collaboration through value-based initiatives." },
            { title: "Preserving Culture", desc: "Promoting education through cultural rehabilitation and traditional values." },
            { title: "Sense of Responsibility", desc: "Training youth to become responsible citizens contributing to national development." },
            { title: "Providing Life Equilibrium", desc: "Balancing physical, intellectual, emotional, and spiritual aspects of life." },
            { title: "Role Model and Inspirational Leadership", desc: "Developing young leaders to inspire and create new opportunities." }
          ].map((objective, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{objective.title}</h4>
              <p className="text-gray-600">{objective.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;