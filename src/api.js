import axios from "axios";

export const getBitcoins = async () => {
  const data = await axios.get(
    "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1420070400&to=1634813314"
  );
  return data.data.prices;
};

export const getEthereum = async () => {
  const data = await axios.get(
    "https://api.coingecko.com/api/v3/coins/ethereum/market_chart/range?vs_currency=usd&from=1420070400&to=1634813314"
  );
  return data.data.prices;
};

export const getBinanceCoin = async () => {
  const data = await axios.get(
    "https://api.coingecko.com/api/v3/coins/binancecoin/market_chart/range?vs_currency=usd&from=1420070400&to=1634813314"
  );
  return data.data.prices;
};
