import { useTranslation } from "react-i18next";

import Timer from "../components/Timer";

const Invite = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("inviteIntro")}</h1>
      <p>{t("pleaseJoin")}</p>
      <h2>{t("location")}</h2>
      <h2>{t("date")}</h2>
      <p>And that is in precisely</p>
      <Timer />
    </div>
  );
};

export default Invite;
