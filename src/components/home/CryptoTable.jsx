import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";

const CryptoTable = ({ showCoin, currency }) => {
  // const { allCoin, currency } = useContext(CoinContext);
  // const [showCoin, setShowCoin] = useState([]);

  // useEffect(() => {
  //   const fetchCoinData = async () => {
  //     try {
  //       const coinData = await allCoin;
  //       if (Array.isArray(coinData)) {
  //         setShowCoin(coinData);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching coin data:", error);
  //     }
  //   };

  //   fetchCoinData();
  // }, [allCoin]);
  // console.log(showCoin)

  return (
    <div className="w-[800px] m-auto ">
      <div className="grid grid-cols-custom px-[15px] py-[20px] border-b bg-[#172448] rounded-md">
        <p>#</p>
        <p>Coins</p>
        <p>Price</p>
        <p className="text-center">24H % change</p>
        <p className="text-right">Market cap</p>
      </div>
      {showCoin.slice(0, 8).map((coin, index) => (
        <div
          className="grid grid-cols-custom px-[15px] py-[20px] border-b bg-[#172448] last:border-none rounded-md "
          key={index}
        >
          <p>{coin.market_cap_rank}</p>
          <div className="relative w-6 h-6 flex gap-2 items-center text-nowrap">
            <img src={coin.image} alt="" fill />
            <p>{coin.name + "-" + coin.symbol}</p>
          </div>
          <p className="text-left">
            {currency.symbol} {coin.current_price.toLocaleString()}
          </p>
          <p className={coin.price_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"}>
            {Math.floor(coin.price_change_percentage_24h * 100) / 100}
          </p>
          <p className="text-right">
            {currency.symbol}
            {coin.market_cap.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CryptoTable;
