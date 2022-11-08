import React, { lazy } from "react";

const Title = lazy(() => import("./Title/Title"));
const Description = lazy(() => import("./Description/Description"));
const Offers = lazy(() => import("./Offers/Offers"));
const Contacts = lazy(() => import("./Contacts/Contacts"));

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
