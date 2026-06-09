import "./comps.css"
import img1 from "../imgs/valpar/img1.jpeg";
import img2 from "../imgs/valpar/img2.jpeg";
import img3 from "../imgs/valpar/img3.jpeg";
import img4 from "../imgs/valpar/img4.jpeg";
import img5 from "../imgs/valpar/img5.jpeg";
import img6 from "../imgs/valpar/img6.jpeg";
import img7 from "../imgs/valpar/img7.jpeg";
import img8 from "../imgs/valpar/img8.jpeg";

import simg1 from "../imgs/valpar/simg1.jpeg";
import simg2 from "../imgs/valpar/simg2.jpeg";
import simg3 from "../imgs/valpar/simg3.jpeg";
import simg4 from "../imgs/valpar/simg4.jpeg";
import simg5 from "../imgs/valpar/simg5.jpeg";
import simg6 from "../imgs/valpar/simg6.jpeg";
import simg7 from "../imgs/valpar/simg7.jpeg";
import simg8 from "../imgs/valpar/simg8.jpeg";
import simg9 from "../imgs/valpar/simg9.jpeg";
import simg10 from "../imgs/valpar/simg10.jpeg";
import simg11 from "../imgs/valpar/simg11.jpeg";
import simg12 from "../imgs/valpar/simg12.jpeg";
import simg13 from "../imgs/valpar/simg13.jpeg";


import ImageSliderAuto from "./imagesliderauto/ImageSliderAuto";


export default function Valpar() {
  const images = [simg1, simg2, simg3, simg4, simg5, simg6, simg7, simg8, simg9, simg10, simg11, simg12, simg13];
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Valpar</h1>
        Är du intresserad av en valp efter våra hundar så är du välkommen att höra av dig! Vi hälsotestar våra hundar regelbundet och följer SKK's grundregler och avelspolicy samt BBHC's avelspolicy. <br /><br />Våra hundar som används i avel är hälsotestade utan anmärkning avseende hjärta, ögon och knän 0/0 enligt rasklubbens riktlinjer. De är utställda med fina resultat vilket visar på utmärkt mentalitet och exteriör.<br /><br />
        Anna-Karin och Ida Jernberg<br />

        Anna-Karin.Jernberg@telia.com
       
      </div>

      <div className="img-spacer">
        <img src={img1} alt="main" className="dog-image" />
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
        <img src={img8} alt="main" className="dog-image" />
      </div>

     
      <div className="img-spacer">
        <h2></h2>
        <ImageSliderAuto images={images} />
      </div>



    </div>
  );
}