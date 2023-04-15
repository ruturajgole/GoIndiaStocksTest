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
      <p className="text-wineRed">FEATURED COMPANIES</p>
      <div  className="marquee bg-featuredCompaniesBar">
      <div className="track flex">
        {
          companies.concat(companies.concat(companies)).map((company) =>
            <img key={company.logo + Math.random()} className="mx-10 bg-featuredCompaniesBar" style={{width: "100px", height: "100px", objectFit: "contain"}} src={company.logo} />
          )
        }
      </div>
      </div>
    </div>
  )
}
