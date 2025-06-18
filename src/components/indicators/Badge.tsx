import React from "react";

type Props = {
  title: string;
};

const Badge = ({ title }: Props) => {
  return (
    <>
      <p className="text-sm font-medium text-blue-800 bg-white shadow px-3 py-2 rounded-lg">
        {title}
      </p>
    </>
  );
};

export default Badge;
