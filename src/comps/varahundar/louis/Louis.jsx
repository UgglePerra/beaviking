import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";


export default function Louis () {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Louis </h1>
        <h2>SE JV-13 DK JV-13 SE UCH DK UCH Skystar&apos;s Louis</h2>
        <div>
          <br />
          Född 1 januari 2013
          <br /><br />
          Louis var en dröm som blev sann. Nästan 100 mil från Göteborg utanför Trondheim i Norge bodde en av de vackraste Havanais tikar jag mött, Skystar’s Alicia. Hon och Napoleon Viking var ett så vackert par, samma mjuka sobelfärger och teckningar. 
          <br /><br />
          Så en solig vårvinterdag i början av 2013 flög jag över de snöklädda bergen vidTrollheimen Fjell och träffade deras valpar som fötts på nyårsnatten. Med hem på flyget var Louis, en liten vacker prins efter de vackra föräldrarna med ett ljuvligt temperament ❤️❤️
          <br /><br />
          Louis har lämnat mycket vackra och vinstrika avkommor - och han har gett oss vår vackra Vicke♥️
        </div>
      </div>
      
      <div className="img-spacer">
        <img src={img1} alt="main" className="dog-image" />
      </div>
    
      <div className="img-spacer">
        <img src={img2} alt="main" className="dog-image" />
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

    </div>
  );
}
