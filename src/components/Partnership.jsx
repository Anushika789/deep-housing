export default function Partnership() {
  return (
    <section className="bg-black py-24 px-6 text-center">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl text-yellow-400 mb-10">
          Partner With Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-white mb-3">Collaborate</h3>
            <p className="text-gray-300 tracking-wide">
              Join us in building impactful real estate projects.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-white mb-3">Invest</h3>
            <p className="text-gray-300 tracking-wide">
              Explore high-return investment opportunities.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}