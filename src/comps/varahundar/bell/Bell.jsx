import "../varahundar.css";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";

export default function Bell () {
  return (
    <div className="gallery-page">
      <div className="text">
        <h1>Bell (Be A Viking Bell Gamgee)</h1>
        <div>
          <h3>Födelsefakta</h3>
          Född 10 september 2013
          <br />
          <br />
          <h3>Temperament/personlighet</h3>
          Bell är född här hemma tillsammans med sina fem syskon och hon blev den lilla prinsessan som Ida bestämde skulle bli kvar! Och det var ju helt rätt val – för vilka fantastiska minnen hon har gett oss! Inte bara hennes stora personlighet, roliga karaktär och skönhet utan också en fantastiskt utställningskarriär med resultat som Junior Världs Vinnare 2014 och Europa Vinnare 2015, Norsk Junior Vinnare 2014, championat i de nordiska länderna samt Best In Show SDHK 2017. 
          <br />
          <br />
          Om några månader fyller hon tretton år och hon är fortfarande glad och pigg och springer med ungdomarna i trädgården.
          <br />
          <br />
          <h3>Meriter</h3>
          EUW-15 JWW-14 FI UCH NO JV-14 NO UCH SE UCH
        </div>
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
          <h3>European Winner 2015</h3>
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
      <img src={img4} alt="main" className="dog-image" />

      <div className="text">
        <div>
          <h3>Junior World Winner 2014</h3>
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
