"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

const SearchInput = ({
  placeholder = "Search...",
  value = "",
  onChange,
  onSearch,
  className = "",
  disabled = false,
}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const handleClear = () => {
    setInputValue("");
    onChange?.("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch?.(inputValue);
    }
  };

  const handleSearchClick = () => {
    onSearch?.(inputValue);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full rounded-lg border-2 border-neutral-400 bg-white px-4 py-3 pr-10 pl-10 text-sm hover:border-neutral-500 focus:outline-none disabled:bg-neutral-100 disabled:text-neutral-500"
        />

        {/* Search Icon */}
        <div className="absolute top-1/2 left-3 -translate-y-1/2">
          <FontAwesomeIcon
            icon={faSearch}
            className="h-4 w-4 text-neutral-400"
            onClick={handleSearchClick}
          />
        </div>

        {/* Clear Button */}
        {inputValue && (
          <button
            onClick={handleClear}
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 transition-colors hover:bg-neutral-100"
            type="button"
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="h-3 w-3 text-neutral-400 hover:text-neutral-600"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
