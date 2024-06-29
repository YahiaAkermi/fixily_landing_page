import i18n from "i18next";
import { Translation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationFR from "../public/translations/fr.json";
import translationAR from "../public/translations/ar.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      fr: {
        translation: translationFR,
      },
      ar: {
        translation: translationAR,
      },
    },
  });

export default i18n;
