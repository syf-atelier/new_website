const Comunidisc = () => {
  return (
    <div className="text-white p-6 rounded-lg shadow-lg w-full flex flex-col lg:px-10 lg:relative lg:bottom-110 xl:px-45 xl:bottom-150 2xl:bottom-150">
      <h2 className="text-sm font-bold mb-1 text-[#00fff9] lg:text-[32px] lg:left lg:relative lg:mb-10">
        ¡Únete a Nuestra Comunidad en Discord!🌟
      </h2>
      <p className="mb-3 text-[11px] text-gray-300 lg:text-2xl text-center px-8 lg:flex lg:right-8 lg:relative text-justify lg:mb-10">
        Descubre todo lo que Andes Hosting tiene para ofrecerte en nuestra comunidad oficial de Discord. 💻✨ Conecta con otros usuarios, recibe soporte personalizado, participa en eventos exclusivos y mantente al día con nuestras últimas novedades.
      </p>
      <ul className="list-none space-y-3 mb-4 text-[11px] text-gray-300 lg:text-2xl text-left px-8 lg:relative lg:right-9 lg:mb-10">
        <li>📢 ¿Qué encontrarás en nuestro Discord?</li>
        <li>- Soporte técnico rápido y directo.</li>
        <li>- Consejos y recursos para optimizar tus proyectos.</li>
        <li>- Un espacio para compartir ideas y aprender junto a otros entusiastas de la tecnología y videojuegos.</li>
      </ul>
      <p className="mb-6 text-[11px] text-[#00fff9] lg:text-2xl text-center px-8 lg:flex lg:relative lg:right-9">
        ¡No esperes más! Haz clic en el enlace y forma parte de nuestra comunidad. 🚀
      </p>
      <button
        className="text-white border text-xs border-[#00fff9] py-1 px-8 rounded-full hover:bg-blue-600 lg:text-2xl transition-all duration-300 lg:w-87 lg:h-11 lg:left-150 xl:left-165 lg:relative"
        onClick={() => window.open("https://discord.com", "_blank")}
      >
        Discord
      </button>
    </div>
  );
};

export default Comunidisc;

