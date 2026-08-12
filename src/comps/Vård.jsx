import "./comps.css";
import img1 from "../imgs/vård/img1.jpeg";
import img2 from "../imgs/vård/img2.jpeg";
import img3 from "../imgs/vård/img3.jpeg";
import img_maker from "./imagemaker/ImageMaker";
import React from "react";
import { useSelector } from "react-redux";


export default function Vård() {

  const language = useSelector((state) => state.language.language);

  const svt1 = 
    "Skötsel- och pälsvården är viktigt och är en del av att dela vardagen med en hund. Havanaisen är en långhårig ras och måste därför, för att må bra och se trevlig ut, ha regelbunden omvårdnad vilket gäller alla pälshundar. Lär man sig bara hur man sköter den och är regelbunden i sina rutiner så kan man njuta av att ha en glad, frisk och vacker hund med en mjuk och silkeslen päls. Utan tovor!"

  const ent1 = 
  "Grooming and coat care are important aspects of sharing your daily life with a dog. The Havanese is a long-haired breed; to stay healthy and look their best, they require regular grooming—as do all dogs with this type of coat. Once you learn the proper care techniques and establish a routine, you can enjoy having a happy, healthy, and beautiful dog with a soft, silky coat—completely free of tangles!";

   const svt2 = 
    "Vi har ett talesätt hemma hos oss ”Höjden av lyx är en nybadad Havanais”! Och det finns många fler fördelar med en Havanais; den hårar inte ner och fäller inte päls i möbler, den luktar inte ”hund” utan doftar gott från senaste badet! Pälsen är ren och silkesmjuk och inte fet som hos vissa andra raser. Många allergiker tål rasen, dock inte alla. Och genom sin lilla storlek och positiva sinnelag brukar de alltid vara välkomna överallt."


  const ent2 = 
  'We have a saying at home: "The height of luxury is a freshly bathed Havanese!" There are many other advantages to the Havanese, too: they do not shed fur onto the furniture, and they do not have a "doggy" odor — instead, they smell fresh and clean from their last bath! Their coat is clean and silky-soft, never greasy like that of some other breeds. Many allergy sufferers tolerate the breed well, though not everyone does. And thanks to their small size and cheerful disposition, they are usually welcome just about anywhere.';


  const svt3 = 
  "En del väljer att klippa sina Havanaiser och vi säger alltid att högsta prioritet är att hund och hundägare ska trivas ihop och ha kul. Men även en kortklippt Havanais behöver sin regelbundna skötsel (Obs!!) Se stunden som en mysig stund att vara nära, det är en bra kontaktövning, ta det lugnt, beröm hunden och belöna med godis. Och börja med skötselrutinerna direkt när du kommer hem med din lilla valp, då får du en mysig liten kompis som är van att vara hanterad."

  const ent3 = 
  "Some people choose to keep their Havanese clipped short, and we always say that the top priority is for the dog and owner to enjoy each other's company and have fun. However, even a short-clipped Havanese requires regular grooming (take note!). View this as a cozy time to bond and be close—it is a great exercise for building a connection; take it easy, praise the dog, and offer treats as a reward. Start the grooming routine as soon as you bring your little puppy home; this ensures you have a sweet little companion who is accustomed to being handled.";

  const svt4 = 
  "Följande skötselråd gäller både långhåriga och kortklippta: Varje dag ska ögonen skötas, torka i ögonvrån med en bomullspad doppad i varmt vatten eller ögonbad. Det kan vara lätt att få bort sömngruset med en liten mustaschkam."

  const ent4 = 
  'The following grooming advice applies to both long-haired and short-clipped dogs: the eyes need daily care—wipe the corners with a cotton pad dipped in warm water or an eye-cleaning solution. A small mustache comb is handy for removing any "sleep" (crusty discharge).';

  const svt5 = 
  "Borsta tänderna på din hund varje dag, det ger hunden en frisk munhälsa. En ren och väldoftande mun utan krypande tandsten och tandont ger dig en glad och frisk hund! Dessutom slipper du onödiga veterinärkostnader."

  const ent5 = 
  "Brush your dog's teeth every day to ensure good oral health. A clean, fresh-smelling mouth—free from creeping tartar and tooth-pain results in a happy, healthy dog! Plus, you avoid unnecessary veterinary costs.";

  const svt6 = 
  "Det är bra att klippa klorna varje vecka, bestäm en fast dag som gör det lättare att komma ihåg, exv söndagar. Vid blöt regnig väderlek, se till att torka tassarna efter promenaden. Våta och fuktiga tassar som inte får torka mellan promenaderna kan när hunden försöker slicka sig torr, få svamp. Se över pälsen under tassarna och mellan trampdynorna en gång i månaden."

  const ent6 = 
  "It is a good idea to trim the claws weekly; pick a specific day—such as Sunday—to make it easier to remember. In wet or rainy weather, make sure to dry the paws after a walk. If wet or damp paws are not allowed to dry between walks, the dog may develop a fungal infection while trying to lick itself dry. Check the fur under the paws and between the pads once a month.";


  const svt7 = 
  "Klipp och ansa försiktigt så att hunden inte går och halkar på pälsen eller får fukt som kan leda till svamp. Kolla igenom öronen vid bad. Våra hundar brukar sällan ha mycket hår i öronen men om det blir det, får man försiktigt ta bort det. Efter promenad i skog och mark, särskilt högt gräs, gå igenom hunden för att få bort eventuella fästingar. Apoteken säljer olika medel för att hålla kvarsittande fästingarna. Vi använder Bravecto, med det finns fler andra som kan användas ex. Frontline men aldrig fästinghalsband (allvarliga allergireaktioner har förekommit)."

  const ent7 = 
  "Trim and groom carefully so the dog does not slip on the fur or accumulate moisture that could lead to fungal growth. Check the ears during baths. Our dogs rarely have much hair in their ears, but if it does accumulate, it should be removed carefully. After walks in woods or fields—especially in tall grass—inspect the dog to remove any ticks. Pharmacies sell various products for tick prevention. We use Bravecto, though other options exist (such as Frontline); however, never use tick collars (serious allergic reactions have been reported).";


  const svt8 = 
  "En Havanais skall badas ofta, med 7 – 14 dagars mellanrum. Badar du din Havanais regelbundet så blir pälsvården lättare, en ren päls är lätt att borsta igenom och det bildas då väldigt lite tovor. En smutsig, ovårdad päls är mycket svårare att sköta och framförallt inte bra för hunden då den under tovor kan dölja fästingar och sår. Observera att en nedklippt Havanais får också tovor så småningom och måste skötas på samma sätt som en långhårig."

  const ent8 = 
  "A Havanese needs frequent bathing—every 7 to 14 days. Regular bathing makes coat care easier; a clean coat is simple to brush through, and very few mats form. A dirty, unkempt coat is much harder to manage and, more importantly, is not good for the dog, as mats can hide ticks and sores. Please note that a Havanese with a clipped coat will also eventually develop mats and requires the same grooming routine as a long-haired one.";


  const svt9 = 
  "När valpen börjar närma sig nio månader får man gå igenom pälsen oftare (flera gånger i veckan) en period för att undvika tovor. Innan badet reder man ut eventuella tovor och badar därefter hunden i ett milt schampo och avslutar badet med balsam. Krama ur pälsen försiktigt med en s k torkduk och föna hunden torr. Innan valpen flyttar med dig hem går vi igenom alla moment så att du som valpköpare känner dig trygg med hur du ska sköta din hund på bästa sätt! Du får med hem råd och instruktioner så att du sedan i lugn och ro kan läsa på hemmaplan. Och du är alltid välkommen med dina frågor och funderingar."

  const ent9 = 
  "As the puppy approaches nine months of age, you will need to go through its coat more frequently—several times a week—for a period to prevent matting. Before bathing, detangle any mats, then wash the dog with a mild shampoo and finish with conditioner. Gently squeeze excess water from the coat using a drying towel and blow-dry the dog. Before the puppy goes home with you, we will walk through every step of the process so that you, as the owner, feel confident in how best to care for your dog! You will receive advice and instructions to take home, allowing you to review the information at your own pace. You are also always welcome to reach out with any questions or concerns.";



  return (
    <div className="gallery-page">
      <div className="text-over-img">
        <h1>
          {language === "sv" ? "Skötsel och pälsvård" : "Grooming and Coat Care"}
        </h1>{language === "sv" ? svt1 : ent1}
        
        <br></br><br></br>
        {language === "sv" ? svt2 : ent2}
      </div>

      {img_maker(img1)}

      <div className="text-between-imgs">
          {language === "sv" ? svt3 : ent3}
          <br></br>
          {language === "sv" ? svt4 : ent4}
          <br></br> <br></br>
          {language === "sv" ? svt5 : ent5}
      </div>

      {img_maker(img2)}

      <div className="text-between-imgs">

        {language === "sv" ? svt6 : ent6}
        <br></br><br></br>
        {language === "sv" ? svt7 : ent7}
      </div>

      {img_maker(img3)}

      <div className="text-under-img">
          {language === "sv" ? svt8 : ent8}
          <br /><br />
          {language === "sv" ? svt9 : ent9}

      </div>

    </div>
  );
}
