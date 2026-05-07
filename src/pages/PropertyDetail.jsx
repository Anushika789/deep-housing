import { useParams } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";

import flat1 from "../assets/properties/flats/flat1.jpg";
import flat2 from "../assets/properties/flats/flat2.jpg";

import villa1 from "../assets/properties/villas/villa1.png";
import villa2 from "../assets/properties/villas/villa2.png";
import villa3 from "../assets/properties/villas/villa3.png";

import plot1 from "../assets/properties/plots/plot1.png";
import plot2 from "../assets/properties/plots/plot2.png";
import plot3 from "../assets/properties/plots/plot3.png";

const data = {
  1: {
    title: "2BHK Flat",
    location: "Gomti Nagar",
    price: "₹45 Lakhs",
    description:
      "A thoughtfully designed 2BHK residence located in a prime neighborhood, offering comfort, connectivity, and long-term investment value.",
    images: [flat1, flat2],
  },
  2: {
    title: "Luxury Villa",
    location: "Hazratganj",
    price: "₹1.2 Cr",
    description:
      "An elegant luxury villa crafted for premium living, combining architectural excellence with spacious interiors and serene surroundings.",
    images: [villa1, villa2, villa3],
  },
  3: {
    title: "Residential Plot",
    location: "Faizabad Road",
    price: "₹25 Lakhs",
    description:
      "A strategically located residential plot ideal for future development, offering excellent appreciation potential and accessibility.",
    images: [plot1, plot2, plot3],
  },
};

export default function PropertyDetail() {
  const { id } = useParams();
  const property = data[id];

  if (!property) {
    return (
      <div className="p-10 text-white bg-black min-h-screen">
        Property not found
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen p-6 md:p-12">

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
        {property.title}
      </h1>

      {/* Carousel */}
      <div className="mb-8">
        <ImageCarousel images={property.images} />
      </div>

      {/* Details */}
      <div className="max-w-3xl space-y-4 text-gray-300">

        <p className="text-lg">{property.description}</p>

        <p>
          <span className="text-yellow-400 font-semibold">Location:</span>{" "}
          {property.location}
        </p>

        <p className="text-2xl text-yellow-400 font-bold">
          {property.price}
        </p>

      </div>

      {/* CTA Section */}
      <div className="mt-10 flex flex-wrap gap-4">

        {/* WhatsApp */}
        <a
          href="https://wa.me/918707359968"
          className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold"
        >
          Chat on WhatsApp
        </a>

        {/* Call */}
        <a
          href="tel:8707359968"
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
        >
          Call Now
        </a>

      </div>

      {/* Back */}
      <div className="mt-8">
        <a
          href="/"
          className="text-gray-400 underline hover:text-yellow-400"
        >
          ← Back to Home
        </a>
      </div>

    </div>
  );
}