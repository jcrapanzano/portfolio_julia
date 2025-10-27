import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 font-medium transition ${location.pathname === path
      ? "text-peony border-b-2 border-peony"
      : "text-white hover:text-peony"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm transition-all duration-300">
      <div className="max-w-[2400px] mx-auto px-12 flex justify-between items-center h-20">
        <Link to="/" className="text-5xl 2xl:text-6xl font-serif italic font-semibold text-primary leading-none">
          z
        </Link>
        <div className="hidden items-center sm:flex font-sans 2xl:text-xl space-x-4 2xl:space-x-6">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/projects" className={linkClass("/projects")}>Projects</Link>
          <Link to="/cv" className={linkClass("/cv")}>CV</Link>
        </div>

        {/* Bouton hamburger pour mobile*/}
        <div className="sm:hidden">
          <button className="text-primary focus:outline-none text-3xl">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
