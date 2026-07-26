import "./comps.css"
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

  const svt1 = 
  "Vicke blev andra bästa hane med fin kritik - en mycket regnig förmiddag i Borås."

  const ent1 = 
  "English text missing...";

  const svt2 = 
  "Bedömning: 2 år, utmärkt storlek. Fina proportioner avseende höjd och längd. Välformad skalle, med bra längd i nospartiet. Mörka uttrycksfulla ögon. Tillräcklig hals, utmärkt överlinje och kors. Väl utfylld bröstkorg med mycket bra kropp. Passande benstomme. Korrekta vinklar bak med breda välmusklade lår. Rör sig med snabba fria rörelser. Utmärkt pälskvalitet."

  const ent2 = 
  "English text missing...";

  const svt3 = 
  "Domare: HIERNER JULIA"

  const ent3 = 
  "English text missing...";

  const svt4 = 
  "Så stolt och glad över vår fina Minnie som på första försöket blev Champion idag!! ⭐️⭐️⭐️"

  const ent4 = 
  "English text missing...";

  const svt5 = 
  "Bästa tik med CERT, Nordic Show-certifikat och därmed Svensk och Dansk champion🏆🏆"

  const ent5 = 
  "English text missing...";

  const svt6 = 
  "💖Minnie💖 SE UCH DK UCH KBHV-25 KBHJV-25 Evan’s Aha Magic Be A Viking"

  const ent6 = 
  "English text missing...";

  const svt7 = 
  "Nordic Dog Show Västerås 26 april 2026"

  const ent7 = 
  "English text missing...";

  const svt8 = 
  "Domare Attila Czeglédi , Ungern"

  const ent8 = 
  "English text missing...";

  const svt9 = 
  "Josef och Vicke har blivit omslagspojkar på Rasklubbens tidning för Havanais och Bolognese BBHC❣️Glad Påsk🐣🐣🐣"

  const ent9 = 
  "English text missing...";

  const svt10 = 
  "Vi har en ny champion!!!⭐️⭐️⭐️🏆Stolta och glada för vår lilla kille som idag blev svensk och finsk champion första gången i öppen klass 🤩"

  const ent10 = 
  "English text missing...";

  const svt11 = 
  "SE UCH FI UCH Tilevis Flitwick Be A Viking💖💖"

  const ent11 = 
  "English text missing...";

const svt12 = 
  "Agria Dog Show Jönköping Internationell"

  const ent12 = 
  "English text missing...";

  const svt13 = 
    "Domare Nina Lönner Andersson"

  const ent13 = 
  "English text missing...";

  const svt14 = 
    "Idag fyller han 13 år!! 💖"

  const ent14 = 
  "English text missing...";

  const svt15 = 
    "Stort grattis älskade Louis❤️❤️❤️"

  const ent15 = 
  "English text missing...";

  const svt16 = 
    "Roskilde Internationell utställning"

  const ent16 = 
  "English text missing...";

  const svt17 = 
    "21 september 2025 KÖPENHAMNSVINNARE 2025 🏆"

  const ent17 = 
  "English text missing...";

  const svt18 = 
    "Bästa Tik Bästa Junior CERT Jun. CERT Jun. CACIB KÖPENHAMNSJUNIORVINNARE 2025 🏆"

  const ent18 = 
  "English text missing...";

  const svt19 = 
    "Domare Hans Almgren"

  const ent19 = 
  "English text missing...";

  const svt20 = 
    "Grattis till Jenny och Jax!!"

  const ent20 = 
  "English text missing...";

  return (
    <div className="gallery-page">
      
      <h1>
        {language === "sv" ? "Nyheter" : "News"}
      </h1>

      <div className="text-over-img">
        <h3>
          {language === "sv" ? "28 juni 2026" : "28 June, 2026"}
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
          {language === "sv" ? "26 april 2026" : "26 April, 2026"}
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
          {language === "sv" ? "1 april 2026" : "1 April, 2026"}
        </h3>
        {language === "sv" ? svt9 : ent9}
      </div>
      
      {img_maker(img2)}

      <div className="text-over-img">
  
        <h3>
          {language === "sv" ? "28 februari 2026" : "28 February, 2026"}
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
          {language === "sv" ? "1 januari 2026" : "1 January, 2026"}
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
