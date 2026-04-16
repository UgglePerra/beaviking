//import "../App.css";
import "./resultat.css";
import img1 from "../../imgs/resultat/img1.jpeg";
import img2 from "../../imgs/resultat/img2.jpeg";
import img3 from "../../imgs/resultat/img3.jpeg";
import img4 from "../../imgs/resultat/img4.jpeg";
import img5 from "../../imgs/resultat/img5.jpeg";
import img6 from "../../imgs/resultat/img6.jpeg";
import img7 from "../../imgs/resultat/img7.jpeg";
import img8 from "../../imgs/resultat/img8.jpeg";


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
      
      <div className="text">
        <div>
          <h1>Vickan</h1>
          <h3>SE V-15 FI JV-14 SE UCH FI UCH NO UCH Be A Viking Berylla Boffin</h3>
        </div>
      </div>

      <img src={img6} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      
      <div className="text">
        <div>
          <h1>Vickan</h1>
          <h3>SE V-15 FI JV-14 SE UCH FI UCH NO UCH Be A Viking Berylla Boffin</h3>
        </div>
      </div>

      <img src={img7} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      
      <div className="text">
        <div>
          <h1>?????</h1>
          <h3>Be A Viking Belladonna Took</h3>
        </div>
      </div>

      <img src={img8} alt="main" className="dog-image" />

      
    </div>
  );
}
