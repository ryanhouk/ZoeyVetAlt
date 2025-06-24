import React from "react";

type Props = {
  date: Date;
  visitType: string;
  provider: string;
  secondaryProvider?: string;
  className?: string;
};

const MedHistoryCard = ({
  date,
  visitType,
  provider,
  secondaryProvider,
  className = "",
}: Props) => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div
      className={`rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-all hover:cursor-pointer hover:border-neutral-400 hover:shadow-md ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="">
            <span className="text-sm font-medium text-neutral-500">
              {formatDate(date)}
            </span>
          </div>
          <h3 className="mb-1 text-base font-semibold text-neutral-900">
            {visitType}
          </h3>
          <p className="text-sm text-neutral-600">
            Treated by {provider}
            {secondaryProvider ? ` and ${secondaryProvider}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedHistoryCard;
