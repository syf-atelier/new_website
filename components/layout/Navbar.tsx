import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '@/assets/Logo.svg';
import Flecha from "@/assets/Flecha.svg";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isGamesOpen, setIsGamesOpen] = useState(false);

  return (
    <nav className="relative bg-[#0E0014] z-30">
      <div className="container mx-auto flex items-center justify-center p-4 text-white">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 mr-10 lg:w-74 lg:h-19" />
        </Link>
        <ul className="hidden lg:flex ml-4 lg:gap-10 xl:gap-25 2xl:gap-30 text-lg font-bold">
          <li className="hover:text-gray-400">
            <Link to="/" className="text-2xl">Inicio</Link>
          </li>
          <li className="relative hover:text-gray-400">
            <button
              onClick={() => setIsGamesOpen(!isGamesOpen)}
              className="flex items-center gap-1 focus:outline-none text-2xl"
            >
              Juegos
              <img
                src={Flecha}
                alt="Flecha"
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isGamesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isGamesOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-[#0E0014] z-40 py-2 w-40">
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link to="/Minecraft">Minecraft</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link to="/Ark">Ark</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link to="/Palworld">Palworld</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="hover:text-gray-400">
            <Link to="/Comunidad" className="text-2xl">Comunidad</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link to="/Blog" className="text-2xl">Blog</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link to="/Nosotros" className="text-2xl">Nosotros</Link>
          </li>
        </ul>
        <button
          className="flex flex-col gap-1.5 p-2 lg:hidden ml-auto"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <span className="block w-7 h-0.5 bg-white transition-all duration-300" />
          <span className="block w-7 h-0.5 bg-white transition-all duration-300" />
          <span className="block w-7 h-0.5 bg-white transition-all duration-300" />
        </button>
      </div>
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[#0E0014] z-50 transition-transform duration-300 origin-top ${
          isMobileOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-2 text-xl font-bold text-white">
          <li className="hover:bg-gray-700 rounded">
            <Link to="/" onClick={() => setIsMobileOpen(false)}>
              Inicio
            </Link>
          </li>
          <li className="hover:bg-gray-700 rounded">
            <Link to="/Minecraft" onClick={() => setIsMobileOpen(false)}>
              Minecraft
            </Link>
          </li>
          <li className="hover:bg-gray-700 rounded">
            <Link to="/Ark" onClick={() => setIsMobileOpen(false)}>
              Ark
            </Link>
          </li>
          <li className="hover:bg-gray-700 rounded">
            <Link to="/Palworld" onClick={() => setIsMobileOpen(false)}>
              Palworld
            </Link>
          </li>
          <li className="hover:bg-gray-700 rounded">
            <Link to="/Comunidad" onClick={() => setIsMobileOpen(false)}>
              Comunidad
            </Link>
          </li>
          <li className="hover:bg-gray-700 rounded">
            <Link to="/Nosotros" onClick={() => setIsMobileOpen(false)}>
              Nosotros
            </Link>
          </li>
          <li className="hover:bg-gray-700 rounded">
            <Link to="/Blog" onClick={() => setIsMobileOpen(false)}>
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
