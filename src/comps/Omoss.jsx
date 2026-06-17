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
import img_maker from "./imagemaker/ImageMaker";


export default function Omoss() {
  const images = [img1, img5, img4];

  return (
    <>
      <div className="gallery-page">
        <div className="text">
          <h1>Om oss</h1>
        </div>

        {img_maker(img0)}

        <div className="text-spacer">
          Välkommen till Be A Viking Kennel och våra underbara Havanaiser. För snart tjugofem år sedan, 2002 kom vår första Havanais hem, och ganska snart blev de fler. Min dotter Ida och jag har kenneln Be A Viking och 2012 föddes vår första kull. Att ha Havanaiser i familjen är bland det finaste som finns, varje dag sprider de glädje!! Vi är aktiva med hundarna i naturen, olika aktiveringskurser, på utställning, Nosework, Rallylydnad - allt som gör hundarna och oss glada!
          <br /> <br />
          En sommar träffade vi för första gången Havanaiser och blev förälskade. 2002 hämtade vi hem vår första Havanais Pluto från Aco Tara’s kennel i Stockholm. Han följde med oss på allt ifrån skidåkning, fjällvandring, båtturer i skärgården, agility och trivdes med allt, bara han fick vara med. När Napoleon från Buenazo's kennel kom in i familjen och klev rakt in i våra hjärtan började intresset för hundutställningar ta fart på allvar. En fantastisk resa började och drivkraften växte att lära mer om hundens beteende, positiv inlärning, avelsarbete och anatomi. Då Napoleon blev pappa för första gången hävdade Ida bestämt att man måste behålla en valp – så Sirius från kennel Honungsmåne flyttade in! Så efter alla kurser, utbildningar och utställningar – ivrigt påhejade av vänner att vi måste skaffa en tik då intresset var stort - så hämtade vi hem vår Malva från Blue Temptation i Tyskland 2010, en underbart vacker och rolig liten tik! Hon blev mamma till våra två första valpkullar där Sessan och Bell stannade kvar. Två underbara Havanais tikar; som förutom att glädja oss varje dag nådde mycket fina framgångar i utställningsringarna!

          <br /> <br />
          Under åren har lusten att lära mer om våra vänner hundarna bara ökat. Utbildningar som jag Anna-Karin har gått är bl a Svenska Kennelklubbens Uppfödarutbildning, Avel- o Reproduktionsutbildning, Anatomi- och Bedömningsutbildning, Avel och Genetik VKK, ringsekreterare samt har arbetat på Blå stjärnans Djursjukhus. Ida har tränat och tävlat i juniorhandling med bästa resultat som BIS-1 på Malmös Internationella utställning 2009. Professionellt är vi båda utbildade civilekonomer. 
          Vi är medlemmar i Svenska Kennelklubben, rasklubben BBHC (Bolognese Bichon Havanais Club) och Svenska Dvärghundsklubben. Vi hälsotester våra hundar regelbundet och följer SKK grundregler, avelspolicy samt BBHC avelsrekommendationer. Jag Anna-Karin har under åren haft olika roller i rasklubben som styrelseledamot, revisor samt aktivitetsombud Västra kretsen. Idag är jag styrelseledamot med ansvar för ”Avel & Hälsa”.
          <br /> <br />
          Kennelnamnet Be A Viking är en hyllning till Napoleon som i stamtavlan hette Viking och en önskan att våra valpar får hans underbara temperament och blir så glada, friska och vackra som vår Viking!
        </div>

        {img_maker(img1)}

        {img_maker(img2)}

        {img_maker(img3)}

      </div>

      <video 
        controls
        autoPlay
        loop
        muted
        playsInline>
        <source src={mov6} type="video/mp4" />
      </video>

      <br /><br />

    </>
  );
}
