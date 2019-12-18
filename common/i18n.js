import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import locale from "./locale.json";

const options = {
  // order and from where user language should be detected
  order: ["localStorage", "cookie"],

  // keys or params to lookup language from
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  checkWhitelist: true,
};

i18n
  .use(LanguageDetector) // detech user language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: locale,
    fallbackLng: "en",
    whitelist: ["en", "fi", "bg"],
    detection: options,
  });

export default i18n;
