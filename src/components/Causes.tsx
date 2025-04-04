import { Heart, BookOpen, Leaf, Users, Globe, Star } from "lucide-react";

const causes = [
  {
    id: 1,
    title: "De-addiction Campaign",
    description: "Supporting individuals in their journey to overcome addiction through counseling and rehabilitation programs.",
    icon: Heart,
    image: "https://ethiccraft.org/assets/img/causes/DeAddiction3.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Education and Training",
    description: "Providing quality education and skill development programs to empower the youth for a better future.",
    icon: BookOpen,
    image: "https://ethiccraft.org/assets/img/causes/cause1.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Disaster Welfare",
    description: "Offering immediate relief and long-term support to communities affected by natural disasters.",
    icon: Leaf,
    image: "https://ethiccraft.org/assets/img/causes/cause2.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Environment Protection",
    description: "Promoting sustainable practices and tree plantation drives to protect and restore our environment.",
    icon: Globe,
    image: "https://cdn.pixabay.com/photo/2020/04/28/09/36/nature-5103636_1280.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Individual Care",
    description: "Providing personalized support and counseling to those in need, ensuring mental and emotional well-being.",
    icon: Users,
    image: "https://ethiccraft.org/assets/img/causes/cause4.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Value Awareness",
    description: "Encouraging ethical values, cultural awareness, and moral responsibility in society through community programs.",
    icon: Star,
    image: "https://ethiccraft.org/assets/img/causes/cause5.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Causes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Causes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {causes.map((cause) => {
            const IconComponent = cause.icon;
            return (
              <div
                key={cause.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg group"
              >
                <div className="relative h-64">
                  <img
                    src={cause.image}
                    alt={cause.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 p-2 rounded-full">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{cause.title}</h3>
                  <p className="text-gray-600 mb-4">{cause.description}</p>
                  {/* <button className="w-full bg-emerald-600 text-white py-2 rounded-full hover:bg-emerald-700 transition-colors">
                    Support This Cause
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Causes;