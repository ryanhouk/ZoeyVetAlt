import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  title: string;
  icon: IconProp;
  iconColor?: string;
  description?: string;
};

const IconCard = ({
  href,
  title,
  icon,
  iconColor = "text-gray-600",
  description,
}: Props) => {
  return (
    <Link href={href} className="group">
      <div className="flex flex-col gap-3 hover:shadow-lg transition-all border border-neutral-300 hover:border-neutral-400 p-4 rounded-2xl text-left hover:-translate-y-1">
        <FontAwesomeIcon
          icon={icon}
          className={`text-2xl ${iconColor} self-start`}
        />
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm font-medium text-neutral-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default IconCard;
