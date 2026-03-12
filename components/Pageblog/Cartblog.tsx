import React from "react";
import { IBlockItem } from "./Blockdata";

interface CartblogProps {
  data: IBlockItem[];
  onSelectItem: (item: IBlockItem) => void;
}

const Cartblog: React.FC<CartblogProps> = ({ data, onSelectItem }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 ">
      {data.map((item) => (
        <div
          key={item.id}
          className="border border-[#00fff9] rounded-xl shadow hover:shadow-lg transition-all lg:w-117 lg:h-180"
        >
          <div className="p-0">
            <img src={item.src} alt={item.title} className="w-full object-cover lg:h-81" />
          </div>
          <div className="p-1">
            <h3 className="text-xl text-xs font-bold mb-1 lg:text-2xl">
              {item.titlecart || item.title}
            </h3>
            <p className="text-white text-[10px] mb-1 lg:text-2xl">
              {item.contentcart || "Descripción resumida..."}
            </p>
            <p className="text-[#00fff9] text-[6px] mb-2 lg:text-2xl">
              Fecha: {item.date}
            </p>
            <button
              onClick={() => onSelectItem(item)}
              className="w-full border border-[#00fff9] lg:text-2xl text-white px-4 py-2 font-bold text-[11px] rounded-full hover:bg-blue-600 transition-colors"
            >
              Ver más
            </button>
          </div>
        </div>
      ))}
      {data.length === 0 && (
        <p className="col-span-full text-center text-gray-500">
          No se encontraron resultados.
        </p>
      )}
    </div>
  );
};

export default Cartblog;
