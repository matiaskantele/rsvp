import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import moment from "moment";

import TextInput from "./TextInput";
import RadioSelection from "./RadioSelection";
import DatePicker from "./DatePicker";
import Checkbox from "./Checkbox";
import LoadingHeart from "./LoadingHeart";
import {
  Form,
  Hidden,
  SectionContainer,
  AnimatedContainer,
  Label,
  CustomErrorMessage,
  CompanionButton,
  RemoveCompanion,
  Button,
} from "./styles/FormStyles";

const hiddenInputsForNetlifyForms = (
  <Hidden>
    {[
      "name",
      "attending",
      "staying",
      "shuttle",
      "menu",
      "dietaryRestrictions",
      "songs",
      "message",
    ].map(i => (
      <input name={i} key={i} />
    ))}
  </Hidden>
);

const Section = props => {
  return (
    <>
      <Label htmlFor={props.label}>{props.label}</Label>
      <SectionContainer>{props.children}</SectionContainer>
    </>
  );
};

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const rsvpForm = ({ selected, attending, postSubmit }) => {
  const [additionalPerson, setAdditionalPerson] = useState(false);
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(" "),
    menu: Yup.string(),
    dietaryRestrictions: Yup.string().max(
      256,
      "I feel you, but the limit here is 256 characters..."
    ),
    message: Yup.string().max(256, "Message too long."),
    songs: Yup.string().max(256, "The night is only so long..."),
    shuttle: Yup.boolean(),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        companionName: "",
        staying: { arriving: null, departing: null },
        shuttle: false,
        menu: "",
        companionMenu: "",
        dietaryRestrictions: "",
        companionDietaryRestrictions: "",
        message: "",
        songs: "",
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        const arriving = moment(values.staying.arriving).format("D.M.");
        const departing = moment(values.staying.departing).format("D.M.");
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": "rsvp",
            attending: attending,
            ...values,
            staying: `${arriving}-${departing}${
              values.shuttle ? " <needs ride>" : ""
            }`,
            shuttle: values.shuttle,
          }),
        };
        console.log(options);
        fetch("/", options)
          .then(() => {
            console.log("Form submitted successfully!");
            postSubmit({
              attending: attending,
              shuttle: values.shuttle,
            });
          })
          .catch(error => console.log(error));
      }}
    >
      {({
        values,
        dirty,
        isValid,
        setFieldValue,
        isSubmitting,
        handleSubmit,
      }) => (
        <Form name="rsvp" data-netlify="true" onSubmit={handleSubmit}>
          {hiddenInputsForNetlifyForms}
          {selected && (
            <AnimatedContainer>
              {attending ? (
                <>
                  <Section
                    label={additionalPerson ? t("nameMultiple") : t("name")}
                  >
                    <TextInput
                      name="name"
                      type="text"
                      placeholder={t("namePlaceholder")}
                    />
                    <ErrorMessage component={CustomErrorMessage} name="name" />
                    {additionalPerson ? (
                      <>
                        <TextInput
                          name="companionName"
                          type="text"
                          placeholder={t("namePlaceholder")}
                          noLabel
                          autoFocus
                        />
                        <RemoveCompanion
                          onClick={() => setAdditionalPerson(false)}
                        />
                      </>
                    ) : (
                      <CompanionButton
                        onClick={() => setAdditionalPerson(true)}
                      >
                        {t("plusOne")}
                      </CompanionButton>
                    )}
                  </Section>
                  <Section label={t("menu")}>
                    {additionalPerson && (
                      <Label htmlFor="menu">{values.name || "..."}</Label>
                    )}
                    <RadioSelection
                      id="menu"
                      options={["Chicken", "Pork", "Vege"]}
                    />
                    {additionalPerson && (
                      <>
                        <Label htmlFor="companionMenu">
                          {values.companionName || "..."}
                        </Label>
                        <RadioSelection
                          id="companionMenu"
                          options={["Chicken", "Pork", "Vege"]}
                        />
                      </>
                    )}
                  </Section>
                  <Section label={t("dietaryRestrictions")}>
                    {additionalPerson && (
                      <Label htmlFor="dietaryRestrictions">
                        {values.name || "..."}
                      </Label>
                    )}
                    <TextInput
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      type="text"
                      placeholder={t("dietaryRestrictionsPlaceholder")}
                    />
                    {additionalPerson && (
                      <>
                        <Label htmlFor="companionDietaryRestrictions">
                          {values.companionName || "..."}
                        </Label>
                        <TextInput
                          id="companionDietaryRestrictions"
                          name="companionDietaryRestrictions"
                          type="text"
                          placeholder={t("dietaryRestrictionsPlaceholder")}
                        />
                      </>
                    )}
                  </Section>
                  <Section label={t("staying")}>
                    <DatePicker
                      staying={values.staying}
                      onSelect={dates => setFieldValue("staying", dates)}
                    />
                  </Section>
                  <Section label={t("airportShuttleLabel")}>
                    <Checkbox id="airportShuttle" name="shuttle">
                      {t("needShuttle")}
                    </Checkbox>
                  </Section>
                  <Section label={t("songs")}>
                    <TextInput
                      name="songs"
                      type="text"
                      placeholder={t("songsPlaceholder")}
                    />
                  </Section>
                  <Section label={t("message")}>
                    <TextInput
                      name="message"
                      type="textarea"
                      rows="5"
                      placeholder={t("messagePlaceholder")}
                    />
                  </Section>
                </>
              ) : (
                <>
                  <Section label={t("name")}>
                    <TextInput
                      name="name"
                      type="text"
                      placeholder={t("namePlaceholder")}
                    />
                  </Section>
                  <Section label={t("message")}>
                    <TextInput
                      name="message"
                      type="textarea"
                      rows="5"
                      placeholder={t("messagePlaceholder")}
                    />
                  </Section>
                </>
              )}
              <Button type="submit" attending={attending}>
                <span>{isSubmitting ? <LoadingHeart /> : t("submitRsvp")}</span>
              </Button>
            </AnimatedContainer>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default rsvpForm;
