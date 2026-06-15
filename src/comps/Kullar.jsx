import "./comps.css";
import img1 from "../imgs/kullar/img1.jpeg";


export default function Kullar() {

   function img_maker (img) {
    return(
      <div className="img-spacer">
        <img src={img} alt="main" className="dog-image" />
      </div>)
  }

  return (
    <div className="gallery-page">
      <div className="text">
        <div>
          <h3>Kullar</h3>
         
          <br />
        </div>
      </div>

      {img_maker(img1)}

    </div>
  );
}
