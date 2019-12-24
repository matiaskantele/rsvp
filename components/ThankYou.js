import { useTranslation } from "react-i18next";

const thankYou = ({ attending }) => {
  const { t } = useTranslation();

  console.log(attending);

  return <h1>Attending: {attending ? "Yes" : "no"}</h1>;
};

export default thankYou;
