import { useState } from "react";

interface CartPacksProps {
  nombre: string;
  ram: string;
  precio: string;
  almacenamiento: string;
  jugadores: number;
  clase: string;
}

const CartPacks = ({
  nombre,
  ram,
  precio,
  almacenamiento,
  jugadores,
  clase,
}: CartPacksProps) => {
  const [interesado, setInteresado] = useState(false);

  const manejarInteraccion = () => {
    setInteresado(!interesado);
  };

  return (
    <div className={`p-2 border border-[#00fff9] bg-[#220530] rounded-2xl mt-4 shadow-sm text-center ${clase} w-40 lg:w-76 lg:h-113`}>
      <p className="text-xs lg:text-2xl lg:mb-1 lg:mt-4">Pack</p>
      <p className="text-xs lg:text-2xl font-bold mb-0 lg:mb-5">{nombre}</p>
      <p className="text-xs mt-2 lg:text-2xl lg:mb-2 lg:font-bold">{ram} RAM:</p>
      <p className="text-xs lg:text-2xl lg:font-bold">{precio}</p>
      <p className="text-[10px] lg:text-2xl lg:mb-5">mensual</p>
      <p className="text-[8px] mt-2 text-gray-200 lg:text-2xl">Almacenamiento: {almacenamiento}</p>
      <p className="text-[8px] mt-1 lg:text-2xl lg:mb-10">Jugadores: {jugadores}</p>
      <button
        onClick={manejarInteraccion}
        className="mt-2 py-1 px-2 bg-[#220530] border border-[#00fff9] hover:bg-green-600 text-white rounded-full text-[11px] lg:text-[32px]"
      >
        {interesado ? "¡Me Interesado!" : "¡Me interesa!"}
      </button>
    </div>
  );
};

export default CartPacks;
