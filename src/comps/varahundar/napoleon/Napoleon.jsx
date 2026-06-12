import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";
import img6 from "./imgs/img6.jpeg";
import img7 from "./imgs/img7.jpeg";

export default function Napoleon () {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Napoleon Viking</h1>
        <h2>C.I.B. SE V-12 NORD V-10 NO V-12 NO V-08 NORD&FI UCH Buenazo&apos;s Viking</h2>
        <div>
          <br />
          Född 23 februari 2006
          <br />
          <br />
          Första gången jag höll Napoleon i mina händer tittade hans mörka ögon klart in i mina ögon och sedan somnade han tryggt, han var då fem veckor. Där började en kärlek växa så stor och innerlig, ett samförstånd mellan hund och människa med ett djup som är svårt att beskriva.<br /><br />

          Han tog oss ut på en resa fylld av äventyr, glädje, lycka och lärdomar. Hans personlighet var så stor, trygg, tillitsfull, lyhörd, han ville alltid samarbeta och göra oss glada. Hans blick ”jag är med matte” sa mer än tusen ord. Att se honom springa fri över klipporna vid havet var högsta glädjen.<br /><br />

          Hans vilja att samarbeta och naturligtvis hans trygga starka mentalitet gjorde att han nådde mycket stora framgångar i utställningsringarna med ett flertal Best In Show, Best In Group, Bäst i Rasen, Mestvinnande Havanais tre år i rad, Best In Show på Rasspecialen och Vinnar-titlar!<br /><br />

          Viktigast av allt var lyckan att leva tillsammans med Nappe varje dag. Saknad för alltid ♥️<br /><br />

          Han var en på miljonen ♥️♥️♥️

          
        </div>
      </div>

      <div className="img-spacer">
        <img src={img1} alt="main" className="dog-image" />
      </div>
    
      <div className="img-spacer">
        <img src={img2} alt="main" className="dog-image" />
      </div>
      
      <div className="text-spacer">
        <div>
          <h3>Best In Show SDHK</h3>
        </div>
      </div>

      <div className="img-spacer">
        <img src={img3} alt="main" className="dog-image" />
      </div>
    
      <div className="img-spacer">
        <img src={img4} alt="main" className="dog-image" />
      </div>

      <div className="img-spacer">
        <img src={img5} alt="main" className="dog-image" />
      </div>

      <div className="text-spacer">
        <div>
          <h3>Best of Bread Best in Group 3 SKK Sofiero 2011</h3>
        </div>
      </div>
      
      <div className="img-spacer">
        <img src={img6} alt="main" className="dog-image" />
      </div>

      <div className="text-spacer">
        <div>
          <h3> Best In Show SDHK Eket 2012</h3>
        </div>
      </div>
      
      <div className="img-spacer">
        <img src={img7} alt="main" className="dog-image" />
      </div>

    </div>
  );
}
