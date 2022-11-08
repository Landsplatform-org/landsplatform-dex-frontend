import React from "react";

const styles = {
  wrapper: `flex flex-row w-screen h-screen`,
  container: `w-[1280px] text-black`,
};

const Projects = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>Projects</div>
    </div>
  );
};

export default Projects;
