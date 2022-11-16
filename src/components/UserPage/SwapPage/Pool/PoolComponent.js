import React, { useContext, useState } from "react";
import timeback from "../../../../assets/icons/gearwheel.svg";
import gearwheel from "../../../../assets/icons/historyclock.svg";
import { ImCross } from "react-icons/im";
import Modal from "react-modal";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import tokens from "../Swap/1InchTokens";
import { GoPlus } from "react-icons/go";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TokenContext } from "../../../../context/TokenContext";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
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

  const spinValue = React.useState(new Animated.Value(0))[0];
  const onPressIn = () => {
    Animated.spring(spinValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(spinValue, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  <View
    style={{
      transform: [{ rotate: "180deg" }],
    }}
  ></View>;

  const spinDeg = spinValue.interpolate({
    useNativeDriver: true,
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
})


  return (
    
    <div className="flex justify-center w-full">
      <button onClick={() => handleChangeLng("ru")} className="absolute left-10 bg-[blue] text-[white]">смена язика на руски</button>
      <button onClick={() => handleChangeLng("en")} className="absolute left-[250px] bg-[blue] text-[white]" >смена язика на англ</button>
      <div className="w-[894px] h-max flex flex-col justify-self-center mb-36 relative shadow-xl p-6 gap-10">
        <div className="flex flex-col">
          <p className="text-xl font-semibold">{t("yourliquidity")}</p>
          <p className="pt-[7px] text-stone-600 text-sm font-[10]">
          {t("yourliquidity")}
          </p>
        </div>
        <div className="flex flex-row items-center">
          {children}
          <button
            onClick={() => openModal()}
            className="w-[233px] h-[50px] text-white text-[16px] font-[400] bg-[#049CA6] rounded-[25px] mx-[29px]"
          >
            + Добавить ликвидность
          </button>
        </div>
        <div>
          <div className="float-left">
            <p className="text-[14px] mt-[12px]">Не видите свой пул?</p>
          </div>
          <div className="float-left">
            <button className="ml-[81px] text-[14px] border-[2px] border-[#049CA6] px-[25px] py-[11px] rounded-[25px] w-[220px] h-[40] hover:bg-[#049CA6]  hover:border-[#049CA6] hover:text-white transition duration-100">
              Найти другие LP-токены
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
        <div className="w-[894px] h-[300px] bg-white flex flex-col justify-between  border-0 rounded-xl shadow-3xl text-left p-[40px]">
          <div className="absolute top-0 right-0 w-[123px] h-[60px] bg-[#373C3D] rounded-tl-[0px] rounded-tr-[10px] rounded-br-[0px] rounded-bl-[50px]">
            <div className="">
              <button className="mr-[20px]  my-[20px] w-[20px] h-[20px]">
              <img src={timeback} alt="timeback" />
              </button>
              <button className=" float-left mr-[20px] ml-[42px] my-[20px] w-[20px] h-[20px]">
              <img src={gearwheel} alt="gearwheel" />
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
                    <img src={AToken.logoURI} alt={AToken.symbol} className="h-[19px] w-[19px] " />
                    {AToken.symbol}
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
                    <img src={BToken.logoURI} alt={BToken.symbol} className="h-[19px] w-[19px] " />
                    {BToken.symbol}
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
              <button
                onClick={() => addLiquidity(AToken, BToken)}
                className="shadow-md flex flex-row items-center justify-center border-2 border-[#049CA6] bg-[#049CA6]  text-white px-4 w-[255px] h-[50px] rounded-full m-3 hover:bg-transparent hover:text-[#049CA6] transition duration-100"
              >
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
