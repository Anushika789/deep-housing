import Hero from "../components/Hero";
import VisionMission from "../components/VisionMission";
import Properties from "../components/Properties";
import Services from "../components/Services";
import Categories from "../components/Categories";
import Partnership from "../components/Partnership";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
//hello
const Home = () => {
  return (
    <div className="bg-[#0f0f0f] overflow-hidden">
      <Hero />
      <VisionMission />
      <Properties />
      <Services />
      <Categories />
      <Partnership />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;