import React from "react";

const Whatsapp: React.FC = () => {
  return (
    <div className="p-4 max-w-md text-center text-justify 
                    lg:relative lg:top-100 mx-auto lg:px-10 lg:max-w-full lg:flex lg:flex-col lg:justify-center lg:mt-[500px] lg:mb-[100px]
                    xl:px-65 xl:mt-[500px] xl:mb-[200px] 
                    2xl:px-100 2xl:mt-[500px] 2xl:mb-[200px]  ">
      <h3 className="text-sm mb-1 text-[#00fff9] text-pretty lg:text-[32px] lg:text-left">
        No saber qué plan elegir
      </h3>
      <p className="text-[11px] mb-4 text-pretty text-justify text-white lg:text-xl lg:text-left">
        ¿Aún estás inseguro o no encuentras lo que estabas buscando? ¡Contáctanos y te ayudaremos en lo que necesites!
      </p>
      <p className="font-semibold text-[11px] -mt-4 text-pretty text-white lg:text-xl lg:text-left">
        Resolvemos tus dudas
      </p>
      <div className="text-right mt-4 lg:text-left-2">
        <a
          href="https://wa.me/tu-numero"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white text-pretty border text-xs border-[#00fff9] px-3 py-1 rounded-full transition-all duration-300 hover:bg-[#00fff9] hover:text-black lg:text-xl"
        >
          Hablamos por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Whatsapp;
