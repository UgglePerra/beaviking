//import "../App.css";
import "./comps.css";
import img1 from "../imgs/kontakt/img1.jpeg";
import img2 from "../imgs/kontakt/img2.jpeg";

export default function Valkommen() {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Kontakt</h1>
        Anna-Karin och Ida Jernberg<br /><br /> 

    <div>
      Mail:&nbsp; 
        <span>
           <a href="mailto:anna-karin.jernberg@telia.com">
           anna-karin.jernberg@telia.com
        </a>
        </span>
    </div>
        
       

   <br />
       
        Välkommen att kontakta oss om du har frågor!
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