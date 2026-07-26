import "../../comps.css"
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img_maker from "../../imagemaker/ImageMaker";
import React from "react";
import { useSelector } from "react-redux";


export default function Pluto () {

  const language = useSelector((state) => state.language.language);
                  
  const svt1 = "Född 3 juli 2002";

  const ent1 = "Born on July 3, 2002"

  const svt2 = 
  "Pluto var vår första Havanais och han var världens bästa sällskapshund! Han var snäll, klok och väldigt sällskaplig samt duktig på hundspråket. Han var med oss på allt ifrån båtturer, skidåkning, joggingrundor, fjällvandring restaurangbesök och mycket mer. Vi ställde ut honom i juniorklass med bra kritik, han var välbyggd och välmusklad, men han trivdes inte på utställningar. Han ville hellre springa över klipporna eller vara hemma och mysa.";

  const ent2= 
  "English text missing..."

  const svt3 = 
  "Vi gick olika kurser med honom i vardagslydnad samt även agility där han var duktig på att springa i tunnlar och på spångar. Han var klurig, gillade att få små övningar att lösa och hade ett stort ordförråd, dvs förstod många ord. Men han tog också kommandot om ingen annan gjorde det. Hans röda overall med reflexränder tyckte han inte om! Bättre var det med stickade tröjor!";

  const ent3= 
  "English text missing..."

  return (
    <div className="gallery-page">
      <div className="text-over-img">
        <h1>Pluto</h1>
        <br />
       {language === "sv" ? svt1 : ent1}
        <br /><br />
        {language === "sv" ? svt2 : ent2}
        <br /><br />
        {language === "sv" ? svt3 : ent3}
      </div>

      {img_maker(img1)}

      <div className="space-between-imgs"></div>
                        
      {img_maker(img2)}
     
    </div>
  );
}
