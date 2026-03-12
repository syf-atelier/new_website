import ARK from "@/assets/ARK.svg";
import Ark_Logo from "@/assets/Ark_Logo.svg";
import Rectangle_100 from "@/assets/Rectangle_100.svg";
import Rectangle_101 from "@/assets/Rectangle_101.svg";
import Rectangle_106 from "@/assets/Rectangle_106.svg";
import Rectangle_107 from "@/assets/Rectangle_107.svg";
import Ark_pc from "@/assets/Ark_pc.svg";

const Arkprin = () => {
  return (
    <div className="flex flex-col lg:absolute z-0 items-center ">
      <div className="relative mt-2">
        <img
          src={ARK}
          alt="Imagen de Minecraft (móvil)"
          className="w-full h-auto block lg:hidden"
        />
        <img
          src={Ark_pc}
          alt="Imagen de Minecraft para PC"
          className=" hidden absolute z-10 
          lg:block h-auto lg:left-[348px] lg:relative lg:max-w-[626px] 
          xl:max-w-[926px] xl:left-[475px] 
          2xl:max-w-[926px] 2xl:left-[920px] 
          "
        />
        <img
          src={Ark_Logo}
          alt="Logo de Minecraft para teléfono"
          className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 z-20 pointer-events-none block 
          lg:hidden 
          "
        />
        <img
          src={Ark_Logo}
          alt="Logo de Minecraft para PC"
          className="absolute lg:bottom-[220px] h-auto transform -translate-x-1/2 z-20 pointer-events-none hidden relative
          lg:block lg:max-w-[125px] lg:w-[125px] lg:left-[55px]
          xl:max-w-[605px] xl:w-[199px] xl:bottom-[340px] xl:left-[97px]
          2xl:max-w-[635px] 2xl:w-[199px] 2xl:bottom-[380px] 2xl:left-[87px]
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
          lg:block h-auto lg:left-[37px] lg:max-w-[938px] lg:bottom-[358px] lg:relative
          xl:max-w-[1368px]  xl:left-[33px] xl:lg:bottom-[535px]
          2xl:max-w-[1668px] 2xl:left-[480px] 2xl:lg:bottom-[535px] "
        />
        <img
          src={Rectangle_106}
          alt="Imagen difuminada 2 (PC)"
          className="absolute z-10 h-auto pointer-events-none hidden relative
          lg:block lg:left-[311px] lg:max-w-[665px] lg:bottom-[635px] 
          xl:max-w-[955px] xl:left-[444px] xl:bottom-[930px] 
          2xl:max-w-[975px] 2xl:left-[879px] 2xl:bottom-[935px] "
        />
        <p className="absolute inset-0 flex text-pretty items-center justify-center text-white text-center text-xs font-medium bg-opacity-50 px-6 mt-5 z-10 block lg:hidden">
             ARK: Survival Evolved y ARK: Survival Ascended son juegos de supervivencia en mundos abiertos llenos de dinosaurios. Explora, recolecta, domestica criaturas y construye para sobrevivir en un entorno hostil. Juega online, forma tribus y enfréntate a desafíos con amigos en un mundo dinámico.
        </p>
      </div>
      <p className="absolute relative flex text-pretty text-white z-20 hidden 
      lg:bottom-185 px-90 lg:px-40 lg:right-[120px] lg:flex lg:text-lg lg:right-[122px]
      xl:text-xl xl:bottom-275
      2xl:text-2xl 2xl:bottom-288 2xl:w-[1500px] ">
        ARK: Survival Evolved y ARK: Survival Ascended son juegos de supervivencia en mundos abiertos llenos de dinosaurios. Explora, recolecta, domestica criaturas y construye para sobrevivir en un entorno hostil. Juega online, forma tribus y enfréntate a desafíos con amigos en un mundo dinámico.
      </p>
    </div>
  );
};

export default Arkprin;
