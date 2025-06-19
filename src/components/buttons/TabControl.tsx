"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Tab {
  id: string;
  label: string;
  icon?: IconDefinition;
}

interface TabControlProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
  iconClassName?: string;
}

export function TabControl({
  tabs,
  activeTab,
  onChange,
  className = "",
  iconClassName = "h-4 w-4",
}: TabControlProps) {
  return (
    <div
      className={`flex items-center gap-1 rounded-lg bg-gray-200 p-1 ${className}`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`flex items-center gap-2 rounded-md px-4 py-1.5 text-sm font-medium transition-all hover:cursor-pointer ${
            activeTab === tab.id
              ? "bg-white text-black shadow-sm"
              : "text-gray-600 hover:bg-white/50 hover:text-neutral-900"
          }`}
        >
          {tab.icon && (
            <FontAwesomeIcon
              icon={tab.icon}
              className={`${iconClassName} ${
                activeTab === tab.id ? "text-black" : "text-neutral-500"
              }`}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}

// Example usage:
// import { faCalendarDay, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
//
// const tabs = [
//   { id: "day", label: "Day", icon: faCalendarDay },
//   { id: "week", label: "Week", icon: faCalendarWeek },
// ];
// const [activeTab, setActiveTab] = useState("day");
//
// <TabControl
//   tabs={tabs}
//   activeTab={activeTab}
//   onChange={setActiveTab}
// />
