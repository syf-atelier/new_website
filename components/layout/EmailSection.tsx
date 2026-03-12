import { useState, ChangeEvent } from 'react';

const EmailSection = () => {
    const [email, setEmail] = useState<string>(''); 

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => { 
        setEmail(event.target.value);
    };
    const handleSendDiscount = () => {
        if (validateEmail(email)) {
            alert(`¡Descuento aplicado a ${email}!`);
        } else {
            alert('Por favor, ingrese un correo electrónico válido.');
        }
    };
    const validateEmail = (email: string) => { 
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    return (
        <div
            className="mt-2 pt-13 pb-10 flex flex-col lg:px-14 xl:px-14 2xl:px-93"
            style={{
                background: 'linear-gradient(to bottom, #00FFF900 0%, #00999533 20%, #00D6D133 80%, #00FFF900 100%)',
            }}
        >
            <h2 className="text-[13px] font-medium m-5 lg:text-[32px]">
                ¡Únete a ANDES HOSTING y obtén un descuento exclusivo!
            </h2>
            <p className="text-xs text-pretty ml-5 mr-5 lg:text-2xl">
                Deja tu email y recibe un 15% de descuento en tu primer servidor. Disfruta de CPU ilimitada, baja latencia y asistencia personalizada para jugar sin interrupciones ni trolls.
            </p>
            <div className="flex justify-between rounded-2xl border border-[#00fff9] mt-2.5 ml-5 mr-5 ">
                <input
                    type="email"
                    placeholder="@gmail.com"
                    className="w-64 h-8 px-2 text-xs font-normal bg-transparent focus:outline-none lg:text-2xl lg:h-9"
                    value={email}
                    onChange={handleEmailChange}
                />
                <button
                    className="w-20 h-8 lg:h-9 lg:w-55 bg-[#00fff9] text-[#15001f] text-xs rounded-2xl border-l border-[#00fff9] active:bg-[#15001F] active:text-white transition-colors"
                    onClick={handleSendDiscount}
                >
                    Enviar
                </button>
            </div>
        </div>
    );
};
export default EmailSection;
