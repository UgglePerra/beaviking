import "./comps.css";
import img1 from "../imgs/valkommen/img1.jpeg";
import img2 from "../imgs/valkommen/img2.jpeg";
import img3 from "../imgs/valkommen/img3.jpeg";
import img4 from "../imgs/valkommen/img4.jpeg";

import simg1 from "../imgs/valkommen/simg1.jpeg";
import simg2 from "../imgs/valkommen/simg2.jpeg";
import simg3 from "../imgs/valkommen/simg3.jpeg";
import simg5 from "../imgs/valkommen/simg5.jpeg";
import simg6 from "../imgs/valkommen/simg6.jpeg";
import simg7 from "../imgs/valkommen/simg7.jpeg";
import simg8 from "../imgs/valkommen/simg8.jpeg";
import simg9 from "../imgs/valkommen/simg9.jpeg";
import simg10 from "../imgs/valkommen/simg10.jpeg";
import simg11 from "../imgs/valkommen/simg11.jpeg";
import simg12 from "../imgs/valkommen/simg12.jpeg";
import simg13 from "../imgs/valkommen/simg13.jpeg";
import simg14 from "../imgs/valkommen/simg14.jpeg";
import simg15 from "../imgs/valkommen/simg15.jpeg";
import simg16 from "../imgs/valkommen/simg16.jpeg";
import simg17 from "../imgs/valkommen/simg17.jpeg";
import simg18 from "../imgs/valkommen/simg18.jpeg";
import simg19 from "../imgs/valkommen/simg19.jpeg";

import ImageSliderAuto from "./imagesliderauto/ImageSliderAuto";


export default function Valkommen() {
  const images = [simg1, simg2,simg3, simg5, simg6, simg7, simg8, simg9, simg10, simg11, simg12, simg13, simg14, simg15, simg16, simg17, simg18, simg19]
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Välkommen</h1>
        Välkommen till Be A Viking Kennel och våra underbara Havanaiser som vi delat våra liv med sedan 2002. Syftet är att få fram friska, sociala och vackra Havanaiser som sprider glädje hos sina ägare och familjer. Under åren har vi haft ett fåtal kullar då tid och omsorg om valparna är viktigast för att de ska bli trygga och glada små hundar!
        <br/><br/>
        Välkommen att titta runt på vår hemsida!
        
      </div>

      <div className="img-spacer">
        <h2></h2>
        <ImageSliderAuto images={images} />
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
