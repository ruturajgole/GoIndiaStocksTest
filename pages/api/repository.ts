import type { NextApiRequest, NextApiResponse } from "next";

type Stocks = {
  name: string,
  price: number,
  isUp: boolean
};

export function getStocks(
  req: NextApiRequest,
  res: NextApiResponse<ReadonlyArray<Stocks>>
) {
  res.status(200).json([{
    name: "BAJAJ",
    price: 0.01,
    isUp: true
  }]);
}