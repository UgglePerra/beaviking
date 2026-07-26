import "../../comps.css"
import img1 from "./imgs/img1.jpeg";
import img_maker from "../../imagemaker/ImageMaker";
import React from "react";
import { useSelector } from "react-redux";


export default function Doris () {

  const language = useSelector((state) => state.language.language);
                        
  const svt1 = "Född 30 maj 2016";

  const ent1 = "Born on May 30, 2016"

  return (
    <div className="gallery-page">

      <div className="text-over-img">
        <h1>Doris</h1>
        <h2>Be A Viking Doris Day</h2>
        <br />
        {language === "sv" ? svt1 : ent1}
        <br /><br />
      </div>

      {img_maker(img1)}
    
    </div>
  );
}

