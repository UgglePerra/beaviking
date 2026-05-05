import "./comps.css";
import img1 from "../imgs/omoss/img1.jpeg";
import img2 from "../imgs/omoss/img2.jpeg";
import img3 from "../imgs/omoss/img3.jpeg";
import ImageSlider from "./imageslider/ImageSlider"


export default function Omoss() {
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

      </div >

      <div className="img-spacer">
        <h2>Galleri</h2>
        <ImageSlider />
      </div>
      
    </>
  );
}
