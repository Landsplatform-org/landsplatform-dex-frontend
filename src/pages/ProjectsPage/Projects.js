import React from "react";
import { useTranslation } from "react-i18next";
const styles = {
  wrapper: `flex flex-row w-screen h-screen`,
  container: `w-[1280px] text-black`,
};

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{t("projects.proj")}</div>
    </div>
  );
};

export default Projects;
