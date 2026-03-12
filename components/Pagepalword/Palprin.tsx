import Palworld from "@/assets/Palworld.svg";
import Logo_pal from "@/assets/Logo_pal.svg";
import Rectangle_100 from "@/assets/Rectangle_100.svg";
import Rectangle_101 from "@/assets/Rectangle_101.svg";
import Rectangle_106 from "@/assets/Rectangle_106.svg";
import Rectangle_107 from "@/assets/Rectangle_107.svg";
import Palworld_pc from "@/assets/Palword_pc.svg";

const Palprin = () => {
  return (
    <div className="flex flex-col lg:absolute z-0 items-center ">
      <div className="relative mt-2">
        <img
          src={Palworld}
          alt="Imagen de Minecraft (móvil)"
          className="w-full h-auto block lg:hidden"
        />
        <img
          src={Palworld_pc}
          alt="Imagen de Minecraft para PC"
          className=" hidden absolute z-10 
          lg:block h-auto lg:left-[390px] lg:relative lg:max-w-[626px] 
          xl:max-w-[890px] xl:left-[543px] 
          2xl:max-w-[926px] 2xl:left-[990px] 
          "
        />
        <img
          src={Logo_pal}
          alt="Logo de Minecraft para teléfono"
          className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 z-20 pointer-events-none block 
          lg:hidden 
          "
        />
        <img
          src={Logo_pal}
          alt="Logo de Minecraft para PC"
          className="absolute lg:bottom-[270px] h-auto transform -translate-x-1/2 z-20 pointer-events-none hidden relative
          lg:block lg:max-w-[555px] lg:w-[377px] lg:left-[250px]
          xl:max-w-[575px] xl:w-[407px] xl:bottom-[360px] xl:left-[410px]
          2xl:max-w-[635px] 2xl:w-[497px] 2xl:bottom-[390px] 2xl:left-[420px]
          "
        />
        <img
          src={Rectangle_100}
          alt="Imagen difuminada 1 (móvil)"
          className="absolute inset-0 w-full h-auto pointer-events-none block lg:hidden"
        />
        <img
          src={Rectangle_101}
          alt="Imagen difuminada 2 (móvil)"
          className="absolute inset-0 w-full h-auto pointer-events-none block lg:hidden"
        />
        <img
          src={Rectangle_107}
          alt="Imagen difuminada 1 (PC)"
          className="absolute relative z-10  pointer-events-none hidden relative
          lg:block h-auto lg:left-[80px] lg:max-w-[938px] lg:bottom-[380px] lg:relative
          xl:max-w-[1368px] xl:left-[68px] xl:lg:bottom-[509px]
          2xl:max-w-[1668px] 2xl:left-[549px] 2xl:lg:bottom-[540px] "
        />
        <img
          src={Rectangle_106}
          alt="Imagen difuminada 2 (PC)"
          className="absolute z-10 h-auto pointer-events-none hidden relative
          lg:block lg:left-[351px] lg:max-w-[665px] lg:bottom-[665px] 
          xl:max-w-[955px] xl:left-[479px] xl:bottom-[900px] 
          2xl:max-w-[975px] 2xl:left-[941px] 2xl:bottom-[938px] "
        />
        <p className="absolute inset-0 flex text-pretty items-center justify-center text-white text-center text-xs font-medium bg-opacity-50 px-6 mt-5 z-10 block lg:hidden">
            Palworld es un juego de aventura y supervivencia donde capturas criaturas, exploras un mundo abierto y usas Pals en combate, construcción y otras actividades.
        </p>
      </div>
      <p className="absolute relative flex text-pretty text-white z-20 hidden 
      lg:bottom-205 lg:right-[120px] lg:w-[570px] lg:flex lg:text-lg 
      xl:text-xl xl:bottom-285 xl:w-[770px] xl:right-[90px]
      2xl:text-2xl 2xl:bottom-295 2xl:w-[1300px] 2xl:right-[22px]">
      Palworld es un juego de aventura y supervivencia donde capturas criaturas, exploras un mundo abierto y usas Pals en combate, construcción y otras actividades.
       </p>
    </div>
  );
};

export default Palprin;