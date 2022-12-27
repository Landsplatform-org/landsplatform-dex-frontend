import React, { useState, useContext } from "react";
import Nav from "../NavBar/Nav";
import UNav from "../UserNav/UNav";
import WalletButton from "../WalletButton/WalletButton";
import landsLogo from "../../assets/icons/landsLogo.svg";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./styles.css";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";

Modal.setAppElement(document.getElementById("root"));


const styles = {
  wrapper: `
    w-screen fixed p-2 bg-white flex justify-center items-center z-[100]
    phone:px-3
    tablet:px-5
  `,
  container: `
    w-[1280px] flex flex-row justify-between items-center
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
  authButton: `h-max w-[200px] bg-blue-500 text-white text-center py-[6px] px-[4px]  rounded-full font-bold shadow-2xl`,
};

const customstyles = {
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
    overflow: "hidden",
    backgroundColor: "rgba(10, 11, 13, 0.3)",
    backdropFilter: "blur(2px)",
    zIndex: 100,
  },
};



const Header = () => {
  const [isShowNav, setShowNav] = useState(true);
  const { isAuth } = useContext(UserContext);
  const [auth, setAuth] = useState({
      open: false,
    });

  const checkboxHandler = () => {
    setShowNav(!isShowNav);
  };



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
          {isAuth ? <UNav /> : <Nav />}
          <WalletButton />
        </div>
        <button className={styles.authButton} onClick={() =>
                    setAuth({
                      open: true,
                    })
                  }>Authorize as user</button>


<Modal isOpen={!!auth.open} style={customstyles}>
        <div className="flex items-center justify-center p-12 w-[500px] h-max bg-[#eaeaea] rounded-3xl phone:w-[373px] tablet:w-[750px]">
          <div className="flex flex-col w-[300px] gap-10 phone:w-[360px] tablet:w-[670px]  " >
            <div className="flex flex-row justify-between text-center ">
              
              <h1 className="mx-3 font-bold text-xl">Пожалуйста, авторизуйтесь</h1>
              <button
                className="rotate-0 hover:rotate-90 transition-all duration-100 mt-[-50px] mr-[-65px] phone:mt-[-120px] phone:mr-[10px] tablet:mt-[-65px] tablet:mr-[-20px]"
                onClick={() =>
                  setAuth({
                    open: false,
                  })
                }
              >
                <ImCross />
              </button>
            </div>
            <div className="w-full flex flex-row justify-center gap-5  ">
              <div className="w-[400px] h-[200px]  phone:w-[350px] phone:h-[330px] phone:overflow-x-scroll tablet:w-[700px] tablet:h-[300px] tablet:overflow-x-scroll">
                <form className="flex flex-col  justify-center">
                  <input placeholder="Login" className="items-center px-6 py-2  rounded-full shadow-2xl focus:outline-none"></input>
                  <input placeholder="Password" type="password" className="items-center px-6 py-2 my-5 rounded-full shadow-2xl focus:outline-none"></input>
                  <button className="bg-blue-500 py-2 px-5 w-max h-max mx-36 rounded-full shadow-2xl focus:outline-none ">Submit</button>
                </form>
                </div>
            </div>
          </div>
        </div>
      </Modal>





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
              {isAuth ? <UNav /> : <Nav />}
              <WalletButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
