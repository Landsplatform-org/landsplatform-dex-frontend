import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

const styles = {
  wrapper: `w-full h-max flex flex-col p-2`,
  container: `flex flex-row flex-wrap mt-8`,
  title: `font-semibold text-lg`,
  content: `flex flex-col mr-10 mb-6`,
  subtitle: `text-[0.9rem]`,
  percent: `font-semibold text-[#049ca6]`,
  hr: `w-full h-[2px] bg-[#C5C5C5] mt-2`
}

const CapitalComponent = () => {
  const [percent, setPercent] = useState(0);
  const [lands, setLands] = useState(0);
  const { t, i18n } = useTranslation();
  
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{t("capitalComponent.assumedIncome")}</h1>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.subtitle}>{t("capitalComponent.interestRate")}</span>
          <span className={styles.percent}>{percent}%</span>
          <div className={styles.hr}></div>
        </div>
        <div className={styles.content}>
          <span className={styles.subtitle}>{t("capitalComponent.remuneration")}</span>
          <span className={styles.percent}>{lands} LANDS</span>
          <div className={styles.hr}></div>
        </div>
      </div>
    </div>
  )
}

export default CapitalComponent