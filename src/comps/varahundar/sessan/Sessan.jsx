import "../../comps.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";
import img6 from "./imgs/img6.jpeg";
import img7 from "./imgs/img7.jpeg";
import img9 from "./imgs/img9.jpeg";
import img10 from "./imgs/img10.jpeg";
import img_maker from "../../imagemaker/ImageMaker";
import React from "react";
import { useSelector } from "react-redux";

export default function Sessan() {
  const language = useSelector((state) => state.language.language);

  const svt1 = "Född 26 juli 2012";

  const ent1 = "Born on July 26, 2012";

  const svt2 =
    "När Sessan föddes i vår första kull 2012 fångade hon våra hjärtan. Hon var den av sex valpar som stannade kvar i en kull med mycket vackra valpar efter Malva och Napoleon. Och hon blev en skönhet, en fantastisk vacker Havanais! Hon hade den mest ljuvliga personligheten, kärleksfull och lyhörd som sin pappa. Med en ambitiös personlighet, omtanke om alla och en superduktig mamma till sina valpar ♥️";

  const ent2 = "English text missing...";

  const svt3 =
    "I utställningsringen gick vackra Sessan från klarhet till klarhet, blev bästa tik på sin första officiella utställning och så fortsatte hon! Fram till två-års dagen hade hon hunnit få 12 championcertifikat! Internationell champion, svensk och norsk juniorvinnare, flerfaldig norsk vinnare - men viktigast av allt den största vinnaren på hemmaplan !";

  const ent3 = "English text missing...";

  const svt4 =
    "Älskade Sessan - tack för all kärlek du gav oss ♥️ Vi saknar dig för alltid ♥️";

  const ent4 = "English text missing...";

  return (
    <div className="gallery-page">
      <div className="text-over-img">
        <h1>Sessan</h1>
        <h2>
          C.I.B. NO V-15 SE JV-13 NO V-13 NO JV-13 SE UCH DK UCH NO UCH NORD UCH
          <br />
          Be A Viking Anduril
        </h2>
        <br />
        {language === "sv" ? svt1 : ent1}
        <br />
        <br />
        {language === "sv" ? svt2 : ent2}
        <br />
        <br />
        {language === "sv" ? svt3 : ent3}
        <br />
        <br />
        {language === "sv" ? svt4 : ent4}
      </div>

      {img_maker(img1)}

      <div className="space-between-imgs"></div>

      {img_maker(img2)}

      <div className="space-between-imgs"></div>

      {img_maker(img3)}

      <div className="space-between-imgs"></div>

      {img_maker(img4)}

      <div className="space-between-imgs"></div>

      {img_maker(img5)}

      <div className="space-between-imgs"></div>

      {img_maker(img6)}

      <div className="space-between-imgs"></div>

      {img_maker(img7)}

      <div className="space-between-imgs"></div>

      {img_maker(img9)}

      <div className="space-between-imgs"></div>

      {img_maker(img10)}
    </div>
  );
}
