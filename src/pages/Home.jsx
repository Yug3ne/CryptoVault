import React, { useContext, useEffect, useState } from "react";
import SearchBar from "../components/home/SearchBar";
import CryptoTable from "../components/home/CryptoTable";
import { CoinContext } from "../context/CoinContext";

const HomePage = () => {


  const { allCoin, currency } = useContext(CoinContext);
  const [showCoin, setShowCoin] = useState([]);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const coinData = await allCoin;
        if (Array.isArray(coinData)) {
          setShowCoin(coinData);
        }
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchCoinData();
  }, [allCoin]);

// console.log(showCoin)
  return (
    <div className="h-[calc(100vh-3rem)]">
      {/* introduction container */}
      <div className="bg-red-400 h-[20%]"></div>
      {/* analysis board */}
      <div className="flex flex-col gap-2 h-[80%]">
        {/* title */}
        <div className="flex items-center justify-center flex-col">
          <h1 className="font-bold text-3xl text-slate-700">
            Check and analyze your Crypto here
          </h1>
          <p>Welcome to Crypto Valult. Sign up to explore more about cryptos</p>
        </div>
        {/* actual table */}
        <div className="flex flex-col items-center justify-center  gap-3">
          <div>
            <SearchBar  />
          </div>
          <div className="overflow-scroll">
            <CryptoTable showCoin={showCoin} currency ={currency} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
