import React from "react";
import { NavItem } from "./Sidebar";

export const defaultNavItems: NavItem[] = [
  {
    label: "Discussion Forum",
    href: "/team",
    icon: "./sidebar/discussion-icon.jpg",
  },
  {
    label: "Market Stories",
    href: "/team",
    icon: "./sidebar/market-icon.jpg",
  },
  {
    label: "Sentiment",
    href: "/projects",
    //icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    label: "Market",
    href: "/calendar",
    //icon: <CalendarIcon className="w-6 h-6" />,
  },
  {
    label: "Sector",
    href: "/calendar",
    //icon: <CalendarIcon className="w-6 h-6" />,
  },
  {
    label: "Watchlist",
    href: "/calendar",
    //icon: <CalendarIcon className="w-6 h-6" />,
  },,
  {
    label: "Events",
    href: "/calendar",
    //icon: <CalendarIcon className="w-6 h-6" />,
  },,
  {
    label: "News/Interview",
    href: "/calendar",
    //icon: <CalendarIcon className="w-6 h-6" />,
  },
];
