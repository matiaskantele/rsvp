import React from "react";
import { useTranslation } from "react-i18next";

const languages = ["en", "fi", "bg"];

const languageSelect = () => {
  const { i18n } = useTranslation();

  const languageButtons = languages.map(lang => (
    <button
      key={lang}
      role="link"
      className="btn"
      onClick={() => i18n.changeLanguage(lang)}
    >
      {lang.toUpperCase()}
    </button>
  ));

  return (
    <div className="buttons">
      {languageButtons}
      <style jsx>{`
        .buttons {
          width: 100%;
          color: #333;
        }
        .btn {
          width: 2rem;
          heigth: 2rem;
        }
      `}</style>
    </div>
  );
};

export default languageSelect;
