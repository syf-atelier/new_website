import Arkcontra from "@/assets/Arkcontra.svg";
import Maincrafther from "@/assets/Maincrafther.svg";

const ComunitiCart = () => {
  return (
    <div className="p-4 lg:relative lg:bottom-130 xl:bottom-190 xl:pl-[158px] 2xl:pl-[155px] 2xl:bottom-200">
      <h2 className="text-sm ml-2 mb-4 text-white lg:text-[32px] lg:text-[#00fff9] lg:bottom-70 absolute xl:left-[175px] lg:bottom-[510px] xl:bottom-[520px] 2xl:left-[175px] 2xl:bottom-[520px]">
        Juegos
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 ">
        <div className="shadow-lg rounded-lg px-2 py-0 relative flex items-center lg:bottom-9 lg:left-1 xl:left-[15px] ">
          <img
            src={Maincrafther}
            alt="Imagen de Minecraft"
            className="w-35 h-30 object-cover lg:w-86 lg:h-58 xl:"
          />
          <div className="ml-2 relative bottom-9 flex-1">
            <h3 className="text-[13px] font-semibold text-[#00fff9] lg:text-2xl xl:text-[32px] lg:bottom-4 lg:relative">
              MINECRAFT
            </h3>
            <p className="text-xs text-gray-300 lg:text-xl xl:text-2xl">
              IP: ANDES-HOSTING.COM
            </p>
            <p className="text-xs text-gray-300 lg:text-xl xl:text-2xl">
              Puerto Java: 25665
            </p>
            <p className="text-xs text-gray-300 lg:text-xl xl:text-2xl">
              Puerto Bedrock: 19132
            </p>
          </div>
          <button
            className="text-gray-300 border border-[#00fff9] text-xs py-0.5 px-9 rounded-full absolute xl:right-[450px] right-0 top-26 hover:bg-blue-600 lg:right-20 lg:text-2xl lg:top-25 lg:relative lg:w-56 lg:h-11"
            onClick={() => window.open("https://minecraft.net", "_blank")}
          >
            IR
          </button>
        </div>
        <div className="shadow-lg rounded-lg px-2 py-0 relative flex items-center lg:left-1 xl:left-[15px] ">
          <img
            src={Arkcontra}
            alt="Imagen de ARK"
            className="w-35 h-30 object-cover lg:w-86 lg:h-58"
          />
          <div className="ml-2 relative bottom-8 flex-1">
            <h3 className="text-[13px] font-semibold text-[#00fff9] lg:text-2xl xl:text-[32px] lg:bottom-10 lg:relative">
              ARK
            </h3>
            <p className="text-xs text-gray-300 lg:text-xl lg:bottom-10 xl:text-2xl lg:relative">
              (LATAM) ANDES HOSTING-ARK SURVIVAL EVOLVED
            </p>
          </div>
          <button
            className="text-white border text-xs border-[#00fff9] py-0.5 px-10 rounded-full absolute right-0 top-26 hover:bg-blue-600 xl:right-[450px] lg:right-20 lg:text-2xl lg:top-25 lg:relative lg:w-56 lg:h-11"
            onClick={() => window.open("https://survivetheark.com", "_blank")}
          >
            IR
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComunitiCart;
