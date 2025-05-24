// components/DateFilterToolbar.tsx
import React, { FC } from "react";
import Image from "next/image";
import dateIcon from "@/assets/icons/date_icon.svg"
import filterIcon from "@/assets/icons/filter_icon.svg";



interface DateFilterToolbarProps {
  onDateClick?: () => void;
  onFilterClick?: () => void;
  className?: string;
}

const DateFilterToolbar: FC<DateFilterToolbarProps> = ({
  onDateClick,
  onFilterClick,
  className = "",
}) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    
    <button
      type="button"
      onClick={onDateClick}
      className="
        flex items-center
        px-3 py-2
        border border-gray-300
        rounded-md
        hover:bg-gray-100
        focus:outline-none focus:ring-2 focus:ring-blue-500
        transition
      "
    >
      
      <Image
        src={dateIcon}
        alt="Date"
        width={16}
        height={16}
        className="mr-2"
      />
      <span className="text-gray-700 text-sm">Date</span>
    </button>

    {/* Filter button */}
    <button
      type="button"
      onClick={onFilterClick}
      className="
        flex items-center
        px-3 py-2
        border border-gray-300
        rounded-md
        hover:bg-gray-100
        focus:outline-none focus:ring-2 focus:ring-blue-500
        transition
      "
    >
      <Image
        src={filterIcon}
        alt="Filter"
        width={16}
        height={16}
        className="mr-2"
      />
      <span className="text-gray-700 text-sm">Filter</span>
    </button>
  </div>
);

export default DateFilterToolbar;
