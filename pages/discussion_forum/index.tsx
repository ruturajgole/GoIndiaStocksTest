import { useEffect, useState } from "react";
import Card from "../../components/forum_card";

const sectors = [{
  name: "Sector 1",
  color: "bg-wineRed"
}, 
{name: "Sector 2", color: "bg-sideBar"}, {name: "Sector 3", color: "bg-ochre"}];

type Props = {
  activeTab: string;
}

export default function DiscussionForum({activeTab}: Props) {
  const [sectorFilters, setSectorFilters] = useState([]);
  const [forum, setForum] = useState([]);

  const fetchForum = async () => setForum(
    await (await fetch("/api/repository/getForum")).json());

  useEffect(() => {
    fetchForum();
  }, []);

  const toggleSectorFilter = (sectorFilter) =>
    sectorFilters.includes(sectorFilter)
    ? setSectorFilters(sectorFilters.filter((filter) => sectorFilter != filter))
    : setSectorFilters([...sectorFilters, sectorFilter]);

  return (
    <div className={`${activeTab === "Discussion" ? "block" : "hidden"} place-self-center md:place-self-auto md:block bg-background p-2`}>
      <p className="hidden md:block text-wineRed">DISCUSSION FORUM</p>
      <div className="md:ml-10">
        Filters
        <div className="md:block bg-white space-y-1 md:space-x-4 p-2 text-xs md:text-sm rounded-md shadow-xl md:my-2 md:p-5">
          {sectors.map((sector) => 
            <button 
              onClick={() => toggleSectorFilter(sector.name)} 
              key={sector.name} 
              className={`font-sans ${sectorFilters.includes(sector.name) ? ("outline-2 outline-dashed outline-offset-2 outline-black") : "outline-none"} w-max ${sector.color} text-white rounded-3xl md:px-5 md:py-2`}>{sector.name}</button>)}
          <input type="text" placeholder="Search here" className="pl-10 bg-origin-border bg-left bg-[length:25px_25px] bg-[url('/search-icon.png')] bg-no-repeat shadow-[inset_0_1px_4px_rgba(0,0,0,0.6)] bg-searchBar p-2 rounded-3xl placeholder:pl-10"></input>
        </div>
        <div className="p-2 overflow-y-scroll h-screen">
          {forum
          .filter((comment) => !sectorFilters.length || (comment.tags.some(r=> sectorFilters.includes(r))))
          .map((comment) => <Card key={comment.likes + Math.random()} comment={comment} sectors={sectors} />)}
        </div>
      </div>
    </div>
  )
}