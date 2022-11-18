import React from "react";
import coins from "../../../assets/icons/coins.svg";
import deal from "../../../assets/icons/deal.svg";
import deposit from "../../../assets/icons/deposit.svg";
import clock from "../../../assets/icons/clock.svg";
import money from "../../../assets/icons/money.svg";
import russia from "../../../assets/icons/russia.svg";
import { useTranslation } from "react-i18next";

const styles = {
  wrapper: `w-screen flex justify-center items-center`,
  container: `
    w-[1280px]
    phone:w-[360px]
    tablet:w-[750px]
    laptop:w-[970px]
  `,
  opportunity: `
    h-max flex flex-col justify-center my-16
    phone:my-12
  `,
  blockchain: `
    h-max flex flex-col justify-center my-16
    phone:my-12  
  `,
  textRow: `
    flex flex-row mt-16
    phone:flex-col phone:self-center phone:mt-12
    tablet:justify-center tablet:flex-wrap
    laptop:justify-center laptop:flex-wrap
  `,
  text: `
    flex flex-row items-center text-[1rem] font-normal w-max mr-6 mb-4
    phone:mr-0
  `,
  icon: `mr-2`,
  title: `
    text-[2.75rem] font-semibold
    phone:text-[1.875rem] phone:text-center
    tablet:text-center
    laptop:text-center
  `,
  subtitle: `
    text-[1.5rem]
    phone:text-[1rem] phone:font-semibold
    tablet:font-semibold
  `,
  textContainer: `
    flex flex-col mr-6 text-[0.875rem] font-normal px-3
    phone:mr-0 phone:mt-4 phone:text-center phone:items-center
    tablet:mr-0 tablet:mt-4 tablet:text-center tablet:items-center
    laptop:mr-0 laptop:mt-4 laptop:text-center laptop:items-center
  `,
};

const Description = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.opportunity}>
          <h1 className={styles.title}>{t("mainDescription.platformFeatures")}</h1>
          <div className={styles.textRow}>
            <div className={styles.text}>
              <span className={styles.icon}>
                <img src={coins} width={40} height={40} alt="coins" />
              </span>
              <p>{t("mainDescription.feature1")}</p>
            </div>
            <div className={styles.text}>
              <span className={styles.icon}>
                <img src={deal} width={40} height={40} alt="deal" />
              </span>
              <p>{t("mainDescription.feature2")}</p>
            </div>
            <div className={styles.text}>
              <span className={styles.icon}>
                <img src={deposit} width={40} height={40} alt="deposit" />
              </span>
              <p>{t("mainDescription.feature3")}</p>
            </div>
          </div>
        </section>
        <section className={styles.blockchain}>
          <h1 className={styles.title}>{t("mainDescription.whyBCandLands")}</h1>
          <div className={styles.textRow}>
            <div className={styles.textContainer}>
              <div className={styles.text}>
                <span className={styles.icon}>
                  <img src={clock} width={40} height={40} alt="coins" />
                </span>
                <p className={styles.subtitle}>{t("mainDescription.reason1")}</p>
              </div>
              <p>
              {t("mainDescription.descR1")}
              </p>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.text}>
                <span className={styles.icon}>
                  <img src={money} width={40} height={40} alt="deal" />
                </span>
                <p className={styles.subtitle}>{t("mainDescription.reason2")}</p>
              </div>
              <p>
              {t("mainDescription.descR2")}
              </p>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.text}>
                <span className={styles.icon}>
                  <img src={russia} width={40} height={40} alt="deposit" />
                </span>
                <p className={styles.subtitle}>
                {t("mainDescription.reason3")}
                </p>
              </div>
              <p>
              {t("mainDescription.descR3")}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Description;
