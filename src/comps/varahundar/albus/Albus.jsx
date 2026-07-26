import "../../comps.css"
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img_maker from "../../imagemaker/ImageMaker";
import React from "react";
import { useSelector } from "react-redux";


export default function Albus () {

  const language = useSelector((state) => state.language.language);
      
  const svt1 = 
  "Född 17 februari 2023";

  const ent1 = 
  "Born on February 17, 2023"

  const svt2 = 
  "Albus är Idas hund och är född hos Virginia och Vivianne, Tilevis kennel i Skåne. När längtan efter en ny hund blev för stor då Sirius lämnade oss efter drygt 14 år blev det Albus! Hans mamma Petunia har våra linjer bakom sig, hans pappa är en import från Polen.";

  const ent2 = 
  "English text missing..."

  const svt3 = 
  "Han är en riktig myspropp enligt Ida, ligger gärna kvar i sängen när hon gått upp. Älskar sina leksaker och bjuder gärna in till lek. Ida har gått kurs med honom i Nosework vilket han tycker om. Då Albus och Ida bor i stan passar det bra att vara kl";

  const ent3 = 
  "English text missing..."

  return (
    <div className="gallery-page">
      
      <div className="text-over-img">
        <h1>Albus</h1>
        <h2>Tilevis Eddie be A Viking</h2>
        <div>
          <br />
          {language === "sv" ? svt1 : ent1}
          <br /><br />
          {language === "sv" ? svt2 : ent2}
          <br /><br />
          {language === "sv" ? svt3 : ent3}
        </div>
      </div>

      {img_maker(img1)}

      <div className="space-between-imgs"></div>

      {img_maker(img2)}

      <div className="space-between-imgs"></div>
      
      {img_maker(img3)}
     
    </div>
  );
}