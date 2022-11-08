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
  const tokenAddress = '0x38411e5c54E83791F9Ed5F274F5f55CBdcf426F3';

  const contract = new web3.eth.Contract(minABI, tokenAddress);

  async function getBalance() {
    const result = await contract.methods.balanceOf(walletAddress).call();
    
    const format = web3.utils.fromWei(result);
    setTokenBalance(format);
  
    console.log(format);
  }

  return (
    <TokenContext.Provider
      value={{
        getBalance,
        tokenBalance
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}