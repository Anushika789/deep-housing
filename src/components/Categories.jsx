import { motion } from "framer-motion";

import flat1 from "../assets/properties/flats/flat1.jpg";
import villa1 from "../assets/properties/villas/villa1.png";
import plot1 from "../assets/properties/plots/plot1.png";

const data = [
  { title: "Flats & Apartments", img: flat1 },
  { title: "Luxury Villas", img: villa1 },
  { title: "Residential Plots", img: plot1 },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="bg-[#141414] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto space-y-20">

        {data.map((item, index) => {
          const isReverse = index % 2 === 1;

          return (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                isReverse ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: isReverse ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >

              <img
                src={item.img}
                alt={item.title}
                className="w-full md:w-1/2 rounded-2xl shadow-xl"
              />

              <div className="md:w-1/2">
                <h3 className="text-3xl text-yellow-400 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  Explore premium real estate opportunities designed for
                  comfort, investment growth, and long-term value.
                </p>
              </div>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}