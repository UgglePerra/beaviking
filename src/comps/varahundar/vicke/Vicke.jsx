import "../../comps.css"
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";
import img7 from "./imgs/img7.jpeg";
import img8 from "./imgs/img8.jpeg";
import mov2 from "./imgs/mov2.mp4";
import img_maker from "../../imagemaker/ImageMaker";
import React from "react";
import { useSelector } from "react-redux";


export default function Vicke() {

  const language = useSelector((state) => state.language.language);
  
  const svt1 = 
  "Född 30 januari 2024";

  const ent1 = 
  "Born on January 30, 2024"

  const svt2 = 
  "Vicke är född i Skåne hos Vivianne och Virginia, Tilevis kennel. Mamma är Bichavas Scilla och pappa vår älskade Skystar's Louis. Det var bara nödvändigt att sonen skulle bli en Göteborgare! Tredje generationen Viking med samma ögon som sin farfar; lyhörd, smart och en ordningsman. Ställer tjejerna till det så kommer Vicke direkt och skvallrar! Han är väldigt observant och har mängder av energi, lekfull och duktig med nosen. Vi har tränat olika aktiviteter med honom; Nosework är hans favorit.";

  const ent2 = 
  "English text missing...";

  const svt3 = 
  "Sin utställningskarriär började Vicke på bästa sätt med att bli Best In Show Valp på SDHK i Vänersborg fyra månader gammal! Det upprepade han en månad senare i Borås då han även där blev Best In Show Valp.";

  const ent3 = 
  "English text missing...";

  const svt4 = 
  "På sin första utställning efter två-årsdagen gick Vicke in i ringen och blev svensk och finsk champion!! Han har blivit Bäst I Rasen, BIS 2 Unghund SDHK Gimo, har ett flertal Bästa hane-placeringar och championcertifikat. På World Dog Show i Helsingfors 2025 och WDS CIRCUIT tog han championcertifikaten båda dagarna!";

  const ent4 = 
  "English text missing...";

  const svt5 = 
  "Vicke är hälsotestad; ögon, hjärta, patella utan anmärkning.";

  const ent5 = 
  "English text missing...";

  const svt6 = 
  "Bedömning: Snygg hane, utmärkta proportioner, vackert huvud, mörka vackra ögon, snygg överlinje, utmärkt förbröst, ngt framskjuten skuldra, bra framben, passande vinklar, välformad bröstkorg, snygg svans, vacker välskött päls, rör sig med härlig stil och energi, välpresenterad.";

  const ent6 = 
  "English text missing...";

  const svt7 = 
  "Domare: Nina Lönner Andersson";

  const ent7 = 
  "English text missing...";

  const svt8 = 
  "Bästa Hane 2 Reserv Nordic Show Cert";

  const ent8 = 
  "English text missing...";

  const svt9 = 
  "Bedömning: 2 år, utmärkt storlek. Fina proportioner avseende höjd och längd.Välformad skalle, med bra längd i nospartiet. Mörka uttrycksfulla ögon. Tillräcklig hals, utmärkt överlinje och kors. Väl utfylld bröstkorg med mycket bra kropp. Passande benstomme. Korrekta vinklar bak med breda välmusklade lår. Rör sig med snabba fria rörelser. Utmärkt pälskvalitet. ";

  const ent9 = 
  "English text missing...";

  const svt10 = 
  "Domare: HIERNER JULIA";

  const ent10 = 
  "English text missing...";

  const svt11 = 
  "Bedömning: 18 månader, utmärkt storlek. En välutvecklad ung hane för sin ålder. Goda vinklar. Bra längd och stark bröstkorg. Något brant kors. Bra päls. Välformat, maskulint huvud. Vackra, mörka stora ögon.Bra, fyllig nos. Rör sig effektivt med bra steglängd. Vacker svans i rörelse.";

  const ent11 = 
  "English text missing...";

  const svt12 = 
  "Domare: Kajsa Gold, Finland";

  const ent12 = 
  "English text missing...";

  const svt13 = 
  "Vicke och Ida på World Dog Show Helsinki 2025!!";

  const ent13 = 
  "English text missing...";

  const svt14 = 
  "Best in Show 2 Unghund";

  const ent14 = 
  "English text missing...";

  const svt15 = 
  "Bedömning: Mycket fin siluett. Utmärkta proportioner och balans. Utmärkt storlek. Maskulint uttryck. Korrekt skalle. Mörka, fina välformade ögon. Fin längd på nospartiet. Snygg hals, överlinje och svans. Välvinklad och välkroppad. Utmärkt pälskvalitet.Typiska, frapperande rörelser. En lovande unghund.";

  const ent15 = 
  "English text missing...";

  const svt16 = 
  "Domare: Marcus Gisslén";

  const ent16 = 
  "English text missing...";

  const svt17 = 
  "Bästa hane 2 med CERT";

  const ent17 = 
  "English text missing...";

  const svt18 = 
  "Bedömning: Utmärkt typ, maskulin hane av bra storlek och goda proportioner.Utrycksfulla ögon, härligt pigment, bra hals och överlinje. Välkroppad och välmusklad. Välvinklad, rör sig med lätt och alert steg och välburen svans. Utmärkt pälskvalitet som är välpresenterad.";

  const ent18 = 
  "English text missing...";

  const svt19 = 
  "Domare: Joel Lantz";

  const ent19 = 
  "English text missing...";




  return (
    <>
      <div className="gallery-page">
        <div className="text-over-img">
          <h1>Vicke❤️</h1>
          <h2>SE UCH FI UCH 
            <br />
            Tilevis Flitwick Be A Viking</h2>
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
          </div>
        </div>

        <div className="text-over-img">
          <h3>Agria Dog Show Jönköping Internationell 
            <br />
            {language === "sv" ? "28 februari 2026" : "28 February, 2026"}
            <br />
            {language === "sv" ? "Svensk och finsk champion!!" : "Swedish and Finnish Champion!!"}
            </h3>
        </div>

        {img_maker(img1)}

        <div className="text-under-img">
          {language === "sv" ? svt6 : ent6}
          <br /><br />
          {language === "sv" ? svt7 : ent7}
        </div>

        <div className="space-between-imgs"></div>

        <video controls autoPlay loop muted playsInline>
          <source src={mov2} type="video/mp4" />
        </video>

        <div className="space-between-imgs"></div>

        <div className="text-over-img">
          <h3>Nordic Dog Show Borås 2026
          <br />
          {language === "sv" ? svt8 : ent8}
          </h3>
        </div>

        {img_maker(img8)}

        <div className="text-under-img"></div>
          {language === "sv" ? svt9 : ent9} 
          <br /><br />
          {language === "sv" ? svt10 : ent10}
      
       <div className="space-between-imgs"></div>

        {img_maker(img2)}

        <div className="text-over-img">
          <h3>World Dog Show Circuit 
            <br />
            {language === "sv" ? "Helsingfors augusti 2025" : "Helsinki August, 2025"}
            <br />
            {language === "sv" ? "Finskt Championcertifikat" : "Finnish Champion Certificate"}
            </h3>
        </div>

        {img_maker(img3)}

        <div className="text-under-img">
          {language === "sv" ? svt11 : ent11}
          <br /><br />
          {language === "sv" ? svt12 : ent12}
        </div>

        <div className="text-over-img">
          <h3>World Dog Show 
            <br />
            {language === "sv" ? "Helsingfors augusti 2025" : "Helsinki August, 2025"}
            <br />
            {language === "sv" ? "Finskt Championcertifikat" : "Finnish Champion Certificate"}
            </h3>
        </div>
        
        {img_maker(img7)}

        <div className="text-over-img">
          <h3>
            {language === "sv" ? svt13 : ent13}
          </h3>
        </div>

        {img_maker(img4)}

        
        <div className="text-over-img">
          <h3>
          SDHK National Dog Show
          <br />
          {language === "sv" ? "Gimo september 2025" : "Gimo September, 2025"}
          <br />
          {language === "sv" ? svt14 : ent14}
          </h3>
          {language === "sv" ? svt15 : ent15}
          <br /><br />
          {language === "sv" ? svt16 : ent16}
          <br /><br />
          <h3> 
          SKK National Dog Show
          <br />
          {language === "sv" ? "Ljungskile augusti 2025" : "Ljungskile August, 2025"}
          <br />
          {language === "sv" ? svt17 : ent17}
          </h3>
          {language === "sv" ? svt18 : ent18}
          <br /><br />
          {language === "sv" ? svt19 : ent19}
        </div>

        <div className="text-over-img">
          <h3>
             {language === "sv" ? "Svensk och Finsk Champion!!" : "Swedish and Finnish Champion!!"}
            <br />
            Agria Dog Show Jönköping Internationell
            <br />
            {language === "sv" ? "28 februari 2026" : "28 February, 2026"}
            </h3>
        </div>

        {img_maker(img5)}

      </div>

     

    </>
  );
}
