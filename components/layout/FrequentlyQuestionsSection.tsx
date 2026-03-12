import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FrequentlyQuestionsSection = () => {
    return (
        <div className="mx-5 pb-20 lg:px-10 lg:mt-40 2xl:px-100">
            <h2 className="text-[#00FFF9] text-sm font-bold mb-2.5 lg:text-[32px]">
                Preguntas frecuentes
            </h2>
            <Accordion type="multiple">
                {/* Pregunta 1 */}
                <AccordionItem
                    value="item-1"
                    className="border rounded-2xl border-[#00FFF9] mb-2.5"
                >
                    <AccordionTrigger className="text-xs pl-2.5 pt-[5px] pb-0 accordion-trigger lg:text-[32px] lg:pl-10">
                        ¿Cómo puedo contactar con alguien de soporte?
                    </AccordionTrigger>
                    <AccordionContent className="text-[11px] text-pretty py-[5px]">
                        <p className="pl-2.5 lg:text-2xl">
                            Puedes contactarte con nosotros a través del chat en la burbuja de
                            abajo a la derecha. Nuestro equipo está listo para ayudarte a través
                            de WhatsApp, Email y Telegram.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                {/* Pregunta 2 */}
                <AccordionItem
                    value="item-2"
                    className="border rounded-2xl border-[#00FFF9] mb-2.5"
                >
                    <AccordionTrigger className="text-xs pl-2.5 pt-[5px] pb-0 accordion-trigger lg:text-[32px] lg:pl-10">
                        ¿Cuánto tiempo demora en crearse mi servidor?
                    </AccordionTrigger>
                    <AccordionContent className="text-[11px] font-light text-pretty py-[5px]">
                        <p className="pl-2.5 lg:text-2xl">
                            Después de hablar con nuestros agentes y seleccionar tu servidor,
                            completas el formulario que te enviaremos por mensaje privado. En
                            minutos tu servidor estará listo.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                {/* Pregunta 3 */}
                <AccordionItem
                    value="item-3"
                    className="border rounded-2xl border-[#00FFF9] mb-2.5"
                >
                    <AccordionTrigger className="text-xs pl-2.5 pt-[5px] pb-0 accordion-trigger lg:text-[32px] lg:pl-10">
                        ¿Cómo elijo el plan adecuado para mis necesidades?
                    </AccordionTrigger>
                    <AccordionContent className="text-[11px] font-light text-pretty py-[5px]">
                        <p className="pl-2.5 lg:text-2xl">
                            Si tienes dudas sobre qué plan elegir, contáctanos directamente a
                            través del chat en la burbuja de abajo a la derecha, y te ayudaremos
                            a elegir el adecuado para ti.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                {/* Pregunta 4 */}
                <AccordionItem
                    value="item-4"
                    className="border rounded-2xl border-[#00FFF9] mb-2.5"
                >
                    <AccordionTrigger className="text-xs pl-2.5 pt-[5px] pb-0 accordion-trigger lg:text-[32px] lg:pl-10">
                        ¿Cuáles son las opciones de pago disponibles?
                    </AccordionTrigger>
                    <AccordionContent className="text-[11px] font-light text-pretty py-[5px]">
                        <p className="pl-2.5 lg:text-2xl">
                            Aceptamos transferencias directas en pesos chilenos (CLP) si tienes
                            cuenta bancaria en Chile. También puedes pagar a través de PayPal en
                            dólares (USD).
                        </p>
                    </AccordionContent>
                </AccordionItem>
                {/* Pregunta 5 */}
                <AccordionItem
                    value="item-5"
                    className="border rounded-2xl border-[#00FFF9] mb-2.5"
                >
                    <AccordionTrigger className="text-xs pl-2.5 pt-[5px] pb-0 accordion-trigger lg:text-[32px] lg:pl-10">
                        Para Minecraft, ¿puedo jugar con Bedrock y Java?
                    </AccordionTrigger>
                    <AccordionContent className="text-[11px] font-light text-pretty py-[5px]">
                        <p className="pl-2.5 lg:text-2xl">
                            Sí, al seleccionar un servidor de Minecraft, elige la edición y luego
                            la versión deseada. Si estás indeciso, contáctanos a través del chat
                            en la burbuja de abajo a la derecha, y te ayudaremos a elegir.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default FrequentlyQuestionsSection;
