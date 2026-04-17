//import "../App.css";
import "./resultat.css";
import img1 from "../../imgs/resultat/img1.jpeg";
import img2 from "../../imgs/resultat/img2.jpeg";
import img3 from "../../imgs/resultat/img3.jpeg";
import img4 from "../../imgs/resultat/img4.jpeg";
import img5 from "../../imgs/resultat/img5.jpeg";


export default function Resultat() {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Resultat/Champions</h1>
        <h3>European Winner Show 2015 Best in Show 4 Uppfödargrupp</h3>
      
      </div>
      <img src={img1} alt="main" className="dog-image" />
    <br /><br /><br />
      <div className="text">
        <div>
          <h3>World Dog Show 2014</h3>
          
        </div>
      </div>
      <img src={img2} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      
      <img src={img3} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      
      <img src={img4} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      
      <img src={img5} alt="main" className="dog-image" />
       <br /><br /><br /><br /><br /><br />

      
    </div>
  );
}
