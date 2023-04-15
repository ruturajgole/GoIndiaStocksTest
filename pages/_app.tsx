import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";

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
  return (
    <Layout>
      <Component {...pageProps} />
      <MarketStories />
    </Layout>
  );
}

const MarketStories = () =>
  <div className="bg-slate-100 w-3/4 p-2">
    <p className="text-wineRed">MARKET STORIES</p>
    <div className={"rounded-sm grid grid-cols-2 gap-2"}>
      {news.map((item) => 
        <div key={item.message + Math.random()} className="my-10 relative">
          <img src={item.image} className="rounded-md object-contain" />
          <div className="text-white absolute bottom-0 text-sm p-5 bg-black/[0.5] left-0">{item.message}</div>
        </div>)}
    </div>
  </div>

export default MyApp;
