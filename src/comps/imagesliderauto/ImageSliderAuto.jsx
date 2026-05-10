import "./imageslider.css"
import { useEffect,useState } from "react";

function ImageSliderAuto({ images }) {
   const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        (prev + 1) % images.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={images[currentIndex]}
      alt=""
      style={{ width: "100%" }}
    />
  );
}

export default ImageSliderAuto;