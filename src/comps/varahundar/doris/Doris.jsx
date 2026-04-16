import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";

export default function Doris () {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Doris</h1>
        <h2>Be A Viking Doris Day</h2>
        <div>
          <br />
          Född xx februari 20xx
          <br />
          <br />
          
        </div>
      </div>

      <img src={img1} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
    
    </div>
  );
}

