import React, { JSX } from "react";

type HeadingProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

const sizeMap = {
  1: "text-3xl font-bold",
  2: "text-2xl font-bold",
  3: "text-xl font-semibold",
  4: "text-lg font-semibold",
  5: "text-base font-semibold",
  6: "text-sm font-semibold",
};

const Heading = ({ children, level = 1, className = "" }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements as React.ElementType;
  return (
    <Tag className={`${sizeMap[level]} ${className}`.trim()}>{children}</Tag>
  );
};

export default Heading;
