import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  styles = "",
}) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-3 py-2 text-base",
    large: "px-4 py-3 text-lg",
  };

  return (
    <button
      className={`${sizeClasses[size]} bg-blue-500 text-white font-semibold ${shape} ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
