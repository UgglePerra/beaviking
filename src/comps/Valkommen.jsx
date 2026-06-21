import "./comps.css";
import img1 from "../imgs/valkommen/img1.jpeg";
import img2 from "../imgs/valkommen/img2.jpeg";
import img3 from "../imgs/valkommen/img3.jpeg";
import img4 from "../imgs/valkommen/img4.jpeg";
import img5 from "../imgs/valkommen/img5.jpeg";
import img6 from "../imgs/valkommen/img6.jpeg";
import simg1 from "../imgs/valkommen/simg1.jpeg";
import simg2 from "../imgs/valkommen/simg2.jpeg";
import simg3 from "../imgs/valkommen/simg3.jpeg";
import simg5 from "../imgs/valkommen/simg5.jpeg";
import simg6 from "../imgs/valkommen/simg6.jpeg";
import simg7 from "../imgs/valkommen/simg7.jpeg";
import simg8 from "../imgs/valkommen/simg8.jpeg";
import simg9 from "../imgs/valkommen/simg9.jpeg";
import simg10 from "../imgs/valkommen/simg10.jpeg";
import simg11 from "../imgs/valkommen/simg11.jpeg";
import simg12 from "../imgs/valkommen/simg12.jpeg";
import simg13 from "../imgs/valkommen/simg13.jpeg";
import simg14 from "../imgs/valkommen/simg14.jpeg";
import simg15 from "../imgs/valkommen/simg15.jpeg";
import simg16 from "../imgs/valkommen/simg16.jpeg";
import simg17 from "../imgs/valkommen/simg17.jpeg";
import simg18 from "../imgs/valkommen/simg18.jpeg";
import simg19 from "../imgs/valkommen/simg19.jpeg";
import simg20 from "../imgs/valkommen/simg20.jpeg";
import simg21 from "../imgs/valkommen/simg21.jpeg";
import simg22 from "../imgs/valkommen/simg22.jpeg";
import simg23 from "../imgs/valkommen/simg23.jpeg";
import simg24 from "../imgs/valkommen/simg24.jpeg";
import simg25 from "../imgs/valkommen/simg25.jpeg";
import simg26 from "../imgs/valkommen/simg26.jpeg";
import simg27 from "../imgs/valkommen/simg27.jpeg";
import simg28 from "../imgs/valkommen/simg28.jpeg";
import simg29 from "../imgs/valkommen/simg29.jpeg";
import simg30 from "../imgs/valkommen/simg30.jpeg";
import simg31 from "../imgs/valkommen/simg31.jpeg";
import simg32 from "../imgs/valkommen/simg32.jpeg";
import simg33 from "../imgs/valkommen/simg33.jpeg";
import ImageSliderAuto from "./imagesliderauto/ImageSliderAuto";
import img_maker from "./imagemaker/ImageMaker";


export default function Valkommen() {
  const images = [
    simg1,
    simg2,
    simg3,
    simg5,
    simg7,
    simg8,
    simg9,
    simg10,
    simg15,
    simg19,
    simg20,
    simg21,
    simg22,
    simg23,
    simg24,
    simg25,
    simg26,
    simg27,
    simg28,
    simg29,
    simg30,
    simg31,
    simg32,
    simg11,
  ];

  return (
    <div className="gallery-page">
      <div className="text-over-image">
        <h1>Välkommen</h1>
        Välkommen till Be A Viking Kennel och våra underbara Havanaiser som vi delat våra liv med sedan 2002. Vårt mål är att föda upp friska, sociala och vackra Havanaiser som sprider glädje hos sina ägare och familjer. Under åren har vi haft ett fåtal kullar då tid och omsorg om valparna är viktigast för att de ska bli trygga och glada små hundar!
        <br />
        <br />
        Välkommen att titta runt på vår hemsida!
      </div>

      <div className="dog-image">
        <h2></h2>
        <ImageSliderAuto images={images} />
      </div>

      <div className="space-between-imgs"></div>

      {img_maker(img5)}

      <div className="space-between-imgs"></div>

      {img_maker(img6)}

      <div className="space-between-imgs"></div>

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
