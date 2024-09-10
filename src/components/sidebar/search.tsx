"use client";
import React, { useState } from "react";
import { FiCommand, FiSearch } from "react-icons/fi";
import { CommandMenu } from "./command-menu";

function SearchBar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="bg-stone-200 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
        <FiSearch className="mr-2" />
        <input
          onFocus={(e) => {
            e.target.blur();
            setOpen(true);
          }}
          type="text"
          placeholder="Search"
          className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none"
        />
        <span className="p-1 text-xs flex gap-0.5 items-center shadow bg-stone-50 rounded absolute right-1.5 top-1/2 -translate-y-1/2">
          <FiCommand />K
        </span>
        <CommandMenu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default SearchBar;
