import React from "react";

type Props = {
  children: React.ReactNode;
  transparent?: boolean;
  small?: boolean;
  className?: string;
};

const Container = ({
  children,
  transparent = false,
  small = false,
  className = "",
}: Props) => {
  return (
    <section
      className={`mx-auto mb-4 ${small ? "max-w-7xl" : "max-w-[1920px]"} ${
        transparent ? "" : "rounded-3xl bg-white px-8 py-10 shadow"
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
