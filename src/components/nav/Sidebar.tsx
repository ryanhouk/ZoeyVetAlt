import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navigationItems } from "@/data/navigation";
import {
  faShieldDog,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/pro-duotone-svg-icons";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="flex items-center min-h-screen p-4">
      <div
        className={`flex flex-col justify-between h-[calc(100vh-2rem)] bg-white rounded-3xl border border-neutral-200 transition-all duration-300 ${
          isExpanded ? "w-64" : "w-20"
        }`}>
        {/* UPPER */}
        <div className="">
          <div className="flex items-center justify-between px-6 py-4">
            {isExpanded ? (
              <span className="font-bold text-black">
                <FontAwesomeIcon icon={faShieldDog} className="w-4 h-4 mr-2" />
                ZoeyVet
              </span>
            ) : (
              <span className="font-bold text-black">
                <FontAwesomeIcon icon={faShieldDog} className="w-4 h-4" />
              </span>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded-lg hover:bg-neutral-100 transition-colors"
              title={isExpanded ? "Collapse sidebar" : "Expand sidebar"}>
              <FontAwesomeIcon
                icon={isExpanded ? faChevronLeft : faChevronRight}
                className="w-4 h-4 text-neutral-500"
              />
            </button>
          </div>
          <div className="w-full h-px bg-neutral-200"></div>

          {/* NAV */}
          <nav className="flex flex-col gap-1 p-4">
            {isExpanded && (
              <p className="text-xs font-semibold text-neutral-500">Main</p>
            )}
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                title={item.tooltip}
                className={`flex items-center group gap-2 p-2 text-black rounded-lg hover:border-neutral-300 border transition-all border-white ${
                  !isExpanded && "justify-center"
                }`}>
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`w-4 h-4 ${item.iconColor} ${
                    isExpanded ? "group-hover:ml-2" : ""
                  } transition-all`}
                />
                {isExpanded && (
                  <span className="text-sm font-semibold">{item.title}</span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
