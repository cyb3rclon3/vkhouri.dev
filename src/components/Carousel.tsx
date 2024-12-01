import { useState } from "react";
import { cn } from "./util";

const IconButton = ({ onClick, children }: { onClick: () => void, children: React.ReactNode }) => {
  return (
    <button onClick={onClick} className="font-medium text-sm p-2.5 industry font-medium text-center fill-white bg-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800 bg-zinc-800">
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
    <div className="flex justify-between items-center">
      <IconButton onClick={prevImage}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
        </svg>
      </IconButton>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} className={cn({ "hidden": currentImage !== index }, "h-[500px]")} height="300" />
        ))}
      </div>
      <IconButton onClick={nextImage}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </IconButton>
    </div>
  );
}