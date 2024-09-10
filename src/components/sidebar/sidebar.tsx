import React from "react";
import AccountToggle from "./account-toggle";
import SearchBar from "./search";
import RouteSelect from "./route-select";
import Plan from "./plan";

function Sidebar() {
  return (
    <div className="hidden lg:block">
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle />
        <SearchBar />
        <RouteSelect />
      </div>
      <Plan />
    </div>
  );
}

export default Sidebar;
