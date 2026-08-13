import "./comps.css";
import img0 from "../imgs/valpar/img0.jpeg";
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
  const images = [
    simg1,
    simg2,
    simg3,
    simg4,
    simg5,
    simg6,
    simg7,
    simg8,
    simg9,
    simg10,
    simg11,
    simg12,
    simg13,
  ];

  const language = useSelector((state) => state.language.language);

  const svtx1 = 
  "Vi väntar valpar!! Efter ett långt uppehåll väntar vi nu äntligen Viking valpar 🥰 Glädjen är stor då kärlek uppstått mellan Minnie och Jax ❤️❤️ Båda har underbara och kärleksfulla temperament samt mycket fina pälsar! De är hälsoundersökta utan anmärkning; ögon, hjärta och patella. Minnie och Jax är svenska och danska Champions samt Københavnsvinder 2025 då de förra hösten blev Bästa Tik och Bästa Hane i Roskilde Danmark❣️";
  
  const svtx2 = "KBHV-25 KBHJV-25 SE UCH DK UCH Evan’s Aha Magic Be A Viking";

  const svtx3 = "FJORDJV-25 KBHJV-25 SE UCH DK UCH Minitrix Double Gold";

  const entx1='We are expecting puppies!! After a long break, we are finally expecting "Viking" puppies 🥰 We are overjoyed that romance has blossomed between Minnie and Jax ❤️❤️ Both have wonderful, loving temperaments and beautiful coats! They have passed all health screenings—eyes, heart, and patella—with excellent results. Minnie and Jax are Swedish and Danish Champions, as well as Copenhagen Winners 2025, having been awarded Best Bitch and Best Dog in Roskilde, Denmark, last autumn❣️';

  const svt1 =
    "Är du intresserad av en valp efter våra hundar så är du välkommen att höra av dig! Vi hälsotestar våra hundar regelbundet och följer SKK's grundregler, avelspolicy samt BBHC's avelsrekommendationer. BBHC har även förslag på frågor att ställa till uppfödare inför planerna på att köpa en valp. Nedan hittar du en länk till dessa.";

  const ent1 = "If you are interested in a puppy from our dogs, please feel free to get in touch! We regularly health-test our dogs and adhere to the Swedish Kennel Club’s (SKK) basic rules and breeding policy, as well as the BBHC’s breeding recommendations. The BBHC also provides a list of suggested questions to ask breeders when planning to buy a puppy; you can find a link to these below.";

  const svt2 =
    "Vi är naturligtvis angelägna om att lära känna dig, din familj och den omgivande miljön som valpen kommer flytta till. Vi finns tillgängliga för våra valpköpare för frågor, tips och stöd, inte bara under valptiden utan även fortsatt. För att undvika små problem och onödiga veterinärbesök så delar vi gärna med oss av bra tips och erfarenheter.";

  const ent2 = "We are, of course, keen to get to know you, your family, and the environment where the puppy will be living. We remain available to our puppy buyers for questions, advice, and support—not just during the puppy stage, but long-term. We are happy to share useful tips and our own experiences to help prevent minor issues and avoid unnecessary veterinary visits.";

  const svt3 = "Vi vill att ni ska få ett fantastiskt liv tillsammans!";

  const ent3 = "We want you to have a wonderful life together!";

  const svt4 =
    "Våra hundar som används i avel är hälsotestade utan anmärkning avseende hjärta, ögon och knän 0/0 enligt rasklubbens riktlinjer. De är utställda med fina resultat vilket visar på utmärkt mentalitet och exteriör.";

  const ent4 = "The dogs we use for breeding have passed health screenings with no remarks regarding heart, eyes, and knees (graded 0/0), in accordance with the breed club’s guidelines. They have also achieved excellent results in the show ring, demonstrating outstanding temperament and conformation.";

  const svt5 = "Anna-Karin och Ida Jernberg";

  const ent5 = "Anna-Karin and Ida Jernberg";

  return (
    <div className="gallery-page">

      <>
      <h1>
         {language === "sv" ? "Valpar" : "Puppies"}
      </h1>

      <div className="text-over-img">
        <h3>
          {language === "sv" ? "13 augusti 2026" : "August 13, 2026"}
        </h3>
        {language === "sv" ? svtx1 : entx1}
        <br /><br /><br />
        {language === "sv" ? svtx2 : svtx2} 
        <br />
   
        <span style={{fontSize: "30px"}}>
          ❤️
        </span>
        
        <br />

        {language === "sv" ? svtx3 : svtx3}
      </div>
      </>

      {img_maker(img0)}

      <div className="text-over-img">
       
        {language === "sv" ? svt1 : ent1}
        <br />
        <br />
        {language === "sv" ? svt2 : ent2}
        <br />
        <br />
        {language === "sv" ? svt3 : ent3}
        <br />
        <br />
        {language === "sv" ? svt4 : ent4}
        <br />
        <br />
        {language === "sv" ? svt5 : ent5}
        <br />
        <br />
        Mail:&nbsp;
        <span>
          <a href="mailto:Be.a.viking.kennel@gmail.com">
            Be.a.viking.kennel@gmail.com
          </a>
        </span>
        <br />
        <br />
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
