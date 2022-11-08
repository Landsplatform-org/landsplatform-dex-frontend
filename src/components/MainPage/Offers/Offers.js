import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import OfferComponent from "./OfferComponent/OfferComponent";
import offers from "./offers-config";


const styles = {
  wrapper: `w-screen flex justify-center items-center`,
  container: `
    w-[1280px]
    phone:w-[360px]
    tablet:w-[750px]
    laptop:w-[970px]
  `,
  offers: `h-max flex flex-col justify-center`,
  title: `
    flex flex-row justify-between items-center text-[2.75rem] font-semibold 
    phone:flex-col phone:justify-center phone:text-[1.875rem] phone:text-center
    tablet:flex-col
    laptop:flex-col
  `,
  watchAllBtn: `
    flex flex-row text-[1.2rem] font-normal rounded-full hover:bg-transparent hover:text-[#049ca6] transition duration-100 cursor-pointer
    phone:px-12 phone:my-4
    tablet:my-6
    laptop:my-6
  `,
  watchArrow: `flex self-center mx-1 mt-1 text-md`,
  offersContainer: `
    h-max flex flex-row flex-wrap justify-between items-center my-16
    phone:flex-col phone:items-center
    tablet:flex-col
    laptop:flex-col
  `,
};

const Offers = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.offers}>
          <div className={styles.title}>
            <h1>Предложения платформы</h1>
            <button type="button" className={styles.watchAllBtn}>Смотреть все<span className={styles.watchArrow}><IoIosArrowForward /></span></button>
          </div>
          <div className={styles.offersContainer}>
            {offers.map(offer => (
              <OfferComponent key={offer.id} offer={offer} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Offers;
