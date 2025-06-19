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
    <Link href={href} className="group w-full">
      <div className="flex w-full flex-col gap-3 rounded-2xl border border-neutral-300 p-4 text-left transition-all hover:-translate-y-1 hover:border-neutral-400 hover:shadow-lg">
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
