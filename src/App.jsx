import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./comps/navbar/Navbar";
import Valkommen from "./comps/valkommen/Valkommen";
import Valkomme from "./comps/valkomme/Valkomme";
import Kontakt from "./comps/kontakt/Kontakt";
import Vård from "./comps/vård/Vård";
import Kullar from "./comps/kullar/Kullar";
import Resultat from "./comps/resultat/Resultat";
import Nyheter from "./comps/nyheter/Nyheter";
import Bell from "./comps/varahundar/bell/Bell";
import Bilbo from "./comps/varahundar/bilbo/Bilbo";
import Louis from "./comps/varahundar/louis/Louis";
import Malva from "./comps/varahundar/malva/Malva";
import Minnie from "./comps/varahundar/minnie/Minnie";
import Napoleon from "./comps/varahundar/napoleon/Napoleon";
import Sessan from "./comps/varahundar/sessan/Sessan";
import Sirius from "./comps/varahundar/sirius/Sirius";
import Vickan from "./comps/varahundar/vickan/Vickan";
import Vicke from "./comps/varahundar/vicke/Vicke";
import Pluto from "./comps/varahundar/pluto/Pluto";
import Doris from "./comps/varahundar/doris/Doris";
import Daphne from "./comps/varahundar/daphne/Daphne";
import Bella from "./comps/varahundar/bella/Bella";
import Albus from "./comps/varahundar/albus/Albus";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Valkommen />} />
        <Route path="/Valkommen" element={<Valkommen />} />
        <Route path="/Valkomme" element={<Valkomme />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/Vård" element={<Vård />} />
        <Route path="/Kullar" element={<Kullar />} />
        <Route path="/Resultat" element={<Resultat />} />
        <Route path="/Nyheter" element={<Nyheter />} />
        <Route path="/Bell" element={<Bell />} />
        <Route path="/Bilbo" element={<Bilbo />} />
        <Route path="/Louis" element={<Louis />} />
        <Route path="/Malva" element={<Malva />} />
        <Route path="/Minnie" element={<Minnie />} />
        <Route path="/Napoleon" element={<Napoleon />} />
        <Route path="/Sessan" element={<Sessan />} />
        <Route path="/Sirius" element={<Sirius />} />
        <Route path="/Vickan" element={<Vickan />} />
        <Route path="/Vicke" element={<Vicke />} />
        <Route path="/Pluto" element={<Pluto />} />
        <Route path="/Doris" element={<Doris />} />
        <Route path="/Daphne" element={<Daphne />} />
        <Route path="/Bella" element={<Bella />} />
        <Route path="/Albus" element={<Albus />} />
      </Routes>
    </BrowserRouter>
  );
}
