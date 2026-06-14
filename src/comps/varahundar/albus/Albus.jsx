import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";



export default function Albus () {
  return (
    <div className="gallery-page">
      
      <div className="text">
        <h1>Albus</h1>
        <h2>Tilevis Eddie be A Viking</h2>
        <div>
          <br />
          Född 17 februari 2023
          <br /><br />
          Albus är Idas hund och är född hos Virginia och Vivianne, Tilevis kennel i Skåne. När längtan efter en ny hund blev för stor då Sirius lämnade oss efter drygt 14 år blev det Albus! Hans mamma Petunia har våra linjer bakom sig, hans pappa är en import från Polen.<br /><br />

          Han är en riktig myspropp enligt Ida, ligger gärna kvar i sängen när hon gått upp. Älskar sina leksaker och bjuder gärna in till lek. Ida har gått kurs med honom i Nosework vilket han tycker om. Då Albus och Ida bor i stan passar det bra att vara klippt, &quot;sportfrisyr&quot; brukar vi kalla det.
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
  
    </div>
  );
}