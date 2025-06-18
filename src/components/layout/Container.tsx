import React from "react";

type Props = {
  children: React.ReactNode;
  transparent?: boolean;
};

const Container = ({ children, transparent = false }: Props) => {
  return (
    <section
      className={`mx-auto mb-4 max-w-[1920px] rounded-3xl px-8 py-12 shadow ${
        !transparent && "bg-white"
      }`}
    >
      {children}
    </section>
  );
};

export default Container;
