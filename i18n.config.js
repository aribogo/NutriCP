import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, pt } from "./translations";

 //array with all supported languages
const resources = {
  en: {
    translation: en,
  },
  pt: {
    translation: pt,
  }
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  //language to use if translations in user language are not available
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;