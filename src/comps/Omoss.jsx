import "./comps.css";
import img0 from "../imgs/omoss/img0.jpeg";
import img1 from "../imgs/omoss/img1.jpeg";
import img2 from "../imgs/omoss/img2.jpeg";
import img3 from "../imgs/omoss/img3.jpeg";
import img4 from "../imgs/omoss/img4.jpeg";
import img5 from "../imgs/omoss/img5.jpeg";
import img6 from "../imgs/omoss/img6.jpeg";
import mov6 from "../imgs/omoss/mov6.mp4"
import ImageSlider from "./imageslider/ImageSlider";

export default function Omoss() {
  const images = [img1, img5, img4];

  return (
    <>
      <div className="gallery-page">
        <div className="text">
          <h1>Om oss</h1>
        </div>

        <div className="img-spacer">
          <img src={img0} alt="main" className="dog-image" />
        </div>

        <div className="text-spacer">
        Välkommen till Be A Viking Kennel och våra underbara Havanaiser. För snart tjugofem år sedan, 2002 kom vår första Havanais hem, och ganska snart blev de fler. Min dotter Ida och jag har kenneln Be A Viking och 2012 föddes vår första kull. Att ha Havanaiser i familjen är det finaste som finns, varje dag sprider de glädje!! Vi är aktiva med hundarna i naturen, på utställning, Rallylydnad, Nosework, - allt som gör hundarna och oss glada! 
        <br 