const LocationTile = ({ img, title, text, alt }: { img: string; title: string; text: string; alt: string; }) => {
    return (
      <div className="border border-[#00FFF9] rounded-2xl bg-[#220530] flex flex-col items-center w-40 h-32 lg:w-69 lg:h-56">
        <img className="mt-1.5 mlg:w-19 h-23" src={img} alt={alt} />
        <div className="w-full flex flex-col items-center justify-center px-2">
          <h3 className="w-full text-center text-[13px] lg:text-xl text-[#00FFF9]">
            {title}
          </h3>
          <p className="w-full text-center text-[10px] lg:text-xl justify-center text-white text-pretty">
            {text}
          </p>
        </div>
      </div>
    );
  };
  
  export default LocationTile;
  