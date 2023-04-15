import Head from 'next/head';

export default function Header() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between bg-white">
        <div className="mx-20 flex flex-row items-center basis-3/4">
          <img src="./logo.jpg" style={{width: "100px", height: "100px"}}/>
          <input type="text" className="bg-searchBar bg-contain bg-right bg-clip-content bg-[url('/search-icon.jpg')] bg-no-repeat mx-5 shadow-[inset_0_1px_4px_rgba(0,0,0,0.6)] rounded-md w-full h-455"/>
        </div>
        <div className="mx-20 flex flex-row basis-1/4 justify-evenly items-center">
          <a>Contact Us</a>
          <button>SIGN UP</button>
          <button>SIGN IN</button>
        </div>
      </div>
      <marquee style={{backgroundColor: "black", color: "white"}}>BAJAJ <span style={{color: "lightgreen"}}>0.01%</span></marquee>
    </div>
  )
}
