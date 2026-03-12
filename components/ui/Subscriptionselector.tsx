import React, { JSX } from "react";
import { SubscriptionDuration } from "@/types/index";

export interface SubscriptionSelectorProps {
  subscription: SubscriptionDuration;
  setSubscription: React.Dispatch<React.SetStateAction<SubscriptionDuration>>;
}
const subscriptionOptions: {
  value: SubscriptionDuration;
  label: JSX.Element;  
}[] = [
  {
    value: "1 Mes",
    label: <span className="text-white text-[8px] lg:text-2xl">Mensual</span>,
  },
  {
    value: "3 Meses",
    label: (
      <>
        <span className="text-white text-[8px] lg:text-2xl">3 Meses </span>
        <span className="text-[#9DFF00] font-bold text-[8px] lg:text-2xl">10%</span>
      </>
    ),
  },
  {
    value: "1 Año",
    label: (
      <>
        <span className="text-white text-[8px] lg:text-2xl">1 Año </span>
        <span className="text-[#9DFF00] font-bold text-[8px] lg:text-2xl">25%</span>
      </>
    ),
  },
];

const Subscriptionselector: React.FC<SubscriptionSelectorProps> = ({
  subscription,
  setSubscription,
}) => {
  const initialSliderValue =
    subscription === "1 Mes" ? 1 : subscription === "3 Meses" ? 2 : 3;
  const [sliderPosition, setSliderPosition] = React.useState<number>(initialSliderValue);
  const [, setIsSliding] = React.useState(false);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setSliderPosition(value);
    if (value === 1) {
      setSubscription("1 Mes");
    } else if (value === 2) {
      setSubscription("3 Meses");
    } else if (value === 3) {
      setSubscription("1 Año");
    }
  };

  const handleSliderStart = () => setIsSliding(true);
  const handleSliderEnd = () => setIsSliding(false);

  return (
    <div className="subscription-selector">
      <div className="h-full from-[#1A1A2E] to-[#162447] text-white flex flex-col py-6 items-center">
        <h3 className="text-pretty font-bold text-[13px] text-white text-center mb-0 lg:text-[32px] lg:text-[#00fff9]">
          Selecciona la cantidad de tiempo
        </h3>

        <div className="w-3/4">
          <div className="relative h-10">
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-[2px] bg-white"></div>
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full pointer-events-none">
              {["0%", "50%", "100%"].map((position, index) => (
                <div
                  key={`rayita_${index}`}
                  className="absolute w-[1px] h-2 bg-white"
                  style={{
                    left: position,
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>
            <input
              type="range"
              min="1"
              max="3"
              step="1"
              value={sliderPosition}
              onChange={handleSliderChange}
              onMouseDown={handleSliderStart}
              onMouseUp={handleSliderEnd}
              className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 appearance-none rounded-lg outline-none  
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
                [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:cursor-pointer 
                [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full
                [&::-webkit-slider-runnable-track]:opacity-0 [&::-moz-range-track]:opacity-0"
            />
          </div>
          <div className="flex justify-between items-center gap-2 ">
            {subscriptionOptions.map((option, index) => (
              <div key={option.value} className="flex flex-col items-center">
                <button
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-200 lg:w-9 lg:h-9 ${
                    subscription === option.value
                      ? "bg-[#00fff9] border-[#00fff9]"
                      : "bg-transparent border-[#00fff9]"
                  }`}
                  onClick={() => {
                    setSliderPosition(index + 1);
                    setSubscription(option.value);
                  }}
                />
                <p className="text-xs text-[#00fff9] mt-2">{option.value}</p>
                <p className="text-[10px] text-gray-400">{option.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptionselector;
