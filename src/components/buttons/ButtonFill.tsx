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
      className={`group border-primary bg-primary hover:bg-primary/80 flex items-center justify-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-bold whitespace-nowrap text-black transition-all lg:px-5 lg:py-3 ${className}`}
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
