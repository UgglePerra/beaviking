import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";


export default function Pluto () {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Pluto</h1>
        <h2> Aco Tara&apos;s Daylight</h2>
        <div>
          <br />
          Född 3 juli 2002
          <br />
          <br />
          Pluto var vår första havanais och han världens bästa sällskapshund! Han var snäll, klok och väldigt sällskaplig samt duktig på hundspråket. Han var med oss på allt ifrån båtturer, skidåkning, joggingrundor, fjällvandring restaurangbesök och mycket mer. 
          Vi ställde ut honom i juniorklass med bra kritik, han var välbyggd och välmusklad, men han trivdes inte på utställningar. Han ville hellre springa över klipporna eller vara hemma och mysa. 
          <br /><br />
          Vi gick olika kurser med honom i vardagslydnad samt även agility där han var duktig på att springa i tunnlar och på spångar. Han var klurig, gillade att få små övningar att lösa och hade ett stort ordförråd, dvs förstod många ord. Men han tog också kommandot om ingen annan gjorde det. Hans röda overall med reflexränder tyckte han inte om! Bättre var det med stickade tröjor!
          
        </div>
      </div>
      <img src={img1} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      
      <img src={img2} alt="main" className="dog-image" />
     
    </div>
  );
}
