import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import ftxNews from "../../assets/images/news1.png";
import snoop from "../../assets/images/news2.png";
import btcNews from "../../assets/images/news3.png";
import Modal from "react-modal";
import NewsModal from "../../components/NewsModal/NewsModal";

import { ImCross } from "react-icons/im";
import { newsAll } from "./newsAll";
Modal.setAppElement(document.getElementById("root"));

const customstyle2 = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#e6e6e6",
    paddingTop: 75,
    paddingBottom: 75,
    rounded: 30,
    border: "none",
    zIndex: 100,
  },
};

const News = () => {
  const { t } = useTranslation();
  const [isShowing, setIsShowing] = useState(false);
  const openModal = () => {
    setIsShowing(true);
  };
  const closeModal = () => {
    setIsShowing(false);
  };

  return (
    <div className="mt-[64px] flex flex-col bg-[#ffffff] w-[900px] h-full">
      <h1 className="items-start px-[80px] pt-10 text-2xl font-extrabold">
        {t("news.theNews")}
      </h1>
      <div className="flex flex-col gap-10 items-center my-1 justify-center w-full">
        {newsAll.map((items) => (
          <div className="w-[850px] h-[300px] bg-[#e6e6e6] rounded-[25px] border-2 border-[#ffffff] text-black ">
            <div className="flex flex-row gap-5 p-5">
              <div className="w-[30%] flex flex-col items-center justify-between">
                <img
                  src={items.image}
                  alt="ftx"
                  className="h-[150px]  rounded-[15px]"
                />
                <button
                  onClick={() => (
                    <NewsModal
                      title={items.title}
                      image={items.image}
                      description={items.description}
                    />
                  )}
                  className="font-thin w-full h-10 mt-5 rounded-full bg-[#e6e6e6] border-2 border-[#049CA6] text-xs right-20 m-2  hover:bg-[#049CA6] hover:text-[#e6e6e6] transition duration-150"
                >
                  Читать полностью
                </button>
              </div>
              <div className="flex flex-col gap-3 w-[70%]">
                <h1 className="text-xl font-bold">{items.title}</h1>
                <span className="h-[195px] overflow-hidden">
                  {items.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
