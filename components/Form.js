import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";

// import DatePicker from "./DatePicker";
import {
  FormGrid,
  GridSeparator,
  LeftSeparator,
  RightSeparator,
  GridItem,
  Label,
  Input,
  ErrorMessage,
  MenuGroup,
  MenuItem,
  Button,
  LoadingHeart,
} from "./styles/FormStyles";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Who dis?"),
  menu: Yup.string(),
  allergies: Yup.string(),
});

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const onSubmit = values => {
  const payload = {
    name: values.name,
    menu: values.menu,
    allergies: values.allergies,
  };
  console.log(values);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "rsvp", ...payload }),
  })
    .then(() => console.log("Success!"))
    .catch(error => console.log(error));
};

const Separator = props => (
  <>
    <LeftSeparator />
    <h1>{props.children}</h1>
    <RightSeparator />
  </>
);

const Loading = props => (
  <LoadingHeart>
    <div />
  </LoadingHeart>
);

const rsvpForm = props => {
  const formik = useFormik({
    initialValues: {
      name: "",
      menu: "",
      allergies: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
    onChange: () => console.log(values),
  });
  const { t } = useTranslation();

  return (
    <FormGrid name="rsvp" data-netlify="true" onSubmit={formik.handleSubmit}>
      <GridSeparator>
        <Separator>{t("personalInfo")}</Separator>
      </GridSeparator>
      <GridItem>
        <Label htmlFor="name">{t("name")}</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        )}
      </GridItem>
      <GridSeparator>
        <Separator>{t("menuPreference")}</Separator>
      </GridSeparator>
      <GridItem>
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
      <GridItem>{/* <DatePicker /> */}</GridItem>
      <GridItem>
        <Button type="submit">
          {formik.isSubmitting ? <Loading /> : t("submitRsvp")}
        </Button>
      </GridItem>
    </FormGrid>
  );
};

export default rsvpForm;
