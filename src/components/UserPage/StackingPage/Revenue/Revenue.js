import React from "react";
import CapitalComponent from "./CapitalComponent/CapitalComponent";
import ShoComponent from "./SHOComponent/SHOComponent";

const styles = {
  wrapper: `
    w-[800px] flex flex-col items-center justify-center mb-36
  `,
  container: `
    w-full
    phone:w-[360px]
    tablet:w-[750px]
    laptop:w-[970px]
  `,
  content: `
    bg-[#eaeaea] border border-[#eeeeee] rounded-3xl p-4 my-5
    phone:w-full phone:m-2
  `,
};

const Revenue = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <CapitalComponent />
          <ShoComponent />
        </div>
      </div>
    </div>
  );
};

export default Revenue;
