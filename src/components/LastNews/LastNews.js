import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { newsList } from "../../pages/News/newsList";
import { newsList1 } from "../../pages/News/newsAll";
import LastNewsComponent from "../LastNewsComponent/LastNewsComponent";
import "./styles.css";
import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  
  const [newsPage, setNewsPage] = useState(false);


  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.lastNews}>
          <div className={styles.title}>
            <h1>{t("lastNews.latestNews")}</h1>
            
            <NavLink  onClick={() => setNewsPage(true)} to="/landsplatform-dex-frontend/user-page/news"  type="button" className={styles.watchAllBtn}>
            {t("lastNews.viewAllNews")}
              <span className={styles.watchArrow}>
                <IoIosArrowForward />
              </span>
            </NavLink>
            
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
