import { useTranslation } from "react-i18next";

import LanguageSelectContainer from "./styles/LanguageSelectStyles";
import LanguageButton from "./styles/LanguageButton";

const languages = ["en", "fi", "bg"];

const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const languageButtons = languages.map(lang => (
    <LanguageButton
      key={lang}
      role="link"
      className="btn"
      onClick={() => i18n.changeLanguage(lang)}
    >
      {lang}
    </LanguageButton>
  ));

  return <LanguageSelectContainer>{languageButtons}</LanguageSelectContainer>;
};

export default LanguageSelect;
