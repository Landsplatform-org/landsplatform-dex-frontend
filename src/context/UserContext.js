import React, { useState, useEffect, createContext, useCallback } from "react";
import Web3 from "web3";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [txhash, setTxhash] = useState();
  const [walletBalance, setWalletBalance] = useState();
  const [isMetamask, setIsMetamask] = useState(false);
  const [language, setLanguage] = useState("ru");

  const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/")

  const getMetamask = useCallback(() => {
    if (typeof window.ethereum !== "undefined") {
      setIsMetamask(true);
      checkIfWalletIsConnected();
      return true
    }
    else {   
      console.log("Download metamask from https://metamask.io/") 
    }
  }, [])

  const checkIfWalletIsConnected = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length > 0) {
        const account = accounts[0];
        setTxhash(account);
        setIsAuth(true); 
      } 
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum account");
    }
  }

  const getWeiBalance = (user) => {
    web3.eth.getBalance(user).then(wei => {
      getBalance(wei);
    });
  }

  const getBalance = (wei) => {
    const balance = web3.utils.fromWei(wei, 'ether');
    setWalletBalance(balance);
  }

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      setTxhash(account);
      setIsAuth(true);
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    if(getMetamask()) {
      window.ethereum.on("accountsChanged", async () => {
        checkIfWalletIsConnected();
      });

      window.ethereum.on("disconnect", async () => {
        setTxhash();
        setIsAuth(false);
        window.location.reload();
      });
    };
  }, [getMetamask])
  
  return (
    <UserContext.Provider
      value={{
        isMetamask,
        connectWallet,
        setIsAuth,
        setTxhash,
        isAuth,
        txhash,
        getWeiBalance,
        walletBalance,
        setLanguage,
        language
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
