import "./comps.css";
import img1 from "../imgs/kullar/img1.jpeg";


export default function Kullar() {
  return (
    <div className="gallery-page">
      <div className="text">
        <div>
          <h3>Kullar</h3>
         
          <br />
        </div>
      </div>

      <div className="img-spacer">
        <img src={img1} alt="main" className="dog-image" />
      </div>

      
    </div>
  );
}
