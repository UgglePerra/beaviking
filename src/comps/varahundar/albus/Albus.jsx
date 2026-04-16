import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";


export default function Albus () {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Albus</h1>
        <h2>Be A Viking Alabanium Albora</h2>
        <div>
          <br />
          Född xx februari 20xx
          <br />
          <br />
          
        </div>
      </div>
      <img src={img1} alt="main" className="dog-image" />
     
     
    </div>
  );
}