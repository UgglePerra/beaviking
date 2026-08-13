import "./comps.css"
import img0 from "../imgs/nyheter/img0.jpeg";
import img1 from "../imgs/nyheter/img1.jpeg";
import img2 from "../imgs/nyheter/img2.jpeg";
import img3 from "../imgs/nyheter/img3.jpeg";
import img4 from "../imgs/nyheter/img4.jpeg";
import img5 from "../imgs/nyheter/img5.jpeg";
import img6 from "../imgs/nyheter/img6.jpeg";
import img_maker from "./imagemaker/ImageMaker";
import React from "react";
import { useSelector } from "react-redux";


export default function Nyheter() {

  const language = useSelector((state) => state.language.language);

  const svtx1 = 
  "Vi väntar valpar!! Efter ett långt uppehåll väntar vi nu äntligen Viking valpar 🥰 Glädjen är stor då kärlek uppstått mellan Minnie och Jax ❤️❤️ Båda har underbara och kärleksfulla temperament samt mycket fina pälsar! De är hälsoundersökta utan anmärkning; ögon, hjärta och patella. Minnie och Jax är svenska och danska Champions samt Københavnsvinder 2025 då de förra hösten blev Bästa Tik och Bästa Hane i Roskilde Danmark❣️";
  
  const svtx2 = "KBHV-25 KBHJV-25 SE UCH DK UCH Evan’s Aha Magic Be A Viking";

  const svtx3 = "FJORDJV-25 KBHJV-25 SE UCH DK UCH Minitrix Double Gold";

  const entx1='We are expecting puppies!! After a long break, we are finally expecting "Viking" puppies 🥰 We are overjoyed that romance has blossomed between Minnie and Jax ❤️❤️ Both have wonderful, loving temperaments and beautiful coats! They have passed all health screenings—eyes, heart, and patella—with excellent results. Minnie and Jax are Swedish and Danish Champions, as well as Copenhagen Winners 2025, having been awarded Best Bitch and Best Dog in Roskilde, Denmark, last autumn ';

  const svt1 = "Vicke blev andra bästa hane med fin kritik - en mycket regnig förmiddag i Borås."

  const ent1 = 
  "Vicke placed second best male with a fine critique – on a very rainy morning in Borås.";

  const svt2 = 
  "Bedömning: 2 år, utmärkt storlek. Fina proportioner avseende höjd och längd. Välformad skalle, med bra längd i nospartiet. Mörka uttrycksfulla ögon. Tillräcklig hals, utmärkt överlinje och kors. Väl utfylld bröstkorg med mycket bra kropp. Passande benstomme. Korrekta vinklar bak med breda välmusklade lår. Rör sig med snabba fria rörelser. Utmärkt pälskvalitet."

  const ent2 = 
  "Evaluation: 2 years old, excellent size. Fine proportions regarding height and length. Well-shaped skull, with good muzzle length. Dark, expressive eyes. Sufficient neck, excellent topline and croup. Well-filled chest with a very good body. Appropriate bone structure. Correct rear angulation with broad, well-muscled thighs. Moves with quick, free movement. Excellent coat quality.";

  const svt3 = 
  "Domare: HIERNER JULIA"

  const ent3 = 
  "Judge: Julia Hierner";

  const svt4 = 
  "Så stolt och glad över vår fina Minnie som på första försöket blev Champion idag!! ⭐️⭐️⭐️"

  const ent4 = 
  "So proud and happy about our lovely Minnie, who became a Champion today on her first attempt!! ⭐️⭐️⭐️";

  const svt5 = 
  "Bästa tik med CERT, Nordic Show-certifikat och därmed Svensk och Dansk champion🏆🏆"

  const ent5 = 
  "Best Bitch with CC, Nordic Show Certificate, and thereby Swedish and Danish Champion 🏆🏆";

  const svt6 = 
  "💖Minnie💖 SE UCH DK UCH KBHV-25 KBHJV-25 Evan’s Aha Magic Be A Viking"

  const ent6 = 
  "💖Minnie💖 SE CH DK CH KBHV-25 KBHJV-25 Evan’s Aha Magic Be A Viking";

  const svt7 = 
  "Nordic Dog Show Västerås 26 april 2026"

  const ent7 = 
  "Nordic Dog Show Västerås, April 26, 2026";

  const svt8 = 
  "Domare Attila Czeglédi , Ungern"

  const ent8 = 
  "Judge: Attila Czeglédi, Hungary";

  const svt9 = 
  "Josef och Vicke har blivit omslagspojkar på Rasklubbens tidning för Havanais och Bolognese BBHC❣️Glad Påsk🐣🐣🐣"

  const ent9 = 
  "Josef and Vicke have become cover boys for the breed club’s magazine for Havanese and Bolognese (BBHC)❣️ Happy Easter🐣🐣🐣";

  const svt10 = 
  "Vi har en ny champion!!!⭐️⭐️⭐️🏆Stolta och glada för vår lilla kille som idag blev svensk och finsk champion första gången i öppen klass 🤩"

  const ent10 = 
  "We have a new champion!!!⭐️⭐️⭐️🏆 So proud and happy for our little guy, who today became a Swedish and Finnish Champion—his first time competing in the Open Class 🤩.";

  const svt11 = 
  "SE UCH FI UCH Tilevis Flitwick Be A Viking💖💖"

  const ent11 = 
  "SE CH FI CH Tilevis Flitwick Be A Viking💖💖";

const svt12 = 
  "Agria Dog Show Jönköping Internationell"

  const ent12 = 
  "Agria Dog Show Jönköping International";

  const svt13 = 
    "Domare Nina Lönner Andersson"

  const ent13 = 
  "Judge: Nina Lönner Andersson";

  const svt14 = 
    "Idag fyller han 13 år!! 💖"

  const ent14 = 
  "Today he turns 13!! 💖";

  const svt15 = 
    "Stort grattis älskade Louis❤️❤️❤️"

  const ent15 = 
  "Happy birthday, beloved Louis❤️❤️❤️";

  const svt16 = 
    "Roskilde Internationell utställning"

  const ent16 = 
  "Roskilde International Show";

  const svt17 = 
    "21 september 2025 KÖPENHAMNSVINNARE 2025 🏆"

  const ent17 = 
  "September 21, 2025 COPENHAGEN WINNER 2025 🏆";

  const svt18 = 
    "Bästa Tik Bästa Junior CERT Jun. CERT Jun. CACIB KÖPENHAMNSJUNIORVINNARE 2025 🏆"

  const ent18 = 
  "Best Bitch, Best Junior, CAC, Junior CAC, Junior CACIB, COPENHAGEN v";

  const svt19 = 
    "Domare Hans Almgren"

  const ent19 = 
  "Judge: Hans Almgren";

  const svt20 = 
    "Grattis till Jenny och Jax!!"

  const ent20 = 
  "Congratulations to Jenny and Jax!!";

  return (
    <div className="gallery-page">
      <>
      <h1>
        {language === "sv" ? "Nyheter" : "News"}
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
        <h3>
          {language === "sv" ? "28 juni 2026" : "June 28, 2026"}
        </h3>
        {language === "sv" ? svt1 : ent1}
        <br /><br />
        {language === "sv" ? svt2 : ent2} 
        <br /><br />
        {language === "sv" ? svt3 : ent3}
      </div>

      {img_maker(img6)}

      <div className="text-under-img"></div>

      <div className="text-over-img">
        <h3>
          {language === "sv" ? "26 april 2026" : "April 26, 2026"}
        </h3>
        {language === "sv" ? svt4 : ent4}
        <br />
        {language === "sv" ? svt5 : ent5}
        <br />
        {language === "sv" ? svt6 : ent6}
        <br /><br />
        {language === "sv" ? svt7 : ent7}
        <br />
        {language === "sv" ? svt8 : ent8}
      </div>
     
      {img_maker(img1)}

      <div className="text-over-img">
        <h3>
          {language === "sv" ? "1 april 2026" : "April 1, 2026"}
        </h3>
        {language === "sv" ? svt9 : ent9}
      </div>
      
      {img_maker(img2)}

      <div className="text-over-img">
  
        <h3>
          {language === "sv" ? "28 februari 2026" : "February 28, 2026"}
        </h3>
        {language === "sv" ? svt10 : ent10}
        <br />
        {language === "sv" ? svt11 : ent11}
        <br />
        {language === "sv" ? svt12 : ent12}
        <br />
        {language === "sv" ? svt13 : ent13}
      </div>
  
      {img_maker(img3)}

       
      <div className="text-over-img">
  
        <h3>
          {language === "sv" ? "1 januari 2026" : "January 1, 2026"}
        </h3>
        {language === "sv" ? svt14 : ent14}
        <br />
        {language === "sv" ? svt15 : ent15}
      </div>
    
      {img_maker(img4)}

      <div className="text-over-img">
        
        <h2>
          {language === "sv" ? svt16 : ent16}
          <br />
           {language === "sv" ? svt17 : ent17}
        </h2>
        
          {language === "sv" ? svt18 : ent18}
          <br /><br />
          {language === "sv" ? svt19 : ent19}
          <br /><br />
          {language === "sv" ? svt20 : ent20}
      </div>

      {img_maker(img5)}

    </div>

  );
}
