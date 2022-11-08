/* <button type='button' className={styles.body}>{userResult?.data.createUser?.txhash}</button> */
import React, { useEffect, useContext, memo } from "react";
import { useMutation } from "urql";
import userIcon from "../../assets/icons/wallet.svg";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const styles = {
  wrapper: `w-max flex flex-row justify-center items-center`,
  body: `
    mr-2 py-1 px-6 bg-[#049CA6] border-2 border-[#049CA6] rounded-full text-white font-semibold hover:bg-transparent hover:text-[#049ca6] transition duration-100
    phone:mr-0 phone:py-2 phone:px-8 phone:text-[1.2rem]
    tablet:mr-0 tablet:py-3 tablet:px-10 tablet:text-[1.5rem]
  `,
  container: `
    w-max flex flex-row items-center
    phone:w-screen phone:flex-col phone:items-center
    tablet:w-screen tablet:flex-col tablet:items-center
  `,
  icon: `
    block w-[25px] h-[25px] mt-2
    phone:hidden
    tablet:hidden
  `,
};

const WalletButton = memo(() => {
  const { txhash, connectWallet } = useContext(UserContext);
  
  let navigate = useNavigate();

  const CreateUser = `
    mutation Mutation($createUserInput: CreateUserInput!) {
      createUser(createUserInput: $createUserInput) {
        txhash
      }
    }
  `;

  const addUser = () => {
    newUser({
      variables: {
        txhash: txhash
      }
    }).then(({data}) => {
      console.log(data)
    })
  }

  const [newUser] = useMutation(CreateUser)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {txhash ? (
          <button type="button" className={styles.body}>
            {txhash?.substring(0, 7)}...{txhash?.substring(32, 42)}
          </button>
        ) : (
          <button
            type="button"
            className={styles.body}
            onClick={() => connectWallet().then(() => { navigate("/landsplatform.dex/user-page");})}
          >
            Подключить кошелек
          </button>
        )}
        <span className={styles.icon}>
          <img src={userIcon} alt="user" />
        </span>
      </div>
    </div>
  );
});

export default WalletButton;
