//import "../App.css";
import "./comps.css";
import img1 from "../imgs/kontakt/img1.jpeg";
import img2 from "../imgs/kontakt/img2.jpeg";
import img_maker from "./imagemaker/ImageMaker";


export default function Valkommen() {

  return (
    <div className="gallery-page">
      <div className="text-over-img">
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

      {img_maker(img1)}

      <div className="space-between-imgs"></div>

                        
      {img_maker(img2)}
      
    </div>
  );
}