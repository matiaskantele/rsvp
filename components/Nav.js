import Link from "next/link";
import { useTranslation } from "react-i18next";

import NavStyles from "./styles/NavStyles";
import LanguageSelect from "./LanguageSelect";

const Nav = () => {
  const { t } = useTranslation();
  return (
    <NavStyles>
      <LanguageSelect />
      <Link href="/">
        <a>{t("invite")}</a>
      </Link>
      <Link href="/info">
        <a>{t("info")}</a>
      </Link>
      <Link href="/rsvp">
        <a>{t("rsvp")}</a>
      </Link>
    </NavStyles>
  );
};

export default Nav;
