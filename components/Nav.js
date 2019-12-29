import Link from "next/link";
import { useTranslation } from "react-i18next";

import NavStyles from "./styles/NavStyles";
import LanguageSelect from "./LanguageSelect";

const Nav = () => {
  const { t } = useTranslation();
  return (
    <NavStyles>
      <li>
        <LanguageSelect />
      </li>
      <li>
        <Link href="/">
          <a>{t("home")}</a>
        </Link>
      </li>
      <li>
        <Link href="/info">
          <a>{t("info")}</a>
        </Link>
      </li>
      <li>
        <Link href="/rsvp">
          <a>{t("rsvp")}</a>
        </Link>
      </li>
    </NavStyles>
  );
};

export default Nav;
