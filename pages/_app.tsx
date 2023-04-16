import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { createContext, useState } from "react";
import MarketStories from "./stories";

export const Context = createContext(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Discussion");

  return (
    <Context.Provider value={{sidebarOpen, setSidebarOpen, activeTab, setActiveTab}}>
      <Layout>
        <Component {...pageProps} activeTab={activeTab} />
        <MarketStories />
        <button className="flex fixed flex-col right-4 bottom-4 justify-center item-center rounded-full font-serif text-5xl text-white bg-sideBar">+</button>
      </Layout>
    </Context.Provider>
  );
}

export default MyApp;
