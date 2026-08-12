//import "../App.css";
import "./comps.css";
import img1 from "../imgs/resultat/img1.jpeg";
import img2 from "../imgs/resultat/img2.jpeg";
import img3 from "../imgs/resultat/img3.jpeg";
import img4 from "../imgs/resultat/img4.jpeg";
import img5 from "../imgs/resultat/img5.jpeg";
import img6 from "../imgs/resultat/img6.jpeg";
import img7 from "../imgs/resultat/img7.jpeg";
import img8 from "../imgs/resultat/img8.jpeg";
import img9 from "../imgs/resultat/img9.jpeg";
import img10 from "../imgs/resultat/img10.jpeg";
import img11 from "../imgs/resultat/img11.jpeg";
import img12 from "../imgs/resultat/img12.jpeg";
import img21 from "../imgs/resultat/img21.jpeg";
import img22 from "../imgs/resultat/img22.jpeg";
import img_maker from "./imagemaker/ImageMaker";
import small_img_maker from "./imagemaker/SmallImageMaker";
import React from "react";
import { useSelector } from "react-redux";


export default function Resultat() {

  const language = useSelector((state) => state.language.language);

  const svt1 = 
  "Vi har haft glädjen att våra hundar och deras avkommor har varit framgångsrika i utställningsringarna. Nedan en sammanställning på meriterade hundar utan inbördes ordning;"

  const ent1 = 
  "We have had the pleasure of seeing our dogs and their offspring succeed in the show ring. Below is a list of titled dogs, in no particular order:";

  const svt2 = 
  "Meriterade avkommor till våra hundar under annat prefix:"

  const ent2 = 
  "Accomplished offspring of our dogs under other prefixes:";

  const svt3 = 
  "World Dog Show 2014 Uppfödargrupp Helsingfors Finland"

  const ent3 = 
  "World Dog Show 2014 Breeders Group Helsinki Finland";

  return (
    <div className="gallery-page">
      <div className="text-between-imgs">
        <h1>
          {language === "sv" ? "Resultat" : "Results"}
        </h1>
        {language === "sv" ? svt1 : ent1}
      </div>

      <div className="text-over-img">
        <h3>
          EUW-15 JWW-14 FI UCH NO JV-14 NO UCH SE UCH Be A Viking Bell Gamgee
        </h3>
      </div>

      {small_img_maker(img1)}

      <div className="text-over-img">
        <h3>
          C.I.B. NO V-15 SE JV-13 NO V-13 NO JV-13 NORD UCH Be A Viking Anduril
        </h3>
      </div>

      {small_img_maker(img2)}

      <div className="text-over-img">
        <h3>
          SE UCH DK UCH KBHV-25 KBHJV-25 Evan’s Aha Magic Be A Viking
        </h3>
      </div>

      {small_img_maker(img3)}

      <div className="text-over-img">
        <h3>
          SE UCH FI UCH Tilevis Flitwick Be A Viking
        </h3>
      </div>

      {small_img_maker(img4)}

      <div className="text-over-img">
        <h3>
          C.I.B. SE V-12 NORD V-10 NO V-12 NO V-08 NORD&FI UCH Buenazo&apos;s Viking
        </h3>
      </div>

      {small_img_maker(img5)}

      <div className="text-over-img">
        <h3>
          C.I.B. DK UCH NO UCH SE UCH Peach Blossom Blue Temptation
        </h3>
      </div>

      {small_img_maker(img6)}

      <div className="text-over-img">
        <h3>
          NORD JV-14 NO JV-14 Be A Viking Bilbo Baggins
        </h3>
      </div>

      {small_img_maker(img7)}

      <div className="text-over-img">
        <h3>
          SE JV-13 DK JV-13 SE UCH DK UCH Skystar&apos;s Louis
        </h3>
      </div>

      {small_img_maker(img8)}

      <div className="text-over-img">
        <h3>
          C.I.B. DK UCH NO UCH SE UCH Honungsmåne Love Me Do
        </h3>
      </div>

      {small_img_maker(img9)}

      <div className="text-over-img">
        <h3>
          SE V-15 FI JV-14 SE UCH FI UCH NO UCH Be A Viking Berylla Boffin
        </h3>
      </div>

      {small_img_maker(img10)}

      <div className="text-over-img">
        <h3>
          Ck, Be A Viking Belladonna Took
        </h3>
      </div>

      {small_img_maker(img11)}

      <div className="text-over-img">
        <h3>
          Excellent, Be A Viking Doris Day
        </h3>
      </div>

      {small_img_maker(img12)}

      <br /><br /><br /><br />

      <div className="merit-text">
        {language === "sv" ? svt2 : ent2}
      </div>

      <br />

       <div className="text-spacer-2">
          C.I.B. SE V-12 NORD V-10 NO V-12 NO V-08 NORD&FI UCH Buenazo&apos;s Viking:
      </div>

      <div className="indent-text-spacer-2">
          C.I.B. DK UCH NO UCH SE UCH Honungsmåne  
      </div>

      <div className="indent-text-spacer-2">
          Love Me Do 
      </div>

      <div className="indent-text-spacer-2">
          SE UCH Honungsmåne Love to Love
      </div>

      <div className="indent-text-spacer-2">
          SE UCH Honungsmåne Lucky Star
      </div>

      <div className="indent-text-spacer-2">
          NO UCH Honungsmåne Lover Boy
      </div>

      <div className="indent-text-spacer-2">
          SE JV-13 DK JV-13 SE UCH DK UCH Skystar&apos;s
      </div>

      <div className="indent-text-spacer-2">
          Louis
      </div>

      <div className="indent-text-spacer-2">
          DKCH KBHV10 BigChoice RosalinaMiaMaya
      </div>

      <div className="indent-text-spacer-2">
          SE UCH Xan-Liz v Enzzo
      </div>

      <div className="indent-text-spacer-2">
          NO UCH AU CH Valpgläntans Viktor
      </div>

      <div className="indent-text-spacer-2">
          DK UCH Rubini Catch The Dream Chowder
      </div>

      <br /><br />

      <div className="text-spacer-2">
          C.I.B. DK UCH NO UCH SE UCH Honungsmåne Love Me Do:
      </div>

      <div className="indent-text-spacer-2">
          C.I.B. DK V-11 NORD UCH Kläppas Anna Sui Love
      </div>

      <div className="indent-text-spacer-2">
          NORD UCH Kläppas A Curious Love
      </div>

      <div className="indent-text-spacer-2">
          DK UCH SE UCH Rubini Isabella Love Me Do
      </div>
      
      <div className="indent-text-spacer-2">
          IT CH Bichavas Bianca
      </div>

      <br /><br />
      
      <div className="text-spacer-2">
          SE JV-13 DK JV-13 SE UCH DK UCH Skystar&apos;s Louis:
      </div>

      <div className="indent-text-spacer-2">
          SE VV-24 DK UCH SE UCH NO UCH Meandi&apos;s
      </div>

      <div className="indent-text-spacer-2">
          Amazing Alba
      </div>

      <div className="indent-text-spacer-2">
          Multi-Champion VD CH Elrond von Heppenheimer
      </div>

      <div className="indent-text-spacer-2">
          CERT R-CACIB Ck Voila Give Me Five
      </div>

      <div className="indent-text-spacer-2">
          CERT R-CACIB Ck Sweet Bishamons Dance Of
      </div>

      <div className="indent-text-spacer-2">
          Dragons
      </div>

      <div className="indent-text-spacer-2">
          RLD F RLD N Sweet Bishamons King In the North
      </div>

      <div className="indent-text-spacer-2">
          FI UCH SE UCH Tilevis Flitwick Be A Viking
      </div>
      
      <div className="text-over-img">
        <h3>
          {language === "sv" ? svt3 : ent3} 
        </h3>
      </div>

      {img_maker(img21)}

      <div className="text-over-img">
        <h3>
          
        </h3>
      </div>

       {img_maker(img22)}
   
    </div>
  );
}
