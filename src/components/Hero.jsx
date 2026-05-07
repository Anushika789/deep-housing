import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section
      className="
      relative min-h-screen overflow-hidden
      bg-[#0a0a0a]
      flex items-center

      before:absolute before:inset-0
      before:bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.10),transparent_40%)]
      before:pointer-events-none
    "
    >

      {/* Luxury Grid Background */}
      <div
        className="
        absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
        bg-[size:90px_90px]
      "
      />

      {/* Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute right-[-120px]
        top-1/2 -translate-y-1/2
        w-[550px]
        h-[550px]
        rounded-full
        bg-yellow-400/[0.07]
        blur-[120px]
      "
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="uppercase tracking-[7px] text-yellow-400 text-sm mb-6">
            Premium Real Estate
          </p>

          <h1 className="text-6xl lg:text-7xl font-light text-white leading-[0.95] mb-5">
            DEEP
            <span className="block font-semibold">
              HOUSING
            </span>
          </h1>

          {/* Office Address */}
          <p className="text-gray-500 text-sm leading-7 mb-10">
            704, 7th Floor, Skyline Plaza 3 <br />
            near Dayal Nagar, Sushant Golf City
          </p>

          {/* Description */}
          <p className="text-gray-300 text-xl leading-9 max-w-2xl mb-12">
            Luxury residences, premium investment opportunities and
            thoughtfully curated real-estate experiences crafted
            for modern lifestyles and timeless value.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5">

            <button
              className="
              bg-yellow-400 text-black px-9 py-4 rounded-full
              font-medium transition duration-300
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(255,215,0,0.30)]
            "
            >
              Explore Properties
            </button>

            <button
              className="
              border border-white/15 text-white
              px-9 py-4 rounded-full
              hover:bg-white/5
              transition duration-300
            "
            >
              Contact Us
            </button>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative hidden lg:flex items-center justify-center h-[760px]">

          {/* Outer Cinematic Glow */}
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.45, 0.7, 0.45],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            absolute
            w-[520px]
            h-[520px]
            rounded-full
            bg-gradient-to-r
            from-yellow-400/[0.12]
            via-yellow-300/[0.05]
            to-transparent
            blur-[120px]
          "
          />

          {/* Secondary Ambient Glow */}
          <div
            className="
            absolute
            w-[380px]
            h-[380px]
            rounded-full
            bg-white/[0.03]
            blur-[80px]
          "
          />

          {/* Outer Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute
            w-[430px]
            h-[430px]
            rounded-full
            border border-yellow-400/15
          "
          />

          {/* Inner Rotating Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute
            w-[330px]
            h-[330px]
            rounded-full
            border border-white/10
          "
          />

          {/* Floating Wrapper */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex items-center justify-center"
          >

            {/* Logo Glow */}
            <div
              className="
              absolute
              w-[260px]
              h-[260px]
              rounded-full
              bg-yellow-400/[0.08]
              blur-[40px]
            "
            />

            {/* ONLY LOGO ROTATES */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 80,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative"
            >
              <img
                src={logo}
                alt="Deep Housing"
                draggable="false"
                className="
                w-[400px]
                object-contain
                opacity-[0.95]
                select-none
                pointer-events-none
                drop-shadow-[0_0_30px_rgba(255,215,0,0.15)]
              "
              />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;