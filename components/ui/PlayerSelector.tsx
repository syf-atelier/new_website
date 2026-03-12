import React from "react";
import Group_155 from "@/assets/Group_155.svg";
import { PlayerSelectorConfig } from "@/config/PlayerSelectorConfig";

type PlayerCount = number | "∞";

interface PlayerSelectorProps {
  players: PlayerCount;
  setPlayers: React.Dispatch<React.SetStateAction<PlayerCount>>;
}

const PlayerSelector: React.FC<PlayerSelectorProps> = ({ players, setPlayers }) => {
  const [hoveredPlayer, setHoveredPlayer] = React.useState<PlayerCount | null>(null);
  const [sliderPosition, setSliderPosition] = React.useState(
    typeof players === "number" ? players : 1
  );
  const [, setIsSliding] = React.useState(false);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setSliderPosition(value);
    setPlayers(value === 13 ? "∞" : value);
  };

  const handleSliderStart = () => setIsSliding(true);
  const handleSliderEnd = () => setIsSliding(false);

  const renderPlusSymbol = () => {
    if (sliderPosition === 1) return "";
    if (sliderPosition === 13) return "+";
    return "+";
  };

  return (
    <div>
      <div className="h-full from-[#1A1A2E] to-[#162447] text-white flex flex-col py-6">
        <h3 className="text-[13px] font-bold text-pretty text-white text-center lg:text-[32px] lg:text-[#00fff9] lg:mb-10">
          Selecciona la cantidad de jugadores
        </h3>
        <div className="relative w-full flex flex-col items-center lg:mb-20 mt-2">
          <div className="relative w-full h-[2px] bg-white mx-auto z-20"></div>
          <div className="relative w-full">
            {PlayerSelectorConfig.map((option, index) => (
              <div
                key={`marker_${index}`}
                className="absolute w-[1px] h-2 bg-white lg:w-0.5 lg:h-3"
                style={{
                  left: option.position || "0%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            ))}
          </div>
          <div className="relative w-full flex items-center">
            <input
              type="range"
              min="1"
              max="13"
              value={sliderPosition}
              onChange={handleSliderChange}
              onMouseDown={handleSliderStart}
              onMouseUp={handleSliderEnd}
              className="absolute w-full h-1 appearance-none outline-none  
                [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 
                [&::-webkit-slider-thumb]:bg-transparent 
                [&::-webkit-slider-thumb]:rounded-full 
                [&::-webkit-slider-thumb]:cursor-pointer 
                [&::-webkit-slider-thumb]:opacity-0 
                [&::-moz-range-thumb]:w-8 [&::-moz-range-thumb]:h-8 
                [&::-moz-range-thumb]:bg-transparent 
                [&::-moz-range-thumb]:opacity-0"
            />
            <div className="relative w-full flex">
              {PlayerSelectorConfig.map((option) => (
                <div
                  key={`wrapper_${option.key}`}
                  className="absolute flex flex-col items-center"
                  style={{ left: option.position || "0%" }}
                  onMouseEnter={() => setHoveredPlayer(option.key)}
                  onMouseLeave={() => setHoveredPlayer(null)}
                >
                  <button
                    key={`player_${option.key}`}
                    className={`-translate-x-1/2 w-4 h-4 text-[10px] lg:w-11 lg:h-11 rounded-full mt-2 transition-all duration-200 font-medium text-pretty lg:text-2xl ${
                      players === option.key
                        ? "bg-[#00fff9] text-black shadow-md"
                        : hoveredPlayer === option.key
                        ? "bg-[#00fff9]/50 text-black shadow-sm"
                        : "bg-transparent text-[#00fff9]"
                    }`}
                    onClick={() => {
                      setSliderPosition(option.key === "∞" ? 13 : (option.key as number));
                      setPlayers(option.key);
                    }}
                  >
                    {option.key}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute flex" style={{ top: "48px" }}>
            <img
              src={Group_155}
              alt="Icono estático"
              className="w-6 h-6 mr-2 lg:w-10 lg:h-10 absolute top-3 right-45 relative"
            />
            <span className="ml-3 mb-2 absolute z-10 text-xs text-[#00fff9] text-pretty">
              {renderPlusSymbol()}
            </span>
            <span className="ml-1 text-[8px] text-white text-pretty lg:text-xl right-45 relative">
              {hoveredPlayer
                ? PlayerSelectorConfig.find((option) => option.key === hoveredPlayer)?.description
                : "Ideal para partidas pequeñas y estratégicas"}
            </span>
          </div>
        </div>
        <div>
          <p className="text-pretty text-[10px] mt-15 text-center lg:text-2xl lg:mb-20">
            Elige la opción que mejor se adapta a tu grupo y prepárate para jugar!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerSelector;
