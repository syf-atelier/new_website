import React from "react";
import { useCartContext } from "@/components/ui/CartContext";

const Arkboton: React.FC = () => {
  const { selectedPage, setSelectedPage } = useCartContext();

  return (
    <div className="flex flex-col items-center space-y-6 
                    lg:relative lg:top-100 
                    xl:top-120 
                    2xl:top-120">
      <p className="text-white text-xs mb-1 lg:text-2xl">Elije</p>
      <div className="flex bg-[#00fff9]/50 rounded-full shadow-lg">
        <button
          className={`w-[132px] h-[31px] text-xs transition-all duration-300 lg:text-2xl lg:w-67 lg:h-17 ${
            selectedPage === "Survival Evolved"
              ? "bg-[#00fff9] text-black font-bold shadow-md rounded-full"
              : "text-[#9c9c9c] rounded-l-[30px]"
          }`}
          onClick={() => setSelectedPage("Survival Evolved")}
        >
          Survival Evolved
        </button>
        <button
          className={`w-[132px] h-[31px] text-xs transition-all duration-300 lg:text-2xl lg:w-67 lg:h-17 ${
            selectedPage === "Survival Ascended"
              ? "bg-[#00fff9] text-black font-bold shadow-md rounded-full"
              : "text-[#9c9c9c] rounded-r-[30px]"
          }`}
          onClick={() => setSelectedPage("Survival Ascended")}
        >
          Survival Ascended
        </button>
      </div>
      {selectedPage === "Survival Evolved" && (
        <div className="mt-6 text-center px-4 
                        lg:px-[90px]
                        xl:px-[200px]
                        2xl:px-[300px]">
          <h2 className="text-white text-xl lg:text-3xl font-bold lg:text-[#00fff9] lg:flex">
            ARK: Survival Evolved
          </h2>
          <p className="text-gray-300 text-xs lg:text-2xl mt-2 text-left">
            Lanzado en 2015, ARK: Survival Evolved invita a los jugadores a explorar un
            mundo lleno de dinosaurios y secretos antiguos. Combina supervivencia, construcción
            y combate en una experiencia personalizable, ideal para jugar en solitario o en grupo.
          </p>
          <h2 className="text-[#00fff9] text-lg lg:text-2xl font-bold mt-4 lg:text-[#00fff9] lg:flex">
            Personalización
          </h2>
          <ul className="list-disc list-inside text-gray-100 text-left text-pretty text-xs px-3 space-y-1 lg:text-2xl lg:mt-4 lg:mb-10">
            <li>Ajusta la configuración del juego.</li>
            <li>Modifica tiempos de cría y experiencia.</li>
            <li>Agrega mods y personaliza el servidor.</li>
            <li>Sé el dueño absoluto.</li>
            <li>Protege el acceso con clave.</li>
          </ul>
        </div>
      )}

      {selectedPage === "Survival Ascended" && (
        <div className="mt-6 text-center px-4 
                        lg:px-[90px]
                        xl:px-[200px]
                        2xl:px-[300px]">
          <h2 className="text-white text-xl lg:text-3xl font-bold lg:text-[#00fff9] lg:flex">
            ARK: Survival Ascended
          </h2>
          <p className="text-gray-300 text-xs lg:text-2xl mt-2 text-left">
            Lanzado a finales del 2023, ARK: Survival Ascended es una versión mejorada del
            original, desarrollada con Unreal Engine 5 para gráficos avanzados y un rendimiento
            optimizado. Incluye contenido nuevo y mejoras multijugador, ofreciendo una experiencia
            fresca para veteranos y principiantes.
          </p>
          <h2 className="text-[#00fff9] text-lg lg:text-2xl font-bold mt-4 lg:text-[#00fff9] lg:flex">
            Personalización
          </h2>
          <ul className="list-disc list-inside text-gray-100 text-left text-pretty text-xs px-3 space-y-1 lg:text-2xl lg:mt-4 lg:mb-10">
            <li>Ajusta la configuración del juego.</li>
            <li>Modifica tiempos de cría y experiencia.</li>
            <li>Agrega mods y personaliza el servidor.</li>
            <li>Sé el dueño absoluto.</li>
            <li>Protege el acceso con clave.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Arkboton;
