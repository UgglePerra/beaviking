import "./imageslider.css"
import { useState } from "react";

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={prevSlide}>❮</button>

      <div className="slider">
        <img
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
      />
      </div>
      
      <button className="arrow right" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default ImageSlider;