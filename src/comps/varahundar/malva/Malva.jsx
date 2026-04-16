import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";



export default function Malva() {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Malva</h1>
        <h2>C.I.B. DK UCH NO UCH SE UCH Peach Blossom Blue Temptation</h2>
        <div>
          <br />
          Född 14 februari 2010
          <br />
          
        </div>
      </div>
      <img src={img1} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      
      <img src={img2} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      
      <img src={img3} alt="main" className="dog-image" />

      
    </div>
  );
}
