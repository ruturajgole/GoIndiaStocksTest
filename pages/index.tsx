import { useState } from "react";

const sectors = [{
  name: "Sector 1",
  color: "bg-wineRed"
}, 
{name: "Sector 2", color: "bg-sideBar"}, {name: "Sector 3", color: "bg-ochre"}];

type Props = {
  activeTab: string;
}

export default function Home({activeTab}: Props) {
  const [sectorFilters, setSectorFilters] = useState([]);

  const toggleSectorFilter = (sectorFilter) =>
    sectorFilters.includes(sectorFilter)
    ? setSectorFilters(sectorFilters.filter((filter) => sectorFilter != filter))
    : setSectorFilters([...sectorFilters, sectorFilter]);

  return (
    <div className={`${activeTab === "Discussion" ? "block" : "hidden"} md:block bg-background p-2`}>
      <p className="text-wineRed">DISCUSSION FORUM</p>
      <div className="ml-10">
        Filters
        <div className="bg-white space-x-4 p-2 text-sm rounded-md shadow-xl my-2 p-5" style={{display: "flex", flexDirection: "row"}}>
          {sectors.map((sector) => 
            <button 
              onClick={() => toggleSectorFilter(sector.name)} 
              key={sector.name} 
              className={`font-sans ${sectorFilters.includes(sector.name) ? ("outline-2 outline-dashed outline-offset-2 outline-black") : "outline-none"} w-max ${sector.color} text-white rounded-3xl px-5 py-2`}>{sector.name}</button>)}
          <input type="text" placeholder="Search here" className="pl-10 bg-origin-border bg-left bg-[length:25px_25px] bg-[url('/search-icon.png')] bg-no-repeat shadow-[inset_0_1px_4px_rgba(0,0,0,0.6)] bg-searchBar p-2 rounded-3xl placeholder:pl-10"></input>
        </div>
        <div className="p-2 overflow-y-scroll h-screen">
          {comments
          .filter((comment) => !sectorFilters.length || (comment.tags.some(r=> sectorFilters.includes(r))))
          .map((comment) => <Card key={comment.likes + Math.random()} {...comment} />)}
        </div>
      </div>
    </div>
  )
}

const comments = Array(5).fill({
  timeStamp: "2 min ago",
  image: "./comments/infibeam.jpg",
  user: {
    name: "Lorem Ipsum",
    profilePicture: "./placeholder-profile-picture.jpg"
  },
  tags: ["Sector 1"],
  message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is",
  likes: 2000,
  views: 2000,
  replies: 2000
});

const Card = (comment) =>
  <div className="flex flex-col items-center bg-white mt-5 p-5 rounded-md shadow-xl">
    <p className="text-sm text-blue-700 self-end">{comment.timeStamp}</p>
    {comment.image && <img src={comment.image} className="object-contain px-10 w-3/4 justify-center" />}
    <div className="flex flex-row">
      <div className="flex flex-col h-full items-center">
        <img src={comment.user.profilePicture} className="object-contain w-14"/>
      </div>
      <div className="mt-1 flex flex-col">
        <div className="flex flex-row space-x-2">
          <span>{comment.user.name}</span>
          {comment.tags.map((tag) => {
            const sector = sectors.find((value) => value.name = tag);
            return <div key={sector.name + Math.random()} className={`font-sans w-max ${sector.color} text-xs text-white rounded-3xl px-5 py-2`}>{tag}</div>
          })}
        </div>
        <div className="mt-5">
          <span className="font-sans">{comment.message}</span>
        </div>
        <div className="flex flex-row justify-between mt-5">
          <span>{comment.likes > 999 ? `${(comment.likes / 1000)}k` : comment.likes}</span>
          <span>{comment.views > 999 ? `${(comment.views / 1000)}k` : comment.views}</span>
          <span>{comment.replies > 999 ? `${(comment.replies / 1000)}k` : comment.replies} Comments</span>
          <span>Share</span>
        </div>
      </div>
    </div>
  </div>
