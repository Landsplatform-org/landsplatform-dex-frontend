import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const TokenButton = ({ item, index }) => {
  const [accordeonIsShowing, setAccordeonIsShowing] = useState(false);

  const toggleAccordeon = () => {
    if (accordeonIsShowing) {
      setAccordeonIsShowing(false);
      return false;
    } else {
      setAccordeonIsShowing(true);
      return true;
    }
  };

  const styles1 = {
    tickIsClicked: `
      rotate-180 transition duration-100
    `,
    tickIsNotClicked: `
      rotate-0 transition duration-100
    `,
  };

  return (
    <div key={index} className="flex flex-row">
      <button className="wallet w-max bg-[#eeeeee] flex flex-col justify-center gap-10 py-1 px-4 shadow-md rounded-[25px]">
        <div className=" flex flex-row justify-between">
          <div className="flex flex-row items-center gap-1 w-[150px]">
            <img src={item.AToken.logoURI} className="h-5" alt="landsicon" />
            <img src={item.BToken.logoURI} className="h-5" alt="bnb" />
            {item.AToken.symbol}
            <span>/</span>
            {item.BToken.symbol}
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col text-right text-sm pl-[150px]">
              <span className="font-bold">2.45</span>
              <span>~$101.85</span>
            </div>
            <button onClick={() => toggleAccordeon()}>
              <div
                className={
                  accordeonIsShowing
                    ? styles1.tickIsClicked
                    : styles1.tickIsNotClicked
                }
              >
                <AiOutlineDown />
              </div>
            </button>
          </div>
        </div>

        {accordeonIsShowing && (
          <>
            <div className="flex flex-row w-[390px] justify-between">
              <div className=" flex  flex-col gap-3 text-left">
                <span className="flex items-center flex-row gap-2">
                  <img
                    src={item.AToken.logoURI}
                    className="h-5 "
                    alt="landsicon"
                  />
                  Добавлено в пул {item.AToken.symbol}:
                </span>
                <span className="flex items-center flex-row gap-2">
                  <img
                    src={item.BToken.logoURI}
                    className="h-5 w-5"
                    alt="bnb"
                  />
                  Добавлено в пул {item.BToken.symbol}:
                </span>
                <span>Возанаграждения APR за LP:</span>
                <span>Доля в Пуле:</span>
              </div>
              <div className="flex flex-col gap-3 text-right ">
                <span>56.308668</span>
                <span>56.308668</span>
                <span>0.5%</span>
                <span>0.5%</span>
              </div>
            </div>
            <div className="flex flex-row gap-7 justify-between">
              <button className=" w-[140px] h-[50px]  bg-[#049CA6] border-[2px] border-[#049CA6] rounded-full text-[white] font-normal hover:bg-[white] hover:text-stone-800 transition duration-100">
                Удалить
              </button>
              <button className="  w-[210px] h-[50px] px-1  border-[2px] border-transparent rounded-full text-[#049CA6] font-normal hover:border-[#049CA6] transition duration-100">
                + Добавить ликвидность
              </button>
            </div>
          </>
        )}
      </button>
    </div>
  );
};

export default TokenButton;
