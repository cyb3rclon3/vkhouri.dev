import { useState } from "react";
import { cn } from "./util";

const IconButton = ({ onClick, className, children }: { onClick: () => void, className?: string, children: React.ReactNode }) => {
  return (
    <button
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()}
      className={cn("font-medium text-sm p-2.5 industry text-center fill-white bg-zinc-800 hover:bg-zinc-700 focus-visible:ring-2 focus-visible:ring-white focus:outline-none", className)}
    >
      {children}
    </button>
  );
};

export default function Carousel({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((currentImage + 1) % images.length);
  const prevImage = () => setCurrentImage((currentImage - 1 + images.length) % images.length);

  const prev = (currentImage - 1 + images.length) % images.length;
  const next = (currentImage + 1) % images.length;

  return (
    <div className="relative flex flex-col gap-3">
      <div className="sm:h-[500px] relative flex flex-col">
        <div>
          {/* Only render current image; preload adjacent ones */}
          <img
            src={images[currentImage]}
            className="flex-1 sm:h-[500px] w-full sm:absolute inset-0 object-contain"
          />
          <link rel="preload" as="image" href={images[next]} />
          <link rel="preload" as="image" href={images[prev]} />
        </div>
        <div className="flex justify-between items-center sm:absolute sm:h-full w-full bg-zinc-900 sm:bg-transparent pointer-events-none">
          <IconButton onClick={prevImage} className="pointer-events-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
            </svg>
          </IconButton>
          <IconButton onClick={nextImage} className="pointer-events-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </IconButton>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex items-center gap-1.5 bg-zinc-800 rounded-full px-3 py-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setCurrentImage(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-200 focus:outline-none",
                currentImage === index ? "bg-white scale-110" : "bg-zinc-500 hover:bg-zinc-300"
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
