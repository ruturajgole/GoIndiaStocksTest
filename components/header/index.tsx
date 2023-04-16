import Head from 'next/head';
import { useEffect, useState } from 'react';

type Props = {
  activeTab: string,
  setActiveTab: (activeTab: string) => void;
}

export default function Header({activeTab, setActiveTab}: Props) {
  const [stockPrices, setStockPrices] = useState([]);

  const fetchStocks = async () => setStockPrices(
    await (await fetch("/api/repository/getStocks")).json());

  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-center md:justify-between bg-white">
        <div className="md:mx-20 flex flex-row items-center basis-3/4">
          <img src="./logo.jpg" className='w-[100px] h-[100px]'/>
          <input type="text" className="p-3 bg-searchBar bg-origin-content bg-contain bg-right bg-[length:30px_30px] bg-contain bg-[url('/search-icon.png')] bg-no-repeat mx-5 shadow-[inset_0_1px_4px_rgba(0,0,0,0.6)] rounded-md w-full h-12"/>
        </div>
        <div className="flex md:hidden">
          <img src="./placeholder-profile-picture.jpg" className='w-[50px] object-contain'/>
        </div>
        <div className="hidden mx-20 md:flex space-x-2 flex-row basis-1/4 justify-evenly items-center">
          <a>Contact Us</a>
          <button>SIGN UP</button>
          <button>SIGN IN</button>
        </div>
      </div>
      <div className="marquee-stocks bg-black">
        <div className="track-stocks !animation-marquee !duration-1000 flex">
          {
            stockPrices.map((company) =>
              <div key={company.name} className='mx-3 flex flex-row space-x-2 justify-evenly'>
                <span className="text-white">{company.name}</span>
                <span className="text-white">
                  {new Intl.NumberFormat("en-IN").format(company.price.toFixed(2))}
                </span>
                <span className={`${company.change > 0 ? "text-green-400": "text-red-400"}`}>{company.change.toFixed(2)}%</span>
              </div>
            )
          }
        </div>
      </div>
      <div className='flex font-serif text-white bg-sideBar justify-evenly md:hidden'>
        <button onClick={() => setActiveTab("Discussion")}
          className={`${activeTab === "Discussion" ? "bg-darkOcean border-y-0 border-x-0 border-b-4 border-wineRed" : "border-none"}`}>Discussion Forum</button>
        <button onClick={() => setActiveTab("Market")} className={`${activeTab === "Market" ? "bg-darkOcean border-y-0 border-x-0 border-b-4 border-wineRed" : "border-none"}`}>Market Stories</button>
      </div>
    </div>
  )
}
