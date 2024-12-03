import { useState } from "react";
import { cn } from "./util";

const IconButton = ({ onClick, className, children }: { onClick: () => void, className?: string, children: React.ReactNode }) => {
  return (
    <button onClick={onClick} className={cn("font-medium text-sm p-2.5 industry font-medium text-center fill-white bg-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 bg-white-600 hover:bg-white-700 focus:ring-white-800 bg-zinc-800", className)}>
      {children}
    </button>
  );
};

export default function Carousel({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="sm:h-[500px] relative flex flex-col">
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} className={cn({ "hidden": currentImage !== index }, "flex-1 sm:h-[500px] w-full sm:absolute inset-0 object-contain")} />
        ))}
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
  );
}