import React from "react";

type Props = {
  children: React.ReactNode;
  transparent?: boolean;
};

const Container = ({ children, transparent = false }: Props) => {
  return (
    <section
      className={`max-w-[1920px] mx-auto px-8 py-12 rounded-3xl mb-4 ${
        !transparent && "bg-white"
      }`}>
      {children}
    </section>
  );
};

export default Container;
