import React from "react";
import Arkcontra from "@/assets/Arkcontra.svg";

interface TeamMember {
  name: string;
  src: string;
}
const teamMembersMobile: TeamMember[] = [
  { name: "Victor", src: Arkcontra },
  { name: "Nombre Apellido", src: Arkcontra },
  { name: "Nombre Apellido", src: Arkcontra },
  { name: "Nombre Apellido", src: Arkcontra },
  { name: "Nombre Apellido", src: Arkcontra },
  { name: "Nombre Apellido", src: Arkcontra },
  { name: "Nombre Apellido", src: Arkcontra },
  { name: "Nombre Apellido", src: Arkcontra },
];
const teamMembersPC: TeamMember[] = [
  ...teamMembersMobile,
  { name: "Nombre Apellido", src: Arkcontra },
];

const Imgnosotros: React.FC = () => {
  return (
    <>
      <div className="block lg:hidden max-w-4xl mx-auto px-5 py-2 relative ">
        <header className="mb-8">
          <h3 className="text-sm font-bold mb-4 lg:text-[32px] lg:text-[#00fff9]">
            "La Historia de los Andes: Uniendo Pasión y Comunidad"
          </h3>
          <p className="text-xs text-gray-300 leading-relaxed lg:text-2xl">
            Andes conecta Sudamérica con una comunidad de jugadores vibrante. Inspirados en la cordillera, ofrecemos calidad accesible y creamos relaciones duraderas donde la pasión y la comunidad se unen.
          </p>
        </header>
        <section>
          <h2 className="text-sm text-center mb-6 lg:text-[#00fff9] lg:text-[32px] lg:text-left">
            Nuestro equipo
          </h2>
          <div className="grid grid-cols-2 gap-6 justify-items-center">
            {teamMembersMobile.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={member.src}
                  alt={member.name}
                  className="rounded-full bg-white mb-2 w-16 h-16"
                />
                <p className="text-center text-sm">{member.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="hidden lg:block max-w-4xl mx-auto px-5 py-2 lg:relative lg:top-[450px] lg:mb-[600px] xl:top-[450px] xl:mb-[600px] 2xl:top-[450px] 2xl:mb-[300px] ">
        <header className="mb-8">
          <h3 className="text-[32px] font-bold mb-4 text-[#00fff9]">
            "La Historia de los Andes: Uniendo Pasión y Comunidad"
          </h3>
          <p className="text-2xl text-gray-300 leading-relaxed">
            Andes conecta Sudamérica con una comunidad de jugadores vibrante. Inspirados en la cordillera, ofrecemos calidad accesible y creamos relaciones duraderas donde la pasión y la comunidad se unen.
          </p>
        </header>
        <section>
          <h2 className="text-[32px] text-left mb-6 text-[#00fff9]">
            Nuestro equipo
          </h2>
          <div className="grid grid-cols-3 gap-6 justify-items-center 2xl:mb-[200px]">
            {teamMembersPC.map((member, index) => (
              <div key={index} className="flex flex-col items-center lg:mb-10">
                <img
                  src={member.src}
                  alt={member.name}
                  className="rounded-full bg-white mb-2 w-49 h-49 lg:mb-10"
                />
                <p className="text-center text-2xl">{member.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Imgnosotros;

