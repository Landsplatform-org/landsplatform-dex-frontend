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
// setSHO был удален - Line 14:15:  'setSHO' is assigned a value but never used  no-unused-vars
const SHOComponent = () => {
  const [SHO] = useState({
    lands: 0,
    power: 0,
    isActive: false,
    separation: 0,
    winChance: 0,
    shoRevenue: 0
  })
  const { t, i18n } = useTranslation();
  
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{t("shoComponent.estimatedProfitability")}</h1>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.subtitle}>{t("shoComponent.totalPower")}</span>
          <span className={styles.percent}>{SHO.power}</span>
          <div className={styles.hr}></div>
        </div>
        <div className={styles.content}>
          <span className={styles.subtitle}>{t("shoComponent.lvl")}</span>
          <span className={styles.percent}>{SHO.isActive ? (<span>{t("shoComponent.scActive")}</span>) : (<span>{t("shoComponent.scNotActive")}</span>)}</span>
          <div className={styles.hr}></div>
        </div>
        <div className={styles.content}>
          <span className={styles.subtitle}>{t("shoComponent.maxDistribution")}</span>
          <span className={styles.percent}>{SHO.separation}</span>
          <div className={styles.hr}></div>
        </div>
        <div className={styles.content}>
          <span className={styles.subtitle}>{t("shoComponent.winChance")}</span>
          <span className={styles.percent}>{SHO.winChance}%</span>
          <div className={styles.hr}></div>
        </div>
        <div className={styles.content}>
          <span className={styles.subtitle}>{t("shoComponent.annualReturn")}</span>
          <span className={styles.percent}>{SHO.shoRevenue}%</span>
          <div className={styles.hr}></div>
        </div>
      </div>
    </div>
  )
}

export default SHOComponent