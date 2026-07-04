//import "../App.css";
//import "./nyheter.css";
import "./comps.css"
import img1 from "../imgs/nyheter/img1.jpeg";
import img2 from "../imgs/nyheter/img2.jpeg";
import img3 from "../imgs/nyheter/img3.jpeg";
import img4 from "../imgs/nyheter/img4.jpeg";
import img5 from "../imgs/nyheter/img5.jpeg";
import img6 from "../imgs/nyheter/img6.jpeg";
import img_maker from "./imagemaker/ImageMaker";


export default function Nyheter() {

  return (
    <div className="gallery-page">
      
      <h1>Nyheter</h1>

      <div className="text-over-img">
        <h3>28 juni 2026</h3>
        Vicke blev andra bästa hane med fin kritik - en mycket regnig förmiddag i Borås.
        <br /><br />
        Bedömning: 2 år, utmärkt storlek. Fina proportioner avseende höjd och längd.
        Välformad skalle, med bra längd i nospartiet. Mörka uttrycksfulla ögon.
        Tillräcklig hals, utmärkt överlinje och kors. Väl utfylld bröstkorg med mycket bra kropp. Passande benstomme. Korrekta vinklar bak med breda välmusklade lår. Rör sig med snabba fria rörelser. Utmärkt pälskvalitet. 
        <br /><br />
        Domare: HIERNER JULIA
      </div>

      {img_maker(img6)}

      <div className="text-under-img"></div>

      <div className="text-over-img">
        <h3>26 april 2026</h3>
        Så stolt och glad över vår fina Minnie som på första försöket blev Champion idag!! ⭐️⭐️⭐️<br />
        Bästa tik med CERT, Nordic Show-certifikat och därmed Svensk och Dansk champion🏆🏆<br />
        💖Minnie💖 SE UCH DK UCH KBHV-25 KBHJV-25 Evan’s Aha Magic Be A Viking
        <br /><br />
        Nordic Dog Show Västerås 26 april 2026<br />
        Domare Attila Czeglédi , Ungern 
      </div>
     
      {img_maker(img1)}

      <div className="text-over-img">
        <h3>1 april 2026</h3>
        Josef och Vicke har blivit omslagspojkar på Rasklubbens tidning för Havanais och Bolognese BBHC❣️
        Glad Påsk🐣🐣🐣
      </div>
      
      {img_maker(img2)}

      <div className="text-over-img">
  
        <h3>28 februari 2026</h3>
        Vi har en ny champion!!!⭐️⭐️⭐️🏆Stolta och glada för vår lilla kille som idag blev svensk och finsk champion första gången i öppen klass 🤩 <br />
        SE UCH FI UCH Tilevis Flitwick Be A Viking💖💖<br />
        Agria Dog Show Jönköping Internationell <br />
        Domare Nina Lönner Andersson
      </div>
  
      {img_maker(img3)}

       
      <div className="text-over-img">
  
        <h3>1 januari 2026</h3>
        Idag fyller han 13 år!! 💖<br />
        Stort grattis älskade Louis❤️❤️❤️
      </div>
    
      {img_maker(img4)}


      
      <div className="text-over-img">
        
        <h2>
          Roskilde Internationell utställning
          <br />
           21 september 2025
         KÖPENHAMNSVINNARE 2025 🏆
        </h2>
        
          Bästa Tik Bästa Junior CERT Jun. CERT Jun. CACIB
          KÖPENHAMNSJUNIORVINNARE 2025 🏆
          <br /><br />
          Domare Hans Almgren
          <br /><br />
          Grattis till Jenny och Jax!!
      </div>

      {img_maker(img5)}

    </div>

  );
}
