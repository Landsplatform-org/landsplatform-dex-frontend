import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./styles.css";

const styles = {
  wrapper: `
    w-min flex flex-row justify-center items-center text-[#373C3D] font-normal hover:text-[#049CA6] transition duration-100 content
    phone:w-screen phone:justify-between phone:px-5 phone:mb-5 phone:mt-3
    tablet:w-screen tablet:justify-between tablet:px-5 tablet:mb-5 tablet:mt-3
  `,
  name: `
    block mr-1
    phone:hidden
    tablet:hidden
  `,
  mName:`
   hidden phone:hover:text-[#049CA6] phone:transition phone:duration-100
   phone:w-max phone:flex phone:flex-row phone:items-center phone:block phone:text-[1.5rem]
   tablet:w-max tablet:flex tablet:flex-row tablet:items-center tablet:block tablet:text-[1.875rem]
  `,
  arrow: `
    mt-1 text-sm arrow
    phone:text-xl
    tablet:text-xl
  `,
};

const Language = () => {
  const [isShowLanguages, setShowLanguages] = useState(true);

  const checkboxHandler = () => {
    setShowLanguages(!isShowLanguages);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.mName}>Язык</span>
      <span className={styles.name}>Ru</span>
      <span className={styles.arrow}><IoIosArrowDown /></span>
    </div>
  );
};

export default Language;
