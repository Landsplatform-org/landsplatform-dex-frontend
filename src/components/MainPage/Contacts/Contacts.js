import React from "react";
import "./styles.css";

const styles = {
  wrapper: `w-screen h-[45vh] flex justify-center items-center contact-background`,
  container: `
    w-[1280px]
    phone:w-[360px]
    tablet:w-[750px]
    laptop:w-[970px]

  `,
  contactPage: `
    flex flex-col justify-center h-screen
    phone:items-center
    tablet:items-center
    laptop:items-center
  `,
  content: `
    w-[590px]
    phone:w-[360px] phone:flex phone:flex-col phone:items-center
    tablet:flex tablet:flex-col tablet:items-center
  `,
  titleText: `
    text-[2.75rem] text-[#373c3d] font-semibold my-5
    phone:text-[1.875rem] phone:text-center
    tablet:text-center
  `,
  contactBtn: `
    py-3 px-24 bg-[#049CA6] border-2 border-[#049CA6] rounded-full text-white font-semibold hover:bg-transparent hover:text-[#049ca6] transition duration-100
    phone:px-18
  `,
};

const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.contactPage}>
          <div className={styles.content}>
            <h1 className={styles.titleText}>Все еще есть вопросы или хотите связаться?</h1>
            <button type="button" className={styles.contactBtn}>Связаться</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacts;
