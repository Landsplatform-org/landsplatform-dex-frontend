import React, { createContext, useContext, useState } from "react";
import Web3 from "web3";
import { UserContext } from "./UserContext";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const web3 = new Web3("https://bsc-dataseed.binance.org/");

  const minABI = [
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      type: "function",
    },
  ];

  const { txhash } = useContext(UserContext);

  const [tokenBalance, setTokenBalance] = useState(0);

  const walletAddress = txhash;
  const tokenAddress = "0x38411e5c54E83791F9Ed5F274F5f55CBdcf426F3";

  const contract = new web3.eth.Contract(minABI, tokenAddress);

  async function getBalance() {
    const result = await contract.methods.balanceOf(walletAddress).call();

    const format = web3.utils.fromWei(result);
    setTokenBalance(format);

    console.log(format);
  }

  const [liquidity, setLiquidity] = useState([]);

  const [AToken, setAToken] = useState({
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    logoURI:
      "https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png",
    symbol: "BNB",
    decimals: 18,
  });

  const [BToken, setBToken] = useState({
    address: "",
    logoURI:
      "https://psv4.vkuseraudio.net/s/v1/d/MOEpQfoFFspCMVwOLdDjqTH5K7mIKLjrfHg_kkQd-B84m5MxU-nmDSALGnmowxvL0OrrFY4n12x1Dy_QDmg7BFb6NY2XmUqScGmqvvewistqhOqFAOQ3rw/doubts-button.png",
    symbol: "Выберите токен",
    decimals: 0,
  });

  const [firstIsShowing, setFirstIsShowing] = useState(false);
  const [secondIsShowing, setSecondIsShowing] = useState(false);
  const [filter, setFilter] = useState("");

  const selectAToken = (address, logoURI, symbol, decimals) => {
    setAToken({
      symbol: symbol,
      logoURI: logoURI,
      address: address,
      decimals: decimals,
    });

    setFirstIsShowing(false);

    setFilter("");
  };

  const selectBToken = (address, logoURI, symbol, decimals) => {
    setBToken({
      symbol: symbol,
      logoURI: logoURI,
      address: address,
      decimals: decimals,
    });

    setSecondIsShowing(false);
    setFilter("");
  };

  return (
    <TokenContext.Provider
      value={{
        getBalance,
        tokenBalance,
        liquidity,
        setLiquidity,
        AToken,
        BToken,
        selectAToken,
        selectBToken,
        firstIsShowing,
        secondIsShowing,
        setFirstIsShowing,
        setSecondIsShowing,
        filter,
        setFilter,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};
