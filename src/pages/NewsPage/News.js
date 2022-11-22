import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ftxNews from "../../assets/images/news1.png";
import snoop from "../../assets/images/news2.png";
import btcNews from "../../assets/images/news3.png";
import Modal from "react-modal";
Modal.setAppElement(document.getElementById("root"));

const customstyle2 = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#e6e6e6",
    padding: 0,
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
      <div className="flex flex-col gap-10 items-center my-10 justify-center w-full">
        <div className="w-[850px] h-max bg-[#e6e6e6] rounded-[25px] border-2 border-[#ffffff] text-black ">
          <div className="flex flex-row gap-5 p-5">
            <img src={btcNews} alt="ftx" className="h-[190px] rounded-[15px]" />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold">новось</h1>
              <span className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam, dolorem laudantium dolorum qui numquam odit nobis
                quasi voluptatibus animi accusantium saepe reprehenderit
                possimus deserunt? Nulla dolore delectus enim eius facilis?
              </span>
            </div>
          </div>
          <button
            onClick={() => openModal()}
            className="font-thin p-2 rounded-full bg-[#e6e6e6] border-2 border-[#049CA6] text-xs right-20 m-2 float-right hover:bg-[#049CA6] hover:text-[#e6e6e6] transition duration-150"
          >
            Читать полностью
          </button>
        </div>
        <div className="w-[850px] h-max bg-[#e6e6e6] rounded-[25px] border-2 border-[#ffffff] text-black">
          <div className="flex flex-row gap-5 p-5">
            <img src={ftxNews} alt="ftx" className="h-[190px] rounded-[15px]" />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold">новось</h1>
              <span className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam, dolorem laudantium dolorum qui numquam odit nobis
                quasi voluptatibus animi accusantium saepe reprehenderit
                possimus deserunt? Nulla dolore delectus enim eius facilis?
              </span>
            </div>
          </div>
          <button onClick={() => openModal()} 
          className=" font-thin p-2 rounded-full bg-[#e6e6e6] border-2 border-[#049CA6] text-xs right-20 m-2 float-right hover:bg-[#049CA6] hover:text-[#e6e6e6] transition duration-150">
            Читать полностью
          </button>
        </div>
        <div className="w-[850px] h-max bg-[#e6e6e6] rounded-[25px] border-2 border-[#ffffff] text-black">
          <div className="flex flex-row gap-5 p-5">
            <img src={snoop} alt="ftx" className="h-[190px] rounded-[15px]" />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold">новось</h1>
              <span className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam, dolorem laudantium dolorum qui numquam odit nobis
                quasi voluptatibus animi accusantium saepe reprehenderit
                possimus deserunt? Nulla dolore delectus enim eius facilis?
              </span>
            </div>
          </div>
          <button onClick={() => openModal()}
           className=" font-thin p-2 rounded-full bg-[#e6e6e6] border-2 border-[#049CA6] text-xs right-20 m-2 float-right hover:bg-[#049CA6] hover:text-[#e6e6e6] transition duration-150">
            Читать полностью
          </button>
        </div>
      </div>

      <Modal isOpen={!!isShowing} style={customstyle2}>
        <div className=" flex flex-col justify-center bg-[#e6e6e6] w-[900px] h-full">
          <h1 className="text-xl font-bold">новось</h1>
          <img src={snoop} alt="ftx" className="w-[200px] rounded-[15px]" />
          <span className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laboriosam, dolorem laudantium dolorum qui numquam odit nobis quasi
            voluptatibus animi accusantium saepe reprehenderit possimus
            deserunt? Nulla dolore delectus enim eius facilis?
          </span>
          <button onClick={() => closeModal()} className="bg-[green]">
            Close modal
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default News;
