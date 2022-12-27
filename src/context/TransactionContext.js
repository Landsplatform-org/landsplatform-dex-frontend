import React, { useState, useContext, useEffect } from 'react'
import { contractABI, contractAddress } from '../lib/constants'
import { ethers } from 'ethers'

import { UserContext } from './UserContext'

export const TransactionContext = React.createContext()

let eth

if (typeof window !== 'undefined') {
  eth = window.ethereum
}

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(eth)
  const signer = provider.getSigner()
  const transferContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer,
  )

  return transferContract
}

export const TransactionProvider = ({ children }) => {
  const [isTransactionLoading, setIsTransactionLoading] = useState(false)
  const [showError, setShowError] = useState(false);

  const [formData, setFormData] = useState({
    addressTo: '',
    amount: '',
  })

  const { txhash, getWeiBalance } = useContext(UserContext)

  const handleChange = (e, name) => {
    const str = e.target.value;

    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));

    if (str.length) {
      const re = /^\d+\.{0,1}\d*$/g;
      const address = /^0x[a-fA-F0-9]{40}$/g;

      if (
        re.test(String(str).toLowerCase()) ||
        address.test(String(str).toLowerCase())
      ) {
        return setShowError(false);
      }
      return setShowError(true);
    }
    return setShowError(false);
  };

  const sendTransaction = async () => {
    try {
      const { addressTo, amount } = formData
      const transactionContract = getEthereumContract()

      const parsedAmount = ethers.utils.parseEther(amount)

      await eth.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: txhash,
            to: addressTo,
            gas: '0x7EF40', // 520000 Gwei
            value: parsedAmount._hex,
          },
        ],
      })

      const transactionHash = await transactionContract.publishTransaction(
        addressTo,
        parsedAmount,
      )

      setIsTransactionLoading(true)

      await transactionHash.wait();

      setIsTransactionLoading(false)
      
      getWeiBalance(txhash);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TransactionContext.Provider
      value={{
        showError,
        formData,
        handleChange,
        sendTransaction,
        isTransactionLoading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}