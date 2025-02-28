const colleges = [
  "St. Xavier's College",
  "MIT College",
  "Symbiosis University",
  "BITS Pilani",
  "IIT Bombay",
  "Delhi University",
  "Manipal University",
  "NMIMS University"
];

const CollegesInvolved = () => {
  return (
    <section className="py-12 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-white mb-8">Colleges Involved</h2>
        <div className="flex overflow-hidden">
          <div className="animate-scroll flex space-x-8 whitespace-nowrap">
            {[...colleges, ...colleges].map((college, index) => (
              <div
                key={index}
                className="bg-white px-6 py-3 rounded-full text-emerald-600 font-semibold"
              >
                {college}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegesInvolved;