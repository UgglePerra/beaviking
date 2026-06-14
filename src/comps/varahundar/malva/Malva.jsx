import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";
import img6 from "./imgs/img6.jpeg";
import img7 from "./imgs/img7.jpeg";



export default function Malva() {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Malva</h1>
        <h2>C.I.B. DK UCH NO UCH SE UCH Peach Blossom Blue Temptation</h2>
        <div>
          <br />
          Född 14 februari 2010
        
          Malva, vår lilla blomma, efter en nervpirrande resa kom du med oss hem från Blue Temptation söder om Berlin. Din mamma, din pappa och din mormor var så vackra och glada Havanaiser - så det kändes som den bästa starten på vår egen uppfödning. Från den stunden du kom i min famn var det du och jag. Du växte till att bli en strålande vacker dam. Med din glädje och energi ledde du killarna på hemmaplan!! På jobbet charmade du alla som du träffade. 
          <br /><br />
          Ja även domarna blev charmade! Strax efter din två-årsdag blev du flerfaldig champion och efter tre-årsdagen internationell champion!! Best In Show Unghund på SDHK och Bäst i Rasen på Norges största utställning med över 50 tävlande Havanaiser! Du blev mamma till våra två första valpkullar - och vilka fantastiska valpar du gav oss 💖💖💖
          <br /><br />
          Tack för allt Älskade Malva - saknar dig för alltid ♥️♥️♥️
          
        </div>
      </div>

      <div className="img-spacer">
        <img src={img3} alt="main" className="dog-image" />
      </div>

      <div className="img-spacer">
        <img src={img4} alt="main" className="dog-image" />
      </div>

      <div className="img-spacer">
        <img src={img1} alt="main" className="dog-image" />
      </div>

      <div className="img-spacer">
        <img src={img2} alt="main" className="dog-image" />
      </div>

      <div className="img-spacer">
        <img src={img5} alt="main" className="dog-image" />
      </div>

      <div className="img-spacer">
        <img src={img6} alt="main" className="dog-image" />
      </div>

      <div className="img-spacer">
        <img src={img7} alt="main" className="dog-image" />
      </div>
      
    </div>
  );
}
