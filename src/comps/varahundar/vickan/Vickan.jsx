import "../../comps.css"
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img_maker from "../../imagemaker/ImageMaker";


export default function Vickan () {

  return (
    <div className="gallery-page">
      <div className="text-over-img">
        <h1>Vickan</h1>
        <h2>SE V-15 FI JV-14 SE UCH FI UCH NO UCH Be A Viking Berylla Boffin</h2>
        <br />
        Född 10 september 2013
        <br /><br />
      </div>

      {img_maker(img1)}

       <div className="space-between-imgs"></div>
                        
      {img_maker(img2)}

       <div className="space-between-imgs"></div>
            
      {img_maker(img3)}

    </div>
  );
}
