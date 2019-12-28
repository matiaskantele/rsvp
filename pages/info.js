import { useTranslation } from "react-i18next";

import Map from "../components/Map";
import { Container, Image } from "../components/styles/InfoStyles";

const Section = props => (
  <Container>
    <div>
      <Image src={props.image} alt={props.title} header={props.title} />
      <h1>{props.title}</h1>
    </div>
    {props.children}
  </Container>
);

const Info = () => {
  const { t } = useTranslation();

  return (
    <>
      <Section title={t("date")} image="date.svg">
        <h2>{t("saturday")}</h2>
      </Section>
      <Section title={t("location")} image="location.svg">
        <h2>{t("resortName")}</h2>
        <p>
          {t("town")}
          <br />
          {t("area")}
        </p>
        <p>{t("resortPhone")}</p>
        <p>{t("firstNight")}</p>
        <p>{t("extraNights")}</p>
        <Map />
      </Section>
      <Section title={t("arrival")} image="arrival.svg">
        <h2>{t("byAir")}</h2>
        <p>{t("flightRecommendation")}</p>
        <p>{t("carRentalCheap")}</p>
        <p>{t("transportationHelp")}</p>
        <h2>{t("byCar")}</h2>
        <p>{t("freeParking")}</p>
      </Section>
      <Section title={t("schedule")} image="schedule.svg">
        <h2>{t("welcomeDrinks")}</h2>
        <p>{t("ceremonyLocation")}</p>
        <h2>{t("weddingCeremony")}</h2>
        <h2>{t("reception")}</h2>
        <p>{t("receptionLocation")}</p>
      </Section>
      <Section title={t("dressCode")} image="dress-code.svg">
        <h2>{t("smartCasual")}</h2>
        <p>{t("dressSmart")}</p>
      </Section>
      <Section title={t("gifts")} image="gifts.svg">
        <h2>{t("onlyYou")}</h2>
        <p>{t("notNecessary")}</p>
        <p>{t("ifRich")}</p>
      </Section>
    </>
  );
};

export default Info;
