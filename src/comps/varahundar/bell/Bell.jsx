import "../../comps.css"
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";
import img_maker from "../../imagemaker/ImageMaker";
import React from "react";
import { useSelector } from "react-redux";


export default function Bell () {

  const language = useSelector((state) => state.language.language);

  const svt1 = 
  "Född 10 september 2013";

  const ent1 = 
  "Born September 10, 2013"

  const svt2 = 
  "Bell är född här hemma tillsammans med sina fem syskon och hon blev den lilla prinsessan som Ida bestämde skulle bli kvar! Och det var ju helt rätt val – för vilka fantastiska minnen hon har gett oss! Inte bara hennes personlighet, roliga karaktär och skönhet utan också en fantastiskt utställningskarriär med resultat som Junior Världs Vinnare 2014 och Europa Vinnare 2015, Norsk Junior Vinnare 2014, championat i de nordiska länderna samt Best In Show SDHK 2017.";

  const ent2 = 
  "Bell was born here at home alongside her five siblings, and she became the little princess whom Ida decided to keep! And that was certainly the right choice—what fantastic memories she has given us! Not only because of her personality, amusing character, and beauty, but also thanks to a magnificent show career featuring titles such as Junior World Winner 2014 and European Winner 2015, Norwegian Junior Winner 2014, championships across the Nordic countries, and Best In Show at the SDHK show in 2017.";
  
  const svt3 = 
  "I september 2026 fyller hon tretton år, hon är fortfarande glad och pigg och springer med ungdomarna i trädgården och på promenad.";

  const ent3 = 
  "She turns thirteen in September 2026; she remains happy and energetic, running around the garden and going for walks with the younger dogs.";
  
  const svt4 = 
  "Bell är hälsotestad; ögon, hjärta, patella utan anmärkning.";

  const ent4 = 
  "Bell has undergone health testing; her eyes, heart, and patellae are all clear.";
  
  const svt5 = 
  "I september 2026 fyller Bell 13 år.";

  const ent5 = 
  "Bell turns 13 in September";
  

  return (
    <div className="gallery-page">
      
      <div className="text-over-img">
        <h1>Bell❤️</h1>
        <h2>EUW-15 JWW-14 NO JV-14 FI UCH NO UCH SE UCH <br />
        Be A Viking Bell Gamgee</h2>
        <br />
        {language === "sv" ? svt1 : ent1}
        <br /><br />
        {language === "sv" ? svt2 : ent2}
        <br /><br />
        {language === "sv" ? svt3: ent3}
        <br /><br />
        {language === "sv" ? svt4: ent4}
      </div>

      {img_maker(img1)}

      <div className="space-between-imgs"></div>

      {img_maker(img2)}
      
      <div className="text-over-img">
          <h3>European Winner 2015</h3>
      </div>

      {img_maker(img3)}

      <div className="space-between-imgs"></div>

      {img_maker(img4)}

      <div className="space-between-imgs"></div>

      <div className="text-over-img">
        {language === "sv" ? svt5: ent5}
      </div>

      {img_maker(img5)}
  
    </div>
  );
}
