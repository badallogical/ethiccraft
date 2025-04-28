// const recentEvents = [
//   {
//     id: 1,
//     image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     title: "Youth Leadership Workshop"
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     title: "Community Service Day"
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     title: "Educational Seminar"
//   },
//   {
//     id: 4,
//     image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     title: "Cultural Festival"
//   },
//   {
//     id: 5,
//     image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     title: "Sports Tournament"
//   },
//   {
//     id: 6,
//     image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     title: "Art Exhibition"
//   }
// ];

// const RecentEvents = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">Recent Events Gallery</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {recentEvents.map((event) => (
//             <div
//               key={event.id}
//               className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
//             >
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
//                 <h3 className="text-white text-xl font-semibold p-6">{event.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RecentEvents;
import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Define the Event type
interface Event {
  id: number;
  image: string;
  title: string;
  date: string;
  description: string;
  category: string;
}

const recentEvents: Event[] = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/ae/e0/01/aee001efc7e05eae6543274b64da18c8.jpg",
    title: "Youth Leadership Workshop",
    date: "March 15, 2025",
    description: "Empowering young leaders with essential skills for community development.",
    category: "Workshop"
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/20/1e/fe/201efec66ea9bd65bec57d90821c64ea.jpg",
    title: "Community Service Day",
    date: "February 28, 2025",
    description: "Volunteers coming together to make a positive impact in local communities.",
    category: "Service"
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/f0/c5/2e/f0c52ec81b9f79fb634baf4424e32b75.jpg",
    title: "Educational Seminar",
    date: "February 10, 2025",
    description: "Exploring innovative approaches to value-based education.",
    category: "Education"
  },
  {
    id: 4,
    image: "https://i.pinimg.com/736x/01/ed/1d/01ed1d1106e634eae497805cc46396cc.jpg",
    title: "Cultural Festival",
    date: "January 25, 2025",
    description: "Celebrating diversity and cultural heritage through performances and exhibits.",
    category: "Culture"
  },
  {
    id: 5,
    image: "https://i.pinimg.com/736x/8b/43/67/8b436724b2bd136e3c1de91759968e77.jpg",
    title: "Sports Tournament",
    date: "January 12, 2025",
    description: "Promoting teamwork and physical wellness through friendly competition.",
    category: "Sports"
  },
  {
    id: 6,
    image: "https://i.pinimg.com/736x/e9/4e/50/e94e500aacfc7175299540825d0433c7.jpg",
    title: "Art Exhibition",
    date: "December 18, 2024",
    description: "Showcasing creative expressions that promote ethical values and social awareness.",
    category: "Arts"
  }
];


const RecentEvents: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(recentEvents);
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  const categories = ['All', ...new Set(recentEvents.map(event => event.category))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredEvents(recentEvents);
    } else {
      setFilteredEvents(recentEvents.filter(event => event.category === activeFilter));
    }
  }, [activeFilter]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const navigate = useNavigate();

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-50"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Recent <span className="text-emerald-600">Events</span> Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our community's recent activities promoting values, leadership, and personal growth.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Scrollable */}
        <div className="relative md:hidden">
          {showLeftScroll && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md border border-gray-100"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {showRightScroll && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md border border-gray-100"
            >
              <ChevronRight size={20} />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 hide-scrollbar gap-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="flex-shrink-0 w-[280px]"
              >
                <EventCard event={event} isHovered={false} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="transform transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              <EventCard event={event} isHovered={hoveredEvent === event.id} />
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition flex items-center gap-2 mx-auto"
          onClick={() => navigate('/events')} >
            View All Events
            <ExternalLink size={18} />
          </button>
        </div>
      </div>

      {/* Hide Scrollbar CSS */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

interface EventCardProps {
  event: Event;
  isHovered: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, isHovered }) => (
  
  <div className="group relative overflow-hidden rounded-lg shadow-lg h-full bg-white">
    <div className="relative h-48 overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className={`w-full h-full object-cover transition-transform duration-500 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
      />
      <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-medium px-3 py-1 rounded-full">
        {event.category}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-1/2"></div>
    </div>

    <div className="p-5">
      <div className="text-sm text-emerald-600 font-medium mb-2">{event.date}</div>
      <h3 className="text-xl font-bold mb-2 line-clamp-2">{event.title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

      <button className="mt-2 text-emerald-600 font-medium hover:text-emerald-800 transition"
       onClick={() => {
        const navigate2 = useNavigate()
        navigate2('/about')}} >
        Learn More
      </button>
    </div>
  </div>
);

export default RecentEvents;