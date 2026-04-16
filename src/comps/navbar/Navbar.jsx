import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import "./navbar.css"
import img1 from "../../imgs/navbar/img1.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dogsOpen, setDogsOpen] = useState(false);
  const [puppiesOpen, setPuppiesOpen] = useState(false);
 

  return (
    <div className="page">
      <div className="header" style={{ backgroundImage: `url(${img1})` }}>
        <h1 className="coloredText">Be a Viking - Bichon Havanais</h1>
        <div />

        {/* MENU */}
        <div className="menu-wrapper">
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            ☰
          </div>

          {/* Slide menu */}
          <div className={`dropdown-menu ${menuOpen ? "open" : ""}`}>
            <div className="close" onClick={() => setMenuOpen(false)}>
              ✕
            </div>

            <Link
              to="/Valkommen"
              className="otherlinks"
              onClick={() => setMenuOpen(false)}
            >
              Välkommen
            </Link>

            <Link
              to="/Omoss"
              className="otherlinks"
              onClick={() => setMenuOpen(false)}
            >
              Om oss
            </Link>

            <div className="dropdown">
              <div onClick={() => setDogsOpen(!dogsOpen)}>Våra hundar ▾</div>
              {dogsOpen && (
                <div className="dropdown-links">
                  <Link to="/Bell" className="dropdown-links" onClick={() => setMenuOpen(false)}>
                    Bell
                  </Link>
                  <Link to="/Vicke" className="dropdown-links" onClick={() => setMenuOpen(false)}>
                    Vicke
                  </Link>
                  <Link to="/Minnie" className="dropdown-links" onClick={() => setMenuOpen(false)}>
                    Minnie
                  </Link>
                  <Link to="/Albus" className="dropdown-links" onClick={() => setMenuOpen(false)}>
                    Albus
                  </Link>
                  <Link to="/Louis" className="dropdown-links" onClick={() => setMenuOpen(false)}>
                    Louis
                  </Link>

                  <p>För Evigt Älskade:</p>
                  <Link to="/Napoleon" className="dropdown-links" onClick={() => setMenuOpen(false)}>
                    Napoleon
                  </Link>
                  <Link to="/Sessan" className="dropdown-links" onClick={() => setMenuOpen(false)}>
                    Sessan
                  </Link>
                  <Link to="/Malva" className="dropdown-links" onClick={() => setMenuOpen(false)}>
                    Malva
                  </Link>
                  <Link to="/Sirius" className="dropdown-links" onClick={() => setMenuOpen(false)}>
                    Sirius
                  </Link>
                  <Link to="/Pluto" className="dropdown-links" onClick={() => setMenuOpen(false)}>
                    Pluto
                  </Link>

                  <p>Hos Vänner:</p>
                  <Link to="/Vickan" className="dropdown-links" onClick={() => setMenuOpen(false)}>
                    Vickan
                  </Link>
                  <Link to="/Bilbo" className="dropdown-links" onClick={() => setMenuOpen(false)}>
                    Bilbo
                  </Link>
                  <Link to="/Bella" className="dropdown-links" onClick={() => setMenuOpen(false)}>
                    Bella
                  </Link>
                  <Link to="/Daphne" className="dropdown-links" onClick={() => setMenuOpen(false)}>
                    Daphne
                  </Link>
                  <Link to="/Doris" className="dropdown-links" onClick={() => setMenuOpen(false)}>
                    Doris
                  </Link>

                </div>
              )}
            </div>


            <div className="dropdown">
              <div onClick={() => setPuppiesOpen(!puppiesOpen)}>Valpar ▾</div>
              {puppiesOpen && (
                <div className="dropdown-links">
                  <Link to="/Vård" className="dropdown-links" onClick={() => setMenuOpen(false)}>
                    Skötsel o pälsvård
                  </Link>
                  <Link to="/Kullar" className="dropdown-links" onClick={() => setMenuOpen(false)}>
                    Kullar
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/Resultat"
              className="otherlinks"
              onClick={() => setMenuOpen(false)}
            >
              Resultat/Champions
            </Link>

            <Link
              to="/Nyheter"
              className="otherlinks"
              onClick={() => setMenuOpen(false)}
            >
              Nyheter
            </Link>

             <Link
              to="/Kontakt"
              className="otherlinks"
              onClick={() => setMenuOpen(false)}
            >
              Kontakt
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
