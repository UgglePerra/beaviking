import "./comps.css"
import img1 from "../imgs/valpar/img1.jpeg";
import img2 from "../imgs/valpar/img2.jpeg";
import img3 from "../imgs/valpar/img3.jpeg";
import img4 from "../imgs/valpar/img4.jpeg";
import img5 from "../imgs/valpar/img5.jpeg";
import img6 from "../imgs/valpar/img6.jpeg";
import img7 from "../imgs/valpar/img7.jpeg";
import img8 from "../imgs/valpar/img8.jpeg";
import img9 from "../imgs/valpar/img9.jpeg";
import img10 from "../imgs/valpar/img10.jpeg";
import img11 from "../imgs/valpar/img11.jpeg";
import ImageSliderAuto from "./imagesliderauto/ImageSliderAuto";


export default function Valpar() {
  const images = [img9, img10, img11];
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Valpar</h1>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.
       
      </div>

      <div className="img-spacer">
        <img src={img1} alt="main" className="dog-image" />
      </div>

      <div className="img-spacer">
        <img src={img5} alt="main" className="dog-image" />
      </div>

      <div className="img-spacer">
        <img src={img6} alt="main" className="dog-image" />
      </div>

      <div className="img-spacer">
        <img src={img7} alt="main" className="dog-image" />
      </div>

      <div className="img-spacer">
        <img src={img8} alt="main" className="dog-image" />
      </div>

     
      <div className="img-spacer">
        <h2></h2>
        <ImageSliderAuto images={images} />
      </div>



    </div>
  );
}