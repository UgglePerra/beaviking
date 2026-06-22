import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";
import img6 from "./imgs/img6.jpeg";
import img_maker from "../../imagemaker/ImageMaker";


export default function Louis () {

  return (
    <div className="gallery-page">
      <div className="text-over-img">
        <h1>Louis </h1>
        <h2>SE JV-13 DK JV-13 SE UCH DK UCH Skystar&apos;s Louis</h2>
        <div>
          <br />
          Född 1 januari 2013
          <br /><br />
          Louis var en dröm som blev sann. Nästan 100 mil från Göteborg utanför Trondheim i Norge bodde en av de vackraste Havanais tikar jag mött, Skystar’s Alicia. Hon och Napoleon Viking var ett så vackert par, samma mjuka sobelfärger och teckningar.
          <br /><br />
          Så en solig vårvinterdag i början av 2013 flög jag över de snöklädda bergen vid Trollheimen Fjell och träffade deras valpar som fötts på nyårsnatten. Med hem på flyget var Louis, en liten vacker prins med ett ljuvligt temperament ❤️❤️
          <br /><br />
          På Västsvenska Kennelklubbens utställning i Backamo 2013 blev Louis Best In Show Valp!! Därefter Svensk Juniorvinnare och Dansk Juniorvinnare samt dubbla championat :)
          <br /><br />
          Louis har lämnat mycket vackra och vinstrika avkommor - och han har gett oss vår vackra Vicke♥️
          <br /><br />
          Louis är hälsotestad; ögon, hjärta, patella utan anmärkning.
        </div>
      </div>
      
      {img_maker(img1)}

      <div className="space-between-imgs"></div>
            
      {img_maker(img2)}

      <div className="space-between-imgs"></div>
            
      {img_maker(img3)}

      <div className="space-between-imgs"></div>

      {img_maker(img4)}

      <div className="space-between-imgs"></div>

      {img_maker(img5)}

      <div className="space-between-imgs"></div>

      <div className="text-over-img">
        1 januari 2026 fyllde Louis 13 år.
      </div>

       {img_maker(img6)}

    </div>
  );
}
