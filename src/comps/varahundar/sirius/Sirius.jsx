import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";


export default function Sirius () {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Sirius</h1>
        <h2>C.I.B. DK UCH NO UCH SE UCH Honungsmåne Love Me Do</h2>
        <div>
          <br />
          Född 6 juni 2008
          <br />
          
        </div>
      </div>
      <img src={img1} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />

      <img src={img2} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />

      <img src={img3} alt="main" className="dog-image" />
      <br /><br /><br /><br />
      <div className="text">
              <div>
                <h3>Sirius 14 år</h3>
                
              </div>
            </div>
            <img src={img4} alt="main" className="dog-image" />

    </div>
  );
}
