import React from "react";
import { useLocation } from "react-router-dom";

const Text: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  let headerText = "¡Construye tu mundo hoy!"; 

  if (path.includes("minecraft")) {
    headerText = "¡Construye tu mundo en Minecraft hoy!";
  } else if (path.includes("ark")) {
    headerText = "¡Construye tu mundo en Ark hoy!";
  } else if (path.includes("palworld")) {
    headerText = "¡Construye tu mundo en Palworld hoy!";
  }

  return (
    <div className="px-4 py-6 lg:relative text-justify mx-auto text-center bg-gradient-andes rounded-lg max-w-md
                    lg:px-10 xl:px-65 lg:bottom-80 lg:h-100 lg:max-w-none lg:w-full lg:rounded-none lg:flex lg:flex-col lg:justify-center 
                    xl:bottom-100
                    2xl:bottom-100 2xl:px-100">
      <h3 className="text-sm mb-1 text-pretty text-white lg:text-[32px] lg:text-[#00fff9]">
        {headerText}
      </h3>
      <p className="text-sm mb-4 text-pretty text-justify text-white lg:text-xl lg:text-[#00fff9]">
        Sabes lo que quieres: un servidor personalizado, sin límites ni fronteras.
        Pídenoslo, invita a tus amigos y empieza a jugar ahora. 🚀
      </p>
      <div className="text-right-2 lg:mt-4 lg:text-right">
        <a
          href="#"
          className="inline-block text-[#00fff9] text-pretty border text-xs border-[#00fff9] px-2 py-1 rounded-full transition-all duration-300 lg:text-xl"
        >
          Contrátanos ahora
        </a>
      </div>
    </div>
  );
};

export default Text;
