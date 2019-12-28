import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import Form from "../components/Form";
import ThankYou from "../components/ThankYou";
import {
  Attendance,
  AttendButton,
  DeclineButton,
} from "../components/styles/AttendanceStyles";

const Hidden = styled.form`
  display: none;
`;

const Rsvp = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(false);
  const [attending, setAttending] = useState(null);
  const [sent, setSent] = useState(null);

  return (
    <>
      {/* A little help for Netlify bots */}
      <Hidden name="rsvp" data-netlify="true">
        <input type="text" name="form-name" value="rsvp" readOnly />
        {[
          "attending",
          "name",
          "menu",
          "dietaryRestrictions",
          "companionName",
          "companionMenu",
          "companionDietaryRestrictions",
          "staying",
          "shuttle",
          "songs",
          "message",
        ].map(i => (
          <input type="text" name={i} key={i} />
        ))}
      </Hidden>

      {sent === null ? (
        <>
          <Attendance>
            <AttendButton
              selected={selected}
              attending={attending}
              onClick={() => {
                setSelected(true);
                setAttending(true);
              }}
            >
              <span>{t("attend")}</span>
            </AttendButton>
            <DeclineButton
              selected={selected}
              attending={!attending}
              onClick={() => {
                setSelected(true);
                setAttending(false);
              }}
            >
              <span>{t("decline")}</span>
            </DeclineButton>
          </Attendance>
          {selected ? (
            <Form
              selected={selected}
              attending={attending}
              postSubmit={setSent}
            />
          ) : null}
        </>
      ) : (
        <ThankYou sent={sent} />
      )}
    </>
  );
};

export default Rsvp;
