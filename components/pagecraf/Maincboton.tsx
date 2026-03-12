import React, { useState } from "react";
import Maincopcion from "@/components/pagecraf/Maincopcion";
import IntegratedCalculator from "@/components/ui/IntegratedCalculator";
import { MaincopcionConfig, VersionConfig } from "@/config/MaincopcionConfig";

const Maincboton: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<"Java" | "Bedrock">("Java");
  const [currentConfig, setCurrentConfig] = useState<VersionConfig>(MaincopcionConfig[0]);

  const handleToggle = (option: "Java" | "Bedrock"): void => {
    setSelectedOption(option);
    const newConfig = MaincopcionConfig.find((config) => config.version === option);
    if (newConfig) {
      setCurrentConfig(newConfig);
    }
  };

  return (
    <div className="flex flex-col items-center px-2 space-y-6 
                    lg:px-10 lg:relative lg:top-[310px] 
                    xl:top-[400px] xl:relative
                    2xl:top-[430px] 2xl:relative">
      <p className="text-white text-xs mb-1 text-pretty
                    lg:text-2xl ">Elije</p>
      <div className="flex bg-[#00fff9]/50 rounded-full shadow-lg">
        <button
          className={`w-[86px] h-[31px] transition-all duration-300 lg:text-2xl ${
            selectedOption === "Java"
              ? "bg-[#00fff9] text-black font-bold shadow-md rounded-full lg:w-47 lg:h-17"
              : "text-[#9c9c9c] rounded-l-[30px] lg:w-47 lg:h-17"
          }`}
          onClick={() => handleToggle("Java")}
        >
          Java
        </button>
        <button
          className={`w-[86px] h-[31px] transition-all duration-300 lg:text-2xl ${
            selectedOption === "Bedrock"
              ? "bg-[#00fff9] text-black font-bold shadow-md rounded-full lg:w-47 lg:h-17"
              : "text-[#9c9c9c] rounded-r-[30px] lg:w-47 lg:h-17"
          }`}
          onClick={() => handleToggle("Bedrock")}
        >
          Bedrock
        </button>
      </div>

      <div className="text-white space-y-4 lg:px-[60px] 2xl:px-85">
        {selectedOption === "Java" ? (
          <>
            <h2 className="text-sm font-bold text-[#00fff9] text-left text-pretty mb-2 ml-2 lg:text-[22px] xl:text-[32px] lg:mt-25">
              Java
            </h2>
            <p className="text-justify text-gray-300 text-xs px-2 text-pretty lg:text-lg xl:text-2xl ">
              Juega desde el PC con el clásico y confiable Minecraft Java, ya sea el juego vanilla o
              agregando mods o plugins, incluso mods y plugins al mismo tiempo. Y si fuera poco, puedes
              agregar a tus amigos de Bedrock para que jueguen en el servidor Java.
            </p>
            <div className="text-white space-y-4 self-start w-full px-2">
              <h3 className="text-sm font-bold text-[#00fff9] text-left mb-1 lg:text-[22px] xl:text-[32px] lg:mt-20">
                Personalización
              </h3>
              {/* Lista para móviles */}
              <ul className="list-disc list-inside text-gray-100 text-left text-pretty text-xs px-3 space-y-1 block lg:hidden">
                <li>Configura el juego a tu gusto.</li>
                <li>Agrega mods y plugins para más opciones.</li>
                <li>Controla y personaliza tu servidor.</li>
                <li>Protege el acceso con una clave.</li>
                <li>Explora, crea y disfruta a tu manera.</li>
              </ul>
              {/* Lista para PC */}
              <ul className="list-disc list-inside text-gray-100 text-left text-pretty text-xs px-3 space-y-8 hidden lg:block lg:text-lg xl:text-2xl lg:mt-4 lg:mb-10">
                <li>
                  Configura el juego a tu gusto: ajusta los tiempos, aumenta la experiencia o realiza cualquier cambio que haga tu aventura más cómoda y divertida. Agrega mods para ampliar las posibilidades y usa plugins para optimizar y personalizar tu servidor.
                </li>
                <li>
                  Aquí tú tienes el control total. Diseña un mundo único y, si lo prefieres, protege tu servidor con una clave para que solo los jugadores que elijas puedan unirse.
                </li>
                <li>
                  ¡Explora, crea y disfruta como siempre lo imaginaste!
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-sm font-bold text-[#00fff9] text-left text-pretty mb-2 ml-2 lg:text-[32px] lg:mt-25">
              Bedrock
            </h2>
            <p className="text-justify text-xs text-gray-300 text-pretty px-2 lg:text-2xl ">
              Juega desde el PC con el clásico y confiable Minecraft Java, ya sea el juego vanilla o
              agregando mods o plugins, incluso mods y plugins al mismo tiempo. Y si fuera poco,
              puedes agregar a tus amigos de Bedrock para que jueguen en el servidor Java.
            </p>
            <div className="text-white space-y-4 self-start w-full px-2">
              <h3 className="text-sm font-bold text-[#00fff9] text-left mb-1 lg:text-[32px] lg:mt-20">
                Personalización
              </h3>
              <ul className="list-disc list-inside text-gray-100 text-left text-pretty text-xs px-3 space-y-1 lg:text-2xl lg:mt-4 lg:mb-10">
                <li>Disfruta Minecraft Vanilla con complementos personalizados.</li>
                <li>Ajusta mecánicas y agrega funciones únicas.</li>
                <li>Optimiza la experiencia sin perder la esencia original.</li>
                <li>Controla reglas y acceso con clave.</li>
                <li>Crea un mundo exclusivo y equilibrado.</li>
              </ul>
            </div>
          </>
        )}
      </div>

      <div className="w-full">
        <Maincopcion config={currentConfig} />
      </div>
      <div className="relative lg:bottom-100 xl:bottom-110 2xl:bottom-100 ">
        <IntegratedCalculator />
      </div>
    </div>
  );
};

export default Maincboton;
