import GameCard from "@/components/common/GameCard";
import minecraft from "@/assets/minecraft_juegos.svg";
import ark from "@/assets/ark_juegos.svg";
import palworld from "@/assets/palworld_juegos.svg";
import Minecraft_cart from "@/assets/Minecraft_cart.svg";
import Ark_cart from "@/assets/Ark_cart.svg";
import Palword_cart from "@/assets/Palword_cart.svg";
import { Link } from "react-router-dom";

const GamesSection = () => {
  return (
    <div className="flex flex-col items-center mt-2.5 px-5 max-w-4xl mx-auto lg:mt-30">
      <h2 className="text-sm lg:text-[32px] font-bold self-start text-left text-[#00FFF9] mb-0 lg:mt-20">
        Juegos
      </h2>
      
      {/* Contenedor para tarjetas */}
      <div className="w-full flex flex-wrap justify-center">
        {/* Versión móvil: se muestran los SVG originales */}
        <div className="block lg:hidden flex flex-row gap-4">
          <Link to="/Minecraft"> 
            <GameCard img={minecraft} text="Minecraft" alt="Minecraft" />
          </Link>
          <Link to="/Ark">
            <GameCard img={ark} text="ARK" alt="Ark" />
          </Link>
          <Link to="/Palworld">
            <GameCard img={palworld} text="Palworld" alt="Palworld" />
          </Link>
        </div>
        
        {/* Versión tablet/PC o mayor: se muestran los nuevos SVG y se agrandan */}
        <div className="hidden lg:flex flex-row lg:gap-15 mt-10">
          <Link to="/Minecraft"> 
            <GameCard img={Minecraft_cart} text="" alt="Minecraft" />
          </Link>
          <Link to="/Ark">
            <GameCard img={Ark_cart} text="" alt="Ark" />
          </Link>
          <Link to="/Palworld">
            <GameCard img={Palword_cart} text="" alt="Palworld" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GamesSection;
