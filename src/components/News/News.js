import React from 'react'
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();
  return (
    <div>{t("news.theNews")}</div>
  )
}

export default News