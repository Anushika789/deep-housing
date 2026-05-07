import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import flat1 from "../assets/properties/flats/flat1.jpg";
import villa1 from "../assets/properties/villas/villa1.png";
import plot1 from "../assets/properties/plots/plot1.png";

const properties = [
  { id: 1, title: "2BHK Flat", location: "Gomti Nagar", price: "₹45L", img: flat1 },
  { id: 2, title: "Luxury Villa", location: "Hazratganj", price: "₹1.2Cr", img: villa1 },
  { id: 3, title: "Residential Plot", location: "Faizabad Road", price: "₹25L", img: plot1 },
];

export default function Properties() {
  const nav = useNavigate();

  return (
    <section id="properties" className="bg-gradient-to-b from-[#0f0f0f] to-[#141414] py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <motion.h2
          className="text-4xl text-yellow-400 mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Properties
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">

          {properties.map((p, i) => (
            <motion.div
              key={p.id}
              onClick={() => nav(`/property/${p.id}`)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer 
              hover:scale-105 transition duration-300 
              hover:shadow-[0_0_30px_rgba(255,200,0,0.2)]"

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <img
                src={p.img}
                className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-lg">{p.title}</h3>
                <p className="text-gray-300">{p.location}</p>
                <p className="text-yellow-400">{p.price}</p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}