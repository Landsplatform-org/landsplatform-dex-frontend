import React, { lazy, useState, useContext } from "react";
import { swapComponentsRU } from "./linksListRU";
import { swapComponentsEN } from "./linksListEN";
import { swapComponentsCN } from "./linksListCN";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/UserContext";

const Send = lazy(() => import("../../components/Send/Send"));
const Swap = lazy(() => import("../../components/Swap/Swap"));
const Pool = lazy(() => import("../../components/Pool/Pool"));



const styles = {
  wrapper: `flex flex-col`,
  container: `
    w-[1280px]
    phone:w-[360px]
    tablet:w-[750px]
    laptop:w-[970px]
  `,
  title: `
    mt-36 text-[2.75rem] font-semibold
    phone:text-[1.875rem] phone:text-center phone:mt-16
    tablet:text-center
  `,
  componentButtonContainer: `
    flex flex-row w-full h-max my-12
    phone:mt-10 phone:mb-8 phone:p-1 phone:flex phone:justify-center phone:border phone:border-[#eeeeee] phone:rounded-full
    tablet:justify-center tablet:items-center
  `,
  componentButton: `
    w-[250px] mr-6 p-3 bg-[#eaeaea] rounded-3xl text-[#373c3d] font-semibold hover:bg-[#049ca6] hover:text-white transition duration-100 cursor-pointer
    phone:w-[100px] phone:mr-1 phone:p-2 phone:border-0 phone:flex phone:justify-center phone:items-center phone:font-semibold phone:text-[#373C3D] phone:rounded-3xl phone:text-[0.9rem]
  `,
  activeButton: `bg-[#049ca6] text-white`,
};

const SwapMain = () => {
  const [component, setComponent] = useState("send");
  const { t } = useTranslation();

  const {language} = useContext(UserContext)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t("swapMain.SMExchange")}</h1>
        <div className={styles.componentButtonContainer}>
          {language === "ru" && swapComponentsRU.map((link) => (
            <button
              key={link.id}
              className={styles.componentButton}
              onClick={() => setComponent(`${link.component}`)}
            >
              {link.name}
            </button>
          ))} 
          {language === "cn" && swapComponentsCN.map((link) => (
            <button
              key={link.id}
              className={styles.componentButton}
              onClick={() => setComponent(`${link.component}`)}
            >
              {link.name}
            </button>
          ))}
          {language === "en" && swapComponentsEN.map((link) => (
            <button
              key={link.id}
              className={styles.componentButton}
              onClick={() => setComponent(`${link.component}`)}
            >
              {link.name}
            </button>
          ))}
          
        </div>
        {component === "send" && <Send />}
        {component === "swap" && <Swap />}
        {component === "pool" && <Pool />}
      </div>
    </div>
  );
};

export default SwapMain;
