import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navigationItems } from "@/data/navigation";
import { faShieldDog } from "@fortawesome/pro-duotone-svg-icons";

const Sidebar = () => {
  return (
    <div className="flex items-center min-h-screen p-4">
      <div className="flex flex-col justify-between h-[calc(100vh-2rem)] bg-white w-72 rounded-3xl border border-neutral-200 shadow-lg">
        {/* UPPER */}
        <div className="">
          <div className="flex items-center px-6 py-4">
            <span className="font-bold text-black">
              <FontAwesomeIcon icon={faShieldDog} className="w-4 h-4 mr-2" />
              ZoeyVet
            </span>
          </div>
          <div className="w-full h-px bg-neutral-200"></div>

          {/* NAV */}
          <nav className="flex flex-col gap-1 p-4">
            <p className="text-xs font-semibold text-neutral-500">Main</p>
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                title={item.tooltip}
                className="flex items-center gap-2 p-2 text-black transition-colors rounded-lg hover:bg-neutral-100">
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`w-4 h-4 ${item.iconColor}`}
                />
                <span className="text-sm font-semibold">{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
