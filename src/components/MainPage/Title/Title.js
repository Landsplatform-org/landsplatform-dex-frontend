import React from "react";
import "./styles.css";

const styles = {
  wrapper: `w-screen flex justify-center items-center title-background`,
  container: `
    w-[1280px]
    phone:w-[360px]
    tablet:w-[750px]
    laptop:w-[970px]
  `,
  titlePage: `
    flex flex-col justify-center h-screen
    phone:items-center
    tablet:items-center
    laptop:items-center
  `,
  titleText: `
    text-[3.25rem] text-[#373c3d] font-semibold mb-8
    phone:text-[1.875rem] phone:text-center
  `,
  content: `
    w-[590px]
    phone:w-[360px] phone:flex phone:flex-col phone:justify-center phone:items-center
  `,
  descrition: `
    text-[1rem] text-[#373c3d] font-normal mt-8
    phone:text-[0.875rem] phone:text-center
  `,
  btnContainer: `
    w-max flex flex-row mt-8
  `,
  buyBtn: `
    mr-2 py-3 px-12 bg-[#049CA6] border-2 border-[#049CA6] rounded-full text-white font-semibold hover:bg-transparent hover:text-[#049ca6] transition duration-100
    phone:mx-2 phone:px-8
  `,
  howToBtn: `
    py-3 px-10 text-[1rem] backdrop-blur-xl font-semibold bg-transparent border-2 border-transparent rounded-full text-[#373c3d] hover:text-[#049CA6] transition duration-100 cursor-pointer  
    phone:mx-2 phone:px-8
  `,
};

const Title = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.titlePage}>
          <div className={styles.content}>
            <h1 className={styles.titleText}>
              Пользовательская платформа цифровых сервисов
            </h1>
            <p className={styles.descrition}>
              Для оцифровки и реализации активов, проектов, размещение,
              привлечения инвестиций, оформление и получение займов.
            </p>
            <div className={styles.btnContainer}>
              <button type="button" className={styles.buyBtn}>Купить LANDS</button>
              <button type="button" className={styles.howToBtn}>Как начать?</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Title;
