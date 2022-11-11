import React, { useEffect, useContext, useState, memo } from "react";
import { AiOutlineDown, AiOutlineRadiusBottomright } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import Modal from "react-modal";
import { UserContext } from "../../../../../../../landsplatform-dex/src/context/UserContext";
import timeback from "../../../../assets/icons/svg-gobbler.svg";
import gearwheel from "../../../../assets/icons/svg-goblin.svg";
import bnb from "../../../../assets/icons/binanceSmartChain.png";
import landsicon from "../../../../assets/icons/landsPlatform_small.png";
import { BsArrowLeft } from "react-icons/bs";
import tokens from "../../../../../../../landsplatform-dex/src/components/UserPage/SwapPage/Swap/1InchTokens";
import { GoPlus } from "react-icons/go";
import { LazyLoadImage } from "react-lazy-load-image-component";
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

const style1 = {
  height: 560,
};

const style2 = {
  height: 260,
};

const Pool = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [firstIsShowing, setFirstIsShowing] = useState(false);
  const [secondIsShowing, setSecondIsShowing] = useState(false);
  const [filter, setFilter] = useState("");
  const [accordeonIsShowing, setAccordeonIsShowing] = useState(false);
  const [data1IsShowing, setData1IsShowing] = useState(false);

  const accordeonData = {
    title: "Section 1 of accordion",
    content: `AccordionText AccordionText AccordionText AccordionText AccordionText AccordionText AccordionText AccordionText AccordionText AccordionText AccordionText `,
  };

  const { title, content } = accordeonData;

  const [fromToken, setFromToken] = useState({
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    logoURI:
      "https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png",
    symbol: "BNB",
    decimals: 18,
  });

  const [toToken, setToToken] = useState({
    address: "",
    logoURI:
      "https://psv4.vkuseraudio.net/s/v1/d/MOEpQfoFFspCMVwOLdDjqTH5K7mIKLjrfHg_kkQd-B84m5MxU-nmDSALGnmowxvL0OrrFY4n12x1Dy_QDmg7BFb6NY2XmUqScGmqvvewistqhOqFAOQ3rw/doubts-button.png",
    symbol: "Выберите токен",
    decimals: 0,
  });

  const selectFromToken = (address, logoURI, symbol, decimals) => {
    setFromToken({
      symbol: symbol,
      logoURI: logoURI,
      address: address,
      decimals: decimals,
    });

    setFirstIsShowing(false);

    setFilter("");
  };

  const selectToToken = (address, logoURI, symbol, decimals) => {
    setToToken({
      symbol: symbol,
      logoURI: logoURI,
      address: address,
      decimals: decimals,
    });

    setSecondIsShowing(false);
    setFilter("");
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

  const toggleAccordeon = () => {
    if (accordeonIsShowing) {
      return setAccordeonIsShowing(false);
    } else {
      setAccordeonIsShowing(true);
    }
  };

  const Data1 = () => {
    if (data1IsShowing) {
      return setData1IsShowing(false);
    } else {
      setData1IsShowing(true);
    }
    };



  return (
    <div className="w-full flex justify-center mb-36 relative">
      <div className="bigblock flex flex-col gap-3 w-[894px] h-max p-[40px] border-0 rounded-xl shadow-3xl  bg-white z-[500]">
        <h1 className="text-xl font-semibold">Ваша ликвидность</h1>
        <h3 className="text-stone-600 text-sm font-[10]">
          Чтобы вернуть токены, удалите ликвидность
        </h3>
        <div className="flex flex-row">
          <button className="wallet w-[424px] bg-[#eeeeee] flex flex-row justify-between   py-1 px-4 shadow-md rounded-[25px]">
            <div className=" flex flex-row items-center gap-1 mt-2">
              <img src={landsicon} className="h-5" alt="landsicon" />
              <img src={bnb} className="h-5" alt="bnb" />
              LANDS/BNB
            </div>
            
            <div className="flex flex-col text-right text-sm pl-[130px]">
              <span className="font-bold">2.45</span>
              <span>~$101.85</span>
            </div>
            
              <button className="  mt-[10px] " onClick={() => toggleAccordeon()}>
                < AiOutlineDown />
              </button>
              {accordeonIsShowing && (
                <>
                
                <div className=" flex flex-col text-left">
                    <span>Добавлено в пул LANDS:</span>
                    <span>Добавлено в пул BNB:</span>
                    <span>Возанаграждения APR за LP:</span>
                    <span>Доля в Пуле:</span></div>
                  
                  
                  {/* <div className="wallet flex flex-col text-left justify-start">
                    <span>Добавлено в пул LANDS:</span>
                    <span>Добавлено в пул BNB:</span>
                    <span>Возанаграждения APR за LP:</span>
                    <span>Доля в Пуле:</span></div> */}
                  
                </>
              )}
            
            
          </button>
          <div>
            <button
              onClick={() => openModal()}
              className="w-[233px] py-3 text-white text-[16px] font-[400] bg-[#049CA6] rounded-[25px] mx-[29px]"
            >
              + Добавить ликвидность
            </button>
          </div>
        </div>
        <div className="flex flex-row py-3">
          <div className="float-left">
            <p className="text-[14px] pl-1 mt-[12px]">Не видите свой пул?</p>
          </div>
          <div className="float-left">
            <button className="ml-[81px] text-[14px] border-[2px] border-[#049CA6] px-[25px] py-[11px] rounded-[25px] w-[220px] h-[40] hover:bg-[#049CA6] hover:border-[#049CA6] hover:text-white transition duration-100">
              {" "}
              Найти другие LP-токены
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[123px] h-[60px] bg-[#373C3D] rounded-tl-[0px] rounded-tr-[10px] rounded-br-[0px] rounded-bl-[50px]">
          <div className="">
            <button className="mr-[20px] my-[20px] w-[20px] h-[20px]">
              <h1>a</h1>
            </button>
            <button className=" float-left mr-[20px] ml-[42px] my-[20px] w-[20px] h-[20px]">
              <h1>a</h1>
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[123px] h-[60px] bg-[#373C3D] rounded-tl-[0px] rounded-tr-[10px] rounded-br-[0px] rounded-bl-[50px]">
          <div className="">
            <button className="mr-[20px]  my-[20px] w-[20px] h-[20px]">
              <img src={timeback}></img>
            </button>
            <button className=" float-left mr-[20px] ml-[42px] my-[20px] w-[20px] h-[20px]">
              <img src={gearwheel}></img>
            </button>
          </div>
        </div>
      </div>

      <div className=" w-[894px] h-[260px] relative  border-0 rounded-xl shadow-3xl text-left p-[40px]">
        <p className="text-xl font-semibold">Ваша ликвидность</p>
        <p className="pt-[7px] text-stone-600 text-sm font-[10]">
          Чтобы вернуть токены, удалите ликвидность
        </p>
        <input
          className="bg-[#ededed] w-[424px] outline-none rounded-[25px] h-[50px] px-[20px] mt-[30px] mb-[18px]"
          placeholder="Ликвидность не найдена"
        ></input>

        <button
          onClick={() => openModal()}
          className="w-[233px] h-[50px] text-white text-[16px] font-[400] bg-[#049CA6] rounded-[25px] mx-[29px]"
        >
          {" "}
          + Добавить ликвидность
        </button>
        <div>
          <div className="float-left">
            <p className="text-[14px] mt-[12px]">Не видите свой пул?</p>
          </div>
          <div className="float-left">
            <button className="ml-[81px] text-[14px] border-[2px] border-[#049CA6] px-[25px] py-[11px] rounded-[25px] w-[220px] h-[40] hover:bg-[#049CA6]  hover:border-[#049CA6] hover:text-white transition duration-100">
              {" "}
              Найти другие LP-токены
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[123px] h-[60px] bg-[#373C3D] rounded-tl-[0px] rounded-tr-[10px] rounded-br-[0px] rounded-bl-[50px]">
          <div className="">
            <button className="mr-[20px]  my-[20px] w-[20px] h-[20px]">
              <img src={timeback}></img>
            </button>
            <button className=" float-left mr-[20px] ml-[42px] my-[20px] w-[20px] h-[20px]">
              <img src={gearwheel}></img>
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={!!isShowing} style={customstyle}>
        <div className="w-[894px] h-[300px] bg-white flex flex-col justify-between  border-0 rounded-xl shadow-3xl text-left p-[40px]">
          <div className="absolute top-0 right-0 w-[123px] h-[60px] bg-[#373C3D] rounded-tl-[0px] rounded-tr-[10px] rounded-br-[0px] rounded-bl-[50px]">
            <div className="">
              <button className="mr-[20px]  my-[20px] w-[20px] h-[20px]">
                <img src={timeback}></img>
              </button>
              <button className=" float-left mr-[20px] ml-[42px] my-[20px] w-[20px] h-[20px]">
                <img src={gearwheel}></img>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <button
              onClick={() => closeModal()}
              className="text-xl pt-[5px] w-max h-max"
            >
              <BsArrowLeft />
            </button>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl">Добавить ликвидность</h1>
              <h3 className="text-sm">
                Получайте LP токены и зарабатывайте 0,17% торговых комиссий
              </h3>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-normal">Выберите пару токенов</h1>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <button
                  onClick={() => firstOpenModal()}
                  className="shadow-md flex flex-row items-center justify-between px-4 w-[255px] h-[50px] rounded-full m-3"
                >
                  <div className="flex flex-row items-center gap-2">
                    <img
                      src={fromToken.logoURI}
                      className="h-[19px] w-[19px] "
                    />
                    {fromToken.symbol}
                  </div>
                  <AiOutlineDown />
                </button>
                <div className="justify-between flex text-sm px-4 flex-row">
                  Баланс:{" "}
                  <div>
                    <span>0.0359423</span>{" "}
                    <span className="text-gray-500">~$1.85</span>
                  </div>
                </div>
              </div>
              <GoPlus className="mt-7" />
              <div className="flex flex-col ">
                <button
                  onClick={() => secondOpenModal()}
                  className="shadow-md flex flex-row items-center justify-between px-4 w-[255px] h-[50px] rounded-full m-3"
                >
                  <div className="flex flex-row items-center gap-2">
                    <img src={toToken.logoURI} className="h-[19px] w-[19px] " />
                    {toToken.symbol}
                  </div>
                  <AiOutlineDown />
                </button>
                <div className="justify-between flex text-sm px-4 flex-row">
                  Баланс:{" "}
                  <div>
                    <span>0.0359423</span>{" "}
                    <span className="text-gray-500">~$1.85</span>
                  </div>
                </div>
              </div>
              <button className="shadow-md flex flex-row items-center justify-center border-2 border-[#049CA6] bg-[#049CA6]  text-white px-4 w-[255px] h-[50px] rounded-full m-3 hover:bg-transparent hover:text-[#049CA6] transition duration-100">
                Добавить ликвидность
              </button>
            </div>
          </div>
        </div>
        <Modal isOpen={!!firstIsShowing} style={customstyle}>
          <div className={styles.modalWrapper}>
            <div className={styles.titleWrapper}>
              <div className={styles.title}>Выберите токен</div>
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
                    selectFromToken(t.address, t.logoURI, t.symbol, t.decimals)
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
              <div className={styles.title}>Выберите токен</div>
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
                    selectToToken(t.address, t.logoURI, t.symbol, t.decimals)
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

export default Pool;
