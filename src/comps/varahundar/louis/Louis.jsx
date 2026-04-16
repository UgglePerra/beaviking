import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";


export default function Louis () {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Louis </h1>
        <h2>SE JV-13 DK JV-13 SE UCH DK UCH Skystar&apos;s Louis</h2>
        <div>
          
        </div>
      </div>
      <img src={img1} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      <img src={img2} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      <img src={img3} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      <img src={img4} alt="main" className="dog-image" />
      <br /><br /><br /><br /><br /><br />
      <img src={img5} alt="main" className="dog-image" />
    </div>
  );
}
