import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  description?: string;
  linkTitle?: string;
  linkHref?: string;
};

const ContentHeader = ({ title, description, linkTitle, linkHref }: Props) => {
  return (
    <div className="flex flex-col mb-3">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        {linkTitle && linkHref && (
          <Link
            href={linkHref}
            className="font-semibold px-3 py-1 transition-all rounded-full hover:bg-neutral-200 text-sm">
            {linkTitle}
          </Link>
        )}
      </div>
      {description && (
        <p className="text-sm text-neutral-500 mb-2">{description}</p>
      )}
    </div>
  );
};

export default ContentHeader;
