import "./comps.css"
import img1 from "../imgs/valpar/img1.jpeg";
import img2 from "../imgs/valpar/img2.jpeg";
import img3 from "../imgs/valpar/img3.jpeg";
import img4 from "../imgs/valpar/img4.jpeg";
import img5 from "../imgs/valpar/img5.jpeg";
import img6 from "../imgs/valpar/img6.jpeg";
import img7 from "../imgs/valpar/img7.jpeg";

export default function Valpar() {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Valpar</h1>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.
       
      </div>

      <div className="img-spacer">
        <img src={img1} alt="main" className="dog-image" />
      </div>

      <div className="text-spacer">
        <div>
          <h3>tempor incididunt</h3>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.
        </div>
      </div>

      <div className="img-spacer">
        <img src={img2} alt="main" className="dog-image" />
      </div>

      <div className="text-spacer">
        <div>
          <h3>tempor incididunt</h3>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.
        </div>
      </div>

      <div className="img-spacer">
        <img src={img3} alt="main" className="dog-image" />
      </div>

      <div className="text-spacer">
        <div>
          <h3>tempor incididunt</h3>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.
        </div>
      </div>

      <div className="img-spacer">
        <img src={img4} alt="main" className="dog-image" />
      </div>

      <div className="img-spacer">
        <img src={img5} alt="main" className="dog-image" />
      </div>

      <div className="img-spacer">
        <img src={img6} alt="main" className="dog-image" />
      </div>

      <div className="img-spacer">
        <img src={img7} alt="main" className="dog-image" />
      </div>



    </div>
  );
}