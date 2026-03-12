import mapLocation from '@/assets/map_location.svg';
import chileFlag from '@/assets/chile_flag.svg';

const MapLocation = () => {
  return (
    <div>
      <img 
        src={mapLocation} 
        alt="Location" 
        className="w-[150px] md:w-[280px]" 
      />
      <div className="flex flex-row items-center pl-6 mt-2">
        <h3 className="text-sm lg:text-xl font-normal text-[#00FFF9] mr-1.5">
          Valparaíso
        </h3>
        <img 
          src={chileFlag} 
          alt="Flag of Chile" 
          className="w-6 lg:w-10" 
        />
      </div>
    </div>
  );
};

export default MapLocation;
