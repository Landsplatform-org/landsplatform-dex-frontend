import React from "react";
import Title from "../../components/Title/Title";
import Description from "../../components/Description/Description";
import Offers from "../../components/Offers/Offers";
import Contacts from "../../components/Contacts/Contacts";

const styles = {
  wrapper: `flex flex-col`,
};

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Title />
      <Description />
      <Offers />
      <Contacts />
    </div>
  );
};

export default Main;
