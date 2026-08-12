import "../../comps.css"
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";
import img6 from "./imgs/img6.jpeg";
import img7 from "./imgs/img7.jpeg";
import img_maker from "../../imagemaker/ImageMaker";
import React from "react";
import { useSelector } from "react-redux";


export default function Napoleon () {

  const language = useSelector((state) => state.language.language);
          
  const svt1 = "Född 23 februari 2006";

  const ent1 = "Born on February 23, 2006"

  const svt2 = 
  "Första gången jag höll Napoleon i mina händer tittade hans mörka ögon klart in i mina ögon och sedan somnade han tryggt, han var då fem veckor. Där började en kärlek växa så stor och innerlig, ett samförstånd mellan hund och människa med ett djup som är svårt att beskriva.";

  const ent2 = 
  "The first time I held Napoleon in my arms, his dark eyes looked clearly into mine, and then he fell asleep securely; he was five weeks old at the time. That marked the beginning of a love that grew so vast and profound—a bond between dog and human with a depth difficult to describe."

  const svt3 = 
  "Han tog oss ut på en resa fylld av äventyr, glädje, lycka och lärdomar. Hans personlighet var så stor, trygg, tillitsfull, lyhörd, han ville alltid samarbeta och göra oss glada. Hans blick ”jag är med matte” sa mer än tusen ord. Att se honom springa fri över klipporna vid havet var högsta glädjen.";

  const ent3 = 
  'He took us on a journey filled with adventure, joy, happiness, and lessons learned. His personality was magnificent—secure, trusting, and responsive; he always wanted to cooperate and make us happy. The look in his eyes—"I’m with you, Mom"—spoke volumes. Watching him run free across the seaside cliffs was pure joy.'

  const svt4 = 
  "Hans vilja att samarbeta och naturligtvis hans tygga, starka mentalitet gjorde att han nådde mycket stora framgångar i utställningsringarna med ett flertal Best In Show, Best In Group, Bäst i Rasen, Mestvinnande Havanais tre år i rad, Best In Show på Rasspecialen och Vinnartitlar!";

  const ent4 = 
  "His willingness to cooperate and, of course, his secure, strong temperament led to immense success in the show ring, including multiple Best in Show and Best in Group wins, Best of Breed titles, Top-Winning Havanese three years running, Best in Show at the breed specialty, and various Winner titles!"

  const svt5 = 
  "Viktigast av allt var lyckan att leva tillsammans med Nappe varje dag. Saknad för alltid ♥️";

  const ent5 = 
  "EMost important of all was the happiness of living with Nappe every day. Missed forever ♥️"

  const svt6 = 
  "Han var en på miljonen ♥️♥️♥️";

  const ent6 = 
  "He was one in a Million ♥️♥️♥️"

  return (
    <div className="gallery-page">
      <div className="text-over-img">
        <h1>Napoleon Viking</h1>
        <h2>C.I.B. SE V-12 NORD V-10 NO V-12 NO V-08 SE CH DK CH NO CH
          <br />
          NORD CH FI CH
          <br />
          Buenazo&apos;s Viking</h2>
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

      {img_maker(img1)}

      <div className="space-between-imgs"></div>
    
      {img_maker(img2)}
      
      <div className="text-over-img">
          <h3>Best In Show SDHK</h3>
      </div>

      {img_maker(img3)}

      <div className="space-between-imgs"></div>
    
      {img_maker(img4)}

      <div className="space-between-imgs"></div>

      {img_maker(img5)}

      <div className="text-over-img">
        
      </div>
      
      {img_maker(img6)}

      <div className="text-over-img">
        <h3> Best In Show SDHK Eket 2012</h3>
      </div>
      
      {img_maker(img7)}

    </div>
  );
}
