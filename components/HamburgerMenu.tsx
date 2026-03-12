import { useState } from "react";

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Botón hamburguesa */}
            <button
                className="flex flex-col gap-1.5 p-2 md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="block w-7 h-0.5 bg-white transition-all duration-300" />
                <span className="block w-7 h-0.5 bg-white transition-all duration-300" />
                <span className="block w-7 h-0.5 bg-white transition-all duration-300" />
            </button>

            {/* Menú desplegable */}
            <div
                className={`absolute top-full left-0 w-full bg-black/90 text-white transition-transform duration-300 origin-top transform ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                    }`}
            >
                <ul className="flex flex-col items-start p-4 space-y-2 text-lg font-medium">
                    <li className="hover:text-gray-400"><a href="#">Inicio</a></li>
                    <li className="hover:text-gray-400"><a href="#">Minecraft</a></li>
                    <li className="hover:text-gray-400"><a href="#">Ark</a></li>
                    <li className="hover:text-gray-400"><a href="#">Palworld</a></li>
                    <li className="hover:text-gray-400"><a href="#">Comunidad</a></li>
                    <li className="hover:text-gray-400"><a href="#">Nosotros</a></li>
                    <li className="hover:text-gray-400"><a href="#">Blog</a></li>
                </ul>
            </div>
        </div>
    );
}
