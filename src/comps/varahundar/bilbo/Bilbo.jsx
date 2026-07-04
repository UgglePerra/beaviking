import "../../comps.css"
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img_maker from "../../imagemaker/ImageMaker";


export default function Bilbo () {

  return (
    <div className="gallery-page">

      <div className="text-over-img">
        <h1>Bilbo</h1>
        <h2>NORD JV-14 NO JV-14 
          <br />Be A Viking Bilbo Baggins</h2>
          <br />
          Född 10 september 2013
      </div>

      {img_maker(img1)}

      <div className="space-between-imgs"></div>
      
      {img_maker(img2)}

      <div className="space-between-imgs"></div>
            
      {img_maker(img3)}

    </div>
  );
}
