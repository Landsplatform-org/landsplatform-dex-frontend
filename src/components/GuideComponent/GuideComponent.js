import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

const styles = {
  newsListContent: `w-full h-max rounded-xl bg-white flex flex-col items-center justify-center overflow-hidden`,
  text: `absolute w-[400px] left-[100px] p-8 text-[0.875rem] font-bold bg-white rounded-2xl`,
  image: `relative w-full h-[500px] bg-auto bg-no-repeat bg-center blur-sm overflow-hidden`,
  readButton: `flex flex-row items-center my-1 font-semibold hover:text-[#049CA6] transition duration-100`,
  readArrow: `flex self-center mx-1 mt-1 text-md`,
};

const GuideComponent = ({ guide }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.newsListContent}>
      <img src={guide.image} className={styles.image} alt="default" />
      <div className={styles.text}>
        <p>{guide.description}</p>
        <button className={styles.readButton}>
          {t("guideComponent.read")}
          <span className={styles.readArrow}>
            <IoIosArrowForward />
          </span>
        </button>
      </div>
    </div>
  );
};

export default GuideComponent;
