import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";
import img6 from "./imgs/img6.jpeg";
import img_maker from "../../imagemaker/ImageMaker";
import React from "react";
import { useSelector } from "react-redux";


export default function Louis () {

  const language = useSelector((state) => state.language.language);
        
  const svt1 = "Född 1 januari 2013";

  const ent1 = "Born on January 1, 2013"

  const svt2 = 
  "Louis var en dröm som blev sann. Nästan 100 mil från Göteborg utanför Trondheim i Norge bodde en av de vackraste Havanais tikar jag mött, Skystar’s Alicia. Hon och Napoleon Viking var ett så vackert par, samma mjuka sobelfärger och teckningar.";

  const ent2 = 
  "English text missing..."

  const svt3 = 
  "Så en solig vårvinterdag i början av 2013 flög jag över de snöklädda bergen vid Trollheimen Fjell och träffade deras valpar som fötts på nyårsnatten. Med hem på flyget var Louis, en liten vacker prins med ett ljuvligt temperament ❤️❤️";

  const ent3 = 
  "English text missing..."

  const svt4 = 
  "På Västsvenska Kennelklubbens utställning i Backamo 2013 blev Louis Best In Show Valp!! Därefter Svensk Juniorvinnare och Dansk Juniorvinnare samt dubbla championat :)";

  const ent4 = 
  "English text missing..."

  const svt5 = 
  "Louis har lämnat mycket vackra och vinstrika avkommor - och han har gett oss vår vackra Vicke♥️";

  const ent5 = 
  "English text missing..."

  const svt6 = 
  "Louis är hälsotestad; ögon, hjärta, patella utan anmärkning.";

  const ent6 = 
  "English text missing..."

  const svt7 = 
  "1 januari 2026 fyllde Louis 13 år.";

  const ent7 = 
  "English text missing..."

  return (
    <div className="gallery-page">
      <div className="text-over-img">
        <h1>Louis </h1>
        <h2>SE JV-13 DK JV-13 SE UCH DK UCH 
          <br />
          Skystar&apos;s Louis</h2>
        <div>
          <br />
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
          {language === "sv" ? svt6 : ent6}
        </div>
      </div>
      
      {img_maker(img1)}

      <div className="space-between-imgs"></div>
            
      {img_maker(img2)}

      <div className="space-between-imgs"></div>
            
      {img_maker(img3)}

      <div className="space-between-imgs"></div>

      {img_maker(img4)}

      <div className="space-between-imgs"></div>

      {img_maker(img5)}

      <div className="space-between-imgs"></div>

      <div className="text-over-img">
        {language === "sv" ? svt7 : ent7}
      </div>

       {img_maker(img6)}

    </div>
  );
}
