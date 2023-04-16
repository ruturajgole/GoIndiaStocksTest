import { useContext, useEffect, useState } from "react";
import { Context } from "../_app";

export default function MarketStories () {
  const {sidebarOpen, activeTab} = useContext(Context);
  const [stories, setStories] = useState([]);

  const fetchStories = async () => setStories(
    await (await fetch("/api/repository/getStories")).json());

  useEffect(() => {
    fetchStories();
  }, []);

  return <div className={`${activeTab === "Market" ? "block" : "hidden"} place-self-center md:place-self-auto md:block bg-slate-100 w-3/4 p-2`}>
    <p className="hidden md:block text-wineRed">MARKET STORIES</p>
    <div className={`text-center grid grid-cols-1 ${!sidebarOpen && "md:grid-cols-2"} gap-2`}>
      {stories.map((item) => 
        <div key={item.message + Math.random()} className="rounded-md my-10 relative">
          <img src={item.image} className="w-[500px] h-[300px] rounded-md object-cover" />
          <div className="w-150 rounded-md text-white absolute bottom-0 text-sm p-5 bg-black/[0.5] left-0">{item.message}</div>
        </div>)}
    </div>
  </div>;
}