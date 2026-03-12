import managePanel from '@/assets/manage_panel.svg';

const ManageSection = () => {
  return (
    <div className="mt-10 mx-auto flex flex-col px-4 top-169 z-10 absolute 
                    lg:top-545 lg:px-20 
                    xl:px-80 xl:mt-20
                    2xl:px-115 2xl:mt-30 ">
      <h2 className="text-[#00FFF9] text-[13px] lg:text-[32px] mb-2.5 font-semibold text-left">
        Administra tus servidor con{" "}
        <span className="font-bold text-sm lg:text-[32px] block">Pterodacty</span>
      </h2>
      <p className="text-xs text-pretty lg:text-2xl">
        Gestiona tus servidores con Pterodactyl: crea y controla tu servidor
        fácilmente con una plataforma de código abierto. Administra recursos
        con un clic y mantén tu servidor activo 24/7.
      </p>
      <p className="text-[#00FFF9] text-xs mb-6 text-left lg:text-2xl">
        ¡Rendimiento, estabilidad y control al alcance de todos!
      </p>
      <div className='items-center '>
      <img
        src={managePanel}
        alt="Panel de administración"
        className="w-full lg:max-w-[993px] xl:max-w-[963px] 2xl:max-w-[1963px] h-auto"
      />
      </div>
    </div>
  );
};

export default ManageSection;
