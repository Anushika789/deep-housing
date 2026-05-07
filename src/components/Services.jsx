import { motion } from "framer-motion";

import flat1 from "../assets/properties/flats/flat1.jpg";
import plot1 from "../assets/properties/plots/plot1.png";
import villa1 from "../assets/properties/villas/villa1.png";
import commercial1 from "../assets/properties/commercial/commercial1.jpg";
import renovation1 from "../assets/properties/renovation/renovation1.jpg";
import army1 from "../assets/properties/army/army1.jpg";

const services = [
  {
    title: "Flats & Apartments",
    desc: "Ready-to-move homes",
    image: flat1,
  },
  {
    title: "Residential Plots",
    desc: "Prime land investments",
    image: plot1,
  },
  {
    title: "Villas & Homes",
    desc: "Luxury living spaces",
    image: villa1,
  },
  {
    title: "Commercial Spaces",
    desc: "Shops & office properties",
    image: commercial1,
  },
  {
    title: "Renovation",
    desc: "Modern redesign services",
    image: renovation1,
  },
  {
    title: "Special Offers for Army Personnel",
    desc: "Exclusive benefits for defense families",
    image: army1,
  },
];

const Services = () => {
  return (
    <section className="py-28 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[5px] text-yellow-400 text-sm mb-4">
            Our Services
          </p>

          <h2 className="text-5xl font-light text-white mb-6">
            Crafted for modern luxury living.
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto leading-8 text-lg">
            Luxury residences, curated investments, commercial opportunities
            and modern real-estate solutions tailored for premium lifestyles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[30px] h-[420px]"
            >

              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute bottom-0 p-8">
                <h3 className="text-4xl font-light text-white mb-3 leading-tight">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-lg">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;