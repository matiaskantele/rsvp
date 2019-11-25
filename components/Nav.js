import Link from "next/link";

import NavStyles from "./styles/NavStyles";
import LanguageSelect from "./LanguageSelect";

const Nav = () => (
  <NavStyles>
    <LanguageSelect />
    <Link href="/">
      <a>Invite</a>
    </Link>
    <Link href="info">
      <a>Info</a>
    </Link>
    <Link href="rsvp">
      <a>RSVP</a>
    </Link>
  </NavStyles>
);

export default Nav;
