import React from 'react';

const events = [
  {
    id: 1,
    title: "Mega Youth Fest : Absolute Truth",
    date: "10 February 2024",
    location: "Auditorium, I.C. Bose University Of S&T",
    image: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https://media.insider.in/image/upload/c_crop%2Cg_custom/v1666020511/tedifpyybkwnp1bc9zl6.jpg"
  },
  
  {
    id: 2,
    title: "Jagran Youth Fest",
    date: "21st October 2023",
    location: "India Gate, Delhi",
    image: "https://media.insider.in/image/upload/c_crop,g_custom/v1686934415/onlj7jlxobilt6eqtbox.png"
  },
  {
    id: 3,
    title: "Xpression Fest 2023: Mime Act",
    date: "21st October 2023",
    location: "India Gate, Delhi",
    image: "https://iskconkanpur.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-01-20-at-8.17.22-PM-1024x818.jpeg"
  },
  {
    id: 4,
    title: "Udgaar - Mega Youth Fest 2023",
    date: "20th October 2023",
    location: "Gurukulum Hills, Uttar Pradesh, INDIA",
    image: "https://harisolution.com/wp-content/uploads/2017/01/1920-770x367.jpg"
  },
  {
    id: 5,
    title: "ETHICRAFT CLUB LAUNCH AT DME",
    date: "31 OCTOBER 2019",
    location: "DME Campus",
    image: "https://static01.nyt.com/images/2010/10/05/arts/JUMPTREY3/JUMPTREY3-jumbo.jpg"
  },
  {
    id: 6,
    title: "BOAT FESTIVAL OF UNITY",
    date: "20th OCTOBER 2019",
    location: "Ganga Ghats",
    image: "https://www.iskcondelhi.com/wp-content/uploads/2022/05/Boat-Festival-2023.jpeg"
  },
  
  {
    id: 7,
    title: "UMANG (An Expression of Goodness & Joy)",
    date: "5th OCTOBER 2019",
    location: "Auditorium",
    image: "https://i.ytimg.com/vi/x17Ok2hH9Jo/maxresdefault.jpg"
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

        {/* <div className="mt-12 text-center">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors">
            Load More Events
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Events;