import React, { useEffect, useContext, useState, memo } from "react";
import axios from 'axios';
import { AiOutlineDown } from "react-icons/ai";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import tokens from "./1InchTokens";
import { UserContext } from "../../../../context/UserContext";

Modal.setAppElement(document.getElementById("root"));

const styles = {
  wrapper: `
    w-full flex flex-col items-center justify-center mb-36
  `,
  container: `
    w-[1280px] flex justify-center
    phone:w-[360px]
    tablet:w-[750px]
    laptop:w-[970px]
  `,
  content: `
    bg-[#eaeaea] border border-[#eeeeee] w-[26rem] rounded-3xl p-4 my-5
    phone:w-full phone:m-2
  `,
  formHeader: `
    px-2 flex items-center justify-between font-semibold text-lg
  `,
  transferPropContainer: `
    p-2 placeholder:text-[#373C3D] outline-none w-full text-md
  `,
  transferPropInput: `
    bg-[#ededed] p-3 rounded-full placeholder:text-[#abc0c2] outline-none mb-6 w-full text-2xl
  `,
  currencySelector: `
    flex flex-row w-max
    phone:w-max
  `,
  currencySelectorContent: `
    w-full h-min justify-between flex items-center shadow shadow-lg hover:shadow-none transtition-all duration-100 rounded-3xl text-[#373C3D] font-medium cursor-pointer p-2 
  `,
  currencySelectorTicker: `
    flex flex-row items-center ml-2 font-semibold
  `,
  currencySelectorArrow: `
    mr-2 ml-4 text-md
  `,
  addIcon: `
    flex flex-row items-center justify-center p-2 rounded-full
  `,
  icon: `
    pt-1 pr-2
  `,
  swapButtonWrapper: `
    flex flex-row justify-center items-center w-full h-min my-1
  `,
  swapButton: `
    rounded-full p-3 shadow shadow-lg hover:shadow-none transition-all duration-100
  `,
  gasSelector: `
  flex flex-row w-max
  phone:w-max
`,
  gasSelectorContent: `
    w-full h-min justify-between flex items-center shadow shadow-lg rounded-3xl text-[#373C3D] font-medium cursor-pointer p-2 
  `,
  gasSelectorTicker: `
    flex flex-row items-center ml-2 font-semibold
  `,
  gasSelectorArrow: `
    mr-2 ml-4 text-md
  `,
  gasicon: `
    pr-2
  `,
  confirmButton: `
    w-full bg-[#049CA6] my-2 rounded-full py-5 px-8 text-xl text-white flex items-center justify-center cursor-pointer shadow shadow-xl hover:shadow-none hover:bg-[#05a4ad] transtition-all duration-100 disabled:bg-[#d9d9d9] disabled:text-[#373C3D] disabled:border-[#d9d9d9] disabled:shadow-none
  `,
  modalWrapper: `
    p-4 bg-[#E6E6E6] text-[#373C3D] h-min w-[350px] flex flex-col justify-evenly rounded-2xl
    phone:w-[325px]
  `,
  titleWrapper: `flex flex-row p-2 justify-between items-center`,
  title: `
    font-semibold text-xl 
    phone:text-lg
  `,
  searchBar: `flex mt-4 justify-center items-center placeholder:text-[#373C3D] w-full`,
  searchPropInput: `bg-[#ededed] p-3 rounded-full placeholder:text-[#abc0c2] outline-none mb-6 w-full text-md`,
  tokenButton: `px-1 py-2 my-1 flex flex-row items-center bg-[#E6E6E6] text-lg font-semibold text-[#373C3D] cursor-pointer rounded-full hover:bg-[#dadada] transtition-all duration-100`,
  exitButton: `text-[#373C3D] rounded-full flex justify-center items-center hover:rotate-90 transition-all duration-200`,
};

const customstyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    padding: 0,
    border: "none",
    zIndex: 100
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.3)",
    backdropFilter: "blur(2px)",
    zIndex: 100
  },
};

const Swap = memo(() => {
  const { txhash, getWeiBalance, walletBalance } = useContext(UserContext);

  const [isFromShowing, setIsFromShowing] = useState();
  const [isToShowing, setIsToShowing] = useState();

  const [formData, setFormData] = useState({
    receiver: "",
    amount: "0.0",
  });

  const [fromToken, setFromToken] = useState({
    address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 
    logoURI: 'https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png', 
    symbol: 'BNB', 
    decimals: 18
  })

  const [toToken, setToToken] = useState({
    address: '',
    logoURI: 'https://psv4.vkuseraudio.net/s/v1/d/MOEpQfoFFspCMVwOLdDjqTH5K7mIKLjrfHg_kkQd-B84m5MxU-nmDSALGnmowxvL0OrrFY4n12x1Dy_QDmg7BFb6NY2XmUqScGmqvvewistqhOqFAOQ3rw/doubts-button.png',
    symbol: 'Выберите токен',
    decimals : 0
  })

  const [value, setValue] = useState("0.0");
  const [estimatedGas, setEstimatedGas] = useState("0");
  const [filter, setFilter] = useState("");

  const swapPlace = () => {
    setFromToken(toToken);
    setToToken(fromToken);
  }

  const selectFromToken = (address, logoURI, symbol, decimals) => {
    setFromToken({
      symbol: symbol,
      logoURI: logoURI,
      address: address,
      decimals: decimals
    });

    setIsFromShowing(false);
    setFilter("");
  };

  const selectToToken = (address, logoURI, symbol, decimals) => {
    setToToken({
      symbol: symbol,
      logoURI: logoURI,
      address: address,
      decimals: decimals
    });

    setIsToShowing(false);
    setFilter("");
  };

  const closeModal = () => {
    setFilter("");
    setIsFromShowing(false);
    setIsToShowing(false);
  };

  const handleChange = (e, name) => {
    if (!e.target.value) {
      setValue("0.0");
      setEstimatedGas("0");
    }
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const filterItems = (filter) => {
    return filter ? tokens.filter((t) => t.symbol.includes(filter)) : tokens;
  };

  const items = filterItems(filter.toUpperCase());

  const searchHandler = (e) => {
    setFilter(e.target.value);
  }; 

  useEffect(() => {
    console.log(fromToken);
    console.log(toToken);
  }, [fromToken, toToken])

  useEffect(() => {
    getWeiBalance(txhash)
  }, [getWeiBalance, txhash])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.formHeader}>
            <div>Обмениваете</div>
          </div>

          <div className={styles.addIcon}></div>

          <div className={styles.transferPropContainer}>
            <input
              type="text"
              className={styles.transferPropInput}
              placeholder="0.0"
              onChange={(e) => {
                handleChange(e, "amount");
              }}
              // onBlur={() => getQuote()}
            />
            <div
              onClick={() => setIsFromShowing(true)}
              className={styles.currencySelector}
            >
              <div className={styles.currencySelectorContent}>
                <div className={styles.currencySelectorTicker}>
                  <div className={styles.icon}>
                    <img width={20} height={20} src={fromToken.logoURI} alt="" />
                  </div>
                  <div>{fromToken.symbol}</div>
                </div>
                <AiOutlineDown className={styles.currencySelectorArrow} />
              </div>
            </div>
          </div>
          <div className={styles.swapButtonWrapper}>
          <button
            onClick={() => {
              swapPlace()
            }}
            className={styles.swapButton}
          >
            <img
              width={15}
              height={15}
              src={require('../../../../assets/icons/swap.png')}
              alt=""
            />
          </button>
        </div>
          <div className={styles.transferPropContainer}>
            <input
              type="text"
              className={styles.transferPropInput}
              placeholder={value}
              readOnly
            />
            <div className="flex flex-row justify-between">
              <div
                onClick={() => setIsToShowing(true)}
                className={styles.currencySelector}
              >
                <div className={styles.currencySelectorContent}>
                  <div className={styles.currencySelectorTicker}>
                    <div className={styles.icon}>
                      <img width={20} height={20} src={toToken.logoURI} alt="" />
                    </div>
                    <div>{toToken.symbol}</div>
                  </div>
                  <AiOutlineDown className={styles.currencySelectorArrow} />
                </div>
              </div>
              <div className={styles.gasSelector}>
                <div className={styles.gasSelectorContent}>
                  <div className={styles.gasSelectorTicker}>
                    <div className={styles.gasicon}>
                      <img
                        width={20}
                        height={20}
                        src={require("../../../../assets/icons/gas-pump.png")}
                        alt=""
                      />
                    </div>
                    <div className="mr-2">{estimatedGas}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {walletBalance > 0 ? (<button className={styles.confirmButton}>Подтвердить</button>) 
          : (<button disabled className={styles.confirmButton}>Недостаточно BNB</button>)}     
        </div>
        <Modal isOpen={!!isFromShowing} style={customstyles}>
          <div className={styles.modalWrapper}>
            <div className={styles.titleWrapper}>
              <div className={styles.title}>Выберите токен</div>
              <div onClick={() => closeModal()} className={styles.exitButton}>
                <ImCross />
              </div>
            </div>
            <div className={styles.searchBar}>
              <input
                type="text"
                className={styles.searchPropInput}
                placeholder="Введите название токена"
                onChange={(e) => {
                  searchHandler(e);
                }}
              />
            </div>
            <div
              id="from_list"
              className="scroll item-center mt-5 flex h-[380px] flex-col justify-start overflow-auto scroll-smooth p-2"
            >
              {items?.map((t) => (
                <button
                  onClick={() =>
                    selectFromToken(t.address, t.logoURI, t.symbol, t.decimals)
                  }
                  key={t.name}
                  className={styles.tokenButton}
                >
                  <div className="pl-2 pr-5">
                    <LazyLoadImage width={38} height={38} src={t.logoURI} alt="" />
                  </div>
                  <div>{t.symbol}</div>
                </button>
              ))}
            </div>
          </div>
        </Modal>
        <Modal isOpen={!!isToShowing} style={customstyles}>
          <div className={styles.modalWrapper}>
            <div className={styles.titleWrapper}>
              <div className={styles.title}>Выберите токен</div>
              <div onClick={() => closeModal()} className={styles.exitButton}>
                <ImCross />
              </div>
            </div>
            <div className={styles.searchBar}>
              <input
                type="text"
                className={styles.searchPropInput}
                placeholder="Введите название токена"
                onChange={(e) => {
                  searchHandler(e);
                }}
              />
            </div>
            <div
              id="to_list"
              className="scroll item-center mt-5 flex h-[380px] flex-col justify-start overflow-auto scroll-smooth p-2"
            >
              {items?.map((t) => (
                <button
                  onClick={() =>
                    selectToToken(t.address, t.logoURI, t.symbol, t.decimals)
                  }
                  key={t.name}
                  className={styles.tokenButton}
                >
                  <div className="pl-2 pr-5">
                    <LazyLoadImage width={38} height={38} src={t.logoURI} alt="" />
                  </div>
                  <div>{t.symbol}</div>
                </button>
              ))}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
});

export default Swap;
