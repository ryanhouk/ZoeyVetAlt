import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navigationItems } from "@/data/navigation";
import {
  faShieldDog,
  faChevronLeft,
  faChevronRight,
  faCog,
  faUser,
  faBars,
  faXmark,
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
      onTouchEnd={() => !isExpanded && setIsVisible(false)}
    >
      {children}
      {!isExpanded && isVisible && (
        <div className="absolute left-full top-1/2 z-50 ml-2 -translate-y-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-sm text-white">
          {text}
          <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1 -translate-y-1/2 rotate-45 transform bg-black"></div>
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="fixed left-4 top-4 z-50 rounded-lg bg-white p-2 shadow-lg lg:hidden"
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon
          icon={isMobileOpen ? faXmark : faBars}
          className="h-5 w-5 text-gray-700"
        />
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-40 h-screen border-r border-neutral-200 bg-white bg-opacity-60 transition-all duration-300 lg:relative lg:z-auto ${
          isExpanded ? "w-64" : "w-20"
        } ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* UPPER */}
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-6 py-4">
            {isExpanded ? (
              <span className="font-bold text-black">
                <FontAwesomeIcon icon={faShieldDog} className="mr-2 h-4 w-4" />
                ZoeyVet
              </span>
            ) : (
              <span className="font-bold text-black">
                <FontAwesomeIcon icon={faShieldDog} className="h-4 w-4" />
              </span>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="hidden rounded-lg p-1 transition-colors hover:cursor-pointer hover:bg-neutral-300 lg:block"
              title={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
            >
              <FontAwesomeIcon
                icon={isExpanded ? faChevronLeft : faChevronRight}
                className="h-4 w-4 text-neutral-900"
              />
            </button>
          </div>
          <div className="h-px w-full bg-neutral-200"></div>

          {/* NAV */}
          <nav className="flex flex-1 flex-col gap-1 p-4">
            {isExpanded && (
              <p className="text-xs font-semibold text-neutral-500">Main</p>
            )}
            {navigationItems.map((item) => (
              <Tooltip
                key={item.path}
                text={item.tooltip}
                isExpanded={isExpanded}
              >
                <Link
                  href={item.path}
                  onClick={closeMobileMenu}
                  className={`group flex items-center gap-2 rounded-lg border border-white p-2 text-black transition-all hover:border-neutral-300 ${
                    !isExpanded && "justify-center"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`h-4 w-4 ${item.iconColor} ${
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

          {/* LOWER SECTION */}
          <div className="border-t border-neutral-200 p-4">
            {/* Settings */}
            <Tooltip text="Settings" isExpanded={isExpanded}>
              <Link
                href="/settings"
                onClick={closeMobileMenu}
                className={`group mb-3 flex items-center gap-2 rounded-lg border border-white p-2 text-black transition-all hover:border-neutral-300 ${
                  !isExpanded && "justify-center"
                }`}
              >
                <FontAwesomeIcon
                  icon={faCog}
                  className={`h-4 w-4 text-gray-500 ${
                    isExpanded ? "group-hover:ml-2" : ""
                  } transition-all`}
                />
                {isExpanded && (
                  <span className="text-sm font-semibold">Settings</span>
                )}
              </Link>
            </Tooltip>

            {/* User Profile */}
            <div className="flex items-center gap-3 rounded-lg border bg-neutral-100 p-2 transition-colors hover:bg-neutral-200">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow">
                <FontAwesomeIcon
                  icon={faUser}
                  className="h-4 w-4 text-neutral-900"
                />
              </div>
              {isExpanded && (
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-black">
                    Dr. Gronkiewicz
                  </span>
                  <span className="text-xs text-gray-500">Veterinarian</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
