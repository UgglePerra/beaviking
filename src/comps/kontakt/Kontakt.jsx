//import "../App.css";
import "./kontakt.css";
import img1 from "../../imgs/kontakt/img1.jpeg";
import img2 from "../../imgs/kontakt/img2.jpeg";
import img3 from "../../imgs/kontakt/img3.jpeg";

export default function Valkommen() {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Kontakt</h1>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.
        <br />
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        <br />
       
      </div>
      <img src={img1} alt="main" className="dog-image" />

      <div className="text">
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
      <img src={img2} alt="main" className="dog-image" />

      <div className="text">
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
      <img src={img3} alt="main" className="dog-image" />

      <div className="text">
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