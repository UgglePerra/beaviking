import "../../comps.css";
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

export default function Minnie() {
  const language = useSelector((state) => state.language.language);

  const svt1 = "Född 8 april 2024";

  const ent1 = "Born on April 8, 2024";

  const svt2 =
    "Minnie är vårt lilla underverk, en gåva från ovan: jo hon kommer från Luleå, Anna och Linnea, Kennel Evan’s Aha där mamma Soda bor. Pappa heter Texas från Candygolds. Minnies mormor Vickan, Be A Viking Berylla Boffin, är född här hemma hos oss och hennes mormorsmor Malva, Peach Blossom Blue Temptation var vår första tik som vi hämtade hem från Tyskland. Minnie har fyra av våra hundar bakom sig i stamtavlan.";

  const ent2 = "English text missing...";

  const svt3 =
    "Men främst är hon en rolig och vacker ung dam, trygg och nyfiken. Så kärleksfull; överöser alla med nospussar. Minnie har utnämnt sig själv till chefen här hemma! Hon har också gjort det bra i utställningsringarna; Köpenhavns Vinnare 2025, Köpenhavns Junior Vinnare 2025, Bäst i Rasen Askersund, ett flertal Bästa tik placeringar och championcertifikat i både Sverige och Danmark.";

  const ent3 = "English text missing...";

  const svt4 =
    "På första försöket blev hon svensk och dansk champion på den nordiska utställningen i Västerås 26 april 2026!";

  const ent4 = "English text missing...";

  const svt5 = "Minnie är hälsotestad; ögon, hjärta, patella utan anmärkning.";

  const ent5 = "English text missing...";

  const svt6 =
    "Bästa tik med CERT, Nordic Show-certifikat och därmed Svensk och Dansk champion🏆🏆";

  const ent6 = "English text missing...";

  const svt7 =
    "Bedömning: Very feminine tip top bitch, lovely expression her muzzle should be a touch stronger, lovely neck goes inte well laid shoulder excellent forechest, strong front legs set well under the body, well spring ribs lovely topline and tailset. well let down hook, exellent coat texture and presentation, excellent reach and drive, lovely temperament.";

  const ent7 = "English text missing...";

  const svt8 = "Domare: ATTILA CZEGLÉDI, Ungern";

  const ent8 = "English text missing...";

  const svt9 = "My Dog Internationell utställning 5 januari 2026";

  const ent9 = "English text missing...";

  const svt10 = "Bästa tik 2 med CERT och R-CACIB! ";

  const ent10 = "English text missing...";

  const svt11 =
    "Bedömning: Utmärkt typ och storlek. Ytterst feminin. Utmärkta proportioner och mycket välbyggd med korrekta vinklar, bröstkorg. Härlig topline. Utmärkt svans. Mycket tilltalade huvud och korrekt skalle och korrekta ögon och pigment. Utmärkt päls. Rör sig en aning trångt bak. Utmärkt drive från sidan. Härlig attityd. ";

  const ent11 = "English text missing...";

  const svt12 = "Domare: KUMPUMÄKI VELI-PEKKA";

  const ent12 = "English text missing...";

  const svt13 = "Bästa Tik med CERT ";

  const ent13 = "English text missing...";

  const svt14 = "KÖPENHAMNSVINNARE 2025 🏆";

  const ent14 = "English text missing...";

  const svt15 =
    "Bästa Junior Jun. CERT Jun. CACIB KÖPENHAMNSJUNIORVINNARE 2025 🏆";

  const ent15 = "English text missing...";

  const svt16 =
    "Bedömning: mycket feminit udtryk, 17 mdr, langt næseparti, mørke brune velfyldte øjne, dyb sort pigment, bær hoved stolt, skal have lidt mere volume i fremdel af brystkurven, langt let sluttende kors, udm struktureret pels, lang svans som hun bære udm, lidt mere volume i kroppen, så bliver det endnu bedre, men hun har en mycket høj kvalitet, trevlige racedetaljer.";

  const ent16 = "English text missing...";

  const svt17 = "Domare: Hans Almgren, Sverige";

  const ent17 = "English text missing...";

  const svt18 = "Bäst i Rasen Bästa Tik med Certifikat!";

  const ent18 = "English text missing...";

  const svt19 =
    "Bedömning: 16 månader, uttrycksfull tik av utmärkt typ utmärkta proportioner, välutvecklad i sin kropp, utmärkt längd i bäde bröst och bröstkorg, feminint tilltalande huvud, bra pigment, välburna öron, bra bett, bra rygg. lätt välvd länd, utmärkta vinklar rör sig med bäde spänst och längd, bra pälskvalité.";

  const ent19 = "English text missing...";

  const svt20 = "Domare: ÖSTLUND HOLMSTEN MARITHA";

  const ent20 = "English text missing...";

  const svt21 = "Bästa Tik 3 Öppen Kl 1 med CK";

  const ent21 = "English text missing...";

  const svt22 =
    'Bedömning: "Just turned 2 years, this is one I would not expect to be very long in open class as she excels in breed type and structure, lovely head, excelling in eye and pigment, she is so good to go over, with a quality coat and level topline with good tail carriage, excellent bone and feet, she moves out so well showing off her body proportions and proud head carriage".';

  const ent22 = "English text missing...";

  const svt23 = "Domare: Ogden Howard";

  const ent23 = "English text missing...";

  return (
    <div className="gallery-page">
      <div className="text-over-img">
        <h1>Minnie❤️</h1>
        <h2>
          SE UCH DK UCH KBHV-25 KBHJV-25
          <br />
          Evan’s Aha Magic Be A Viking
        </h2>
        <br />
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
      </div>

      {img_maker(img1)}

      <div className="space-between-imgs"></div>

      <div className="text-over-img">
        <h2>
          Västerås Nordic Dog Show 2026
          <br />
          {language === "sv" ? svt6 : ent6}
        </h2>
      </div>

      {img_maker(img2)}

      <div className="text-under-img">
        {language === "sv" ? svt7 : ent7}
        <br />
        <br />
        {language === "sv" ? svt8 : ent8}
      </div>

      <div className="text-over-img">
        <h2>
          {language === "sv" ? svt9 : ent9}
          <br />
          {language === "sv" ? svt10 : ent10}
        </h2>
      </div>

      {img_maker(img3)}

      <div className="text-under-img">
        {language === "sv" ? svt11 : ent11}
        <br />
        <br />
        {language === "sv" ? svt12 : ent12}
      </div>

      <div className="text-over-img">
        <h2>
          Roskilde International Dog Show 2025
          <br />
          {language === "sv" ? svt13 : ent13}
          <br />
          {language === "sv" ? svt14 : ent14}
          <br />
          {language === "sv" ? svt15 : ent15}
        </h2>
      </div>

      {img_maker(img4)}

      <div className="text-under-img">
        {language === "sv" ? svt16 : ent16}
        <br />
        <br />
        {language === "sv" ? svt17 : ent17}
      </div>

      <div className="text-over-img">
        <h2>
          Askersund SKK National Dog Show 2025
          <br />
          {language === "sv" ? svt18 : ent18}
        </h2>
      </div>

      {img_maker(img5)}

      <div className="text-under-img">
        {language === "sv" ? svt19 : ent19}
        <br />
        <br />
        {language === "sv" ? svt20 : ent20}
      </div>

      <div className="text-over-img">
        <h2>
          Skara Nordic Dog Show 2026
          <br />
          {language === "sv" ? svt21 : ent21}
        </h2>
      </div>

      {img_maker(img6)}

      <div className="text-under-img">
        {language === "sv" ? svt22 : ent22}
        <br />
        <br />
        {language === "sv" ? svt23 : ent23}
      </div>

      {img_maker(img7)}

      <div className="space-between-imgs"></div>

      {img_maker(img8)}
    </div>
  );
}
