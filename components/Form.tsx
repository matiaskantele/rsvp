import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

import TextInput from './TextInput';
import RadioSelection from './RadioSelection';
import DatePicker from './DatePicker';
import Checkbox from './Checkbox';
import { Heart as LoadingHeart } from './LoadingHeart';
import {
  Form,
  SectionContainer,
  Label,
  InputErrorMessage,
  CompanionInputErrorMessage,
  MenuErrorMessage,
  MenuErrorMessageWithCompanion,
  CompanionMenuErrorMessage,
  CompanionButton,
  RemoveCompanion,
  Button,
} from './styles/FormStyles';
import { Hideable } from './styles/UtilStyles';

interface SectionProps {
  label: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ label, children }: SectionProps) => (
  <>
    <Label htmlFor={label}>
      <h2>{label}</h2>
    </Label>
    <SectionContainer>{children}</SectionContainer>
  </>
);

const encode = (data: object): string =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

interface PostSubmitProps {
  attending: boolean;
  shuttle: boolean;
}

interface FormProps {
  selected: boolean;
  attending: boolean;
  postSubmit: (PostSubmitProps) => void;
}

const rsvpForm: React.FC<FormProps> = ({
  selected,
  attending,
  postSubmit,
}: FormProps) => {
  const [additionalPerson, setAdditionalPerson] = useState(false);
  const { t, i18n } = useTranslation();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(' '),
    companionName:
      attending && additionalPerson ? Yup.string().required(' ') : Yup.string(),
    menu: attending
      ? Yup.mixed().oneOf(['Chicken', 'Pork', 'Vege']).required(' ')
      : Yup.mixed().oneOf(['Chicken', 'Pork', 'Vege']),
    companionMenu:
      attending && additionalPerson
        ? Yup.mixed().oneOf(['Chicken', 'Pork', 'Vege']).required(' ')
        : Yup.mixed().oneOf(['Chicken', 'Pork', 'Vege']),
    dietaryRestrictions: Yup.string().max(
      256,
      'I feel you, but the limit here is 256 characters...'
    ),
    companionDietaryRestrictions: Yup.string().max(
      256,
      'I feel you, but the limit here is 256 characters...'
    ),
    staying: attending
      ? Yup.object().shape({
          arriving: Yup.mixed().notOneOf([null], ' '),
          departing: Yup.mixed().notOneOf([null], ' '),
        })
      : Yup.object().shape({
          arriving: Yup.mixed().oneOf([null], ' '),
          departing: Yup.mixed().oneOf([null], ' '),
        }),
    shuttle: Yup.mixed().oneOf([true, false]),
    songs: Yup.string().max(256, 'The night is only so long...'),
    message: Yup.string().max(256, 'Message too long.'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        menu: '',
        dietaryRestrictions: '',
        companionName: '',
        companionMenu: '',
        companionDietaryRestrictions: '',
        staying: { arriving: null, departing: null },
        shuttle: '',
        songs: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values): void => {
        const arriving = values.staying.arriving
          ? moment(values.staying.arriving).format('D.M.')
          : '';
        const departing = values.staying.departing
          ? moment(values.staying.departing).format('D.M.')
          : '';
        const data = {
          'form-name': 'rsvp',
          attending,
          ...values,
          staying: `${arriving}-${departing}`,
          shuttle: values.shuttle ? 'yes' : '',
        };
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode(data),
        };
        fetch('/', options)
          .then(() => {
            postSubmit({
              attending,
              shuttle: values.shuttle,
            });
          })
          .catch((error) => console.log(error));
      }}
    >
      {({
        values,
        setFieldValue,
        isSubmitting,
        handleSubmit,
      }): React.ReactNode => (
        <Form name="rsvp" data-netlify="true" onSubmit={handleSubmit}>
          {selected && (
            <>
              {attending ? (
                <>
                  <Section
                    label={additionalPerson ? t('nameMultiple') : t('name')}
                  >
                    <TextInput
                      name="name"
                      type="text"
                      placeholder={t('namePlaceholder')}
                    />
                    <ErrorMessage component={InputErrorMessage} name="name" />
                    <Hideable visible={additionalPerson}>
                      <TextInput
                        name="companionName"
                        type="text"
                        placeholder={t('namePlaceholder')}
                        noLabel
                        autoFocus
                      />
                      <ErrorMessage
                        component={CompanionInputErrorMessage}
                        name="companionName"
                      />
                      <RemoveCompanion
                        type="button"
                        onClick={(): void => setAdditionalPerson(false)}
                      />
                    </Hideable>
                    <Hideable visible={!additionalPerson}>
                      <CompanionButton
                        type="button"
                        onClick={(): void => setAdditionalPerson(true)}
                      >
                        {t('plusOne')}
                      </CompanionButton>
                    </Hideable>
                  </Section>
                  <Section label={t('menu')}>
                    {additionalPerson && (
                      <Label htmlFor="menu">
                        {values.name.split(' ')[0] || '...'}
                      </Label>
                    )}
                    <RadioSelection
                      name="menu"
                      type="radio"
                      options={['Chicken', 'Pork', 'Vege']}
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
                        {values.companionName.split(' ')[0] || '...'}
                      </Label>
                      <RadioSelection
                        name="companionMenu"
                        type="radio"
                        options={['Chicken', 'Pork', 'Vege']}
                      />
                      <ErrorMessage
                        component={CompanionMenuErrorMessage}
                        name="companionMenu"
                      />
                    </Hideable>
                  </Section>
                  <Section label={t('dietaryRestrictions')}>
                    {additionalPerson && (
                      <Label htmlFor="dietaryRestrictions">
                        {values.name.split(' ')[0] || '...'}
                      </Label>
                    )}
                    <TextInput
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      type="text"
                      placeholder={t('dietaryRestrictionsPlaceholder')}
                    />
                    <ErrorMessage
                      component={InputErrorMessage}
                      name="dietaryRestrictions"
                    />
                    <Hideable visible={additionalPerson}>
                      <Label htmlFor="companionDietaryRestrictions">
                        {values.companionName.split(' ')[0] || '...'}
                      </Label>
                      <TextInput
                        id="companionDietaryRestrictions"
                        name="companionDietaryRestrictions"
                        type="text"
                        placeholder={t('dietaryRestrictionsPlaceholder')}
                      />
                    </Hideable>
                  </Section>
                  <Section label={t('staying')}>
                    <DatePicker
                      staying={values.staying}
                      onSelect={
                        (dates): void => setFieldValue('staying', dates)
                        // eslint-disable-next-line react/jsx-curly-newline
                      }
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
                  <Hideable visible={i18n.language !== 'bg'}>
                    <Section label={t('airportShuttleLabel')}>
                      <Checkbox id="airportShuttle" name="shuttle">
                        {t('needShuttle')}
                      </Checkbox>
                    </Section>
                  </Hideable>
                  <Section label={t('songs')}>
                    <TextInput
                      name="songs"
                      type="text"
                      placeholder={t('songsPlaceholder')}
                    />
                    <ErrorMessage component={InputErrorMessage} name="songs" />
                  </Section>
                  <Section label={t('message')}>
                    <TextInput
                      name="message"
                      type="textarea"
                      rows={5}
                      placeholder={t('messagePlaceholder')}
                    />
                  </Section>
                </>
              ) : (
                <>
                  <Section label={t('declineName')}>
                    <TextInput
                      name="name"
                      type="text"
                      placeholder={t('declineNamePlaceholder')}
                    />
                    <ErrorMessage component={InputErrorMessage} name="name" />
                  </Section>
                  <Section label={t('message')}>
                    <TextInput name="message" type="textarea" rows={5} />
                  </Section>
                </>
              )}
              <Button type="submit">
                <span>{isSubmitting ? <LoadingHeart /> : t('submitRsvp')}</span>
              </Button>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default rsvpForm;
