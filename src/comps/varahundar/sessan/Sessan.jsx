import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";
import img6 from "./imgs/img6.jpeg";
import img7 from "./imgs/img7.jpeg";
import img8 from "./imgs/img8.jpeg";
import img9 from "./imgs/img9.jpeg";
import img10 from "./imgs/img10.jpeg";



export default function Sessan () {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Sessan</h1>
        <h2>C.I.B. NO V-15 SE JV-13 NO V-13 NO JV-13 NORD UCH Be A Viking Anduril</h2>
        <div>
          <br />
          Född 26 juli 2012
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
        <img src={img9} alt="main" className="dog-image" />
      </div>

       <div className="img-spacer">
        <img src={img10} alt="main" className="dog-image" />
      </div>
    

    </div>
  );
}
