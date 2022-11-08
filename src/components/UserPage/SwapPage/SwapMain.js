import React, { lazy, useState } from "react";
import { swapComponents } from "./linksList";

const Send = lazy(() => import("./Send/Send"));
const Swap = lazy(() => import("./Swap/Swap"));
const Pool = lazy(() => import("./Pool/Pool"));

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Обмен</h1>
        <div className={styles.componentButtonContainer}>
          {swapComponents?.map((link) => (
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
