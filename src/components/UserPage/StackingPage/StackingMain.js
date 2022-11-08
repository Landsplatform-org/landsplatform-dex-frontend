import React from "react";
import { stackingComponents } from "./linksList";
import Stacking from "./Stacking/Stacking";
import Revenue from "./Revenue/Revenue";

const styles = {
  wrapper: `flex flex-col justify-between items-center`,
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
    laptop:text-center
  `,
  componentButtonContainer: `
    flex flex-row flex-wrap w-full h-max my-12
    phone:justify-center
    tablet:justify-center
    laptop:justify-center
  `,
  componentButton: `
    flex justify-center w-[220px] mr-6 my-1 p-3 bg-[#eaeaea] rounded-3xl text-[#373c3d] font-semibold hover:bg-[#049ca6] hover:text-white transition duration-100 cursor-pointer
    phone:w-[100px] phone:mr-1 phone:p-2 phone:border-0 phone:flex phone:justify-center phone:items-center phone:font-semibold phone:text-[#373C3D] phone:rounded-3xl phone:text-[0.9rem]
  `,
  activeButton: `bg-[#049ca6] text-white`,
  componentContainer: `
    w-full h-max flex flex-row justify-between items-center
    phone:flex-col phone:items-center phone:justify-center
    tablet:flex-col tablet:items-center tablet:justify-center
    
  `
};


const StackingMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Стекинг</h1>
        <div className={styles.componentButtonContainer}>
          {stackingComponents?.map((link) => (
            <button
              key={link.id}
              className={styles.componentButton}
            >
              {link.name}
            </button>
          ))}
        </div>
        <div className={styles.componentContainer}>
          <Stacking />
          <Revenue />
        </div>
      </div>
    </div>
  );
};

export default StackingMain;
