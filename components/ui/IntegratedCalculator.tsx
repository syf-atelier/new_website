import React, { useState, useEffect } from "react";
import PlayerSelector from "@/components/ui/PlayerSelector";
import Subscriptionselector from "./Subscriptionselector";
import { PlayerCount, SubscriptionDuration } from "@/types/index";

const maxRam = 32;
const maxDisk = 200;

const PriceCell: React.FC<{ price?: number }> = ({ price }) => (
  <td className="relative text-pretty text-xs py-1 text-right">
    <p className="absolute left-0 top-0 lg:text-2xl">$</p>
    <p className="ml-4 inline-block lg:text-2xl">
      {price !== undefined && price > 0 ? price : "-"}
    </p>
  </td>
);

const IntegratedCalculator: React.FC = () => {
  const [players, setPlayers] = useState<PlayerCount>(1);
  const [subscription, setSubscription] = useState<SubscriptionDuration>("1 Mes");
  const [ram, setRam] = useState(32);
  const [disk, setDisk] = useState(200);

  const baseValues = {
    CPU: { unitPrice: 10 },
    RAM: { unitPrice: 10 },
    DISK: { unitPrice: 10 },
    SOPORTE: { unitPrice: 10 },
  };

  useEffect(() => {
    if (typeof players === "number") {
      setRam(Math.min(1 + (players - 1) * 3, maxRam));
      setDisk(Math.min(1 + (players - 1) * 10, maxDisk));
    }
  }, [players]);

  const calculateSubtotal = () =>
    ram * baseValues.RAM.unitPrice + disk * baseValues.DISK.unitPrice;

  const calculateDiscount = (subtotal: number) => {
    if (subscription === "3 Meses") return subtotal * 0.1;
    if (subscription === "1 Año") return subtotal * 0.25;
    return 0;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount(subtotal);
    if (subscription === "3 Meses") return subtotal * 3 - discount;
    if (subscription === "1 Año") return subtotal * 12 - discount;
    return subtotal;
  };

  return (
    <div className="integrated-calculator-container max-w-screen-1xl mx-auto px-8 
                    lg:px-40 lg:top-120 lg:relative 
                    xl:top-120 xl:px-60
                    2xl:top-115 2xl:px-100">
      <PlayerSelector players={players} setPlayers={setPlayers} />
      <Subscriptionselector
        subscription={subscription}
        setSubscription={setSubscription}
      />
      <div className="calculator-details mt-15 mb-4 ">
        <h2 className="text-[13px] font-bold mb-2 lg:text-[32px]">Calculadora</h2>
        <div className="flex justify-between w-full text-xs text-pretty pb-2 border-b">
          <span className="w-[100px] text-left lg:text-2xl">Categoría</span>
          <span className="w-[100px] text-center lg:text-2xl">Cantidad</span>
          <span className="w-[100px] text-right lg:text-2xl">Precio</span>
        </div>
        <table className="w-full text-left border-collapse mb-4">
          <tbody>
            <tr>
              <td className="py-1 text-pretty text-xs lg:text-2xl">CPU</td>
              <td className="py-1 px-2 ml-10 flex text-pretty text-xs lg:text-2xl">
                <span className="text-white lg:text-2xl">Infinitos Núcleos</span>
              </td>
              <PriceCell />
            </tr>
            <tr>
              <td className="py-1 text-pretty text-xs lg:text-2xl">RAM</td>
              <td className="py-1 px-2 ml-16 flex text-pretty text-xs lg:text-2xl">
                <input
                  type="number"
                  className="border-0 border-pretty w-10 text-center"
                  value={ram}
                  onChange={(e) =>
                    setRam(Math.min(Number(e.target.value), maxRam))
                  }
                />
              </td>
              <PriceCell price={ram * baseValues.RAM.unitPrice} />
            </tr>
            <tr>
              <td className="py-1 text-pretty text-xs lg:text-2xl">DISK</td>
              <td className="py-1 px-2 ml-16 flex text-pretty text-xs lg:text-2xl">
                <input
                  type="number"
                  className="border-0 border-pretty w-10 text-center"
                  value={disk}
                  onChange={(e) =>
                    setDisk(Math.min(Number(e.target.value), maxDisk))
                  }
                />
              </td>
              <PriceCell price={disk * baseValues.DISK.unitPrice} />
            </tr>
            <tr>
              <td className="py-1 text-pretty text-xs lg:text-2xl">SOPORTE</td>
              <td className="py-1 px-2 ml-9 flex text-pretty text-xs">
                <span className="text-white lg:text-2xl">Infinito Pedir ayuda</span>
              </td>
              <PriceCell />
            </tr>
          </tbody>
        </table>
      </div>
      <div className="calculator-summary mb-4 space-y-2">
        <hr className="border-b-0 border-pretty" />
        <div className="flex text-xs text-pretty justify-between lg:text-2xl">
          <p>Sub Total Mensual:</p>
          <span className="text-pretty lg:text-2xl">${calculateSubtotal()}</span>
        </div>
        <div className="flex text-xs justify-between lg:text-2xl">
          <p>Descuento:</p>
          <span className="text-pretty lg:text-2xl">
            ${calculateDiscount(calculateSubtotal())}
          </span>
        </div>
        <div className="flex text-xs justify-between lg:text-2xl">
          <p>Total X tiempo:</p>
          <span className="text-pretty lg:text-2xl">${calculateTotal()}</span>
        </div>
      </div>
      <div className="flex text-xs text-pretty justify-end mt-4">
        <a
          href="#"
          className="inline-block text-white text-xs border border-[#00fff9] px-5 py-1 rounded-full transition-all duration-300 lg:text-2xl"
        >
          Comprar
        </a>
      </div>
    </div>
  );
};

export default IntegratedCalculator;
