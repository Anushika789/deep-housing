import { useState } from "react";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative">
      <img
        src={images[index]}
        className="w-full h-96 object-cover rounded-xl"
      />

      {/* Controls */}
      <button
        onClick={() => setIndex((index - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 bg-black/50 px-3 py-2"
      >
        ◀
      </button>

      <button
        onClick={() => setIndex((index + 1) % images.length)}
        className="absolute right-2 top-1/2 bg-black/50 px-3 py-2"
      >
        ▶
      </button>
    </div>
  );
}