import React, { useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { defaultNavItems } from "./defaultNavItems";

// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon?: string;
};
// add NavItem prop to component prop
type Props = {
  open: boolean;
  navItems?: NavItem[];
  setOpen(open: boolean): void;
};
const Sidebar = ({ open, navItems = defaultNavItems, setOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={`transition ease-in-out duration-500 flex flex-col justify-between bg-sideBar text-zinc-50 md:w-full md:sticky md:top-16 md:z-0 top-[125px] z-20 fixed
      md:h-[calc(100vh_-_64px)] h-full w-[50%]
      ${!open ? "-translate-x-full" : "translate-x-0"}`}
      ref={ref}>
      <button onClick={() => setOpen(!open)} className="border-none absolute w-5 h-35 rounded-r-md -right-5 top-1/3 bg-sideBar">
        <div className="w-2.5 relative transform translate-y-1/2 overflow-hidden inline-block">
          <div className={`h-16 bg-white ${ open ? "-rotate-45 transform origin-top-right" : "rotate-45 transform origin-top-left"}`}></div>
        </div>   
      </button>
      {open &&
      <nav className="md:sticky top-0 md:top-16">
        {/* nav items */}
        <ul className="py-2 flex flex-col gap-2">
          <li className={"flex flex-row items-center p-2 mx-2"}>
            <img src="./sidebar/profile-picture.png" className="object-contain w-10"/>
            <span className="text-white font-sans">Hello, User</span>
            <img src="./sidebar/notifications.jpg" className="object-contain w-5 ml-[40%]" />
          </li>          
          <hr className="w-full h-0.5 bg-gray opacity-50"/>
          {navItems.map((item, index) => {
            return (
              <li key={item.label} className={"flex gap-4 items-center rounded-md p-2 mx-2"}>
                {item.icon && <img className="object-contain w-5" src={item.icon} />}
                <span className={`font-sans text-white ${item.icon ? "" : "ml-9"}`}>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </nav>}
    </div>
  );
};
export default Sidebar;
