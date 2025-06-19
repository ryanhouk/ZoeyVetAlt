import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faCalendarAlt,
  faPawSimple,
  faChartLine,
  faListCheck,
  faBox,
  faUsers,
  faDollarSign,
} from "@fortawesome/pro-duotone-svg-icons";

export interface NavItem {
  title: string;
  path: string;
  icon: IconDefinition;
  tooltip: string;
  iconColor: string;
}

export const navigationItems: NavItem[] = [
  {
    title: "Home",
    path: "/home",
    icon: faHome,
    tooltip: "Home",
    iconColor: "text-blue-500",
  },
  {
    title: "Appointments",
    path: "/appointments",
    icon: faCalendarAlt,
    tooltip: "Appointments",
    iconColor: "text-purple-500",
  },
  {
    title: "Tasks",
    path: "/tasks",
    icon: faListCheck,
    tooltip: "Tasks",
    iconColor: "text-green-600",
  },
  {
    title: "Patients",
    path: "/patients",
    icon: faPawSimple,
    tooltip: "Patients",
    iconColor: "text-yellow-500",
  },
  {
    title: "Inventory",
    path: "/inventory",
    icon: faBox,
    tooltip: "Inventory",
    iconColor: "text-orange-500",
  },
  {
    title: "Billing",
    path: "/billing",
    icon: faDollarSign,
    tooltip: "Billing",
    iconColor: "text-emerald-500",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: faChartLine,
    tooltip: "Reports",
    iconColor: "text-red-500",
  },
  {
    title: "Staff Management",
    path: "/staff-management",
    icon: faUsers,
    tooltip: "Staff Management",
    iconColor: "text-teal-600",
  },
];
