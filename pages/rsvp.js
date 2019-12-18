import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Attendance,
  AttendButton,
  DeclineButton,
} from "../components/styles/AttendanceStyles";
import Form from "../components/Form";

const RSVP = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(false);
  const [attending, setAttending] = useState("");

  return (
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
      <Form selected={selected} attending={attending} />
    </>
  );
};

export default RSVP;
