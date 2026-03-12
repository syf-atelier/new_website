import MapLocation from "@/components/common/MapLocation";
import LocationTile from "@/components/common/LocationTile";
import locationTile1 from '@/assets/location_tile1.svg';
import locationTile2 from '@/assets/location_tile2.svg';

const LocationSection = () => {
  return (
    <div className="flex flex-col items-center mt-5 ml-5 pb-80">
      {/* Título, siempre visible */}
      <h2 className="sm:text-sm font-bold px-[20px] sm:text-[#00FFF9] 
                    lg:text-[#00FFF9] lg:text-[32px] lg:mb-2 relative right-67 
                     ">
        La ubicación ideal
      </h2>

      {/* Versión móvil: se muestra cuando la pantalla es menor a lg */}
      <div className="block lg:hidden">
        <div className="flex flex-row items-start mt-2.5 space-x-4">
          <div className="flex-shrink-0">
            <MapLocation />
          </div>
          <div className="flex flex-col justify-between gap-3">
            <LocationTile
              img={locationTile1}
              alt="EXPERIENCIA FLUIDA"
              title="EXPERIENCIA FLUIDA"
              text="Experiencia fluida para Sudamérica: Sin lag y juego sin igual."
            />
            <LocationTile
              img={locationTile2}
              alt="SERVIDORES PRIVADOS"
              title="SERVIDORES PRIVADOS"
              text="Juega con amigos en un entorno privado, seguro, sin trampas ni molestias."
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:ml-20 flex-col mt-5">
        <div className="flex flex-row  ">
          <div className="lg:flex lg:top-40 lg:relative gap-3">
            <p className="text-pretty lg:text-[24px] text-left lg:bottom-110 lg:absolute">
              Experimente el rendimiento excepcional de nuestros servidores, combinado con una ubicación estratégica que asegura la mejor latencia en Sudamérica. ¡Tu éxito es nuestra prioridad!
            </p>
            <LocationTile
              img={locationTile1}
              alt="EXPERIENCIA FLUIDA"
              title="EXPERIENCIA FLUIDA"
              text="Experiencia fluida para Sudamérica: Sin lag y juego sin igual."
            />
            <LocationTile
              img={locationTile2}
              alt="SERVIDORES PRIVADOS"
              title="SERVIDORES PRIVADOS"
              text="Juega con amigos en un entorno privado, seguro, sin trampas ni molestias."
            />
          </div>
          <div className="ml-8 lg:w-full">
            <MapLocation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
