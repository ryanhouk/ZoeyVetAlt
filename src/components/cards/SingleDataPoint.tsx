import React from "react";

type Props = {
  heading: string;
  title: string;
};

const SingleDataItem = ({ heading, title }: Props) => {
  return (
    <>
      <div>
        <span className="text-[10px] font-medium text-neutral-500 uppercase">
          {heading}
        </span>
        <div className="font-medium">{title}</div>
      </div>
    </>
  );
};

export default SingleDataItem;
