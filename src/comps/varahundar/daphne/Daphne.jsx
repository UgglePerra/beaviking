import "../../comps.css"
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img_maker from "../../imagemaker/ImageMaker";


export default function Daphne () {

  return (
    <div className="gallery-page">
      <div className="text-over-img">
        <h1>Daphne</h1>
        <h2>Be A Viking Celebrian</h2>
          <br />
          Född 29 november 2014
          <br /><br />
      </div>

      {img_maker(img1)}

      <div className="space-between-imgs"></div>
      
      {img_maker(img2)}

      <div className="space-between-imgs"></div>
            
      {img_maker(img3)}

      <div className="space-between-imgs"></div>

      {img_maker(img4)}

    </div>
  );
}

