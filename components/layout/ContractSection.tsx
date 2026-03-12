
const ContractSection = () => {
    return (
        <div className="mt-10 ml-5 mr-5 flex flex-col lg:mt-120 lg:px-14 xl:mt-120 xl:px-44 2xl:mt-160 2xl:px-94">
            <h2 className="text-[#00FFF9] font-semibold lg:mb-4 text-[13px] lg:text-[32px]">
                Contrata un servidor:
                <span className="block font-bold text-sm lg:text-[32px]">Tu servidor, tus reglas.</span>
            </h2>
            <p className="text-xs text-pretty lg:text-2xl">
                Disfruta de CPU ilimitada, baja latencia y soporte personalizado. Juega sin trolls en servidores privados diseñados para mejorar tu experiencia. ¡Únete ahora!
            </p>
            <div className="flex justify-end lg:mt-6">
                <button className="w-44 h-5 lg:w-117 lg:h-8 lg:text-2xl rounded-2xl border border-[#00fff9] text-xs flex items-center justify-center active:bg-[#00fff9] active:text-black transition-colors">
                    Contratanos ahora
                </button>
            </div>
        </div>
    );
};

export default ContractSection;