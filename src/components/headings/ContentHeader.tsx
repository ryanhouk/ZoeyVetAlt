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
};

const ContentHeader = ({
  title,
  description,
  linkTitle,
  linkHref,
  linkIcon = faArrowRight,
}: Props) => {
  return (
    <div className="mb-3 flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="mb-2 text-2xl font-bold">{title}</h1>
        {linkTitle && linkHref && (
          <Link
            href={linkHref}
            className="group rounded-full px-3 py-1 text-sm font-semibold whitespace-nowrap transition-all hover:bg-neutral-200"
          >
            {linkTitle}
            <FontAwesomeIcon
              icon={linkIcon}
              className="-ml-3 text-neutral-600 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:opacity-100"
            />
          </Link>
        )}
      </div>
      {description && <p className="text-sm text-neutral-500">{description}</p>}
    </div>
  );
};

export default ContentHeader;
