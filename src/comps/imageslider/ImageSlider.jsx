import "./imageslider.css"
import { useRef } from "react";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import img3 from "./img3.jpeg";
import img4 from "./img4.jpeg";
import img5 from "./img5.jpeg";


function ImageSlider() {
  const sliderRef = useRef(null);

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
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </div>

      <button className="arrow right" onClick={scrollNext}>❯</button>
    </div>
  );
}

export default ImageSlider;