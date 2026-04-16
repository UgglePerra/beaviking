import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";


export default function Sessan () {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Sessan</h1>
        <h2>C.I.B. NO V-15 SE JV-13 NO V-13 NO JV-13 NORD UCH Be A Viking</h2>
        <div>
          <br />
          
        </div>
      </div>
      <img src={img1} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      
      <img src={img2} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      
      <img src={img3} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      
      <img src={img4} alt="main" className="dog-image" />

    
    </div>
  );
}
