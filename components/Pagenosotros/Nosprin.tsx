import Nosotros from "@/assets/Nosotros.svg";
import Rectangle_100 from "@/assets/Rectangle_100.svg";
import Rectangle_101 from "@/assets/Rectangle_101.svg";
import Rectangle_106 from "@/assets/Rectangle_106.svg";
import Rectangle_107 from "@/assets/Rectangle_107.svg";
import Nosotros_pc from "@/assets/Nosotros_pc.svg";

const Nosprin = () => {
  return (
    <div className="flex flex-col lg:absolute items-center ">
      <div className="relative mt-2">
        <img
          src={Nosotros}
          alt="Imagen de Minecraft (móvil)"
          className="w-full h-auto block lg:hidden"
        />
        <img
          src={Nosotros_pc}
          alt="Imagen de Minecraft para PC"
          className=" hidden absolute z-10 
          lg:block h-auto lg:left-[388px] lg:relative lg:max-w-[626px] 
          xl:max-w-[906px] xl:left-[525px] 
          2xl:max-w-[906px] 2xl:left-[1005px] 
          "
        />
        <h2 className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 z-20 pointer-events-none block 
          lg:hidden ">
          ¿Quienes Somos?
        </h2>
        <h2 className="absolute  h-auto transform -translate-x-1/2 z-20 pointer-events-none hidden relative
          lg:block lg:bottom-[200px] lg:max-w-[555px] lg:left-[310px] lg:text-4xl font-bold lg:text-[#00FFF9]
          xl:max-w-[605px] xl:bottom-[250px] xl:text-5xl xl:left-[500px]
          2xl:max-w-[635px] 2xl:bottom-[300px] 2xl:left-[470px]">
          ¿Quienes Somos?
        </h2>
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
          lg:block h-auto lg:left-[78px] lg:max-w-[938px] lg:bottom-[312px] lg:relative
          xl:max-w-[1368px]  xl:left-[65px] xl:lg:bottom-[442px]
          2xl:max-w-[1668px] 2xl:left-[545px] 2xl:lg:bottom-[445px] "
        />
        <img
          src={Rectangle_106}
          alt="Imagen difuminada 2 (PC)"
          className="absolute z-10 h-auto pointer-events-none hidden relative
          lg:block lg:left-[351px] lg:max-w-[665px] lg:bottom-[587px] 
          xl:max-w-[955px] xl:left-[479px] xl:bottom-[842px] 
          2xl:max-w-[975px] 2xl:left-[939px] 2xl:bottom-[843px] "
        />
        <p className="absolute inset-0 flex text-pretty items-center justify-center text-white text-center text-xs font-medium bg-opacity-50 px-6 mt-5 z-10 block lg:hidden">
          Un juego legendario donde construyes y juegas con amigos en un mundo sin límites, 
          ¡tú pones las reglas! Compatible con Bedrock y Java, añade mods o plugins a tu gusto. 
          Jugar Minecraft con amigos nunca fue tan fácil: nosotros eliminamos el LAG y creamos el 
          servidor para que solo disfrutes.
        </p>
      </div>
      <p className="absolute relative flex text-pretty text-white z-20 hidden 
      lg:bottom-[740px] lg:w-[700px] lg:flex lg:text-lg lg:right-[82px]
      xl:text-xl xl:bottom-255 xl:w-[1000px] xl:left-[12px]
      2xl:text-2xl 2xl:bottom-265 2xl:w-[1300px] 2xl:left-[122px] ">
       En Andes, conectamos Sudamérica con pasión y calidad. Inspirados en la cordillera, creamos una comunidad vibrante de jugadores, basada en transparencia y compromiso. ¡Únete y vive la diferencia!
      </p>
    </div>
  );
};

export default Nosprin;
