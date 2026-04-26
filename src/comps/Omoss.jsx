import "./comps.css";
import img1 from "../imgs/omoss/img1.jpeg";
import ImageSlider from "./imageslider/ImageSlider"


export default function Omoss() {
  return (
    <>
      <div className="gallery-page">
      <div className="text">
        <h1>Om oss</h1>
        
        </div>
        <img src={img1} alt="main" className="dog-image" />
      </div>
      <br></br><br></br>
      <h2>Galleri</h2>
      <ImageSlider />
      <br></br><br></br>
    </>
    

  );
}
