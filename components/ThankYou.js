import { useTranslation } from "react-i18next";

import { ThankYouContainer } from "./styles/ThankYouStyles";

const thankYou = ({ sent: { attending, shuttle } }) => {
  const { t } = useTranslation();

  return (
    <ThankYouContainer>
      <h1>{t("thankYou")}</h1>
      <h1>{t("thankYouContinues")}</h1>
      {!attending && <p>{t("declinedMessage")}</p>}
      {shuttle && <p>{t("shuttleMessage")}</p>}
    </ThankYouContainer>
  );
};

export default thankYou;
