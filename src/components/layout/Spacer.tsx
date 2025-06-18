import React from "react";

type Props = {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
};

const Spacer = ({ small, medium, large }: Props) => {
  let heightClass = "h-4"; // default to small

  if (large) {
    heightClass = "h-16";
  } else if (medium) {
    heightClass = "h-8";
  } else if (small) {
    heightClass = "h-4";
  }

  return <div className={`${heightClass} w-full`} />;
};

export default Spacer;
