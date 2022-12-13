import React, { useEffect, useContext, useState, memo } from "react";
import { AiOutlineDown } from "react-icons/ai";
import Modal from "react-modal";
import transferToken from "./transferTokens";
import { ImCross } from "react-icons/im";
import { UserContext } from "../../context/UserContext";
import { useTranslation } from "react-i18next";

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
  icon: `
    pt-1 pr-2
  `,
  addIcon: `
    flex flex-row items-center justify-center p-2 rounded-full
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

const Sending = () => {

}

const Send = memo(() => {
  const { txhash, getWeiBalance, walletBalance } = useContext(UserContext);

  const [isShowing, setIsShowing] = useState();
  const [formData, setFormData] = useState({
    receiver: "",
    amount: "0.0",
  });

  const [showError, setShowError] = useState(false);

  const [filter, setFilter] = useState("");

  const [token, setToken] = useState({
    symbol: 'BNB',
    icon: 'binanceSmartChain',
    contractAddress: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    decimals: 18,
  })

  const selectTransferToken = (symbol, icon, address, decimals) => {
    setToken({
      symbol: symbol,
      icon: icon,
      contractAddress: address,
      decimals: decimals
    })

    setIsShowing(false);
    setFilter("");
  };

  const handleChange = (e, name) => {
    const str = e.target.value;
    
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));

    if (str.length) {
      const re = /^\d+\.{0,1}\d*$/g;

      if (re.test(String(str).toLowerCase())) {
        return setShowError(false);
      }
      return setShowError(true);
    }
    return setShowError(false);
  };

  const filterItems = (filter) => {
    return filter
      ? transferToken.filter((t) => t.title.includes(filter))
      : transferToken;
  };

  const items = filterItems(filter.toUpperCase());

  const searchHandler = (e) => {
    setFilter(e.target.value);
  };

  const closeModal = () => {
    setFilter("");
    setIsShowing(false);
  };

  useEffect(() => {
    console.log(token)
  }, [token])
  
  useEffect(() => {
    getWeiBalance(txhash);
  }, [getWeiBalance, txhash]);
  const { t } = useTranslation();



  
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.formHeader}>
            <div>{t("send.sending")}</div>
          </div>

          <div className={styles.addIcon}></div>

          <div className={styles.transferPropContainer}>
            <input
              type="text"
              className={styles.transferPropInput}
              placeholder="0.0"
              pattern="^[0-9]*[.,]?[0-9]*$"
              onChange={(e) => handleChange(e, "amount")}
            />
            <div
              onClick={() => setIsShowing(true)}
              className={styles.currencySelector}
            >
              <div className={styles.currencySelectorContent}>
                <div className={styles.currencySelectorTicker}>
                  <div className={styles.icon}>
                    <img
                      width={20}
                      height={20}
                      src={require("../../assets/icons/" +
                        token.icon +
                        ".png")}
                      alt=""
                    />
                  </div>
                  <div>{token.symbol}</div>
                </div>
                <AiOutlineDown className={styles.currencySelectorArrow} />
              </div>
            </div>
          </div>
          <div className={styles.transferPropContainer}>
            <input
              type="text"
              className={styles.transferPropInput}
              placeholder="0x..."
              onChange={(e) => handleChange(e, "receiver")}
            />
          </div>
          {walletBalance > 0 ? (<button disabled={showError} className={styles.confirmButton}>
              {t("send.sendConfirm")}
            </button>) 
          : (<button disabled className={styles.confirmButton}>{t("send.notEnoughBNB")}</button>
          )}
        </div>
        <Modal isOpen={!!isShowing} style={customstyles}>
          <div className={styles.modalWrapper}>
            <div className={styles.titleWrapper}>
              <div className={styles.title}>{t("send.sendChooseToken")}</div>
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
            <div className="item-center mt-5 flex h-[380px] flex-col justify-start overflow-hidden scroll-smooth p-2">
              {items?.map((t) => (
                <button
                  onClick={() =>
                    selectTransferToken(
                      t.symbol,
                      t.icon,
                      t.contractAddress,
                      t.decimals
                    )
                  }
                  key={t.id}
                  className={styles.tokenButton}
                >
                  <div className="pl-2 pr-5">
                    <img
                      width={38}
                      height={38}
                      src={require("../../assets/icons/" +
                        t.icon +
                        ".png")}
                      alt=""
                    />
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

export default Send;
