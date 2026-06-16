import "./comps.css";
import img1 from "../imgs/kullar/img1.jpeg";
import img_maker from "./imagemaker/ImageMaker";


export default function Kullar() {

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
