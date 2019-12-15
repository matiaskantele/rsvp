import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import locale from "./locale.json";

const detection = {
  // order and from where user language should be detected
  order: ["cookie", "localStorage"],

  // keys or params to lookup language from
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  // cookieMinutes: 10,
  // cookieDomain: 'myDomain',

  // only detect languages that are in the whitelist
  checkWhitelist: true,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // detech user language
  .init({
    resources: locale,
    lng: "en",
    fallbackLng: "en",
    detection: detection,
    whitelist: ["en", "fi", "bg"],

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
