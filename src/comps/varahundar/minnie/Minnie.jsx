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


export default function Minnie() {

  return (
    <div className="gallery-page">
      <div className="text-over-img">
        <h1>Minnie❤️</h1>
        <h2>SE UCH DK UCH KBHV-25 KBHJV-25 Evan’s Aha Magic Be A Viking</h2>
        <br />
        Född 8 april 2024
        <br /><br />
        Minnie är vårt lilla underverk, en gåva från ovan: jo hon kommer från Luleå, Anna och Linnea, Kennel Evan’s Aha där mamma Soda bor. Pappa heter Texas. Minnies mormor Vickan, Be A Viking Berylla Boffin, är född här hemma hos oss och hennes mormorsmor Malva, Peach Blossom Blue Temptation var vår första tik som vi hämtade hem från Tyskland. Minnie har fyra av våra hundar bakom sig i stamtavlan.
        <br /><br />
        Men främst är hon en rolig och vacker ung dam, trygg och nyfiken. Så kärleksfull; överöser alla med nospussar. Minnie har utnämnt sig själv till chefen här hemma! Hon har också gjort det bra i utställningsringarna; Köpenhavns Vinnare 2025, Köpenhavns Junior Vinnare 2025, Bäst i Rasen Askersund, ett flertal Bästa tik placeringar och championcertifikat i både Sverige och Danmark.
        <br /><br />
        På första försöket blev hon svensk och dansk champion på den nordiska utställningen i Västerås 26 april 2026!

        <br /><br />
        Minnie är hälsotestad; ögon, hjärta, patella utan anmärkning.
      </div>

      {img_maker(img1)}

      <div className="space-between-imgs"></div>
    
      <div className="text-over-img">
        <h2>Västerås Nordic Dog Show 2026<br />
        Bästa tik med CERT, Nordic Show-certifikat och därmed Svensk och Dansk champion🏆🏆</h2>
      </div>

      {img_maker(img2)}

      <div className="text-under-img">
        Bedömning: Very feminine tip top bitch, lovely expression her muzzle should be a touch stronger, lovely neck goes inte well laid shoulder excellent forechest, strong front legs set well under the body, well spring ribs lovely topline and tailset. well let down hook, exellent coat texture and presentation, excellent reach and drive, lovely temperament 
        <br /><br />
        Domare: ATTILA CZEGLÉDI, Ungern
      </div>

       <div className="text-over-img">
        <h2>My Dog Internationell utställning 
        5 januari 2026
        <br />
        Bästa tik 2 med CERT och R-CACIB! </h2>
      </div>

      {img_maker(img3)}

      <div className="text-under-img">
        Bedömning: Utmärkt typ och storlek. Ytterst feminin. Utmärkta proportioner och mycket välbyggd med korrekta vinklar, bröstkorg. Härlig topline. Utmärkt svans. Mycket tilltalade huvud och korrekt skalle och korrekta ögon och pigment. Utmärkt päls. Rör sig en aning trångt bak. Utmärkt drive från sidan. Härlig attityd. 
        <br /><br />
        Domare: KUMPUMÄKI VELI-PEKKA
      </div>


      <div className="text-over-img">
        <h2>
          Roskilde International Dog Show 2025
          <br /> 
         Bästa Tik med CERT 
         <br /> 
         KÖPENHAMNSVINNARE 2025 🏆
         <br /> 
         Bästa Junior Jun. CERT Jun. CACIB
        KÖPENHAMNSJUNIORVINNARE 2025 🏆</h2>
        <br />
        Domare Hans Almgren
      </div>

      {img_maker(img4)}

      <div className="text-under-img">
        Bedömning: mycket feminit udtryk, 17 mdr, langt næseparti, mørke brune velfyldte øjne, dyb sort pigment, bær hoved stolt, skal have lidt mere volume i fremdel af brystkurven, langt let sluttende kors, udm struktureret pels, lang svans som hun bære udm, lidt mere volume i kroppen, så bliver det endnu bedre, men hun har en mycket høj kvalitet, trevlige racedetaljer.
        <br /><br />
        Domare Hans Almgren, Sverige
      </div>

      <div className="text-over-img">
        <h2>
          Askersund SKK National Dog Show 2025
          <br />
          Bäst i Rasen Bästa Tik med Certifikat!
        </h2>
      </div>

      {img_maker(img5)}

      <div className="text-under-img">
        Bedömning: 16 månader, uttrycksfull tik av utmärkt typ utmärkta proportioner, välutvecklad i sin kropp, utmärkt längd i bäde bröst och bröstkorg, feminint tilltalande huvud, bra pigment, välburna öron, bra bett, bra rygg. lätt välvd länd, utmärkta vinklar rör sig med bäde spänst och längd, bra pälskvalité 
        <br /><br />
        Domare: ÖSTLUND HOLMSTEN MARITHA
      </div>

      <div className="text-over-img">
        <h2>Skara Nordic Dog Show 2026
          <br />
          Bästa Tik 3 Öppen Kl 1 med CK
        </h2>
      </div>

      {img_maker(img6)}

      <div className="text-under-img">
        Bedömning:
        &quot;Just turned 2 years, this is one I would not expect to be very long in open class as she excels in breed type and structure, lovely head, excelling in eye and pigment, she is so good to go over, with a quality coat and level topline with good tail carriage, excellent bone and feet, she moves out so well showing off her body proportions and proud head carriage&quot;. 
        <br /><br />
        Domare: Ogden Howard
      </div>

      {img_maker(img7)}

      <div className="space-between-imgs"></div>

      {img_maker(img8)}

    </div>

  );
}
