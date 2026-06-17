import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img6.jpeg";
import img6 from "./imgs/img7.jpeg";
import img7 from "./imgs/img8.jpeg";
import img_maker from "../../imagemaker/ImageMaker";


export default function Minnie() {

  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Minnie❤️</h1>
        <h2>SE UCH DK UCH KBHV-25 KBHJV-25 Evan’s Aha Magic Be A Viking</h2>
        <div>
          <br />
          Född 8 april 2024
          <br /><br />
          Minnie är vårt lilla underverk, en gåva från ovan: jo hon kommer från Luleå, Anna och Linnea, Kennel Evan’s Aha där mamma Soda bor. Minnies mormor Vickan, Be A Viking Berylla Boffin, är född här hemma hos oss och hennes mormorsmor Malva, Peach Blossom Blue Temptation var vår första tik som vi hämtade hem från Tyskland. Minnie har fyra av våra hundar bakom sig i stamtavlan.
          <br /><br />
          Men främst är hon en rolig och vacker ung dam, trygg och nyfiken. Så kärleksfull; överöser alla med nospussar. Minnie har utnämnt sig själv till chefen här hemma! Hon har också gjort det bra i utställningsringarna; Köpenhavns Vinnare 2025, Köpenhavns Junior Vinnare 2025, Bäst i Rasen Askersund, ett flertal Bästa tik placeringar och championcertifikat i både Sverige och Danmark.
          <br /><br />
          På första försöket blev hon svensk och dansk champion på den nordiska utställningen i Västerås 26 april 2026!
          <br /><br />
          Minnie är hälsotestad; ögon, hjärta, patella utan anmärkning.
        </div>
      </div>

      {img_maker(img1)}

      {img_maker(img2)}
    
      <div className="text-spacer">
        <h2>Västerås Nordic Dog Show 2026</h2>
        Bästa tik med CERT, Nordic Show-certifikat och därmed Svensk och Dansk champion🏆🏆
        <br />
        Domare: Attila Czegledi, Ungern
      </div>
      
      {img_maker(img3)}

      <div className="text-spacer">
        <h2>Skara Nordic Dog Show 2026</h2>
      
        <strong>Bedömning: </strong>
        &quot;Just turned 2 years, this is one I would not expect to be very long in open class as she excels in breed type and structure, lovely head, excelling in eye and pigment, she is so good to go over, with a quality coat and level topline with good tail carriage, excellent bone and feet, she moves out so well showing off her body proportions and proud head carriage&quot;. 
        <br />
        Domare: Ogden Howard
      </div>

      {img_maker(img4)}

       <div className="text-spacer">
        <h2>My Dog Internationell utställning 
        </h2>
        <h2>5 januari 2026
        </h2>
        Bästa tik 2:a med CERT och R-CACIB!
      </div>
      
      {img_maker(img5)}

      <div className="text-spacer">
        <h2>
          Roskilde Internationell utställning
          <br />
           21 september 2025
         KÖPENHAMNSVINNARE 2025 🏆</h2>
         <br /> 
         Bästa Tik Bästa Junior CERT Jun. CERT Jun. CACIB
        KÖPENHAMNSJUNIORVINNARE 2025 🏆
        <br /><br />
        Domare Hans Almgren
      </div>

      {img_maker(img6)}

      {img_maker(img7)}

    </div>

  );
}
