import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../src/lng/en.json";
import ru from "../src/lng/ru.json";
import cn from "../src/lng/cn.json";

i18next.use(initReactI18next).init({
	resources: {
		en: {
			translation: en,
		},
		ru: {
			translation: ru,
		},
    cn: {
			translation: cn,
		},
	},
	lng: localStorage.getItem("lng") || "ru",
});

export default i18next;