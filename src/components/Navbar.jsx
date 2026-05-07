import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full px-8 py-4 flex justify-between items-center 
    bg-white/5 backdrop-blur-xl border-b border-white/10 z-50">

      <img src={logo} className="h-12" />

      <div className="hidden md:flex gap-8 text-gray-300 tracking-wide">
        <a href="#properties" className="hover:text-yellow-400">Properties</a>
        <a href="#categories" className="hover:text-yellow-400">Categories</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </div>

      <a
        href="https://wa.me/918707359968"
        className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold 
        hover:scale-105 transition"
      >
        Enquire
      </a>
    </div>
  );
}