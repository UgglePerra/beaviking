//import "../App.css";
import "./comps.css";
import img1 from "../imgs/kontakt/img1.jpeg";
import img2 from "../imgs/kontakt/img2.jpeg";

export default function Valkommen() {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Kontakt</h1>
        Skriv till Anna-Karin och Ida Jernberg<br /><br /> 
        Mail: anna-karin.jernberg@telia.com<br /><br />
       
        Välkommen att höra av dig!
      </div>

      <div className="img-spacer">
        <img src={img1} alt="main" className="dog-image" />
      </div>

        <div className="img-spacer">
        <img src={img2} alt="main" className="dog-image" />
      </div>
      
    </div>
  );
}