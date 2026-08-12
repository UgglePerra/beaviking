import "../../comps.css"
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img_maker from "../../imagemaker/ImageMaker";
import React from "react";
import { useSelector } from "react-redux";


export default function Sirius () {

  const language = useSelector((state) => state.language.language);
                
  const svt1 = "Född 6 juni 2008";

  const ent1 = "Born June 6, 2008"

  const svt2 = 
  "Sirius var son till Napoleon och föddes på Nationaldagen 2008. Han var den modigaste och mest energiska valpen bland sina syskon och han blev Idas. Efter en busig tonårsperiod mognade han till ett fantastiskt temperament. Då han växte upp med Ida och brorsan Adam var han trygg bland kompisgäng, gängliga killar och de flesta miljöer.";

  const ent2= 
  "Sirius was the son of Napoleon and was born on Sweden's National Day in 2008. He was the bravest and most energetic puppy of the litter and became Ida’s dog. After a mischievous adolescence, he matured into a dog with a wonderful temperament. Having grown up with Ida and his brother Adam, he was confident around groups of friends, lanky teenage boys, and in most environments."

  const svt3 = 
  "Sirius hade en särskild utstrålning och vacker som han var blev han som valp Best In Show på Skaraborgs Wintershow 2008! Innan ett-årsdagen blev han Bäst I rasen, hann med nio CERT och fina placeringar innan han fyllde två då han blev flerfaldig och internationell champion! Två år i rad blev han Sveriges fjärde vinstrikaste Havanais. Framförallt älskade han freestyle!";

  const ent3= 
  "Sirius had a special charisma; handsome as he was, he won Best in Show as a puppy at the Skaraborg Winter Show in 2008! Before his first birthday, he had already won Best of Breed and secured nine CACs; by the time he turned two, he had achieved multiple championship titles, including International Champion! For two consecutive years, he was Sweden’s fourth most successful Havanese. Above all, he loved freestyle!"

  const svt4 = 
  "Sirius är mormors morfar till Albus💞";

  const ent4= 
  "Sirius is Albus’s great-great-grandfather 💞"

  const svt5 = 
  "Drygt 14 år fick Ida och Sirius tillsammans. Han var Idas största dröm som slog in. De två tillsammans blev oskiljaktiga vänner ❤️❤️";

  const ent5= 
  "Ida and Sirius had just over 14 years together. He was the realization of Ida’s greatest dream. The two of them became inseparable friends ❤️❤️"

  return (
    <div className="gallery-page">
      <div className="text-over-img">
        <h1>Sirius</h1>
        <h2>C.I.B. DK CH NO CH SE CH
          <br />
          Honungsmåne Love Me Do</h2>
        <br />
        {language === "sv" ? svt1 : ent1}
        <br /><br />
        {language === "sv" ? svt2 : ent2} 
        <br /><br />
        {language === "sv" ? svt3 : ent3}
        <br /><br />
        {language === "sv" ? svt4 : ent4}
        <br /><br />
        {language === "sv" ? svt5 : ent5}
      </div>

      {img_maker(img1)}

      <div className="space-between-imgs"></div>

      {img_maker(img2)}

      <div className="space-between-imgs"></div>

      {img_maker(img3)}

      <div className="space-between-imgs"></div>

      <div className="text-over-img">
        <h3>
        {language === "sv" ? "Sirius 14 år" : "Sirius, 14 years old"}
        </h3>
      </div>

      {img_maker(img4)}

    </div>
  );
}

