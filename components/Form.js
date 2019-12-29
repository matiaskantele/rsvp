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
  Hideable,
  SectionContainer,
  AnimatedContainer,
  Label,
  InputErrorMessage,
  CompanionInputErrorMessage,
  MenuErrorMessage,
  MenuErrorMessageWithCompanion,
  CompanionMenuErrorMessage,
  CompanionButton,
  RemoveCompanion,
  Button,
} from "./styles/FormStyles";

const Section = props => {
  return (
    <>
      <Label htmlFor={props.label}>
        <h2>{props.label}</h2>
      </Label>
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
    companionName:
      attending && additionalPerson ? Yup.string().required(" ") : Yup.string(),
    menu: attending
      ? Yup.mixed()
          .oneOf(["Chicken", "Pork", "Vege"])
          .required(" ")
      : Yup.mixed().oneOf(["Chicken", "Pork", "Vege"]),
    companionMenu:
      attending && additionalPerson
        ? Yup.mixed()
            .oneOf(["Chicken", "Pork", "Vege"])
            .required(" ")
        : Yup.mixed().oneOf(["Chicken", "Pork", "Vege"]),
    dietaryRestrictions: Yup.string().max(
      256,
      "I feel you, but the limit here is 256 characters..."
    ),
    companionDietaryRestrictions: Yup.string().max(
      256,
      "I feel you, but the limit here is 256 characters..."
    ),
    staying: attending
      ? Yup.object().shape({
          arriving: Yup.mixed().notOneOf([null], " "),
          departing: Yup.mixed().notOneOf([null], " "),
        })
      : Yup.object().shape({
          arriving: Yup.mixed().oneOf([null], " "),
          departing: Yup.mixed().oneOf([null], " "),
        }),
    shuttle: Yup.mixed().oneOf([true, false]),
    songs: Yup.string().max(256, "The night is only so long..."),
    message: Yup.string().max(256, "Message too long."),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        menu: "",
        dietaryRestrictions: "",
        companionName: "",
        companionMenu: "",
        companionDietaryRestrictions: "",
        staying: { arriving: null, departing: null },
        shuttle: "",
        songs: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        const arriving = values.staying.arriving
          ? moment(values.staying.arriving).format("D.M.")
          : "";
        const departing = values.staying.departing
          ? moment(values.staying.departing).format("D.M.")
          : "";
        const data = {
          "form-name": "rsvp",
          attending: attending,
          ...values,
          staying: `${arriving}-${departing}`,
          shuttle: values.shuttle ? "yes" : "",
        };
        console.log(data);
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode(data),
        };
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
      {({ values, setFieldValue, isSubmitting, handleSubmit }) => (
        <Form name="rsvp" data-netlify="true" onSubmit={handleSubmit}>
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
                    <ErrorMessage component={InputErrorMessage} name="name" />
                    <Hideable visible={additionalPerson}>
                      <TextInput
                        name="companionName"
                        type="text"
                        placeholder={t("namePlaceholder")}
                        noLabel
                        autoFocus
                      />
                      <ErrorMessage
                        component={CompanionInputErrorMessage}
                        name="companionName"
                      />
                      <RemoveCompanion
                        type="button"
                        onClick={() => setAdditionalPerson(false)}
                      />
                    </Hideable>
                    <Hideable visible={!additionalPerson}>
                      <CompanionButton
                        type="button"
                        onClick={() => setAdditionalPerson(true)}
                      >
                        {t("plusOne")}
                      </CompanionButton>
                    </Hideable>
                  </Section>
                  <Section label={t("menu")}>
                    {additionalPerson && (
                      <Label htmlFor="menu">
                        {values.name.split(" ")[0] || "..."}
                      </Label>
                    )}
                    <RadioSelection
                      name="menu"
                      type="radio"
                      options={["Chicken", "Pork", "Vege"]}
                    />
                    <ErrorMessage
                      component={
                        additionalPerson
                          ? MenuErrorMessageWithCompanion
                          : MenuErrorMessage
                      }
                      name="menu"
                    />
                    <Hideable visible={additionalPerson}>
                      <Label htmlFor="companionMenu">
                        {values.companionName.split(" ")[0] || "..."}
                      </Label>
                      <RadioSelection
                        name="companionMenu"
                        type="radio"
                        options={["Chicken", "Pork", "Vege"]}
                      />
                      <ErrorMessage
                        component={CompanionMenuErrorMessage}
                        name="companionMenu"
                      />
                    </Hideable>
                  </Section>
                  <Section label={t("dietaryRestrictions")}>
                    {additionalPerson && (
                      <Label htmlFor="dietaryRestrictions">
                        {values.name.split(" ")[0] || "..."}
                      </Label>
                    )}
                    <TextInput
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      type="text"
                      placeholder={t("dietaryRestrictionsPlaceholder")}
                    />
                    <ErrorMessage
                      component={InputErrorMessage}
                      name="dietaryRestrictions"
                    />
                    <Hideable visible={additionalPerson}>
                      <Label htmlFor="companionDietaryRestrictions">
                        {values.companionName.split(" ")[0] || "..."}
                      </Label>
                      <TextInput
                        id="companionDietaryRestrictions"
                        name="companionDietaryRestrictions"
                        type="text"
                        placeholder={t("dietaryRestrictionsPlaceholder")}
                      />
                    </Hideable>
                  </Section>
                  <Section label={t("staying")}>
                    <DatePicker
                      staying={values.staying}
                      onSelect={dates => setFieldValue("staying", dates)}
                    />
                    <ErrorMessage
                      component={InputErrorMessage}
                      name="staying.arriving"
                    />
                    <ErrorMessage
                      component={InputErrorMessage}
                      name="staying.departing"
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
                    <ErrorMessage component={InputErrorMessage} name="songs" />
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
                    <ErrorMessage component={InputErrorMessage} name="name" />
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
