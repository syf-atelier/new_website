import CartPacks from "./CartPacks";
import { useCartContext } from "@/components/ui/CartContext";

const Cartinfo = () => {
  const { selectedPage } = useCartContext(); 

  const paquetesSurvivalEvolved = [
    { nombre: "Bronce", ram: "6GB", precio: "$12.000.-", almacenamiento: "21GB", jugadores: 4, clase: "text-[10px]" },
    { nombre: "Plata", ram: "8GB", precio: "$15.000.-", almacenamiento: "22GB", jugadores: 10, clase: "text-[10px]" },
    { nombre: "Oro", ram: "10GB", precio: "$18.000.-", almacenamiento: "23GB", jugadores: 20, clase: "text-[10px]" },
  ];

  const paquetesSurvivalAscended = [
    { nombre: "Bronce", ram: "13GB", precio: "$20.000.-", almacenamiento: "xx GB", jugadores: 4, clase: "text-[10px]" },
    { nombre: "Plata", ram: "14GB", precio: "$22.000.-", almacenamiento: "xx GB", jugadores: 10, clase: "text-[10px]" },
    { nombre: "Oro", ram: "15GB", precio: "$24.000.-", almacenamiento: "xx GB", jugadores: 20, clase: "text-[10px]" },
  ];

  const paquetesPalworld = [
    { nombre: "Bronce", ram: "3GB", precio: "$4.000.-", almacenamiento: "4GB", jugadores: 4, clase: "text-[10px]" },
    { nombre: "Plata", ram: "4GB", precio: "$6.000.-", almacenamiento: "8GB", jugadores: 6, clase: "text-[10px]" },
    { nombre: "Oro", ram: "8GB", precio: "$13.000.-", almacenamiento: "12GB", jugadores: 10, clase: "text-[10px]" },
  ];

  const paquetesActuales =
    selectedPage === "Survival Evolved"
      ? paquetesSurvivalEvolved
      : selectedPage === "Survival Ascended"
      ? paquetesSurvivalAscended
      : paquetesPalworld;

  return (
    <div className="container mx-auto py-10 p-2 lg:relative 
                    lg:top-120 
                    xl:top-120 
                    2xl:top-110">
      <h3 className="text-[13px] font-bold text-center lg:text-[32px] lg:mb-2">Ofertas</h3>
      <p className="text-xs text-center lg:text-[32px] lg:mb-7 ">{selectedPage}</p>
      <div className="flex justify-center space-x-4">
        {paquetesActuales.map((paquete, index) => (
          <CartPacks key={index} {...paquete} />
        ))}
      </div>
    </div>
  );
};

export default Cartinfo;
