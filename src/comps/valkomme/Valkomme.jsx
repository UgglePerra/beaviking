import "./valkomme.css";
import img1 from "../../imgs/valkomme/img1.jpeg";

export default function Valkomme() {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Välkomme</h1>
        
      </div>
      <img src={img1} alt="main" className="dog-image" />

      
    </div>
  );
}
