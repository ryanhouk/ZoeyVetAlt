import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Props = {
  title: string;
  url: string;
  iconLeft?: IconDefinition;
  iconRight?: IconDefinition;
  iconColor?: string;
  className?: string;
};

const LinkButtonFill = ({
  title,
  url,
  iconLeft,
  iconRight,
  iconColor = "",
  className = "",
}: Props) => {
  return (
    <Link
      href={url}
      className={`group flex items-center justify-center gap-2 rounded-full border-2 border-neutral-200 bg-neutral-200 px-4 py-2 text-sm font-bold whitespace-nowrap transition-all lg:px-5 lg:py-3 ${className}`}
    >
      {iconLeft && (
        <FontAwesomeIcon icon={iconLeft} className={`h-4 w-4 ${iconColor}`} />
      )}
      {title}
      {iconRight && (
        <FontAwesomeIcon icon={iconRight} className={`h-4 w-4 ${iconColor}`} />
      )}
    </Link>
  );
};

export default LinkButtonFill;
