import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";

export default function Daphne () {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Daphne</h1>
        <h2>Be A Viking Celebrian</h2>
        <div>
          <br />
          Född 29 november 2014
          <br /><br />
          
        </div>
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

      <div className="img-spacer">
        <img src={img4} alt="main" className="dog-image" />
      </div>

    </div>
  );
}

