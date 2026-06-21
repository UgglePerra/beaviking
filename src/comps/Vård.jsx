import "./comps.css";
import img1 from "../imgs/vård/img1.jpeg";
import img2 from "../imgs/vård/img2.jpeg";
import img3 from "../imgs/vård/img3.jpeg";
import img_maker from "./imagemaker/ImageMaker";


export default function Vård() {

  return (
    <div className="gallery-page">
      <div className="text-over-img">
        <h1>Skötsel och pälsvård</h1>
        Skötsel- och pälsvården är viktigt och är en del av att dela vardagen
        med en hund. Havanaisen är en långhårig ras och måste därför, för att
        må bra och se trevlig ut, ha regelbunden omvårdnad vilket gäller alla
        pälshundar. Lär man sig bara hur man sköter den och är regelbunden i
        sina rutiner så kan man njuta av att ha en glad, frisk och vacker hund
        med en mjuk och silkeslen päls. Utan tovor!
        <br></br><br></br>
        Vi har ett talesätt hemma hos oss ”Höjden av lyx är en nybadad
        Havanais”! Och det finns många fler fördelar med en Havanais; den
        hårar inte ner och fäller inte päls i möbler, den luktar inte ”hund”
        utan doftar gott från senaste badet! Pälsen är ren och silkesmjuk och
        inte fet som hos vissa andra raser. Många allergiker tål rasen, dock
        inte alla. Och genom sin lilla storlek och positiva sinnelag brukar de
        alltid vara välkomna överallt.
      </div>

      {img_maker(img1)}

      <div className="text-between-imgs">
          En del väljer att klippa sina Havanaiser och vi säger alltid att
          högsta prioritet är att hund och hundägare ska trivas ihop och ha kul.
          Men även en kortklippt Havanais behöver sin regelbundna skötsel
          (Obs!!) Se stunden som en mysig stund att vara nära, det är en bra
          kontaktövning, ta det lugnt, beröm hunden och belöna med godis. Och
          börja med skötselrutinerna direkt när du kommer hem med din lilla
          valp, då får du en mysig liten kompis som är van att vara hanterad.
          <br></br>
          Följande skötselråd gäller både långhåriga och kortklippta: Varje dag
          ska ögonen skötas, torka i ögonvrån med en bomullspad doppad i varmt
          vatten eller ögonbad. Det kan vara lätt att få bort sömngruset med en
          liten mustaschkam.  
          <br></br> <br></br>
          Borsta tänderna på din hund varje dag, det ger
          hunden en frisk munhälsa. En ren och väldoftande mun
          utan krypande tandsten och tandont ger dig en glad och frisk hund! Dessutom slipper du onödiga veterinärkostnader.
      </div>

      {img_maker(img2)}

      <div className="text-between-imgs">

          Det är bra att klippa klorna varje vecka, bestäm en fast dag som gör det
          lättare att komma ihåg, exv söndagar. Vid blöt regnig väderlek, se
          till att torka tassarna efter promenaden. Våta och fuktiga tassar som
          inte får torka mellan promenaderna kan när hunden försöker slicka sig
          torr, få svamp. Se över pälsen under tassarna och mellan trampdynorna
          en gång i månaden.
          <br></br><br></br>
          Klipp och ansa försiktigt så att hunden inte går och halkar på pälsen
          eller får fukt som kan leda till svamp. Kolla igenom öronen vid bad.
          Våra hundar brukar sällan ha mycket hår i öronen men om det blir det,
          får man försiktigt ta bort det. Efter promenad i skog och mark,
          särskilt högt gräs, gå igenom hunden för att få bort eventuella
          fästingar. Apoteken säljer olika medel för att hålla kvarsittande
          fästingarna. Vi använder Bravecto, med det finns fler andra som kan
          användas ex. Frontline men aldrig fästinghalsband (allvarliga allergireaktioner har förekommit).
      </div>

      {img_maker(img3)}

      <div className="text-under-img">
          En Havanais skall badas ofta, med 7 – 14 dagars mellanrum. Badar du
          din Havanais regelbundet så blir pälsvården lättare, en ren päls är
          lätt att borsta igenom och det bildas då väldigt lite tovor. En
          smutsig, ovårdad päls är mycket svårare att sköta och framförallt inte
          bra för hunden då den under tovor kan dölja fästingar och sår.
          Observera att en nedklippt Havanais får också tovor så småningom och
          måste skötas på samma sätt som en långhårig.
          <br />
          <br />
          När valpen börjar närma sig nio månader får man gå igenom pälsen
          oftare (flera gånger i veckan) en period för att undvika tovor. Innan
          badet reder man ut eventuella tovor och badar därefter hunden i ett
          milt schampo och avslutar badet med balsam. Krama ur pälsen försiktigt
          med en s k torkduk och föna hunden torr. Innan valpen flyttar med dig
          hem går vi igenom alla moment så att du som valpköpare känner dig
          trygg med hur du ska sköta din hund på bästa sätt! Du får med hem råd
          och instruktioner så att du sedan i lugn och ro kan läsa på hemmaplan.
          Och du är alltid välkommen med dina frågor och funderingar.

      </div>

    </div>
  );
}
