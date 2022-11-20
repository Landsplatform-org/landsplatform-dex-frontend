import React, { useContext, useState } from "react";
import timeback from "../../assets/icons/gearwheel.svg";
import gearwheel from "../../assets/icons/historyclock.svg";
import { ImCross } from "react-icons/im";
import Modal from "react-modal";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import tokens from "../Swap/1InchTokens";
import { GoPlus } from "react-icons/go";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TokenContext } from "../../context/TokenContext";
import { useTranslation } from "react-i18next";
Modal.setAppElement(document.getElementById("root"));

const styles = {
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

const customstyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    padding: 0,
    border: "none",
    zIndex: 100,
    
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.3)",
    backdropFilter: "blur(2px)",
    zIndex: 100,
  },
};

const PoolComponent = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  const { liquidity, setLiquidity, accordeonIsShowing, setAccordeonIsShowing } =
    useContext(TokenContext);

  const {
    filter,
    setFilter,
    firstIsShowing,
    secondIsShowing,
    setFirstIsShowing,
    setSecondIsShowing,
    AToken,
    BToken,
    selectAToken,
    selectBToken,
  } = useContext(TokenContext);

  const addLiquidity = (AToken, BToken) => {
    const updatedLiquidity = [...liquidity, { AToken, BToken }];
    setLiquidity(updatedLiquidity);
    setIsShowing(false);

    const updatedAccordeon = [...accordeonIsShowing, { a: false }];
    setAccordeonIsShowing(updatedAccordeon);
  };

  const filterItems = (filter) => {
    return filter ? tokens.filter((t) => t.symbol.includes(filter)) : tokens;
  };

  const items = filterItems(filter.toUpperCase());

  const searchHandler = (e) => {
    setFilter(e.target.value);
  };

  const openModal = () => {
    setIsShowing(true);
  };

  const firstOpenModal = () => {
    setFirstIsShowing(true);
  };

  const secondOpenModal = () => {
    setSecondIsShowing(true);
  };

  const closeModal = () => {
    setIsShowing(false);
  };

  const closeFirstModal = () => {
    setFirstIsShowing(false);
  };

  const closeSecondModal = () => {
    setSecondIsShowing(false);
  };

  const { t } = useTranslation();
  
  return (
    <div className="flex justify-center w-full">
      <div className="w-[894px] phone:w-[350px] h-max flex flex-col justify-self-center mb-36 relative shadow-xl p-6 gap-10">
        <div className="flex flex-col ">
          <p className="text-xl font-semibold">{t("poolComponent.yourLiq")}</p>
          <p className="pt-[7px] text-stone-600 text-sm font-[10]">
          {t("poolComponent.liqDesc")}
          </p>
        </div>
        <div className="flex flex-row phone:flex-col phone:items-center items-center">
          {children}
          <button
            onClick={() => openModal()}
            className="w-[233px] h-[50px] phone:items-center text-white text-[16px] font-[400] bg-[#049CA6] rounded-[25px] mx-[29px] phone:mx-0">
            + {t("poolComponent.addLiq")}
          </button>
        </div>
        <div className="phone:flex phone:flex-col phone:items-center flex flex-row gap-10 phone:gap-5">
          <div >
            <p className="text-[14px] mt-[12px]">{t("poolComponent.cantSeeYourPool")}</p>
          </div>
          <div className="phone:flex phone:flex-col phone:items-center flex flex-row">
            <button className=" text-[14px] border-[2px] border-[#049CA6] px-[25px] py-[11px] rounded-[25px] w-[220px] h-[40] hover:bg-[#049CA6]  hover:border-[#049CA6] hover:text-white transition duration-100">
            {t("poolComponent.findOtherTokens")}
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[123px] h-[60px] bg-[#373C3D] rounded-tl-[0px] rounded-tr-[10px] rounded-br-[0px] rounded-bl-[50px]">
          <button className="mr-[20px]  my-[20px] w-[20px] h-[20px]">
            <img src={timeback} alt="timeback" />
          </button>
          <button className=" float-left mr-[20px] ml-[42px] my-[20px] w-[20px] h-[20px]">
            <img src={gearwheel} alt="gearwheel" />
          </button>
        </div>
      </div>
      <Modal isOpen={!!isShowing} style={customstyle}>
        <div className="w-[894px] h-[270px] bg-white flex flex-col justify-between  border-0 rounded-xl shadow-3xl text-left p-[40px]  phone:flex phone:flex-col phone:items-center phone:h-max phone:w-[350px]">
          <div className="absolute top-0 right-0 w-[123px] phone:w-[60px] h-[60px] phone:h-[30px] bg-[#373C3D] rounded-tl-[0px] rounded-tr-[10px] rounded-br-[0px] rounded-bl-[50px] phone:flex phone:flex-col ">
            <div className="phone:flex phone:flex-col phone:items-center">
              <button className="mr-[20px]  my-[20px] w-[20px] h-[20px] phone:w-[12px] phone:h-[12px] phone:mr-[15px] phone:my-[8px]">
                <img src={timeback} alt="timeback" />
              </button>
              <button className=" float-left mr-[20px] ml-[42px] my-[20px] w-[20px] h-[20px] phone:w-[12px] phone:h-[12px] phone:mr-[15px] phone:my-[-20px]">
                <img src={gearwheel} alt="gearwheel" />
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-4 phone:w-[350px] phone:flex phone:flex-row phone:items-center">
            <button 
              onClick={() => closeModal()}
              className="text-xl pt-[5px] phone:pt-0 w-max h-max phone:flex phone:flex-col phone:items-center"
            >
              <BsArrowLeft />
            </button>
            
            <div className="flex flex-col gap-2 phone:flex phone:flex-col phone:items-center phone:gap-3 phone:w-[350px]  ">
              <h1 className="text-xl ">{t("poolComponent.addLiq")}</h1>
              <h3 className="text-sm phone:text-xs phone:text-center ">
              {t("poolComponent.getLPTokens")}
              </h3>
            </div>
          </div>
          <div className="flex flex-col phone:flex phone:flex-col phone:gap-1 ">
            <h1 className="font-normal phone:flex phone:flex-col phone:items-center">{t("poolComponent.choosePair")}</h1>
            <div className="flex flex-row phone:flex phone:flex-col">
              <div className="flex flex-col">
                <button
                  onClick={() => firstOpenModal()}
                  className="shadow-md flex flex-row items-center justify-between px-4 w-[255px] h-[50px] rounded-full m-3"
                >
                  <div className="flex flex-row items-center gap-2">
                    <img
                      src={AToken.logoURI}
                      alt={AToken.symbol}
                      className="h-[19px] w-[19px] "
                    />
                    {AToken.symbol}
                  </div>
                  <AiOutlineDown />
                </button>
                <div className="justify-between flex text-sm px-4 flex-row">
                {t("poolComponent.pCBalance")}
                  <div>
                    <span>0.0359423</span>{" "}
                    <span className="text-gray-500">~$1.85</span>
                  </div>
                </div>
              </div>
              <div className="phone:flex phone:flex-col phone:items-center">
              <GoPlus className="mt-7" />
              </div>
              <div className="flex flex-col ">
                <button
                  onClick={() => secondOpenModal()}
                  className="shadow-md flex flex-row items-center justify-between px-4 w-[255px] h-[50px] rounded-full m-3"
                >
                  <div className="flex flex-row items-center gap-2">
                    <img
                      src={BToken.logoURI}
                      alt={BToken.symbol}
                      className="h-[19px] w-[19px] "
                    />
                    {BToken.symbol}
                  </div>
                  <AiOutlineDown />
                </button>
                <div className="justify-between flex text-sm px-4 flex-row">
                {t("poolComponent.pCBalance")}
                  <div>
                    <span>0.0359423</span>{" "}
                    <span className="text-gray-500">~$1.85</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => addLiquidity(AToken, BToken)}
                className="shadow-md flex flex-row items-center justify-center border-2 border-[#049CA6] bg-[#049CA6]  text-white px-4 w-[255px] h-[50px] rounded-full m-3 hover:bg-transparent hover:text-[#049CA6] transition duration-100"
              >
                {t("poolComponent.addLiq")}
              </button>
            </div>
          </div>
        </div>
        <Modal isOpen={!!firstIsShowing} style={customstyle}>
          <div className={styles.modalWrapper}>
            <div className={styles.titleWrapper}>
              <div className={styles.title}>{t("poolComponent.chooseToken")}</div>
              <div
                onClick={() => closeFirstModal()}
                className={styles.exitButton}
              >
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
                    selectAToken(t.address, t.logoURI, t.symbol, t.decimals)
                  }
                  key={t.name}
                  className={styles.tokenButton}
                >
                  <div className="pl-2 pr-5">
                    <LazyLoadImage
                      width={38}
                      height={38}
                      src={t.logoURI}
                      alt=""
                    />
                  </div>
                  <div>{t.symbol}</div>
                </button>
              ))}
            </div>
          </div>
        </Modal>
        <Modal isOpen={!!secondIsShowing} style={customstyle}>
          <div className={styles.modalWrapper}>
            <div className={styles.titleWrapper}>
              <div className={styles.title}>{t("poolComponent.chooseToken")}</div>
              <div
                onClick={() => closeSecondModal()}
                className={styles.exitButton}
              >
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
                    selectBToken(t.address, t.logoURI, t.symbol, t.decimals)
                  }
                  key={t.name}
                  className={styles.tokenButton}
                >
                  <div className="pl-2 pr-5">
                    <LazyLoadImage
                      width={38}
                      height={38}
                      src={t.logoURI}
                      alt=""
                    />
                  </div>
                  <div>{t.symbol}</div>
                </button>
              ))}
            </div>
          </div>
        </Modal>
      </Modal>
    </div>
  );
};

export default PoolComponent;
