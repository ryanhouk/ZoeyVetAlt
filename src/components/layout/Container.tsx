import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <>
      <section className="max-w-[1920px] mx-auto">{children}</section>
    </>
  );
};

export default Container;
