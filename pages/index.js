import { useTranslation } from "react-i18next";

const Invite = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="title">{t("vikki")}</h1>
    </div>
  );
};

export default Invite;
