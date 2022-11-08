import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Language from "../LanguageChange/Language";
import { AiOutlineHome, AiOutlineContacts } from "react-icons/ai";

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

const Nav = () => {
  const [selectedPage, setSelectedPage] = useState("main");

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <NavLink
          onClick={() => setSelectedPage("main")}
          to="/landsplatform.dex/"
          className={`
            ${styles.navItem}
            ${selectedPage === "main" && styles.activeNavItem}
          `}
        >
          <span
            className={`
              ${styles.icon}
              ${selectedPage === "main" && styles.activeNavItem}
            `}
          >
            <AiOutlineHome />
          </span>
          Главная
        </NavLink>
        <NavLink
          onClick={() => setSelectedPage("contacts")}
          to="/landsplatform.dex/contacts"
          className={`
            ${styles.navItem}
            ${selectedPage === "contacts" && styles.activeNavItem}
          `}
        >
          <span
            className={`
              ${styles.icon}
              ${selectedPage === "contacts" && styles.activeNavItem}
            `}
          >
            <AiOutlineContacts />
          </span>
          Контакты
        </NavLink>
        <Language />
      </div>
    </div>
  );
};

export default Nav;
