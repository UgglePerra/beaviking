import "./comps.css";
import img1 from "../imgs/valkommen/img1.jpeg";
import img2 from "../imgs/valkommen/img2.jpeg";
import img3 from "../imgs/valkommen/img3.jpeg";
import img4 from "../imgs/valkommen/img4.jpeg";

export default function Valkommen() {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Välkommen</h1>
        Välkommen till Be A Viking Kennel och våra underbara Havanaiser som vi delat våra liv med sedan 2002. Syftet är att få fram friska, sociala och vackra Havanaiser som sprider glädje hos sina ägare och familjer. Under åren har vi haft ett fåtal kullar då tid och omsorg om valparna är viktigast för att de ska bli trygga och glada små hundar!
        <br/><br/>
        Välkommen att titta runt på vår hemsida!
        
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
