import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";

export default function Vickan () {

  function img_maker (img) {
    return(
      <div className="img-spacer">
        <img src={img} alt="main" className="dog-image" />
      </div>)
  }

  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Vickan</h1>
        <h2>SE V-15 FI JV-14 SE UCH FI UCH NO UCH Be A Viking Berylla Boffin</h2>
        <div>
          <br />
          Född 10 september 2013
          <br /><br />
          
        </div>
      </div>

      {img_maker(img1)}
                        
      {img_maker(img2)}
            
      {img_maker(img3)}

    </div>
  );
}
