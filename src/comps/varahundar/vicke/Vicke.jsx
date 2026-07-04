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


export default function Vicke() {

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
            Född 30 januari 2024
            <br /><br />
            Vicke är född i Skåne hos Vivianne och Virginia, Tilevis kennel. Mamma är Bichavas Scilla och pappa vår älskade Skystar's Louis. Det var bara nödvändigt att sonen skulle bli en Göteborgare! Tredje generationen Viking med samma ögon som sin farfar; lyhörd, smart och en ordningsman. Ställer tjejerna till det så kommer Vicke direkt och skvallrar! Han är väldigt observant och har mängder av energi, lekfull och duktig med nosen. Vi har tränat olika aktiviteter med honom; Nosework är hans favorit.
            <br /><br />
            Sin utställningskarriär började Vicke på bästa sätt med att bli Best In Show Valp på SDHK i Vänersborg fyra månader gammal! Det upprepade han en månad senare i Borås då han även där blev Best In Show Valp.
            <br /><br />
            På sin första utställning efter två-årsdagen gick Vicke in i ringen och blev svensk och finsk champion!! Han har blivit Bäst I Rasen, BIS 2 Unghund SDHK Gimo, har ett flertal Bästa hane-placeringar och championcertifikat. På World Dog Show i Helsingfors 2025 och WDS CIRCUIT tog han championcertifikaten båda dagarna!
            <br /><br />
            Vicke är hälsotestad; ögon, hjärta, patella utan anmärkning
          </div>
        </div>

        <div className="text-over-img">
          <h3>Agria Dog Show Jönköping Internationell <br />28 februari 2026<br />Svensk och finsk champion!!</h3>
        </div>

        {img_maker(img1)}

        <div className="text-under-img">
          Bedömning: Snygg hane, utmärkta proportioner, vackert huvud, mörka vackra ögon, snygg överlinje, utmärkt förbröst, ngt framskjuten skuldra, bra framben, passande vinklar, välformad bröstkorg, snygg svans, vacker välskött päls, rör sig med härlig stil och energi, välpresenterad.
          <br /><br />
          Domare: Nina Lönner Andersson
        </div>

        <div className="space-between-imgs"></div>

        <video controls autoPlay loop muted playsInline>
          <source src={mov2} type="video/mp4" />
        </video>



        <div className="space-between-imgs"></div>

        <div className="text-over-img">
          <h3>Nordic Dog Show Borås 2026
          <br />
          Bästa Hane 2 Reserv Nordic Show Cert</h3>
        </div>

        {img_maker(img8)}

        <div className="text-under-img"></div>
          Bedömning: 2 år, utmärkt storlek. Fina proportioner avseende höjd och längd.
          Välformad skalle, med bra längd i nospartiet. Mörka uttrycksfulla ögon.
          Tillräcklig hals, utmärkt överlinje och kors. Väl utfylld bröstkorg med mycket bra kropp. Passande benstomme. Korrekta vinklar bak med breda välmusklade lår. Rör sig med snabba fria rörelser. Utmärkt pälskvalitet. 
          <br /><br />
          Domare: HIERNER JULIA
      
       <div className="space-between-imgs"></div>

        {img_maker(img2)}

        <div className="text-over-img">
          <h3>World Dog Show Circuit 
            <br />Helsingfors augusti 2025<br />Finskt Championcertifikat</h3>
        </div>

        {img_maker(img3)}

        <div className="text-under-img">
          Bedömning: 18 månader, utmärkt storlek. En välutvecklad ung hane för
          sin ålder. Goda vinklar. Bra längd och stark bröstkorg. Något brant
          kors. Bra päls. Välformat, maskulint huvud. Vackra, mörka stora ögon.
          Bra, fyllig nos. Rör sig effektivt med bra steglängd. Vacker svans i
          rörelse.
          <br /><br />
          Domare: Kajsa Gold, Finland
        </div>

        <div className="text-over-img">
          <h3>World Dog Show <br />Helsingfors augusti 2025<br />Finskt Championcertifikat!</h3>
        </div>
        
        {img_maker(img7)}

        <div className="text-over-img">
          <h3>Vicke och Ida på World Dog Show Helsinki 2025!!</h3>
        </div>

        {img_maker(img4)}

        
        <div className="text-over-img">
          <h3>SDHK National Dog Show<br />Gimo september 2025<br />Best in Show 2 Unghund</h3>
          Bedömning: Mycket fin siluett. Utmärkta proportioner och balans.
          Utmärkt storlek. Maskulint uttryck. Korrekt skalle. Mörka, fina
          välformade ögon. Fin längd på nospartiet. Snygg hals, överlinje och
          svans. Välvinklad och välkroppad. Utmärkt pälskvalitet.Typiska,
          frapperande rörelser. En lovande unghund.
          <br /><br />
          Domare: Marcus Gisslén
          <br /><br />
          <h3> SKK National Dog Show<br />Ljungskile augusti 2025<br />Bästa hane 2 med CERT</h3>
          Bedömning: Utmärkt typ, maskulin hane av bra storlek och goda
          proportioner.Utrycksfulla ögon, härligt pigment, bra hals och
          överlinje. Välkroppad och välmusklad. Välvinklad, rör sig med lätt och
          alert steg och välburen svans. Utmärkt pälskvalitet som är
          välpresenterad.
          <br /><br />
          Domare: Joel Lantz
        </div>

        <div className="text-over-img">
          <h3>Svensk och Finsk Champion!!<br />Agria Dog Show Jönköping Internationell<br />28 februari 2026</h3>
        </div>

        {img_maker(img5)}

      </div>

     

    </>
  );
}
