import React, { useState } from "react";
import Blogs from "@/assets/Blogs.svg";
import Rectangle_100 from "@/assets/Rectangle_100.svg";
import Rectangle_101 from "@/assets/Rectangle_101.svg";
import Rectangle_106 from "@/assets/Rectangle_106.svg";
import Rectangle_107 from "@/assets/Rectangle_107.svg";
import Blog_pc from "@/assets/Blog_pc.svg";
import { Blockdata, IBlockItem } from "./Blockdata";

const ITEMS_PER_PAGE = 9;

const categories: string[] = [
  "Guías y Tutoriales",
  "Novedades",
  "Tips para Gamer",
];

const Blogprin = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="relative mt-2">
        <img
          src={Blogs}
          alt="Imagen de Minecraft (móvil)"
          className="w-full h-auto block lg:hidden"
        />
        <img
          src={Blog_pc}
          alt="Imagen de Minecraft para PC"
          className=" hidden absolute z-10 
          lg:block h-auto lg:left-[348px] lg:relative lg:max-w-[626px] 
          xl:max-w-[906px] xl:left-[489px] 
          2xl:max-w-[906px] 2xl:left-[728px] 
          "
        />
        <h2 className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 z-20 pointer-events-none block 
          lg:hidden ">
          Bienvenido al Blog de Andes Hosting
        </h2>
        <h2 className="absolute  h-auto transform -translate-x-1/2 z-20 pointer-events-none hidden relative
          lg:block lg:bottom-[200px] lg:max-w-[555px] lg:left-[270px] lg:text-4xl font-bold lg:text-[#00FFF9]
          xl:max-w-[605px] xl:bottom-[250px] xl:text-5xl xl:left-[300px]
          2xl:max-w-[635px] 2xl:bottom-[300px]">
          Bienvenido al Blog de Andes Hosting
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
          lg:block h-auto lg:left-[40px] lg:max-w-[938px] lg:bottom-[353px] lg:relative
          xl:max-w-[1368px]  xl:left-[30px] xl:bottom-[489px]
          2xl:max-w-[1668px] 2xl:left-[268px] 2xl:lg:bottom-[489px] "
        />
        <img
          src={Rectangle_106}
          alt="Imagen difuminada 2 (PC)"
          className="absolute z-10 h-auto pointer-events-none hidden relative
          lg:block lg:left-[311px] lg:max-w-[665px] lg:bottom-[620px] 
          xl:max-w-[955px] xl:left-[441px] xl:bottom-[889px] 
          2xl:max-w-[975px] 2xl:left-[661px] 2xl:bottom-[889px] "
        />
        <p className="absolute inset-0 flex text-pretty items-center justify-center text-white text-center text-xs font-medium bg-opacity-50 px-6 mt-5 z-10 block lg:hidden">
          Aquí encontrarás una variedad de artículos diseñados para apoyarte en tu aventura:
         </p>
      </div>
      <p className="absolute relative flex text-pretty text-white z-20 hidden 
      lg:bottom-[740px] px-90 lg:px-40 lg:right-[120px] lg:flex lg:text-lg
      xl:text-xl xl:bottom-255 xl:right-[300px]
      2xl:text-2xl 2xl:bottom-265 2xl:w-[1500px] 2xl:right-[112px]">
      Aquí encontrarás una variedad de artículos diseñados para apoyarte en tu aventura:
      </p>
    </div>
  );
}

const Blocksearch: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Guías y Tutoriales");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedItem, setSelectedItem] = useState<IBlockItem | null>(null);

  let sortedData: IBlockItem[] = [...Blockdata].sort((a, b) => {
    if (a.category === activeCategory && b.category !== activeCategory) return -1;
    if (a.category !== activeCategory && b.category === activeCategory) return 1;
    return 0;
  });

  if (searchQuery.trim() !== "") {
    const searchId = Number(searchQuery);
    if (!isNaN(searchId)) {
      sortedData = sortedData.filter((item) => item.id === searchId);
    }
  }

  const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = sortedData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  if (selectedItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="p-8 border border-[#00fff9] bg-[#220530] rounded-3xl shadow-lg lg:w-291 lg:min-h-[300px] lg:mt-20 lg:mb-20">
          <h1 className="text-3xl font-bold text-white mb-4 lg:text-[32px]">
            {selectedItem.title}
          </h1>
          <p className="text-[#00fff9] text-sm mb-2 lg:text-2xl">
            Fecha: {selectedItem.date}
          </p>
          <div className="mb-4 ">
            <img
              src={selectedItem.src}
              alt={selectedItem.title}
              className="rounded lg:w-275 lg:h-170"
            />
          </div>
          <p className="text-white text-[10px] mb-6 whitespace-pre-line lg:text-2xl">
            {selectedItem.content}
          </p>
          <button
            onClick={() => setSelectedItem(null)}
            className="w-full border border-[#00fff9] text-white px-4 py-2 rounded-full font-bold transition-colors hover:bg-[#00fff9] lg:w-96 lg:h-12"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <Blogprin />
      <div className="p-4 lg:relative xl:px-[230px] 2xl:px-[499px] xl:lg:bottom-190 lg:bottom-140">
        <div className="flex gap-1 mb-4 lg:gap-10 xl:gap-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`rounded transition-colors lg:text-2xl lg:w-76 lg:h-15 ${
                activeCategory === category
                  ? "border-[#00fff9] bg-[#00fff9] text-black px-4 py-1 font-bold text-[11px] rounded-full hover:bg-blue-600 transition-colors"
                  : "border-[#00fff9] border text-white px-4 py-2 font-bold text-[11px] rounded-full hover:bg-blue-600 transition-colors"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar por ID..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full 2xl:max-w-[962px] px-2 py-2 border border-[#00fff9] rounded-full lg:text-2xl"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-11 lg:px-1">
          {paginatedData.map((item) => (
            <div
              key={item.id}
              className="relative p-0 rounded-lg shadow-md border border-[#00fff9] lg:w-117 lg:h-182 bg-[#220530]"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-40 object-cover rounded lg:w-117 lg:h-82 lg:rounded-t-lg"
              />
              <h3 className="mt-2 text-xl font-bold text-white lg:text-2xl lg:px-2">
                {item.title}
              </h3>
              <p className="mt-1 text-gray-300 text-sm lg:text-2xl lg:px-2 lg:pt-2">
                {item.contentcart}
              </p>
              <p className="mt-1 text-sm lg:text-2xl lg:px-2 lg:pt-2 text-[#00fff9]">
                {item.date}
              </p>
              <button
                className="mt-2 px-4 py-2 border border-[#00fff9] rounded-full text-white hover:bg-[#00fff9] transition-colors lg:absolute lg:bottom-4 lg:left-1/2 lg:-translate-x-1/2 lg:z-20 lg:w-110 lg:h-15 lg:text-2xl"
                onClick={() => setSelectedItem(item)}
              >
                Ver más
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center items-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 border rounded-full transition-colors ${
                currentPage === index + 1 ? "bg-[#00fff9] text-black" : "text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blocksearch;
