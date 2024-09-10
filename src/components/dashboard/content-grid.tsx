import React from "react";
import StatCards from "./stat-cards";
import { ActivityGraph } from "./activity-graph";
import UsageRadar from "./usage-radar";
import RecentTransactions from "./recent-transactions";

function ContentGrid() {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      <StatCards />
      <ActivityGraph />
      <UsageRadar/>
      <RecentTransactions/>
    </div>
  );
}

export default ContentGrid;
