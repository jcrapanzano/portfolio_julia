import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const inactiveColor = {
    "/": "text-peony hover:text-warm",      // Page d'accueil
    "/projects": "text-peony hover:text-warm", // Page projets
    // "/project/": "text-peony hover:text-warm",
    "/cv": "text-white hover:text-warm",     // Page CV
  };

  const activeColor = {
    "/": "text-warm border-b-2 border-warm",      // Page d'accueil
    "/projects": "text-warm border-b-2 border-warm", // Page projets
    "/cv": "text-warm border-b-2 border-warm",  
  }

  const logoColor = {
    "/": "text-espresso",      // Page d'accueil
    "/projects": "text-espresso", // Page projets
    "/cv": "text-peony",  
  }

  const currentLogoColor = 
    logoColor[location.pathname] || "text-espresso";

  const currentInactiveColor =
    inactiveColor[location.pathname] || "text-peony hover:text-warm";

  const currentActiveColor =
    activeColor[location.pathname] || "text-peony hover:text-warm";
  

  const linkClass = (path) =>
    `px-4 py-2 font-medium transition ${
      location.pathname === path
      
      ? currentActiveColor
      : currentInactiveColor
    }`;

  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm transition-all duration-300">
      <div className="max-w-[2400px] mx-auto px-12 flex justify-between items-center h-20">
        <Link to="/" className={`text-5xl 2xl:text-6xl font-serif italic font-semibold leading-none ${currentLogoColor}`}>
          z
        </Link>
        <div className="hidden items-center sm:flex font-sans 2xl:text-xl space-x-4 2xl:space-x-6">
          <Link to="/" className={linkClass("/")}>Accueil</Link>
          <Link to="/projects" className={linkClass("/projects")}>Projets</Link>
          <Link to="/cv" className={linkClass("/cv")}>CV</Link>
        </div>

        {/* Bouton hamburger pour mobile*/}
        {/* <div className="sm:hidden ">
          <button className={`focus:outline-none text-3xl ${currentLogoColor}`}
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✕" : "☰"}
          </button>
        </div> */}
        {/* Bouton mobile */}
        <div className="sm:hidden">
          <button
            className={`focus:outline-none text-3xl ${currentLogoColor}`}
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

    </nav>
      {isOpen && (
        <div className="fixed text-cold inset-0 bg-peony/10 backdrop-blur-sm z-[60] flex justify-end transition-opacity duration-300">
          <div className="bg-warm w-2/3 max-w-xs h-full shadow-xl p-6 flex flex-col justify-between animate-slideInRight relative">
            
            {/* Bouton fermer */}
            <button
              className="absolute top-auto right-12 text-3xl focus:outline-none text-white"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* Liens du menu */}
            <nav className="flex flex-col space-y-6 mt-16 text-white font-sans">
              <Link to="/" className={linkClass("/")} onClick={() => setIsOpen(false)}>
                Accueil
              </Link>
              <Link to="/projects" className={linkClass("/projects")} onClick={() => setIsOpen(false)}>
                Projets
              </Link>
              <Link to="/cv" className={linkClass("/cv")} onClick={() => setIsOpen(false)}>
                CV
              </Link>
            </nav>

            {/* Réseaux sociaux */}
            {/* <div className="mt-auto border-t border-pinky/20 pt-4 text-pinky text-sm">
              <p>Retrouve-moi sur :</p>
              <div className="flex gap-3 mt-2">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a>
                <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </>

  );
}
