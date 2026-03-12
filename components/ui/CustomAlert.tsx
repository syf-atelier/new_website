import React from "react";

interface CustomAlertProps {
  message: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div
        className="bg-gradient-andes-alert bg-[#00fff9] p-4 rounded-lg relative z-10 max-w-md w-full 
                   lg:max-w-full lg:w-full lg:h-100 lg:rounded-none lg:flex lg:flex-col lg:justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-[#220530] lg:right-40 lg:top-20 lg:text-5xl text-xs font-bold hover:text-[#15001F] transition cursor-pointer"
        >
          X
        </button>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-4 from-[#15001F] to-transparent pointer-events-none rounded-t-lg" />
          <div
            className="pt-4 pb-4 text-[10px] lg:text-xl lg:px-30 text-pretty font-medium text-[#220530]"
            style={{ textAlign: "justify" }}
          >
            {message.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full from-[#15001F] to-transparent pointer-events-none rounded-b-lg" />
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
