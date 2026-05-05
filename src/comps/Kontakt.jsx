//import "../App.css";
import "./comps.css";
import img1 from "../imgs/kontakt/img1.jpeg";

export default function Valkommen() {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Kontakt</h1>
        Anna-Karin Jernberg<br /><br /> 
        Mail: anna-karin.jernberg@telia.com<br /><br />
        Tfn: 0700-825 810<br /><br /><br /><br />
        Välkommen att höra av dig!
      </div>

      <div className="img-spacer">
        <img src={img1} alt="main" className="dog-image" />
      </div>
      
    </div>
  );
}