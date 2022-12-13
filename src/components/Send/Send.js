import React, { useEffect, useContext, useState, memo } from "react";
import Modal from "react-modal";
import { UserContext } from "../../context/UserContext";
import { TransactionContext } from "../../context/TransactionContext";
import { useTranslation } from "react-i18next";

import { ColorRing } from "react-loader-spinner";

import bnbIcon from "../../assets/icons/binanceSmartChain.png";

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
    shadow-3xl
    bg-[#fafafa] border border-[#eeeeee] w-[26rem] rounded-3xl p-4 my-5
    phone:w-full phone:m-2
  `,
  formHeader: `
    px-2 flex items-center justify-between font-semibold text-lg
  `,
  transferPropContainer: `
    p-2 placeholder:text-[#373C3D] outline-none w-full text-md flex flex-col-reverse gap-5
  `,
  transferPropInput: `
    bg-[#ededed] p-3 rounded-full placeholder:text-[#abc0c2] outline-none w-full text-2xl
  `,
  currencySelectorContainer: `flex flex-row justify-between`,
  currencySelector: `
    flex flex-row items-center px-4 gap-2 w-max rounded-full bg-[#ededed] font-semibold
    phone:w-max
  `,
  icon: `
    w-[20px] h-[20px]
  `,
  confirmButton: `
    w-full bg-[#049CA6] my-2 rounded-full py-5 px-8 text-xl text-white flex items-center justify-center cursor-pointer shadow shadow-xl hover:shadow-none hover:bg-[#05a4ad] transtition-all duration-100 disabled:bg-[#d9d9d9] disabled:text-[#373C3D] disabled:border-[#d9d9d9] disabled:shadow-none focus:border-none
  `
};

const Send = memo(() => {
  const { txhash, getWeiBalance, walletBalance } = useContext(UserContext);
  const {
    handleChange,
    showError,
    sendTransaction,
    isTransactionLoading,
    formData,
  } = useContext(TransactionContext);

  const [token] = useState({
    symbol: "BNB",
    icon: bnbIcon,
    contractAddress: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    decimals: 18,
  });

  const handleSubmit = async (e) => {
    let { addressTo, amount } = formData;
    e.preventDefault();

    if (!addressTo || !amount) return;

    sendTransaction().then((e.target.value = ""));
  };

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

          <div className={styles.transferPropContainer}>
            <input
              type="text"
              className={styles.transferPropInput}
              placeholder="0.0"
              onChange={(e) => handleChange(e, "amount")}
            />
            <div className={styles.currencySelectorContainer}>
              <div className={styles.currencySelector}>
                <img className={styles.icon} src={token.icon} alt="" />
                <span>{token.symbol}</span>
              </div>
              <span className="p-[10px] font-semibold">
                {t("swap.balance")}:{" "}
                {Math.round(parseFloat(walletBalance) * 1000) / 1000}
              </span>
            </div>
          </div>
          <div className={styles.transferPropContainer}>
            <input
              type="text"
              className={styles.transferPropInput}
              placeholder="0x..."
              onChange={(e) => handleChange(e, "addressTo")}
            />
          </div>
          {walletBalance > 0 ? (
            <button
              disabled={showError || isTransactionLoading}
              className={styles.confirmButton}
              onClick={(e) => handleSubmit(e)}
            >
              {t("send.sendConfirm")}
            </button>
          ) : (
            <button disabled className={styles.confirmButton}>
              {t("send.notEnoughBNB")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

export default Send;
