import { useTranslation } from "react-i18next";

import Map from "../components/Map";
import { Container, Image } from "../components/styles/InfoStyles";
import { Hideable } from "../components/styles/UtilStyles";

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
  const { t, i18n } = useTranslation();

  return (
    <>
      <Section title={t("date")} image="date.svg">
        <h2>{t("saturday")}</h2>
        <p>
          {t("rsvpBy")} <strong>{t("byDate")}</strong>.
        </p>
      </Section>
      <Section title={t("location")} image="location.svg">
        <h2>{t("resortName")}</h2>
        <p>
          {t("town")}
          <br />
          {t("area")}
        </p>
        <p>{t("resortPhone")}</p>
        <p>
          <a
            href={t("resortWebsite")}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("resortWebsite")}
          </a>
        </p>
        <p>{t("firstNight")}</p>
        <p>
          {t("extraNights")}
          <strong>{t("pleaseMark")}</strong>
          {t("extraNightsContinue")}
        </p>
        <Map />
      </Section>
      <Section title={t("arrival")} image="arrival.svg">
        <h2>{t("byAir")}</h2>
        <p>{t("flightRecommendation")}</p>
        <Hideable visible={i18n.language !== "bg"}>
          <p>
            {t("fromVarna")}
            <strong>{t("pleaseMarkFlight")}</strong>.
          </p>
        </Hideable>
        <h2>{t("byCar")}</h2>
        <p>{t("freeParking")}</p>
      </Section>
      <Section title={t("schedule")} image="schedule.svg">
        <h2>{t("welcomeDrinks")}</h2>
        <p>{t("welcomeDrinksLocation")}</p>
        <h2>{t("weddingCeremony")}</h2>
        <p>{t("weddingCeremonyLocation")}</p>
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
        <p>
          {t("ifRich")}
          <br />
          {t("bankAccount")}
        </p>
      </Section>
    </>
  );
};

export default Info;
