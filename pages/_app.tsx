import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { createContext, useContext, useState } from "react";

export const Context = createContext(null);

const news = [{
  image: "./news/borough-market.jpg",
  message: "Lorem Ipsum is simply dumym text of the printing and typesetting industry"
}, {
  image: "./news/stock-building.jpg",
  message: "Lorem Ipsum is simply dumym text of the printing and typesetting industry"
}, {
  image: "./news/borough-market.jpg",
  message: "Lorem Ipsum is simply dumym text of the printing and typesetting industry"
}];

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

const MarketStories = () => {
  const {sidebarOpen, activeTab} = useContext(Context);

  return <div className={`${activeTab === "Market" ? "block" : "hidden"} place-self-center md:place-self-auto md:block bg-slate-100 w-3/4 p-2`}>
    <p className="hidden md:block text-wineRed">MARKET STORIES</p>
    <div className={`text-center grid grid-cols-1 ${!sidebarOpen && "md:grid-cols-2"} gap-2`}>
      {news.map((item) => 
        <div key={item.message + Math.random()} className="rounded-md my-10 relative">
          <img src={item.image} className="w-[500px] h-[300px] rounded-md object-cover" />
          <div className="w-150 rounded-md text-white absolute bottom-0 text-sm p-5 bg-black/[0.5] left-0">{item.message}</div>
        </div>)}
    </div>
  </div>;
}
export default MyApp;
