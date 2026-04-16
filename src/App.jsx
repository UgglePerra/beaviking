import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Navbar from "./comps/navbar/Navbar";
import Valkommen from "./comps/valkommen/Valkommen";
import Kontakt from "./comps/kontakt/Kontakt";
import Vård from "./comps/vård/Vård";
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

//import Bella from "./comps/varahundar/bella/Bella";
//import Daphne from "./comps/varahundar/daphne/Daphne";
//import Doris from "./comps/varahundar/doris/Doris";
//import Albus from "./comps/varahundar/albus/Albus";






function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Valkommen />} />
        <Route path="/Valkommen" element={<Valkommen />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/Vård" element={<Vård />} />
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
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;