import React from "react";
import CartPacks from "@/components/ui/CartPacks";
import { Link } from "react-router-dom";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

const Carruselcar: React.FC = () => {
  const packagesSurvivalEvolved = [
    { nombre: "Bronce", ram: "6GB", precio: "$12.000.-", almacenamiento: "21GB", jugadores: 4, clase: "text-[10px]" },
    { nombre: "Plata",  ram: "8GB", precio: "$15.000.-", almacenamiento: "22GB", jugadores: 10, clase: "text-[10px]" },
    { nombre: "Oro",    ram: "10GB", precio: "$18.000.-", almacenamiento: "23GB", jugadores: 20, clase: "text-[10px]" },
  ];

  const packagesSurvivalAscended = [
    { nombre: "Bronce", ram: "13GB", precio: "$20.000.-", almacenamiento: "xx GB", jugadores: 4, clase: "text-[10px]" },
    { nombre: "Plata",  ram: "14GB", precio: "$22.000.-", almacenamiento: "xx GB", jugadores: 10, clase: "text-[10px]" },
    { nombre: "Oro",    ram: "15GB", precio: "$24.000.-", almacenamiento: "xx GB", jugadores: 20, clase: "text-[10px]" },
  ];

  const packagesPalworld = [
    { nombre: "Bronce", ram: "3GB", precio: "$4.000.-",  almacenamiento: "4GB",  jugadores: 4, clase: "text-[10px]" },
    { nombre: "Plata",  ram: "4GB", precio: "$6.000.-",  almacenamiento: "8GB",  jugadores: 6, clase: "text-[10px]" },
    { nombre: "Oro",    ram: "8GB", precio: "$13.000.-", almacenamiento: "12GB", jugadores: 10, clase: "text-[10px]" },
  ];
  const categories = [
    {
      title: "ARK: Survival Evolved",
      packages: packagesSurvivalEvolved,
      link: "/Ark", 
    },
    {
      title: "ARK: Survival Ascended",
      packages: packagesSurvivalAscended,
      link: "/Ark",
    },
    {
      title: "Palworld",
      packages: packagesPalworld,
      link: "/Palworld",
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4 mb-20">
      <h3 className="lg:text-[32px] font-bold text-center">Ofertas</h3>
      <div className="relative">
        <Carousel>
          <CarouselContent>
            {categories.map((category, idx) => (
              <CarouselItem key={idx}>
                <div className="flex flex-col items-center">
                  <h4 className="text-xl mb-4 text-center 2xl:text-[32px] ">{category.title}</h4>
                  <div className="flex gap-4 mb-4">
                    {category.packages.map((paquete, index) => (
                      <CartPacks key={index} {...paquete} />
                    ))}
                  </div>
                  {/* Enlace "Ver más" enlazado a la ruta correspondiente */}
                  <Link 
                    to={category.link}
                    className="text-green-500 font-semibold hover:text-green-600"
                  >
                    Ver más
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" relative
                                        lg:w-10 lg:h-23 lg:left-[-15px] lg:bottom-[260px]
                                        xl:w-10 xl:h-23 xl:left-[100px] xl:bottom-[260px]
                                        2xl:w-10 2xl:h-23 2xl:left-[225px] 2xl:bottom-[260px] " />

          <CarouselNext  className=" relative 
                                    lg:w-10 lg:h-23 lg:left-[925px] lg:bottom-[260px]
                                    xl:w-10 xl:h-23 xl:left-[1070px] xl:bottom-[260px]
                                    2xl:w-10 2xl:h-23 2xl:left-[1200px] 2xl:bottom-[260px] "/>
        </Carousel>
      </div>
    </div>
  );
};

export default Carruselcar;
