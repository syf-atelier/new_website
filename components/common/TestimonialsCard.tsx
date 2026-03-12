import star1 from "@/assets/star1.svg";
import star2 from "@/assets/star2.svg";

const TestimonialsCard = ({ name, img, alt, text, stars }: { name: string, img: string, alt: string, text: string, stars: number; }) => {
    const totalStars = 5;
    const starIcons = Array.from({ length: totalStars }, (_, index) =>
        index < stars ? star1 : star2
    );
    return (
        <div className="p-[5px] flex flex-col items-center justify-center border border-[#00FFF9] rounded-2xl ">
            <h3 className="text-[11px] text-center lg:text-2xl mb-2.5">
                {name}
            </h3>
            <img className="w-19 mb-[5px] lg:w-53 " src={img} alt={alt} />
            <hr className="border-[#00FFF9] mb-[5px]" />
            <p className="text-[9px] font-light h-25 w-19 lg:text-2xl lg:h-86 lg:w-40 mb-[7px] lg:m-2 text-pretty">
                {text}
            </p>
            <div className="flex flex-row">
                {starIcons.map((star, index) => (
                    <img key={index} src={star} alt="star" className="w-3 h-3 lg:w-8 lg:h-8" />
                ))}
            </div>
        </div>
    );
};

export default TestimonialsCard;