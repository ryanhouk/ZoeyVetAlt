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
  target?: "_blank" | "_self" | "_parent" | "_top";
};

const LinkButtonBorder = ({
  title,
  url,
  iconLeft,
  iconRight,
  iconColor = "",
  className = "",
  target = "_self",
}: Props) => {
  return (
    <Link
      href={url}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`group flex items-center justify-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-bold whitespace-nowrap transition-all hover:border-neutral-800 hover:bg-neutral-900 hover:text-white lg:px-5 lg:py-3 ${className}`}
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

export default LinkButtonBorder;
