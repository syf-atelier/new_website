import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialsCard from "@/components/common/TestimonialsCard";
import testimonials1 from "@/assets/testimonials1.svg";
import testimonials2 from "@/assets/testimonials2.svg";
import testimonials3 from "@/assets/testimonials3.svg";

const TestimonialsSection = () => {
    return (
        <div className="relative pb-5">
            <h2 className="text-[#00FFF9] font-bold lg:text-[32px] lg:mt-20 text-sm text-center mb-2">
                Testimonios
            </h2>
            <Carousel opts={{ align: "start", loop: false }}>
                <CarouselContent>
                    <CarouselItem className="flex flex-row gap-2 lg:gap-3 justify-center">
                        <TestimonialsCard
                            name="María López"
                            img={testimonials1}
                            alt="foto"
                            text='"Gracias a Andes, nuestro proyecto fue un éxito. El equipo de trabajo es increíblemente profesional y dedicado."'
                            stars={4}
                        />
                        <TestimonialsCard
                            name="Juan Pérez"
                            img={testimonials2}
                            alt="foto"
                            text='"Andes superó todas mis expectativas. Su compromiso y creatividad son excepcionales. ¡Los recomiendo totalmente!"'
                            stars={4}
                        />
                        <TestimonialsCard
                            name="Carlos Ramírez"
                            img={testimonials3}
                            alt="foto"
                            text='"Andes entregó resultados impecables ya tiempo. Estoy muy satisfecho con su trabajo y los volveré a contratar."'
                            stars={4}
                        />
                    </CarouselItem>
                    <CarouselItem className="flex flex-row gap-2 justify-center">
                        <TestimonialsCard
                            name="María López"
                            img={testimonials1}
                            alt="foto"
                            text='"Gracias a Andes, nuestro proyecto fue un éxito. El equipo de trabajo es increíblemente profesional y dedicado."'
                            stars={4}
                        />
                        <TestimonialsCard
                            name="Juan Pérez"
                            img={testimonials2}
                            alt="foto"
                            text='"Andes superó todas mis expectativas. Su compromiso y creatividad son excepcionales. ¡Los recomiendo totalmente!"'
                            stars={4}
                        />
                        <TestimonialsCard
                            name="Carlos Ramírez"
                            img={testimonials3}
                            alt="foto"
                            text='"Andes entregó resultados impecables ya tiempo. Estoy muy satisfecho con su trabajo y los volveré a contratar."'
                            stars={4}
                        />
                    </CarouselItem>
                    <CarouselItem className="flex flex-row gap-2 justify-center">
                        <TestimonialsCard
                            name="María López"
                            img={testimonials1}
                            alt="foto"
                            text='"Gracias a Andes, nuestro proyecto fue un éxito. El equipo de trabajo es increíblemente profesional y dedicado."'
                            stars={4}
                        />
                        <TestimonialsCard
                            name="Juan Pérez"
                            img={testimonials2}
                            alt="foto"
                            text='"Andes superó todas mis expectativas. Su compromiso y creatividad son excepcionales. ¡Los recomiendo totalmente!"'
                            stars={4}
                        />
                        <TestimonialsCard
                            name="Carlos Ramírez"
                            img={testimonials3}
                            alt="foto"
                            text='"Andes entregó resultados impecables ya tiempo. Estoy muy satisfecho con su trabajo y los volveré a contratar."'
                            stars={4}
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 lg:left-50 2xl:left-[500px] left-2 transform lg:w-18 lg:h-20 -translate-y-1/2 z-20 text-[#00CEC9] transition-colors duration-200 border-none scale-150" />
                <CarouselNext className="absolute top-1/2 right-2 lg:right-50 2xl:right-[500px] transform lg:w-18 lg:h-20 -translate-y-1/2 z-20 text-[#00CEC9] transition-colors duration-200 border-none scale-150" />
            </Carousel>
        </div>
    );
};

export default TestimonialsSection;
