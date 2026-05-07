import { motion } from "framer-motion";

const VisionMission = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[4px] text-yellow-500 text-sm mb-5">
              Vision
            </p>

            <h2 className="text-3xl font-light text-gray-900 leading-relaxed mb-6">
              Creating timeless spaces that elevate modern living.
            </h2>

            <p className="text-gray-600 leading-8">
              Deep Housing envisions a refined future where luxury,
              architecture, comfort and intelligent investments merge
              into meaningful living experiences.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[4px] text-yellow-500 text-sm mb-5">
              Mission
            </p>

            <h2 className="text-3xl font-light text-gray-900 leading-relaxed mb-6">
              Delivering trust, elegance and premium real-estate experiences.
            </h2>

            <p className="text-gray-600 leading-8">
              We provide curated residential and investment opportunities
              with transparency, strategic value and modern design
              excellence at every step.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;