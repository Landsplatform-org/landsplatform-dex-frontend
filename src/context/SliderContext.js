import React, { useState, useEffect, createContext, useCallback } from "react";
import { guideList } from "../components/UserPage/UPMainPage/Guide/guideList";

export const SliderContext = createContext();

export const SliderProvider = ({
  children,
  width,
  height,
  autoPlay,
  autoPlayTime,
}) => {
  const [items, setItems] = useState([{}]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const news = guideList;
      setItems(news);
    };
    loadData();
  }, []);

  const changeSlide = useCallback(
    (direction = 1) => {
      let slideNumber = 0;

      if (slide + direction < 0) {
        slideNumber = items.length - 1;
      } else {
        slideNumber = (slide + direction) % items.length;
      }

      setSlide(slideNumber);
    },
    [slide, items.length]
  );

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide, autoPlay, autoPlayTime, changeSlide]);

  return (
    <SliderContext.Provider
      value={{
        items,
        slide,
        touchPosition,
        goToSlide,
        handleTouchMove,
        handleTouchStart,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};
