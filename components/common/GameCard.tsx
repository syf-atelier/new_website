const GameCard = ({ img, text, alt }: { img: string, text: string, alt: string; }) => {
    return (
        <div className="flex flex-col mr-2.5">
            
                <img src={img} alt={alt} />
            
            <h3 className="text-xs font-bold text-white mt-2.5">{text}</h3>
        </div>
    );
};

export default GameCard;