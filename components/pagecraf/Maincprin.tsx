import minecraftImg from "@/assets/minecraftimg.svg";
import minecraftLog from "@/assets/minecraftLog.svg";
import Rectangle_100 from "@/assets/Rectangle_100.svg";
import Rectangle_101 from "@/assets/Rectangle_101.svg";
import Minecraftlog2 from "@/assets/Minecraft_logo_2.svg";
import Rectangle_106 from "@/assets/Rectangle_106.svg";
import Rectangle_107 from "@/assets/Rectangle_107.svg";
import Mine_pc from "@/assets/Mine_pc.svg";

const Maincprin = () => {
  return (
    <div className="flex flex-col lg:absolute z-0 items-center ">
      <div className="relative mt-2">
        <img
          src={minecraftImg}
          alt="Imagen de Minecraft (móvil)"
          className="w-full h-auto block lg:hidden"
        />
        <img
          src={Mine_pc}
          alt="Imagen de Minecraft para PC"
          className=" hidden absolute z-10 
          lg:block h-auto lg:left-[392px] lg:relative lg:max-w-[626px] 
          xl:max-w-[900px] xl:left-[535px] 
          2xl:max-w-[926px] 2xl:left-[920px] 
          "
        />
        <img
          src={minecraftLog}
          alt="Logo de Minecraft para teléfono"
          className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 z-20 pointer-events-none block 
          lg:hidden 
          "
        />
        <img
          src={Minecraftlog2}
          alt="Logo de Minecraft para PC"
          className="absolute h-auto transform -translate-x-1/2 z-20 pointer-events-none hidden relative
          lg:block lg:max-w-[405px] lg:bottom-[240px] lg:left-[235px]
          xl:max-w-[605px] xl:bottom-[370px] xl:left-[360px]
          2xl:max-w-[635px] 2xl:bottom-[390px] 2xl:left-[410px]
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
          lg:block h-auto lg:left-[80px] lg:max-w-[938px] lg:bottom-[385px] lg:relative
          xl:max-w-[1368px]  xl:left-[70px] xl:lg:bottom-[559px]
          2xl:max-w-[1668px] 2xl:left-[480px] 2xl:lg:bottom-[575px] "
        />
        <img
          src={Rectangle_106}
          alt="Imagen difuminada 2 (PC)"
          className="absolute z-10 h-auto pointer-events-none hidden relative
          lg:block lg:left-[355px] lg:max-w-[665px] lg:bottom-[660px] 
          xl:max-w-[955px] xl:left-[481px] xl:bottom-[955px] 
          2xl:max-w-[975px] 2xl:left-[871px] 2xl:bottom-[973px] "
        />
        <p className="absolute inset-0 flex text-pretty items-center justify-center text-white text-center text-xs font-medium bg-opacity-50 px-6 mt-5 z-10 block lg:hidden">
          Un juego legendario donde construyes y juegas con amigos en un mundo sin límites, 
          ¡tú pones las reglas! Compatible con Bedrock y Java, añade mods o plugins a tu gusto. 
          Jugar Minecraft con amigos nunca fue tan fácil: nosotros eliminamos el LAG y creamos el 
          servidor para que solo disfrutes.
        </p>
      </div>
      <p className="absolute relative flex text-pretty text-white z-20 hidden 
      lg:bottom-200 lg:flex lg:text-lg lg:right-[72px] w-[700px]
      xl:text-xl xl:bottom-295 xl:w-[1100px] xl:left-[-50px]
      2xl:text-2xl 2xl:bottom-305 2xl:w-[1500px] 2xl:left-[182px]">
        Un juego legendario donde construyes y juegas con amigos en un mundo sin límites, ¡tú pones las reglas! Compatible con Bedrock y Java, añade mods o plugins a tu gusto. Jugar Minecraft con amigos nunca fue tan fácil: nosotros eliminamos el LAG y creamos el servidor para que solo disfrutes.
      </p>
    </div>
  );
};

export default Maincprin;
