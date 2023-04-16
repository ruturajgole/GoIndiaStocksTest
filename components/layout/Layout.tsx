import React, { PropsWithChildren, useContext, useState } from "react";
import Header from "../header";
import Sidebar from "../sidebar/Sidebar";
import FeaturedCompanies from "../featuredCompanies";
import { SideBarContext } from "../../pages/_app";

const Layout = (props: PropsWithChildren) => {
  const {sidebarOpen, setSidebarOpen} = useContext(SideBarContext);
  return (
    <div className="grid min-h-screen grid-rows-header bg-zinc-100">
      <div>
        <Header />
        <FeaturedCompanies />
      </div>

      <div className={`grid gap-10 ${sidebarOpen ? "grid-cols-[20%_50%_30%]" : "grid-cols-[0%_50%_50%]"}`}>
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          {props.children}
      </div>
    </div>
  );
};

export default Layout;
