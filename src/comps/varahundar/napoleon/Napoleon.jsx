import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";
import img6 from "./imgs/img6.jpeg";
import img7 from "./imgs/img7.jpeg";

export default function Napoleon () {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Napoleon Viking</h1>
        <h2>C.I.B. SE V-12 NORD V-10 NO V-12 NO V-08 NORD&FI UCH Buenazo&apos;s Viking</h2>
        <div>
          <br />
          Född 23 februari 2006
          <br />
          <br />
          
        </div>
      </div>
      <img src={img1} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      
      <img src={img2} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      
      <div className="text">
        <div>
          <h3>Best In Show SDHK</h3>
        </div>
      </div>

      <img src={img3} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      
      <img src={img4} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      
      <img src={img5} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />

      <div className="text">
        <div>
          <h3>Best of Bread Best in Group 3 SKK Sofiero 2011</h3>
        </div>
      </div>
      
      <img src={img6} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />

      <div className="text">
        <div>
          <h3> Best In Show SDHK Eket 2012</h3>
        </div>
      </div>
      
      <img src={img7} alt="main" className="dog-image" />
    </div>
  );
}
