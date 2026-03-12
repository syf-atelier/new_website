import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import minecraft from "@/assets/minecraft_main_carousel.svg";
import ark from "@/assets/ark_main_carousel.svg";
import palworld from "@/assets/palworld_main_carousel.svg";
import Andeshostingmine from "@/assets/Andeshostingmine.svg";
import Rectangle_100 from "@/assets/Rectangle_100.svg";
import Rectangle_101 from "@/assets/Rectangle_101.svg";

const MainCarousel = () => {
  return (
    <>
      {/* Versión móvil: se muestra el carrusel */}
      <div className="block lg:hidden w-full h-40 relative">
        <Carousel className="relative">
          <CarouselContent>
            {/* Minecraft */}
            <CarouselItem className="flex items-center justify-between relative">
              <div className="w-72 h-40 absolute left-[111px] top-0 overflow-hidden z-0">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${minecraft})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#15001F]/50 via-transparent via-70% to-[#15001F]/100"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#15001F]/100 via-transparent via-50% to-[#15001F]/100"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#15001F]/100 via-transparent via-60% to-[#15001F]/0"></div>
              </div>
              <div className="text-white m-[20px] z-10">
                <h1 className="text-xs">
                  Bienvenidos a{" "}
                  <span className="block text-xs font-bold">ANDES HOSTING</span>
                </h1>
                <p className="text-xs mt-2 w-60 text-pretty">
                  Tu aliado en servidores de videojuegos: CPU ilimitada, baja latencia
                  y asistencia personalizada. Disfruta de juegos sin trolls en
                  servidores privados. ¡Únete y mejora tu experiencia!
                </p>
              </div>
            </CarouselItem>
            {/* ARK */}
            <CarouselItem className="flex items-center justify-between relative">
              <div className="w-80 h-40 absolute left-[90px] top-0 overflow-hidden z-0">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${ark})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#15001F]/50 via-transparent via-50% to-[#15001F]/100"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#15001F]/100 via-transparent via-50% to-[#15001F]/100"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#15001F]/100 via-transparent via-60% to-[#15001F]/0"></div>
              </div>
              <div className="text-white m-[20px] z-10">
                <h1 className="text-xs">
                  Bienvenidos a{" "}
                  <span className="block text-xs font-bold">ANDES HOSTING</span>
                </h1>
                <p className="text-xs mt-2 w-60 text-pretty">
                  Sobrevive en ARK: mundos abiertos con dinosaurios. Explora,
                  domestica, construye y forma tribus. Juega online con amigos
                  enfrentándose a desafíos en entornos dinámicos.
                </p>
              </div>
            </CarouselItem>
            {/* Palworld */}
            <CarouselItem className="flex items-center justify-between relative">
              <div className="w-80 h-40 absolute left-[90px] top-0 overflow-hidden z-0">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${palworld})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#15001F]/50 via-transparent via-50% to-[#15001F]/100"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#15001F]/100 via-transparent via-50% to-[#15001F]/100"></div>
                <div className="absolute left-[20px] top-0 w-full h-full bg-gradient-to-r from-[#15001F]/100 via-transparent via-50% to-[#15001F]/0"></div>
              </div>
              <div className="text-white m-[20px] z-10">
                <h1 className="text-xs">
                  Bienvenidos a{" "}
                  <span className="block text-xs font-bold">ANDES HOSTING</span>
                </h1>
                <p className="text-xs mt-2 w-60 text-pretty">
                  Palworld: aventura y supervivencia en un mundo abierto. Captura
                  criaturas, explora, combate y construye usando Pals para
                  enfrentar desafíos y crear tu historia.
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20 text-[#00CEC9] transition-colors duration-200 border-none scale-150" />
        </Carousel>
      </div>
      {/* Versión para pantallas lg en adelante: Banner estático */}
      <div className="hidden lg:block relative">
        <div className="lg:container lg:mx-auto lg:px-20">
          <div className="lg:flex lg:flex-col lg:items-end lg:relative">
            <div className="lg:text-white lg:max-w-3xl relative absolute lg:top-12 z-30 lg:right-37 xl:right-90 2xl:right-190">
              <h1 className="lg:text-3xl lg:font-bold xl:text-[40px] 2xl:text-5xl">
                Bienvenidos a <br />
                <span className="lg:text-4xl xl:text-[40px] 2xl:text-5xl">
                  ANDES HOSTING
                </span>
              </h1>
              <p className="lg:mt-4 lg:text-lg xl:text-xl 2xl:text-xl">
                Tu aliado en servidores de videojuegos: CPU ilimitada, baja latencia
                y asistencia personalizada. Disfruta de juegos sin trolls en
                servidores privados. ¡Únete y mejora tu experiencia!
              </p>
            </div>
            <img
                src={Andeshostingmine}
                alt="Imagen de Andes Hosting"
                className="hidden lg:block absolute z-20 
                           lg:max-w-[975px] lg:w-[826px] lg:h-[380px] lg:left-[113px] lg:top-1 
                           xl:max-w-[975px] xl:w-[925px] xl:h-[400px] xl:left-[248px] xl:top-1
                           2xl:max-w-[975px] 2xl:w-[975px] 2xl:[400px] 2xl:left-[658px] 2xl:top-1 "
            />
            <img
              src={Rectangle_100}
              alt="Imagen de Andes Hosting"
              className="hidden lg:block absolute z-20 
                         lg:max-w-[875px] lg:left-[66px] lg:w-[876px] lg:h-[403px]
                         xl:max-w-[1015px] xl:left-[245px] xl:w-[1015px] xl:h-[413px] xl:top-0 
                         2xl:max-w-[1075px] 2xl:left-[620px] 2xl:w-[1015px] 2xl:h-[413px] 2xl:top-0"
            />
            <img
              src={Rectangle_101}
              alt="Imagen de Andes Hosting"
              className="hidden lg:block absolute lg:z-20 
                         lg:max-w-[1368px] lg:right-[-80px] lg:w-[928px] lg:h-[370px] lg:top-1
                         xl:max-w-[1368px] xl:left-[41px] xl:w-[1068px] xl:h-[413px]   
                         2xl:max-w-[1668px] 2xl:left-[570px] 2xl:w-[1068px] 2xl:h-[413px] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCarousel;
