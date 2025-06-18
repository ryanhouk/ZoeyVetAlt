"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  options: string[]; // allow any number of options
  onChange?: (value: string) => void;
  defaultValue?: string;
  className?: string;
};

const ToggleControl = ({
  options,
  onChange,
  defaultValue = options[0],
  className = "",
}: Props) => {
  const [activeOption, setActiveOption] = useState(defaultValue);

  const handleToggle = (option: string) => {
    setActiveOption(option);
    onChange?.(option);
  };

  // Calculate highlight width and position
  const optionCount = options.length;
  const highlightWidth = 100 / optionCount;
  const activeIndex = options.findIndex((o) => o === activeOption);

  return (
    <div
      className={`relative inline-flex rounded-full border-2 border-black bg-white p-1 whitespace-nowrap transition-all ${className}`}
    >
      <motion.div
        className="absolute top-0 left-0 h-full rounded-full bg-black"
        style={{ width: `${highlightWidth}%` }}
        initial={false}
        animate={{ x: `${activeIndex * 100}%` }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
      />
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleToggle(option)}
          className={`relative z-10 flex-1 rounded-full px-6 py-2 font-bold transition-all hover:cursor-pointer focus:outline-none ${activeOption === option ? "text-white" : "text-black"}`}
          style={{ background: "transparent" }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ToggleControl;
