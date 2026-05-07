import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";

export default function Bilbo () {
  return (
    <div className="gallery-page">

      <div className="text">
        <h1>Bilbo</h1>
        <h2>NORD JV-14 NO JV-14 Be A Viking Bilbo Baggins</h2>
        <div>
          <br />
          Född 10 september 2013
          
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

    </div>
  );
}
