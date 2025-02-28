import React from 'react';

const events = [
  {
    id: 1,
    title: "SwaRaj: A Cultural Pride",
    date: "10 February 2024",
    location: "Auditorium, I.C. Bose University Of S&T",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e1a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Kalaanjali Fest 2023: Mime Act",
    date: "21st October 2023",
    location: "India Gate, Delhi",
    image: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Udgaar - Mega Youth Fest 2023",
    date: "20th October 2023",
    location: "Gurukulum Hills, Uttar Pradesh, INDIA",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "ETHICRAFT CLUB LAUNCH AT DME",
    date: "31 OCTOBER 2019",
    location: "DME Campus",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "GANGA GHATS CLEANING & FESTIVAL OF UNITY",
    date: "20th OCTOBER 2019",
    location: "Ganga Ghats",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "UDGAAR(An Expression of Goodness & Joy)",
    date: "5th OCTOBER 2019",
    location: "Auditorium",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  // Add more events as needed
];

const Events = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">RECENT <span className="text-emerald-600">EVENTS</span></h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                    <div className="flex flex-col text-sm">
                      <span className="text-emerald-300">DATE: {event.date}</span>
                      <span className="text-emerald-300">LOCATION: {event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors">
            Load More Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;