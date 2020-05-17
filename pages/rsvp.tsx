import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Form from '../components/Form';
import ThankYou from '../components/ThankYou';
import {
  RsvpContainer,
  Attendance,
  AttendButton,
  DeclineButton,
} from '../components/styles/AttendanceStyles';

const Hidden = styled.form`
  display: none;
`;

interface Sent {
  attending: boolean;
  shuttle: boolean;
}

const Rsvp: React.FC = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<boolean>(false);
  const [attending, setAttending] = useState<boolean>(null);
  const [sent, setSent] = useState<Sent>(null);

  return (
    <>
      {/* A little help for Netlify bots */}
      <Hidden name="rsvp" data-netlify="true">
        <input type="text" name="form-name" value="rsvp" readOnly />
        {[
          'attending',
          'name',
          'menu',
          'dietaryRestrictions',
          'companionName',
          'companionMenu',
          'companionDietaryRestrictions',
          'staying',
          'shuttle',
          'songs',
          'message',
        ].map((i) => (
          <input type="text" name={i} key={i} />
        ))}
      </Hidden>

      {sent === null ? (
        <RsvpContainer>
          <h1>{t('attendingQuestion')}</h1>
          <Attendance>
            <AttendButton
              selected={selected}
              attending={attending}
              onClick={(): void => {
                setSelected(true);
                setAttending(true);
              }}
            >
              <span>{t('attend')}</span>
            </AttendButton>
            <DeclineButton
              selected={selected}
              attending={!attending}
              onClick={(): void => {
                setSelected(true);
                setAttending(false);
              }}
            >
              <span>{t('decline')}</span>
            </DeclineButton>
          </Attendance>
          {selected ? (
            <Form
              selected={selected}
              attending={attending}
              postSubmit={setSent}
            />
          ) : null}
        </RsvpContainer>
      ) : (
        <ThankYou sent={sent} />
      )}
    </>
  );
};

export default Rsvp;
