import "../../comps.css"
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";
import img6 from "./imgs/img6.jpeg";
import img7 from "./imgs/img7.jpeg";
import img8 from "./imgs/img8.jpeg";
import img_maker from "../../imagemaker/ImageMaker";
import React from "react";
import { useSelector } from "react-redux";


export default function Malva() {

  const language = useSelector((state) => state.language.language);
              
  const svt1 = "Född 14 februari 2010";

  const ent1 = "Born February 14, 2010"

  const svt2 = 
  "Malva, vår lilla blomma, efter en nervpirrande resa kom du med oss hem från Blue Temptation söder om Berlin. Din mamma, din pappa och din mormor var så vackra och glada Havanaiser - så det kändes som den bästa starten på vår egen uppfödning. Från den stunden du kom i min famn var det du och jag. Du växte till att bli en strålande vacker dam. Med din glädje och energi ledde du killarna på hemmaplan!! På jobbet charmade du alla som du träffade.";

  const ent2= 
  "Malva, our little flower—after a nerve-wracking journey, you came home with us from Blue Temptation, south of Berlin. Your mother, father, and grandmother were such beautiful, happy Havanese—it felt like the perfect start to our own breeding program. From the moment you were in my arms, it was just you and me. You grew into a stunningly beautiful lady. With your joy and energy, you led the boys at home!! At work, you charmed everyone you met."

  const svt3 = 
  "Ja, även domarna blev charmade! Strax efter din två-årsdag blev du flerfaldig champion och efter tre-årsdagen internationell champion!! Best In Show Unghund på SDHK och Bäst i Rasen på Norges största utställning med över 50 tävlande Havanaiser! Du blev mamma till våra två första valpkullar - och vilka fantastiska valpar du gav oss 💖💖💖";

  const ent3= 
  "Yes, even the judges were charmed! Shortly after your second birthday, you became a multiple champion, and after your third, an International Champion!! You won Best in Show (Junior/Intermediate) at the SDHK show and Best of Breed at Norway’s largest show, competing against over 50 other Havanese! You became the mother of our first two litters—and what amazing puppies you gave us 💖💖💖"

  const svt4 = 
  "Tack för allt Älskade Malva - saknar dig för alltid ♥️♥️♥️";

  const ent4= 
  "Thank you for everything, beloved Malva — we miss you forever ♥️♥️♥️"

  return (
    <div className="gallery-page">
      <div className="text-over-img">
        <h1>Malva</h1>
        <h2>C.I.B. DK CH NO CH SE CH
          <br />
          Peach Blossom Blue Temptation</h2>
        <br />
        {language === "sv" ? svt1 : ent1}
        <br /><br />
       {language === "sv" ? svt2 : ent2}
        <br /><br />
        {language === "sv" ? svt3 : ent3}
        <br /><br />
        {language === "sv" ? svt4 : ent4}
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

      {img_maker(img6)}

       <div className="space-between-imgs"></div>

      {img_maker(img7)}

       <div className="space-between-imgs"></div>

      {img_maker(img8)}
      
    </div>
  );
}
