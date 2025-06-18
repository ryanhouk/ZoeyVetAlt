import React from "react";

type Props = {
  children: React.ReactNode;
  transparent?: boolean;
  className?: string;
};

const Container = ({
  children,
  transparent = false,
  className = "",
}: Props) => {
  return (
    <section
      className={`mx-auto mb-4 max-w-[1920px] ${
        transparent ? "" : "rounded-3xl bg-white px-8 py-12 shadow"
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
