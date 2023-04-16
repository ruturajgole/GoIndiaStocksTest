import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { path } = req.query;
  if(path === "getStocks"){
    res.status(200).json([
        {
            "name": "MAHASTEEL",
            "price": 11414.638035461245,
            "change": 20.579118332894474
        },
        {
            "name": "KOTHARINDLBE",
            "price": 65330.74935678181,
            "change": 11.456796089336727
        },
        {
            "name": "ADITYASPINBE",
            "price": 56229.58062860153,
            "change": -14.317158846438156
        },
        {
            "name": "ZYDUSWELL",
            "price": 94140.05834420385,
            "change": 0.517621324427072
        },
        {
            "name": "MAFATLAFINBE",
            "price": 81207.21314080384,
            "change": 17.308646214417365
        },
        {
            "name": "SHREERAMA",
            "price": 1774.129023538806,
            "change": -9.253951171733608
        },
        {
            "name": "DAMANIAAIRBE",
            "price": 52525.182593317135,
            "change": 13.318761395166149
        },
        {
            "name": "EMAMILTD",
            "price": 24456.678290258315,
            "change": 17.334524649382054
        },
        {
            "name": "TULSYANBE",
            "price": 8115.367171858543,
            "change": 9.68327211086742
        },
        {
            "name": "SABEVENTS",
            "price": 10775.733690556599,
            "change": 5.60515270990383
        },
        {
            "name": "REMIMETALBE",
            "price": 38436.832259854964,
            "change": -3.519714613380703
        },
        {
            "name": "VIDHIDYE",
            "price": 97272.77114392609,
            "change": -17.49166141610018
        },
        {
            "name": "TALWALKARS",
            "price": 81339.62292963652,
            "change": -8.7353059478624
        },
        {
            "name": "PHOENIXLTD",
            "price": 77571.5437397878,
            "change": 15.479425430089606
        },
        {
            "name": "NAKODA",
            "price": 65684.11020105796,
            "change": 11.317075345723627
        },
        {
            "name": "APCOTEXIND",
            "price": 29544.405460990354,
            "change": 13.166866124469081
        },
        {
            "name": "NEPCPAPERBE",
            "price": 14053.130678684747,
            "change": -6.335830598072885
        },
        {
            "name": "SPAL",
            "price": 67944.48681104716,
            "change": 11.705948452664902
        },
        {
            "name": "BOSCHLTD",
            "price": 53183.0579873815,
            "change": -16.883026833889343
        },
        {
            "name": "SITASHREE",
            "price": 45038.38316075837,
            "change": -17.236364110699327
        },
        {
            "name": "COCHINREFN",
            "price": 72580.91255900655,
            "change": -12.082707454383133
        },
        {
            "name": "TCIDEVELOP",
            "price": 52715.86079941541,
            "change": 1.7585823164195666
        },
        {
            "name": "HTMEDIA",
            "price": 29099.86021038929,
            "change": 13.79877578697485
        },
        {
            "name": "PARAGMILK",
            "price": 28388.30166257175,
            "change": 2.992549340495003
        },
        {
            "name": "GENUSPOWER",
            "price": 79841.48098404708,
            "change": 2.699024325979643
        },
        {
            "name": "PATSPINLTD",
            "price": 88997.04602240404,
            "change": -16.80788920973599
        },
        {
            "name": "SPENTEXBE",
            "price": 5408.259082805409,
            "change": -19.855835335582558
        },
        {
            "name": "PONNIERODE",
            "price": 95069.8589519037,
            "change": 11.102366201586605
        },
        {
            "name": "SHREYAS",
            "price": 47449.66547562724,
            "change": 13.756744020083985
        },
        {
            "name": "GILLETTE",
            "price": 33803.33429987815,
            "change": 7.874035821669022
        },
        {
            "name": "PONDYOXIDE",
            "price": 57732.99762916569,
            "change": -13.130416660313271
        },
        {
            "name": "CALSOFT",
            "price": 69611.91340418166,
            "change": 19.617652522488576
        },
        {
            "name": "UNITECH",
            "price": 83036.0811231431,
            "change": -10.301738849559488
        },
        {
            "name": "VIVIDHA",
            "price": 95022.75972760667,
            "change": -11.01843981031142
        },
        {
            "name": "ENIL",
            "price": 97646.10419557612,
            "change": 16.506764466469726
        },
        {
            "name": "ICIL",
            "price": 20879.816405971447,
            "change": -12.475745353749684
        },
        {
            "name": "ZICOM",
            "price": 97638.54134093595,
            "change": 11.160605699800396
        },
        {
            "name": "SHAANINTERBE",
            "price": 86674.14294868331,
            "change": -3.5478041726877976
        },
        {
            "name": "GANESHANHYBE",
            "price": 15367.127778929467,
            "change": -2.411311114448246
        },
        {
            "name": "KOPDRUGSBZ",
            "price": 15206.253124271454,
            "change": 7.240227598111094
        },
        {
            "name": "ITI",
            "price": 96199.50499866987,
            "change": -0.623962059621963
        },
        {
            "name": "ANANTRAJ",
            "price": 28972.828883802147,
            "change": -3.202155066880561
        },
        {
            "name": "CHAMBLFERT",
            "price": 35577.374288485276,
            "change": -8.459920693503713
        },
        {
            "name": "GEORGFISCHBE",
            "price": 22593.41319277499,
            "change": 17.43464952291852
        },
        {
            "name": "BLUECOAST",
            "price": 3901.9910178530654,
            "change": 3.277306460233291
        },
        {
            "name": "GRUH",
            "price": 86899.02613240173,
            "change": -2.4483885111436656
        },
        {
            "name": "JIKIND",
            "price": 59775.391365907795,
            "change": -12.864347710491884
        },
        {
            "name": "SPYL",
            "price": 12563.211062040411,
            "change": 16.42678253163802
        },
        {
            "name": "HUBTOWN",
            "price": 83951.1883737072,
            "change": -19.001823035761113
        },
        {
            "name": "VISHNU",
            "price": 92574.82848542702,
            "change": 18.590105438426384
        }
    ]);
  } else if(path === "getFeaturedCompanies") {
    res.status(200).json([{
        name: "Capri Global",
        logo: "./companies/capri-global.png"
      },
      {
        name: "Ganesh Housing",
        logo: "./companies/ganesh-housing.png"
      },
      {
        name: "Fino Payments",
        logo: "./companies/fino-payments.png"
      },
      {
        name: "Gravita India",
        logo: "./companies/gravita-india.png"
      },
      {
        name: "Hira Godawari",
        logo: "./companies/hira-godawari.png"
      },
      {
        name: "Data Patterns",
        logo: "./companies/data-patterns.png"
      },
      {
        name: "Deep Industries",
        logo: "./companies/deep-industries.png"
      }])
  } else if(path === "getStories"){
    res.status(200).json([{
        image: "./news/borough-market.jpg",
        message: "Lorem Ipsum is simply dumym text of the printing and typesetting industry"
      }, {
        image: "./news/stock-building.jpg",
        message: "Lorem Ipsum is simply dumym text of the printing and typesetting industry"
      }, {
        image: "./news/borough-market.jpg",
        message: "Lorem Ipsum is simply dumym text of the printing and typesetting industry"
    }]);
  } else if(path === "getForum"){
    const sample = {
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
      };

    res.status(200).json([sample].concat(Array(5).fill({...sample, image: null})))
  } else {
    res.status(500).json({message: "API Not Found"});
  }
}