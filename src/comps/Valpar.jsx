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
import React from "react";
import { useSelector } from "react-redux";


export default function Valpar() {
  const images = [simg1, simg2, simg3, simg4, simg5, simg6, simg7, simg8, simg9, simg10, simg11, simg12, simg13];

  const language = useSelector((state) => state.language.language);

  const svt1 = 
    "Är du intresserad av en valp efter våra hundar så är du välkommen att höra av dig! Vi hälsotestar våra hundar regelbundet och följer SKK's grundregler, avelspolicy samt BBHC's avelsrekommendationer. BBHC har även förslag på frågor att ställa till uppfödare inför planerna på att köpa en valp. Nedan hittar du en länk till dessa."

  const ent1 = 
  "English text missing...";

  const svt2 = 
    "Vi är naturligtvis angelägna om att lära känna dig, din familj och den omgivande miljön som valpen kommer flytta till. Vi finns tillgängliga för våra valpköpare för frågor, tips och stöd, inte bara under valptiden utan även fortsatt. För att undvika små problem och onödiga veterinärbesök så delar vi gärna med oss av bra tips och erfarenheter."

  const ent2 = 
  "English text missing...";

  const svt3 = 
    "Vi vill att ni ska få ett fantastiskt liv tillsammans!"

  const ent3 = 
  "English text missing...";

  const svt4 = 
    "Våra hundar som används i avel är hälsotestade utan anmärkning avseende hjärta, ögon och knän 0/0 enligt rasklubbens riktlinjer. De är utställda med fina resultat vilket visar på utmärkt mentalitet och exteriör."

  const ent4 = 
  "English text missing...";

  const svt5 = 
    "Anna-Karin och Ida Jernberg"

  const ent5 = 
  "English text missing...";



  return (
    <div className="gallery-page">
      <div className="text-over-img">
        <h1>
          {language === "sv" ? "Valpar" : "Puppies"}
        </h1>
        {language === "sv" ? svt1 : ent1}
        <br /><br />
        {language === "sv" ? svt2 : ent2}
        <br /><br />
        {language === "sv" ? svt3 : ent3}
        <br /><br />
        {language === "sv" ? svt4 : ent4}
        <br /><br />
        {language === "sv" ? svt5 : ent5}
        <br /><br />

        Mail:&nbsp; 
        <span>
          <a href="mailto:Be.a.viking.kennel@gmail.com">
          Be.a.viking.kennel@gmail.com
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