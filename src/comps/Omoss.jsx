import "./comps.css";
import img1 from "../imgs/omoss/img1.jpeg";
import img2 from "../imgs/omoss/img2.jpeg";
import img3 from "../imgs/omoss/img3.jpeg";
import img4 from "../imgs/omoss/img4.jpeg";
import img5 from "../imgs/omoss/img5.jpeg";
import img6 from "../imgs/omoss/img6.jpeg";
import mov6 from "../imgs/omoss/mov6.mp4"
import ImageSlider from "./imageslider/ImageSlider";

export default function Omoss() {
  const images = [img1, img5, img4, img6];

  return (
    <>
      <div className="gallery-page">
        <div className="text">
          <h1>Om oss</h1>
        </div>

        <div className="img-spacer">
          <img src={img1} alt="main" className="dog-image" />
        </div>

        <div className="img-spacer">
          <img src={img2} alt="main" className="dog-image" />
        </div>

        <div className="img-spacer">
          <img src={img3} alt="main" className="dog-image" />
        </div>
      </div>

      <div className="img-spacer">
        <h2>Galleri</h2>
        <ImageSlider images={images} />
      </div>

      <video 
        controls
        autoPlay
        loop
        muted
        playsInline>
        <source src={mov6} type="video/mp4" />
      </video>

      <br /><br />

    </>
  );
}
