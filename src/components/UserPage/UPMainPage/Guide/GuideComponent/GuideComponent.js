import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const styles = {
  newsListContent: `
    w-[260px] h-max rounded-xl mx-3 bg-white
  `,
  text: `p-2 text-[0.875rem] font-light`,
  image: `w-[280px] h-[145px] bg-cover`,
  readButton: `flex flex-row items-center my-1 font-semibold hover:text-[#049CA6] transition duration-100`,
  readArrow: `flex self-center mx-1 mt-1 text-md`
}

const GuideComponent = ({ guide }) => {
  return (
    <div className={styles.newsListContent}>
    <img src={guide.image} className={styles.image} alt="default" />
    <div className={styles.text}>
      <p>{guide.description}</p>
      <button className={styles.readButton}>
        Читать
        <span className={styles.readArrow}><IoIosArrowForward /></span>
      </button>
    </div>
  </div>
  )
}

export default GuideComponent