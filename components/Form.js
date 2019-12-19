import { useTranslation } from "react-i18next";
import { Formik, useField } from "formik";
import * as Yup from "yup";

// import DatePicker from "./DatePicker";
import {
  Form,
  HiddenInputsForNetlifyForms,
  AnimatedContainer,
  Label,
  Input,
  StyledTextArea,
  ErrorMessage,
  MenuGroup,
  MenuItem,
  Button,
} from "./styles/FormStyles";
import LoadingHeart from "./LoadingHeart";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </>
  );
};

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <StyledTextArea {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </>
  );
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Who dis?"),
  menu: Yup.string(),
  allergies: Yup.string(),
  message: Yup.string().max(256, "Message too long."),
});

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const rsvpForm = ({ selected, attending }) => {
  const { t } = useTranslation();

  const submit = values => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "rsvp",
        attending: attending,
        ...values,
      }),
    };
    console.log(options);
    fetch("/", options)
      .then(() => console.log("Form submitted!"))
      .catch(error => console.log(error));
  };

  const nameField = (
    <TextInput
      label={t("name")}
      name="name"
      type="text"
      placeholder={t("namePlaceholder")}
    />
  );

  const netlifyFields = (
    <HiddenInputsForNetlifyForms>
      {["name", "attending", "menu", "allergies", "message"].map(i => (
        <input name={i} key={i} />
      ))}
    </HiddenInputsForNetlifyForms>
  );

  const attendingFields = <>{nameField}</>;

  const declineFields = (
    <>
      {nameField}
      <TextArea
        label={t("message")}
        name="message"
        rows="5"
        placeholder={t("messagePlaceholder")}
      />
    </>
  );

  return (
    <Formik
      initialValues={{
        name: "",
        menu: "",
        allergies: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submit}
    >
      {({ dirty, isValid, isSubmitting, handleSubmit }) => (
        <Form name="rsvp" data-netlify="true" onSubmit={handleSubmit}>
          {netlifyFields}
          <AnimatedContainer>
            {selected && (
              <>
                {attending ? attendingFields : declineFields}
                <Button type="submit">
                  {isSubmitting ? <LoadingHeart /> : t("submitRsvp")}
                </Button>
              </>
            )}
          </AnimatedContainer>
        </Form>
      )}
    </Formik>
  );
};

export default rsvpForm;
/*
<MenuGroup>
<label>
  <input
    type="radio"
    name="menu"
    value="Cheese"
    onChange={formik.handleChange}
  />
  <MenuItem>
    <p>🐔</p>
  </MenuItem>
</label>
<label>
  <input
    type="radio"
    name="menu"
    value="Beef"
    onChange={formik.handleChange}
  />
  <MenuItem>
    <p>🐮</p>
  </MenuItem>
</label>
<label>
  <input
    type="radio"
    name="menu"
    value="Vegan"
    onChange={formik.handleChange}
  />
  <MenuItem>
    <p>🥗</p>
  </MenuItem>
</label>
</MenuGroup>
</GridItem>
<GridItem>
<Label htmlFor="allergies">{t("allergies")}</Label>
<Input
type="text"
name="allergies"
id="allergies"
value={formik.values.allergies}
onChange={formik.handleChange}
/>
{formik.errors.allergies && (
<ErrorMessage>{formik.errors.allergies}</ErrorMessage>
)}
</GridItem>
// <GridItem>{/* <DatePicker /> */
/* </GridItem> */
/* // <GridItem>
//   <Button type="submit">
//     {formik.isSubmitting ? <Loading /> : t("submitRsvp")}
//   </Button>
// </GridItem> */
