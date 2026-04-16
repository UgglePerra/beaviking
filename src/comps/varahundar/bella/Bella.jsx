import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";

export default function Bella () {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Bella</h1>
        <h2>Be A Viking Belladonna Took</h2>
        <div>
          <br />
          Född xx februari 20xx
          <br />
          <br />

        </div>
      </div>

      <img src={img1} alt="main" className="dog-image" />
      
      <div className="text">
        <div>
          
          <br />
          <br />
        </div>
      </div>
      <img src={img2} alt="main" className="dog-image" />

      <img src={img3} alt="main" className="dog-image" />
      
      <div className="text">
        <div>
          
          <br />
          <br />
        </div>
      </div>
      <img src={img4} alt="main" className="dog-image" />

    </div>
  );
}

