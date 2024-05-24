import React from "react";
import { TERipple } from "tw-elements-react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
}) => {
  return (
    <div className="flex items-center justify-between pb-6">
      <TERipple rippleColor="light">
        <button
          type={type}
          onClick={onClick}
          className="inline-block rounded border-2 border-purple-500 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-light transition duration-150 ease-in-out hover:border-purple-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-purple-600 focus:border-purple-600 focus:text-purple-600 focus:outline-none focus:ring-0 active:border-purple-700 active:text-purple-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        >
          {children}
        </button>
      </TERipple>
    </div>
  );
};

export default Button;
