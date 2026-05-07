import "./imageslider.css"
import { useRef } from "react";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import img3 from "./img3.jpeg";


function ImageSlider() {
  const sliderRef = useRef(null);

  const images = [img1, img2, img3]

  const scrollNext = () => {
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: width,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: -width,
      behavior: "smooth",
    });
  };

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={scrollPrev}>❮</button>

      <div className="slider" ref={sliderRef}>
         {images.map((img, index) => (
          <img key={index} src={img} alt={`slide-${index}`} />
        ))}
      </div>

      <button className="arrow right" onClick={scrollNext}>❯</button>
    </div>
  );
}

export default ImageSlider;