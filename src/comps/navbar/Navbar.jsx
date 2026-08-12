import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/languageSlice";
import "./navbar.css";
import img1 from "../../imgs/navbar/img1.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dogsOpen, setDogsOpen] = useState(false);
 
  const dispatch = useDispatch();

  const language = useSelector(
    state => state.language.language
  );


  return (
    <div className="page">
      <div className="header" style={{ backgroundImage: `url(${img1})` }}>

  <div className="languageSelector">

    <span
      className={language === "sv" ? "activeFlag" : ""}
      onClick={() => dispatch(setLanguage("sv"))}
    >
      🇸🇪
    </span>

    <span
      className={language === "en" ? "activeFlag" : ""}
      onClick={() => dispatch(setLanguage("en"))}
    >
      🇬🇧
    </span>

  </div>

  <h1 className="coloredText">
    Be a Viking - Bichon Havanais
  </h1>
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
              {language === "sv" ? "Välkommen" : "Welcome"}
            </Link>

            <Link
              to="/Omoss"
              className="otherlinks"
              onClick={() => setMenuOpen(false)}
            >
              {language === "sv" ? "Om oss" : "About us"}
            </Link>


            <Link
              to="/Nyheter"
              className="otherlinks"
              onClick={() => setMenuOpen(false)}
            >
              {language === "sv" ? "Nyheter" : "News"}
            </Link>

            <div className="dropdown">
              <div onClick={() => setDogsOpen(!dogsOpen)}>
                {language === "sv" ? "Våra hundar ▾" : "Our dogs ▾"}
                </div>
              {dogsOpen && (
                <div className="dropdown-links">
                  <Link
                    to="/Bell"
                    className="dropdown-links"
                    onClick={() => setMenuOpen(false)}
                  >
                    Bell
                  </Link>
                  <Link
                    to="/Vicke"
                    className="dropdown-links"
                    onClick={() => setMenuOpen(false)}
                  >
                    Vicke
                  </Link>
                  <Link
                    to="/Minnie"
                    className="dropdown-links"
                    onClick={() => setMenuOpen(false)}
                  >
                    Minnie
                  </Link>
                  <Link
                    to="/Albus"
                    className="dropdown-links"
                    onClick={() => setMenuOpen(false)}
                  >
                    Albus
                  </Link>
                  <Link
                    to="/Louis"
                    className="dropdown-links"
                    onClick={() => setMenuOpen(false)}
                  >
                    Louis
                  </Link>

                  <p>
                    {language === "sv" ? "För Evigt Älskade:" : "Forever loved"}
                    </p>
                  <Link
                    to="/Napoleon"
                    className="dropdown-links"
                    onClick={() => setMenuOpen(false)}
                  >
                    Napoleon
                  </Link>
                  <Link
                    to="/Sessan"
                    className="dropdown-links"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sessan
                  </Link>
                  <Link
                    to="/Malva"
                    className="dropdown-links"
                    onClick={() => setMenuOpen(false)}
                  >
                    Malva
                  </Link>
                  <Link
                    to="/Sirius"
                    className="dropdown-links"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sirius
                  </Link>
                  <Link
                    to="/Pluto"
                    className="dropdown-links"
                    onClick={() => setMenuOpen(false)}
                  >
                    Pluto
                  </Link>

                  <p>
                    {language === "sv" ? "Hos Vänner:" : "With Friends"}
                    </p>
                  <Link
                    to="/Vickan"
                    className="dropdown-links"
                    onClick={() => setMenuOpen(false)}
                  >
                    Vickan
                  </Link>
                  <Link
                    to="/Bilbo"
                    className="dropdown-links"
                    onClick={() => setMenuOpen(false)}
                  >
                    Bilbo
                  </Link>
                  <Link
                    to="/Bella"
                    className="dropdown-links"
                    onClick={() => setMenuOpen(false)}
                  >
                    Bella
                  </Link>
                  <Link
                    to="/Daphne"
                    className="dropdown-links"
                    onClick={() => setMenuOpen(false)}
                  >
                    Daphne
                  </Link>
                  <Link
                    to="/Doris"
                    className="dropdown-links"
                    onClick={() => setMenuOpen(false)}
                  >
                    Doris
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/Resultat"
              className="otherlinks"
              onClick={() => setMenuOpen(false)}
            >
              {language === "sv" ? "Resultat" : "Results"}
            </Link>

            <Link
              to="/Valpar"
              className="otherlinks"
              onClick={() => setMenuOpen(false)}
            >
              {language === "sv" ? "Valpar" : "Puppies"}
            </Link>

            <Link
              to="/Vård"
              className="otherlinks"
              onClick={() => setMenuOpen(false)}
            >
              {language === "sv" ? "Skötsel och pälsvård" : "Care & Grooming"}
            </Link>

            <Link
              to="/Kontakt"
              className="otherlinks"
              onClick={() => setMenuOpen(false)}
            >
              {language === "sv" ? "Kontakt" : "Contact"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

//🇸🇪 🇬🇧


/// Kan va bra att spara ///
/*
<div className="dropdown">
              <div className="dropdown-header">
                <Link
                  to="/Valpar"
                  className="otherlinks"
                  onClick={() => setMenuOpen(false)}
                >
                  Valpar
                </Link>

                <span
                  className="dropdown-arrow"
                  onClick={() => setPuppiesOpen(!puppiesOpen)}
                  style={{ cursor: "pointer", marginLeft: "6px" }}
                >
                  ▾
                </span>
              </div>

              {puppiesOpen && (
                <div className="dropdown-links-container">
                  <Link
                    to="/Vård"
                    className="dropdown-links"
                    onClick={() => setMenuOpen(false)}
                  >
                    Skötsel o pälsvård
                  </Link>
                  <Link
                    to="/Kullar"
                    className="dropdown-links"
                    onClick={() => setMenuOpen(false)}
                  >
                    Kullar
                  </Link>
                </div>
              )}
            </div>
*/