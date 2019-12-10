import { useTranslation } from "react-i18next";

import Countdown from "../components/Countdown";

const Invite = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("inviteIntro")}</h1>
      <p>{t("pleaseJoin")}</p>
      <h2>{t("location")}</h2>
      <h2>{t("date")}</h2>
      <p>And that is in precisely</p>
      <Countdown />
    </div>
  );
};

export default Invite;
