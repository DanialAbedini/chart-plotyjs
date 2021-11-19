import React, { useEffect, useState, createContext } from "react";
//API
import { getBitcoins, getEthereum, getBinanceCoin } from "./api";
import { makeDate, makeX } from "./helper";

export const DataContext = createContext();

const SetData = ({ children }) => {
  const [inputs,setInputs] = useState([1,1,1]);
  const [bitcoin, setBitcoin] = useState([]);
  const [ethereum, setEthereum] = useState([]);
  const [binanceCoin, setBinanceCoin] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setBitcoin(await getBitcoins());
      setEthereum(await getEthereum());
      setBinanceCoin(await getBinanceCoin())
    };

    fetchAPI();
  }, []);

  const getInputs = ()=>{
    let input = prompt(
      "Enter X(Zaribe) Great than 0 lower than 10",
      "1"
    );
    input = input.split(" ");
    setInputs(makeX(input));
    
  }

  const datanumber = [
    { name: "Bitcoin", dates: [], prices: [] },
    { name: "Ethereum", dates: [], prices: [] },
    { name: "Binance Coin", dates: [], prices: [] },
  ];
  return (
    <>
      {bitcoin.length &&
        bitcoin.map((item) => {
          datanumber[0].dates.push(makeDate(item[0]));
          datanumber[0].prices.push(`${item[1].toFixed(0) * inputs[0]}`);
          return "";
        })}
      {ethereum.length &&
        ethereum.map((item) => {
          datanumber[1].dates.push(makeDate(item[0]));
          datanumber[1].prices.push(`${item[1].toFixed(0) * inputs[1]}`);
          return "";
        })}
      {binanceCoin.length &&
        binanceCoin.map((item) => {
          datanumber[2].dates.push(makeDate(item[0]));
          datanumber[2].prices.push(`${item[1].toFixed(0) * inputs[2]}`);
          return "";
        })}
      <DataContext.Provider value={datanumber}>{children}</DataContext.Provider>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            width: "30%",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={getInputs}
          >
            Zarib
          </button>
          <button onClick={()=>{setInputs([1,1,1])}}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default SetData;
