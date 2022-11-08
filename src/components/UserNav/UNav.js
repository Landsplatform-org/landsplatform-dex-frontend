import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Language from "../LanguageChange/Language";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BsCoin } from "react-icons/bs";
import { MdOutlineSwapVerticalCircle } from "react-icons/md";

const styles = {
  wrapper: `
    w-max flex justify-center p-3 block 
    phone:self-center
    tablet:self-center
  `,
  container: `
    w-max flex flex-row
    phone:w-screen phone:flex-col phone:items-center
    tablet:w-screen tablet:flex-col tablet:items-center
  `,
  navItem: `
    flex flex-row items-center mx-5 text-[1rem] text-[#373C3D] font-normal cursor-pointer hover:text-[#049CA6] transition duration-100
    phone:w-screen phone:flex-row-reverse phone:justify-between phone:mx-0 phone:px-5 phone:text-[1.5rem] phone:my-3
    tablet:w-screen tablet:flex-row-reverse tablet:justify-between tablet:mx-0 tablet:px-5 tablet:text-[1.875rem] tablet:my-3
  `,
  activeNavItem: `
    text-[#049CA6]
  `,
  icon: `
    mr-2
    phone:mr-0
    tablet:mr-0
  `,
};

const UNav = () => {
  const [selectedPage, setSelectedPage] = useState("umain");

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <NavLink
          onClick={() => setSelectedPage("umain")}
          to="/landsplatform.dex/user-page"
          className={`
            ${styles.navItem}
            ${selectedPage === "umain" && styles.activeNavItem}
          `}
        >
          <span
            className={`
              ${styles.icon}
              ${selectedPage === "umain" && styles.activeNavItem}
            `}
          >
            <AiOutlineHome />
          </span>
          Главная
        </NavLink>
        <NavLink
          onClick={() => setSelectedPage("stacking")}
          to="/landsplatform.dex/user-page/stacking"
          className={`
            ${styles.navItem}
            ${selectedPage === "stacking" && styles.activeNavItem}
          `}
        >
          <span
            className={`
              ${styles.icon}
              ${selectedPage === "stacking" && styles.activeNavItem}
            `}
          >
            <BsCoin />
          </span>
          Стэкинг
        </NavLink>
        <NavLink
          onClick={() => setSelectedPage("swap")}
          to="/landsplatform.dex/user-page/swap"
          className={`
            ${styles.navItem}
            ${selectedPage === "swap" && styles.activeNavItem}
          `}
        >
          <span
            className={`
              ${styles.icon}
              ${selectedPage === "swap" && styles.activeNavItem}
            `}
          >
            <MdOutlineSwapVerticalCircle />
          </span>
          Обмен
        </NavLink>
        <NavLink
          onClick={() => setSelectedPage("projects")}
          to="/landsplatform.dex/user-page/projects"
          className={`
            ${styles.navItem}
            ${selectedPage === "projects" && styles.activeNavItem}
          `}
        >
          <span
            className={`
              ${styles.icon}
              ${selectedPage === "projects" && styles.activeNavItem}
            `}
          >
            <AiOutlineProject />
          </span>
          Проекты
        </NavLink>
        <Language />
      </div>
    </div>
  );
};

export default UNav;
