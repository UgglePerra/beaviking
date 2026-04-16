import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";


export default function Pluto () {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Pluto</h1>
        <h2>Be A Viking Plutonium Plutoris</h2>
        <div>
          <br />
          Född xx februari 20xx
          <br />
          <br />
          
        </div>
      </div>
      <img src={img1} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      
      <img src={img2} alt="main" className="dog-image" />
     
    </div>
  );
}
