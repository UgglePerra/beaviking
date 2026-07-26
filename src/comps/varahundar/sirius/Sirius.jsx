import "../../comps.css"
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img_maker from "../../imagemaker/ImageMaker";
import React from "react";
import { useSelector } from "react-redux";


export default function Sirius () {

  const language = useSelector((state) => state.language.language);
                
  const svt1 = "Född 6 juni 2008";

  const ent1 = "Born on June 6, 2008"

  const svt2 = 
  "Sirius var son till Napoleon och föddes på Nationaldagen 2008. Han var den modigaste och mest energiska valpen bland sina syskon och han blev Idas. Efter en busig tonårsperiod mognade han till ett fantastiskt temperament. Då han växte upp med Ida och brorsan Adam var han trygg bland kompisgäng, gängliga killar och de flesta miljöer.";

  const ent2= 
  "English text missing..."

  const svt3 = 
  "Sirius hade en särskild utstrålning och vacker som han var blev han som valp Best In Show på Skaraborgs Wintershow 2008! Innan ett-årsdagen blev han Bäst I rasen, hann med nio CERT och fina placeringar innan han fyllde två då han blev flerfaldig och internationell champion! Två år i rad blev han Sveriges fjärde vinstrikaste Havanais. Framförallt älskade han freestyle!";

  const ent3= 
  "English text missing..."

  const svt4 = 
  "Sirius är mormors morfar till Albus💞";

  const ent4= 
  "English text missing..."

  const svt5 = 
  "Drygt 14 år fick Ida och Sirius tillsammans. Han var Idas största dröm som slog in. De två tillsammans blev oskiljaktiga vänner ❤️❤️";

  const ent5= 
  "English text missing..."

  return (
    <div className="gallery-page">
      <div className="text-over-img">
        <h1>Sirius</h1>
        <h2>C.I.B. DK UCH NO UCH SE UCH 
          <br />
          Honungsmåne Love Me Do</h2>
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
      </div>

      {img_maker(img1)}

      <div className="space-between-imgs"></div>

      {img_maker(img2)}

      <div className="space-between-imgs"></div>

      {img_maker(img3)}

      <div className="space-between-imgs"></div>

      <div className="text-over-img">
        <h3>
        {language === "sv" ? "Sirius 14 år" : "Sirius, 14 years old"}
        </h3>
      </div>

      {img_maker(img4)}

    </div>
  );
}

