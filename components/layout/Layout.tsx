import React, { PropsWithChildren, useContext, useState } from "react";
import Header from "../header";
import Sidebar from "../sidebar/Sidebar";
import FeaturedCompanies from "../featuredCompanies";
import { Context } from "../../pages/_app";

const Layout = (props: PropsWithChildren) => {
  const {sidebarOpen, setSidebarOpen} = useContext(Context);
  const {activeTab, setActiveTab} = useContext(Context);
  return (
    <div className="grid min-h-screen grid-rows-header bg-zinc-100">
      <div>
        <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
        <FeaturedCompanies />
      </div>

      <div className={`grid gap-10 ${sidebarOpen ? "md:grid-cols-[20%_50%_30%]" : "md:grid-cols-[0%_50%_50%]"}`}>
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          {props.children}
      </div>
    </div>
  );
};

export default Layout;
