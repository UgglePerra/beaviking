//import "../App.css";
import "./comps.css";
import img1 from "../imgs/kontakt/img1.jpeg";
import img2 from "../imgs/kontakt/img2.jpeg";
import img_maker from "./imagemaker/ImageMaker";
import React from "react";
import { useSelector } from "react-redux";

export default function Valkommen() {
  const language = useSelector((state) => state.language.language);

  const svt1 = "Anna-Karin och Ida Jernberg";

  const ent1 = "English text missing...";

  const svt2 = "Välkommen att kontakta oss om du har frågor!";

  const ent2 = "English text missing...";

  return (
    <div className="gallery-page">
      <div className="text-over-img">
        <h1>{language === "sv" ? "Kontakt" : "Contact"}</h1>
        {language === "sv" ? svt1 : ent1}
        <br />
        <br />

        <div>
          Mail:&nbsp;
          <span>
            <a href="mailto:Be.a.viking.kennel@gmail.com">
              Be.a.viking.kennel@gmail.com
            </a>
          </span>
        </div>

        <br />

        {language === "sv" ? svt2 : ent2}
      </div>

      {img_maker(img1)}

      <div className="space-between-imgs"></div>

      {img_maker(img2)}
    </div>
  );
}
