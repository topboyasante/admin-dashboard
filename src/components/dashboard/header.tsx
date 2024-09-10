import React from "react";
import { FiCalendar } from "react-icons/fi";

function Header() {
  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between p-0.5">
        <div>
          <span className="text-sm font-bold block">Good Morning, Nana!</span>
          <span className="text-xs block text-stone-500">
            Tuesday, Aug 8th 2023
          </span>
        </div>
        <button className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-blue-100 hover:text-blue-700 px-2 py-1.5 rounded">
          <FiCalendar />
          <span>Prev 6 Months</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
