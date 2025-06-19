import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Props = {
  title: string;
  iconLeft?: IconDefinition;
  iconRight?: IconDefinition;
  iconColor?: string;
  className?: string;
};

const ButtonFill = ({
  title,
  iconLeft,
  iconRight,
  iconColor = "",
  className = "",
}: Props) => {
  return (
    <button
      className={`group flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-teal-600 bg-teal-600 px-4 py-2 text-sm font-bold text-white transition-all hover:cursor-pointer hover:border-teal-700 hover:bg-teal-700 lg:px-5 lg:py-3 ${className}`}
    >
      {iconLeft && (
        <FontAwesomeIcon icon={iconLeft} className={`h-4 w-4 ${iconColor}`} />
      )}
      {title}
      {iconRight && (
        <FontAwesomeIcon icon={iconRight} className={`h-4 w-4 ${iconColor}`} />
      )}
    </button>
  );
};

export default ButtonFill;
