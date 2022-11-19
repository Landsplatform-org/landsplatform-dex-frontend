import React from "react";
import Title from "../../components/UPTitle/Title";
import Guide from "../../components/Guide/Guide";
import BestOffers from "../../components/Offers/Offers";
import LastNews from "../../components/LastNews/LastNews";

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
