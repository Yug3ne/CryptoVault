import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [search, setSearch] = useState([])
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-iPESafffMFyMhR5GUrFxXXuo'}
        }
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
        const data = response.json()
        // console.log(data)
        setAllCoin(data)
        // setAllCoin(search)
      } catch (error) {
        console.error(error);
      }
    };
    fetchCoins()
  }, [currency]);

  const contextValue = {
    allCoin, currency, setCurrency, setSearch
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );

};

export default CoinContextProvider;

// all th supported currency
