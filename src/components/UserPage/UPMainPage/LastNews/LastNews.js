import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { newsList } from "../News/newsList";
import LastNewsComponent from "./LastNewsComponent/LastNewsComponent";
import "./styles.css"

const styles = {
  wrapper: `w-screen flex justify-center items-center my-24`,
  container: `
    w-[1280px]
    phone:w-[360px]
    tablet:w-[750px]
    laptop:w-[970px]
  `,
  lastNews: `h-max flex flex-col justify-center`,
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
  lastNewsContainer: `
    h-max flex flex-row flex-wrap justify-between my-16
    phone:flex-col phone:items-center
    tablet:flex-col
    laptop:flex-col
  `,
};

const LastNews = () => {
  const [isRender, setIsRender] = useState(false);
 
  useEffect(() => {
    if(newsList.length > 0) setIsRender(true)
  }, [isRender])
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.lastNews}>
          <div className={styles.title}>
            <h1>Последние новости</h1>
            <button type="button" className={styles.watchAllBtn}>
              Смотреть все
              <span className={styles.watchArrow}>
                <IoIosArrowForward />
              </span>
            </button>
          </div>
          {isRender &&
            <div className={styles.lastNewsContainer}>
              {newsList?.map((news) => (
                <LastNewsComponent key={news.id} news={news} />
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default LastNews;
