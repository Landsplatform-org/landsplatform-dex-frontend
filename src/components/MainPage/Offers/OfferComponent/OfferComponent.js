import React from "react";
import { HiOutlineArrowUp } from "react-icons/hi";

const styles = {
  offerField: `flex flex-col shadow shadow-md p-3 rounded-3xl mb-6`,
  offerMainInf: `
    flex flex-row mr-4
    phone:flex-col phone:items-center
  `,
  offerImageContainer: `flex flex-col`,
  offerImage: `
    rounded-2xl
  `,
  percentContainer: `
    flex flex-row items-center mt-4 text-[0.875rem] font-normal
    phone:justify-center phone:mb-4
  `,
  offerContent: `
    flex flex-col ml-4
    phone:ml-0 phone:items-center
  `,
  additionalInf: `
    flex flex-row justify-between items-center mt-6
    phone:flex-col
  `,
  getMoreBtn: `
    py-3 px-10 text-[1rem] font-semibold bg-[#eaeaea] rounded-full text-[#373c3d] hover:bg-[#049CA6] hover:text-white transition duration-100 cursor-pointer
    phone:mb-4
  `,
};

const OfferComponent = ({ offer }) => {
  return (
    <>
      <div className={styles.offerField}>
        <div className={styles.offerMainInf}>
          <div className={styles.offerImageContainer}>
            <img
              className={styles.offerImage}
              src={offer.image}
              width={180}
              height={180}
              alt="default"
            />
            <div className={styles.percentContainer}>
              <span className="text-[#039ca6]">
                <HiOutlineArrowUp />
              </span>
              <span className="text-[#049ca6] font-normal mr-2">110 (+8%)</span>{" "}
              | <span className="ml-2 font-normal">Выход 3.50 %</span>
            </div>
          </div>
          <div className={styles.offerContent}>
            <h1 className="text-[1.5rem] font-semibold">{offer.name}</h1>
            <p className="text-[0.875rem] font-normal">{offer.description}</p>
            <h3 className="text-[1rem] font-semibold mt-4">
              Площадь участка м
              <span className="text-[0.7rem] font-semibold align-top ">2</span>:
              <span className="text-[0.875rem] font-normal ml-2">
                {offer.square}
              </span>
            </h3>
            <h3 className="text-[1rem] font-semibold mt-2">
              Тип участка:{" "}
              <span className="text-[0.875rem] font-normal ml-2">
                {offer.type}
              </span>
            </h3>
            <h3 className="text-[1rem] font-semibold mt-2">
              Адрес:{" "}
              <span className="text-[0.875rem] font-normal ml-2">
                {offer.address}
              </span>
            </h3>
          </div>
        </div>
        <div className={styles.additionalInf}>
          <button type="button" className={styles.getMoreBtn}>
            Узнать больше
          </button>
          <p className="text-[1.5rem] font-semibold">
            {offer.price} <span className="font-normal">₽</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default OfferComponent;
