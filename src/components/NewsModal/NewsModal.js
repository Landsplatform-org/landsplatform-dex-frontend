import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import React from "react";
const NewsModal = ({title, image, description}) => {
    return(
  <div className="bg-[black] opacity-[0.5] flex items-center justify-center w-screen h-screen absolutek-">
    <div className=" flex flex-col justify-center bg-[#e6e6e6] w-[900px] h-full items-center py-[50px] px-10 ">
      <div className="flex flex-row-reverse justify-between w-full">
        <Link
        to="/landsplatform-dex-frontend/user-page/news"
          
          className="h-4 w-4 flex flex-row   hover:rotate-90 transition-all duration-200"
        >
          <ImCross />
        </Link>

        <h1 className="text-xl font-bold ">{title}</h1>
      </div>
      <img src={image} alt="ftx" className="w-[200px] rounded-[15px]" />

      <span className="">
        {description}
      </span>
    </div>
  </div>);
};
export default NewsModal;
