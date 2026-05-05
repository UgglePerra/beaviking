//import "../App.css";
//import "./nyheter.css";
import "./comps.css"
import img1 from "../imgs/nyheter/img1.jpeg";
import img2 from "../imgs/nyheter/img2.jpeg";
import img3 from "../imgs/nyheter/img3.jpeg";

export default function Nyheter() {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Nyheter</h1>
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
          <br />
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}