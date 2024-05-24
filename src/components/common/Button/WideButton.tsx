import React from "react";
import { TERipple } from "tw-elements-react";

interface WideButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const WideButton: React.FC<WideButtonProps> = ({
  text,
  onClick,
  type = "button",
}) => {
  return (
    <div className="mb-12 pb-1 pt-1 text-center">
      <TERipple rippleColor="light" className="w-full">
        <button
          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
          type={type}
          onClick={onClick}
          style={{
            background:
              "linear-gradient(to right, #6b21a8 , #581c87, #3b0764, #581c87, #6b21a8)",
          }}
        >
          {text}
        </button>
      </TERipple>
    </div>
  );
};

export default WideButton;
