import { FC, useState } from "react"
import { VersionConfig, OptionType } from "@/config/MaincopcionConfig"
import CustomAlert from "@/components/ui/CustomAlert"

interface MaincopcionProps {
  config: VersionConfig;
}

const Maincopcion: FC<MaincopcionProps> = ({ config }) => {
  const [activeOption, setActiveOption] = useState<OptionType | null>(
    config.options.length > 0 ? config.options[0].key : null
  );
  const [activeMod, setActiveMod] = useState<string | null>(null); 
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleOptionChange = (option: OptionType) => {
    setActiveOption((prevActive) => (prevActive === option ? null : option));
  };

  const handleModToggle = (modKey: string) => {
    setActiveMod(modKey); 
  };

  const optionButtonClass = (isActive: boolean) =>
    `flex justify-center items-center w-[81px] h-[22px] border-2 text-[10px] transition-all duration-300 ${
      isActive
        ? "bg-[#00fff9] text-black border-[#00fff9] rounded-full lg:w-42 lg:h-13 xl:w-56 xl:h-15 2xl:w-56 2xl:h-15 lg:text-lg 2xl:text-2xl"
        : "bg-transparent text-white border-[#00fff9] rounded-full lg:w-42 lg:h-13 xl:w-56 xl:h-15 2xl:w-56 2xl:h-15 lg:text-lg"
    }`;

  const modButtonClass = (active: boolean) =>
    `mt-2 lg:mt-8 flex justify-center ml-1 items-center text-[10px] font-bold px-4 py-1 rounded-full shadow-md transition-all duration-300  ${
      active
        ? "bg-[#00fff9] text-black border-[#00fff9] lg:relative lg:left-[100px] lg:w-42 lg:h-13 xl:left-[180px] 2xl:w-56 2xl:h-15 lg:text-lg 2xl:text-2xl"
        : "bg-transparent text-white border border-[#00fff9] lg:relative lg:left-[100px] lg:w-42 lg:h-13 xl:left-[180px] 2xl:w-56 2xl:h-15 lg:text-lg 2xltext-2xl"
    }`;
  const ButtonClass = (active: boolean) =>
    `mt-2 lg:mt-8 flex justify-center ml-1 items-center text-[10px] font-bold px-4 py-1 rounded-full shadow-md transition-all duration-300  ${
      active
        ? "bg-[#00fff9] text-black lg:relative border-[#00fff9] lg:w-42 lg:h-13 xl:items-center 2xl:w-56 2xl:h-15 lg:text-lg 2xl:text-2xl"
        : "bg-transparent text-white lg:relative border border-[#00fff9] lg:w-42 lg:h-13 xl:items-center 2xl:w-56 2xl:h-15 lg:text-lg 2xltext-2xl"
    }`;

  const alertText = `Con este modo de juego puedes agregar el mod/plugin GeyserMC, el cual te permitirá que jugadores tanto Java como Bedrock puedan compartir en el mismo servidor juntos.
  Si tienes dudas de cómo se configura, habla con nosotros por WhatsApp o Discord y te ayudaremos a configurarlo por ti, si así lo necesitas!
  Que ninguno de tus amigos se quede afuera
  Vamos por una diversión sin fronteras!`;

  return (
    <div className="relative">
      {alertMessage && (
        <CustomAlert message={alertMessage} onClose={() => setAlertMessage(null)} />
      )}
      <div className="flex flex-col space-y-10 ">
        <div className="w-full text-white text-center 
                        2xl:px-60">
          <div className="flex flex-wrap justify-center items-center gap-1 mt-4
                          lg:gap-3 lg:mb-15
                          xl:
                          2xl:gap-20 ">
            {config.options.map((option) => (
              <button
                key={option.key}
                className={optionButtonClass(activeOption === option.key)}
                onClick={() => handleOptionChange(option.key)}
              >
                {option.title}
              </button>
            ))}
          </div>
          <div className="text-white text-center space-y-2 px-1 mt-4">
            {config.options.map(
              (option) =>
                activeOption === option.key && (
                  <div key={option.key} className="relative ">
                    <p className="text-xs font-bold flex text-white mb-1 ml-2 
                                  lg:pl-[100px] lg:mb-10 lg:text-2xl lg:left-3 lg:relative
                                  xl:pl-[200px] 
                                  2xl:pl-[100px] 
                                   ">
                      {option.optitle}
                    </p>
                    <p className="text-[10px] text-left 
                                  lg:text-lg 2xl:text-2xl lg:mb-8 lg:relative lg:bottom-8 lg:px-19 lg:left-10
                                  xl:pl-[170px] xl:pr-[240px] 
                                  2xl:pl-[90px] 2xl:pr-[25px] 2xl:left-[10px]
                                  ">
                      {option.description}
                    </p>

                    {option.items && option.items.length > 0 ? (
                      <div className="flex flex-wrap gap-2 mt-2 relative 
                                      lg:gap-[5px] lg:px-[110px] 
                                      xl:gap-[80px] xl:px-[212px] 
                                      2xl:px-[100px] 2xl:gap-[75px]   ">
                        {option.items.map((item, idx) => {
                          const modKey = `${option.key}-${idx}`;
                          const isActive = activeMod === modKey; 
                          return (
                            <div key={idx} className="flex flex-col lg:items-center ">
                              <img
                                src={item.imgSrc}
                                alt={`${option.title} ${idx}`}
                                className="w-[81px] h-[81px] object-contain px-0 
                                          lg:w-[140px] lg:h-[140px] lg:relative
                                          xl:
                                          2xl:h-[220px] 2xl:w-[220px] "
                              />
                              {item.buttonLabel && (
                                <button
                                  className={ButtonClass(isActive)}
                                  onClick={() => handleModToggle(modKey)}
                                >
                                  {item.buttonLabel}
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <>
                        {option.imgSrc && (
                          <img
                            src={option.imgSrc}
                            alt={option.title}
                            className="w-[81px] h-[81px] object-contain relative mt-1 
                            lg:w-[140px] lg:h-[140px] lg:relative lg:left-30 
                            xl:left-[200px] 
                            2xl:h-[220px] 2xl:w-[220px] "
                          />
                        )}
                        {option.buttonLabel && (
                          <button
                            className={modButtonClass(
                              activeMod === `${option.key}-single`
                            )}
                            onClick={() => {
                              if (option.key === "Vanilla") {
                                handleModToggle(`${option.key}-single`);
                              } else {
                                setAlertMessage(alertText);
                              }
                            }}
                          >
                            {option.buttonLabel}
                          </button>
                        )}
                      </>
                    )}
                    {(option.key === "Mods" || option.key === "Plugins") && (
                      <div className="flex flex-wrap gap-4 mt-2 justify-center ">
                        <div className="flex items-center gap-1 ">
                          <span className="text-[8px] font-bold border-[#696969] px-2 py-0.5 rounded-full bg-[#696969] lg:py-2 lg:w-30 lg:h-10 2xl:w-43 2xl:h-10 lg:text-base">
                            Java+Bedrock
                          </span>
                          <button
                            className="bg-[#696969] text-white text-[8px] font-bold px-2 py-0.5 rounded-full flex justify-center items-center lg:w-[32px] lg:h-[32px] lg:text-lg 2xl:w-[41px] 2xl:h-[41px] 2xl:text-xl"
                            onClick={() => setAlertMessage(alertText)}
                          >
                            ¡
                          </button>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-[8px] font-bold border-[#696969] px-2 py-0.5 rounded-full bg-[#696969] lg:py-2 lg:w-30 lg:h-10 2xl:w-43 2xl:h-10 lg:text-base">
                            Java+Bedrock
                          </span>
                          <button
                            className="bg-[#696969] text-white text-[8px] font-bold px-2 py-0.5 rounded-full flex justify-center items-center lg:w-[32px] lg:h-[32px] lg:text-lg 2xl:text-xl 2xl:w-[41px] 2xl:h-[41px]"
                            onClick={() => setAlertMessage(alertText)}
                          >
                            ¡
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincopcion;
