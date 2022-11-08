import React from "react";
import Title from "./Title/Title";
import Guide from "./Guide/Guide";
import BestOffers from "../../MainPage/Offers/Offers";
import LastNews from "./LastNews/LastNews";

const styles = {
  wrapper: `flex flex-col`,
};

const UPMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Title />
        <Guide />
        <BestOffers />
        <LastNews />
      </div>
    </div>
  );
};

export default UPMain;
