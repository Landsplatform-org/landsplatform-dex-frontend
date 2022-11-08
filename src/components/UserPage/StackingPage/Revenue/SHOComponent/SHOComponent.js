import React, { useState } from 'react';

const styles = {
  wrapper: `w-full h-max flex flex-col p-2`,
  container: `flex flex-row flex-wrap mt-8`,
  title: `font-semibold text-lg`,
  content: `flex flex-col mr-10 mb-6`,
  subtitle: `text-[0.9rem]`,
  percent: `font-semibold text-[#049ca6]`,
  hr: `w-full h-[2px] bg-[#C5C5C5] mt-2`
}

const SHOComponent = () => {
  const [SHO, setSHO] = useState({
    lands: 0,
    power: 0,
    isActive: false,
    separation: 0,
    winChance: 0,
    shoRevenue: 0
  })
  
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Расчетная доходность SHO</h1>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.subtitle}>Общая мощность LANDS:</span>
          <span className={styles.percent}>{SHO.power}</span>
          <div className={styles.hr}></div>
        </div>
        <div className={styles.content}>
          <span className={styles.subtitle}>Уровень:</span>
          <span className={styles.percent}>{SHO.isActive ? (<span>Активен</span>) : (<span>Не активен</span>)}</span>
          <div className={styles.hr}></div>
        </div>
        <div className={styles.content}>
          <span className={styles.subtitle}>Максимально рапределение:</span>
          <span className={styles.percent}>{SHO.separation}</span>
          <div className={styles.hr}></div>
        </div>
        <div className={styles.content}>
          <span className={styles.subtitle}>Расчетный шанс на победу:</span>
          <span className={styles.percent}>{SHO.winChance}%</span>
          <div className={styles.hr}></div>
        </div>
        <div className={styles.content}>
          <span className={styles.subtitle}>Расчетная доходность SHO  в годовом исчеслении::</span>
          <span className={styles.percent}>{SHO.shoRevenue}%</span>
          <div className={styles.hr}></div>
        </div>
      </div>
    </div>
  )
}

export default SHOComponent