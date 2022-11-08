import React, { useState, useContext } from "react";
import Nav from "../NavBar/Nav";
import UNav from "../UserNav/UNav";
import WalletButton from "../WalletButton/WalletButton";
import landsLogo from "../../assets/icons/landsLogo.svg";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./styles.css";

const styles = {
  wrapper: `
    w-screen fixed p-2 bg-white flex justify-center items-center z-[10]
    phone:px-3
    tablet:px-5
  `,
  container: `
    w-[1280px] flex flex-row justify-between items-center bg-white
    phone:w-screen phone:px-2
    tablet:w-screen phone:px-2
    laptop:w-[970px]
  `,
  image: `
    w-[156px] h-[40px]
    phone:w-[146px] phone:h-[35px]
  `,
  desktop: `w-full block tablet:hidden phone:hidden flex flex-row justify-between items-center ml-10`,
  mobile: `
    hidden phone:block flex flex-row justify-between items-center
    tablet:block
  `,
  mNavContainer: `
    phone:absolute phone:top-3 phone:left-0 phone:w-screen phone:h-[1500px] phone:flex phone:flex-col phone:items-center phone:my-10 bg-white
    tablet:absolute top-3 left-0 tablet:w-screen tablet:h-[1500px] tablet:flex tablet:flex-col tablet:my-10 bg-white
  `,
};

const Header = () => {
  const [isShowNav, setShowNav] = useState(true);
  const { isAuth } = useContext(UserContext);

  const checkboxHandler = () => {
    setShowNav(!isShowNav);
  };

  // useEffect(() => {
  //   if (isAuth) {
  //     setAuth(true); 
  //     console.log("true");
  //   }
  //   else {
  //     setAuth(false)
  //     console.log(false);
  //   }
  // }, [isAuth, auth]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {isAuth ? (
        <NavLink to="/landsplatform.dex/user-page">
          <img className={styles.image} src={landsLogo} alt="landsLogo" />
        </NavLink>
        ) : (
        <NavLink to="/landsplatform.dex/">
          <img className={styles.image} src={landsLogo} alt="landsLogo" />
        </NavLink>
        )}
        <div className={styles.desktop}>
          {isAuth ? (<UNav />) : (<Nav />) }
          <WalletButton />
        </div>
        <div className={styles.mobile}>
          <div>
            <input
              type="checkbox"
              id="checkbox-t"
              name="checkbox"
              checked={isShowNav}
              onChange={checkboxHandler}
            />
            <label htmlFor="checkbox-t"></label>
          </div>
          {!isShowNav && (
            <div className={styles.mNavContainer}>
              {isAuth ? (<UNav />) : (<Nav />)}
              <WalletButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
