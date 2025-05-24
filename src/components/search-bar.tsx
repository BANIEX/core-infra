// components/SearchBar.tsx
import React, { FC, ChangeEvent } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search complaint",
  className = "",
}) => {
  return (
    <div className={`relative w-full max-w-md ${className}`}>
      {/* Icon */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="w-4 h-4 text-gray-400" />
      </div>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          block w-full
          pl-10 pr-3 py-2
          border border-gray-300
          rounded-sm
          bg-white placeholder-gray-500
          text-sm text-gray-700
          focus:outline-none focus:ring-1 focus:ring-black-200 focus:border-transparent
        `}
      />
    </div>
  );
};

export default SearchBar;
