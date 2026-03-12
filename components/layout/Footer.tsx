import FooterSocialNetworks from "@/components/common/FooterSocialNetworks";
import { Link } from "react-router-dom";

const Footer = () => { 
    return (
        <div>
            <div className="h-[14px]" style={{
                background: 'linear-gradient(to bottom, #15001F 0%, #000000 100%)',
            }}>
            </div>
            <div className="bg-black p-5 relative absolute ">
                <div className="grid grid-cols-2 lg:items-center lg:justify-center grid-rows-3 lg:flex lg:gap-10 lg:px-10 xl:gap-40 2xl:gap-70 ">
                    <div>
                        <div className="py-2.5 pr-2.5 lg:bottom-2 lg:relative">
                            <h3 className="text-xs font-medium mb-2 lg:text-[32px]  ">Juegos</h3>
                            <div>
                                <Link to="/Minecraft">
                                    <p className="text-[10px] font-light lg:text-gray-400 lg:text-xl">Minecraft</p>
                                </Link>
                                <Link to="/Ark">
                                    <p className="text-[10px] font-light lg:text-gray-400 lg:text-xl">ARK</p>
                                </Link>
                                <Link to="/Palworld">
                                    <p className="text-[10px] font-light lg:text-gray-400 lg:text-xl">Palworld</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row-span-1">
                        <div className="py-2.5 pr-2.5 lg:bottom-5 lg:relative">
                            <h3 className="text-xs font-medium mb-2 lg:text-[32px]">Planes</h3>
                            <div>
                                <p className="text-[10px] font-light lg:text-gray-400 lg:text-xl">Planes Fijos</p>
                                <p className="text-[10px] font-light lg:text-gray-400 lg:text-xl">Planes personalizados</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="py-2.5 pr-2.5 lg:bottom-5 lg:relative">
                            <h3 className="text-xs font-medium mb-2 lg:text-[32px]">Soporte</h3>
                            <div>
                                <p className="text-[10px] font-light lg:text-gray-400 lg:text-xl">Necesito ayuda</p>
                                <p className="text-[10px] font-light lg:text-gray-400 lg:text-xl">Preguntas frecuentes</p>
                            </div>
                        </div>
                    </div>

                    <div className="row-span-2">
                        <div className="py-2.5 pr-2.5 lg:top-6 lg:relative">
                            <h3 className="text-xs font-medium mb-2 lg:text-[32px]">Nosotros</h3>
                            <div>
                                <p className="text-[10px] font-light lg:text-gray-400 lg:text-xl">¿Por qué Andes Hosting?</p>
                                <p className="text-[10px] font-light lg:text-gray-400 lg:text-xl">Términos y condiciones</p>
                                <p className="text-[10px] font-light lg:text-gray-400 lg:text-xl">Política de Privacidad</p>
                                <p className="text-[10px] font-light lg:text-gray-400 lg:text-xl">Comunidad</p>
                                <p className="text-[10px] font-light lg:text-gray-400 lg:text-xl">Blog</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex lg:items-center bottom-25 relative lg:mt-20 lg:justify-center">
                    <h3 className="text-xs font-medium mb-2 lg:text-[32px] lg:relative lg:top-20">Redes sociales</h3>
                    <div className="lg:mb-0 lg:p-2 lg:mr-65 lg:relative lg:top-20">
                        <FooterSocialNetworks />
                    </div>
                </div>

                <p className="text-[#00FFF9] text-[9px] lg:mt-20 lg:text-center text-center font-normal lg:text-xl lg:relative lg:bottom-10">
                    Copyright ©2024 AndesHosting. Todos los derechos reservados.
                </p>
            </div>
        </div>
    );
};

export default Footer;
