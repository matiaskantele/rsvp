import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Attendance,
  AttendButton,
  DeclineButton,
} from "../components/styles/AttendanceStyles";
import Form from "../components/Form";
import ThankYou from "../components/ThankYou";

const Rsvp = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(false);
  const [attending, setAttending] = useState(null);
  const [sent, setSent] = useState(null);

  return (
    <>
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
              postSubmit={() => setSent(attending)}
            />
          ) : null}
        </>
      ) : (
        <ThankYou attending={attending} />
      )}
    </>
  );
};

export default Rsvp;
