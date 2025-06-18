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
    <div className="mb-3 flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="mb-2 text-2xl font-bold">{title}</h1>
        {linkTitle && linkHref && (
          <Link
            href={linkHref}
            className="rounded-full px-3 py-1 text-sm font-semibold transition-all hover:bg-neutral-200"
          >
            {linkTitle}
          </Link>
        )}
      </div>
      {description && <p className="text-sm text-neutral-500">{description}</p>}
    </div>
  );
};

export default ContentHeader;
