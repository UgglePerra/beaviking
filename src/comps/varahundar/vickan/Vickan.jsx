import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";

export default function Vickan () {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Vickan</h1>
        <h2>SE V-15 FI JV-14 SE UCH FI UCH NO UCH Be A Viking Berylla Boffin</h2>
        <div>
          <br />
          Född xx juni 20xx
          
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

      <div className="text">
        <div>
          
          <br />
          <br />
        </div>
      </div>
      <img src={img3} alt="main" className="dog-image" />

      <div className="text">
        <div>
          
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
