const companies = [{
  logo: "./companies/capri-global.png"
},
{
  logo: "./companies/ganesh-housing.png"
},
{
  logo: "./companies/fino-payments.png"
},
{
  logo: "./companies/gravita-india.png"
},
{
  logo: "./companies/hira-godawari.png"
},
{
  logo: "./companies/data-patterns.png"
},
{
  logo: "./companies/deep-industries.png"
}];

export default function FeaturedCompanies() {
  return (
    <div>
      <p className="hidden md: block text-wineRed">FEATURED COMPANIES</p>
      <div  className="marquee bg-featuredCompaniesBar">
        <div className="track flex ">
          {
            companies.concat(companies.concat(companies)).map((company) =>
              <img key={company.logo + Math.random()} className="mx-10 my-1 w-[70px] h-[70px] md:w-[100px] md:h-[100px] object-contain bg-featuredCompaniesBar md:border-none border-wineRed border-solid border-2 md:rounded-none rounded-[100%]" src={company.logo} />
            )
          }
        </div>
      </div>
    </div>
  )
}
