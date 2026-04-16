import "./omoss.css";
import img1 from "../../imgs/valkommen/img1.jpeg";
import img2 from "../../imgs/valkommen/img2.jpeg";
import img3 from "../../imgs/valkommen/img3.jpeg";
import img4 from "../../imgs/valkommen/img4.jpeg";

export default function Omoss() {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Om oss</h1>
        
      </div>
      <img src={img1} alt="main" className="dog-image" />

      <div className="text">
        <div>
          
          <br />
          <br />
        </div>
      </div>
      <img src={img2} alt="main" className="dog-image" />

      <div className="text">
        <div>
          
          <br />
          <br />
        </div>
      </div>
      <img src={img3} alt="main" className="dog-image" />

      <div className="text">
        <div>
         
          
          <br />
          <br />
        </div>
      </div>
      <img src={img4} alt="main" className="dog-image" />

      <div className="text">
        <div>
          
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
