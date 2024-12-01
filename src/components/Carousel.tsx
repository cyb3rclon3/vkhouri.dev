import { useState } from "react";
import { cn } from "./util";

const IconButton = ({ onClick, children }: { onClick: () => void, children: React.ReactNode }) => {
  return (
    <button onClick={onClick} className="el flex items-center justify-center aspect-square shadow-xl hover:bg-white/70 bg-white duration-300 group transition-all h-12 w-12">
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