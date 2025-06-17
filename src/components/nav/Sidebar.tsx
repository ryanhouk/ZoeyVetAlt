import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navigationItems } from "@/data/navigation";
import {
  faShieldDog,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/pro-duotone-svg-icons";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  isExpanded: boolean;
}

const Tooltip = ({ text, children, isExpanded }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => !isExpanded && setIsVisible(true)}
      onMouseLeave={() => !isExpanded && setIsVisible(false)}
      onTouchStart={() => !isExpanded && setIsVisible(true)}
      onTouchEnd={() => !isExpanded && setIsVisible(false)}>
      {children}
      {!isExpanded && isVisible && (
        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-black text-white text-sm rounded-md whitespace-nowrap z-50">
          {text}
          <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-black transform rotate-45"></div>
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={`h-screen bg-white border-r border-neutral-200 transition-all duration-300 ${
        isExpanded ? "w-64" : "w-20"
      }`}>
      {/* UPPER */}
      <div className="h-full flex flex-col">
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
            <Tooltip
              key={item.path}
              text={item.tooltip}
              isExpanded={isExpanded}>
              <Link
                href={item.path}
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
            </Tooltip>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
