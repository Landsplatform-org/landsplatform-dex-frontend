import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-modal";
import { newsAll } from "./newsAll";
import { ImCross } from "react-icons/im";

Modal.setAppElement(document.getElementById("root"));

const customstyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    padding: 0,
    border: "none",
    zIndex: 100,
  },
  overlay: {
    overflow: "hidden",
    backgroundColor: "rgba(10, 11, 13, 0.3)",
    backdropFilter: "blur(2px)",
    zIndex: 100,
  },
};

const News = () => {
  const { t } = useTranslation();

  const [news, setNews] = useState({
    open: false,
    title: "",
    image: "",
    description: "",
  });

  return (
    <div className="mt-[64px] flex flex-col bg-[#ffffff] w-[900px] h-full phone:w-[300px] tablet:items-center ">
      <h1 className="items-start px-[80px] py-10 text-2xl font-extrabold">
        {t("news.theNews")}
      </h1>
      <div className="flex flex-col gap-5 items-center my-1 justify-center w-full phone:w-[300px] ">
        {newsAll.map((items) => (
          <div
            key={items.key}
            className="w-[850px] h-[300px] bg-[#e6e6e6] rounded-[25px] border-2 border-[#ffffff] text-black phone:w-[373px] tablet:w-[750px]"
          >
            <div className="flex flex-row gap-5 p-5">
              <div className="w-[30%] flex flex-col items-center justify-between phone:justify-start tablet:justify-start">
                <img
                  src={items.image}
                  alt="ftx"
                  className="h-[150px]  rounded-[15px] phone:w-[120px] phone:h-[60px] tablet:w-[210px] tablet:h-[130px]"
                />
                <button
                  onClick={() =>
                    setNews({
                      open: true,
                      title: items.title,
                      image: items.image,
                      description: items.description,
                    })
                  }
                  className="font-thin  w-full h-10 mt-5 rounded-full bg-[#e6e6e6] border-2 border-[#049CA6] text-xs right-20 m-2  hover:bg-[#049CA6] hover:text-[#e6e6e6] transition duration-150"
                >
                  Читать полностью
                </button>
              </div>
              <div className="flex flex-col gap-3 w-[70%]">
                <h1 className="text-xl font-bold">{items.title}</h1>
                <p className="h-[185px] phone:h-[140px] text-sm overflow-hidden">
                  {items.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={!!news.open} style={customstyles}>
        <div className="flex items-center justify-center p-12 w-[1000px] h-max bg-[#eaeaea] rounded-3xl phone:w-[373px] tablet:w-[750px]">
          <div className="flex flex-col w-[800px] gap-10 phone:w-[360px] tablet:w-[670px]  " >
            <div className="flex flex-row justify-between ">
              <h1 className="font-bold text-xl">{news.title}</h1>
              <button
                className="rotate-0 hover:rotate-90 transition-all duration-100 mt-[-50px] mr-[-65px] phone:mt-[-120px] phone:mr-[10px] tablet:mt-[-65px] tablet:mr-[-20px]"
                onClick={() =>
                  setNews({
                    open: false,
                    title: "",
                    description: "",
                  })
                }
              >
                <ImCross />
              </button>
            </div>
            <div className="w-full flex flex-col items-center gap-5  ">
              <img className="rounded-3xl" width={400} height={300} src={news.image} alt="jopa" />
              <p className="w-[800px] h-[200px] phone:w-[350px] phone:h-[330px] phone:overflow-x-scroll tablet:w-[700px] tablet:h-[300px] tablet:overflow-x-scroll">{news.description}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default News;
