import React from 'react'
import { useTranslation } from "react-i18next";

const News = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>{t("news.theNews")}</div>
  )
}

export default News