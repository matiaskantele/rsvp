import { useTranslation } from "react-i18next";

import { ThankYouContainer } from "./styles/ThankYouStyles";

const thankYou = ({ sent: { attending, shuttle } }) => {
  const { t } = useTranslation();
  console.log(`attending: ${attending}, needShuttle: ${shuttle}`);

  return (
    <ThankYouContainer>
      <h1>Attending: {attending ? "Yes" : "no"}</h1>
      <p>Need shuttle: {shuttle ? "Yes" : "no"}</p>
    </ThankYouContainer>
  );
};

export default thankYou;
