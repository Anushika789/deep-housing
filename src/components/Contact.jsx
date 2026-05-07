export default function Contact() {
  return (
    <section id="contact" className="bg-[#141414] py-24 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl text-yellow-400 mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h3 className="text-yellow-400 mb-2">Call</h3>
            <p className="text-gray-300">8707359968</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h3 className="text-yellow-400 mb-2">Email</h3>
            <a
              href="mailto:mkchaubey1976@gmail.com"
              className="text-gray-300 break-words hover:text-yellow-400"
            >
              mkchaubey1976@gmail.com
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h3 className="text-yellow-400 mb-2">Location</h3>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Skyline+Plaza+3+Lucknow"
              target="_blank"
              className="text-gray-300 hover:text-yellow-400"
            >
              View Office
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}