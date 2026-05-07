export default function FlashCards() {
  const cards = [
    "Flats",
    "Plotting",
    "Construction",
    "Renovation",
    "Army Offers",
  ];

  return (
    <div className="bg-black text-white p-16">
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-10">
        What We Offer
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="p-8 bg-gray-900 rounded-xl border border-gray-700 hover:border-yellow-400 hover:scale-105 transition duration-300 text-center"
          >
            <h3 className="text-xl font-semibold">{card}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}