import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "/info": "Info",
      "/rsvp": "RSVP",
      "/": "V❤️M",
      couple: "Viktoria & Matias",
      inviteIntro: "We're getting married!",
      pleaseJoin: "Please join us for our wedding celebration in",
      location: "Topola, Varna",
      date: "May 30, 2020",
      personalInfo: "Personal Information",
      name: "Name",
      menuPreference: "Menu Preference",
      submitRsvp: "Submit RSVP",
    },
  },
  fi: {
    translation: {
      inviteIntro: "Myö mennää naimissii!",
      pleaseJoin: "Olkaa hyvät ja liittykää seuraamme",
      date: "30 Toukokuuta, 2020",
      personalInfo: "Henkilötiedot",
      name: "Nimi",
      menuPreference: "Ruokatoive",
      submitRsvp: "Lähetä RSVP",
    },
  },
  bg: {
    translation: {
      "/info": "информация",
      "/rsvp": "RSVP",
      couple: "Виктория и Матиас",
      title: "в❤️м",
      inviteIntro: "Ние ще се женим!",
      pleaseJoin:
        "Моля, присъединете се към нас за нашето сватбено тържество в",
      location: "Топола, Варна",
      date: "30 май 2020 г.",
      personalInfo: "Лична информация",
      name: "име",
      menuPreference: "Предпочитания за менюто",
      submitRsvp: "Изпращане RSVP",
    },
  },
};

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
    resources,
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
