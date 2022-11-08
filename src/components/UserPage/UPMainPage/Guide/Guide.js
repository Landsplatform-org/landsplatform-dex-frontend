import React, { useContext, useRef } from "react";
import { guideList } from "./guideList";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { SliderProvider } from "../../../../context/SliderContext";
import { SliderContext } from "../../../../context/UserContext";
import GuideComponent from "./GuideComponent/GuideComponent";

import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';


const styles = {
  wrapper: `w-full h-max flex flex-col justify-start items-center mb-24 overflow-hidden`,
  container: `
    w-[1280px]
    phone:w-[360px]
    tablet:w-[750px]
    laptop:w-[970px]
  `,
  newsListContainer: `flex flex-row justify-center items-center  `,
  arrowButton: `p-2 rounded-full bg-white shadow shadow-lg text-2xl text-[#049CA6]`,
};

const Guide = () => {
  //const {} = useContext(SliderContext);

  return (
    <SliderProvider>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* <div className={styles.newsListContainer}> */}
            {/* <button className={styles.arrowButton}>
              <BiLeftArrowAlt />
            </button> */}
            <Carousel
              fullHeightHover={true}
              animation={"slide"} 
              duration={200}
              autoPlay={true}
            >
              {guideList?.map((guide) => (
                <GuideComponent key={guide.id} guide={guide} />
              ))}
            </Carousel>
            {/* <button className={styles.arrowButton}>
              <BiRightArrowAlt />
            </button> */}
          {/* </div> */}
        </div>
      </div>
    </SliderProvider>
  );
};

export default Guide;
