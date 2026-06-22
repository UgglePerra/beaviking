import "./comps.css"
import img1 from "../imgs/valpar/img1.jpeg";
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
import img_maker from "./imagemaker/ImageMaker";


export default function Valpar() {
  const images = [simg1, simg2, simg3, simg4, simg5, simg6, simg7, simg8, simg9, simg10, simg11, simg12, simg13];

  return (
    <div className="gallery-page">
      <div className="text-over-img">
        <h1>Valpar</h1>
        Är du intresserad av en valp efter våra hundar så är du välkommen att höra av dig! Vi hälsotestar våra hundar regelbundet och följer SKK's grundregler, avelspolicy samt BBHC's avelsrekommendationer. BBHC har även förslag på frågor att ställa till uppfödare inför planerna på att köpa en valp. Nedan hittar du en länk till dessa.
        <br /><br />
        Vi är naturligtvis angelägna om att lära känna dig, din familj och den omgivande miljön som valpen kommer flytta till. Vi finns tillgängliga för våra valpköpare för frågor, tips och stöd, inte bara under valptiden utan även fortsatt. För att undvika små problem och onödiga veterinärbesök så delar vi gärna med oss av bra tips och erfarenheter. 
        <br /><br />
        Vi vill att ni ska få ett fantastiskt liv tillsammans!
        <br /><br />
        Våra hundar som används i avel är hälsotestade utan anmärkning avseende hjärta, ögon och knän 0/0 enligt rasklubbens riktlinjer. De är utställda med fina resultat vilket visar på utmärkt mentalitet och exteriör.
        <br /><br />


        Anna-Karin och Ida Jernberg

        <br /><br />

        Mail:&nbsp; 
        <span>
          <a href="mailto:anna-karin.jernberg@telia.com">
          anna-karin.jernberg@telia.com
          </a>
        </span>

        <br /><br />
    
        <a href="https://www.bbhc.se/kopa-hund/">
          https://www.bbhc.se/kopa-hund/
        </a>
           
      
       
      </div>

      {img_maker(img1)}

      <div className="space-between-imgs"></div>

      {img_maker(img5)}

      <div className="space-between-imgs"></div>

      {img_maker(img6)}

      <div className="space-between-imgs"></div>

      {img_maker(img7)}

      <div className="space-between-imgs"></div>
      
      {img_maker(img8)}

      <div className="space-between-imgs"></div>

      <div className="dog-image">
        <ImageSliderAuto images={images} />
      </div>

    </div>
  );
}