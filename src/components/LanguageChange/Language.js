import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./styles.css";

const styles = {
  wrapper: `
    w-min flex flex-row justify-center items-center text-[#373C3D] font-normal
    phone:w-screen phone:justify-between phone:px-5 phone:mb-5 phone:mt-3
    tablet:w-screen tablet:justify-between tablet:px-5 tablet:mb-5 tablet:mt-3
  `,
  content: `px-4 relative flex flex-row gap-1 items-center language-block z-[1000]`,
  name: `
    phone:hidden
    tablet:hidden
    language-text
  `,
  mName: `
   hidden phone:hover:text-[#049CA6] phone:transition phone:duration-100
   phone:w-max phone:flex phone:flex-row phone:items-center phone:block phone:text-[1.5rem]
   tablet:w-max tablet:flex tablet:flex-row tablet:items-center tablet:block tablet:text-[1.875rem]
  `,
  arrow: `
    mt-1 text-sm arrow
    phone:text-xl
    tablet:text-xl
  `,
  lngChangeBlock: `
    absolute flex flex-col top-10 left-2 change-block
  `,
  lngButtons: `
    bg-[blue] p-3
  `,
};

const Language = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.mName}>Язык</span>
        <span className={styles.name}>Ru</span>
        <span className={styles.arrow}>
          <IoIosArrowDown />
        </span>
        <div className={styles.lngChangeBlock}>
          <button className={styles.lngButtons}>RU</button>
          <button className={styles.lngButtons}>EN</button>
          <button className={styles.lngButtons}>CN</button>
        </div>
      </div>
    </div>
  );
};

export default Language;
