import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img_maker from "../../imagemaker/ImageMaker";


export default function Doris () {

  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Doris</h1>
        <h2>Be A Viking Doris Day</h2>
        <div>
          <br />
          Född 30 maj 2016
          <br /><br />
          
        </div>
      </div>

      {img_maker(img1)}
    
    </div>
  );
}

