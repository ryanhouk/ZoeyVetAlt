import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  description?: string;
  linkTitle?: string;
  linkHref?: string;
  linkIcon?: IconProp;
  // Button props
  isButton?: boolean;
  onClick?: () => void;
  buttonType?: "button" | "submit" | "reset";
  disabled?: boolean;
  buttonIcon?: IconProp;
};

const ContentHeader = ({
  title,
  description,
  linkTitle,
  linkHref,
  linkIcon = faArrowRight,
  isButton = false,
  onClick,
  buttonType = "button",
  disabled = false,
  buttonIcon,
}: Props) => {
  const linkClasses =
    "group rounded-full px-3 py-1 hover:cursor-pointer text-sm font-semibold whitespace-nowrap transition-all hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const iconElement = (
    <FontAwesomeIcon
      icon={linkIcon}
      className="-ml-3 text-neutral-600 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:opacity-100"
    />
  );

  const buttonIconElement = (
    <FontAwesomeIcon
      icon={buttonIcon || linkIcon}
      className="-ml-3 text-neutral-600 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:opacity-100"
    />
  );

  return (
    <div className="mb-3 flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="mb-2 text-2xl font-bold">{title}</h1>
        {linkTitle &&
          (isButton ? (
            <button
              type={buttonType}
              onClick={onClick}
              disabled={disabled}
              className={linkClasses}
            >
              {linkTitle}
              {buttonIconElement}
            </button>
          ) : (
            linkHref && (
              <Link href={linkHref} className={linkClasses}>
                {linkTitle}
                {iconElement}
              </Link>
            )
          ))}
      </div>
      {description && <p className="text-sm text-neutral-500">{description}</p>}
    </div>
  );
};

export default ContentHeader;
