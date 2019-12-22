import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Attendance,
  AttendButton,
  DeclineButton,
} from "../components/styles/AttendanceStyles";
import Form from "../components/Form";

const Rsvp = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(false);
  const [attending, setAttending] = useState(null);

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
      {selected ? <Form selected={selected} attending={attending} /> : null}
    </>
  );
};

export default Rsvp;
