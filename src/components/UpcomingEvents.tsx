import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const events = [
  {
    id: 1,
    title: "Youth Leadership Summit",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Join us for a day of inspiration and leadership development."
  },
  {
    id: 2,
    title: "Environmental Workshop",
    date: "March 20, 2024",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Learn about sustainable practices and environmental conservation."
  },
  {
    id: 3,
    title: "Community Service Day",
    date: "March 25, 2024",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Make a difference in your community through volunteer work."
  },
  {
    id: 4,
    title: "Educational Seminar",
    date: "March 30, 2024",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Expand your knowledge with our expert speakers."
  }
];

const UpcomingEvents = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="flex-none w-[300px] bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-emerald-600 mb-2">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
                {/* <button className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-full hover:bg-emerald-700">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;