import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Form, Label, Input, ErrorMessage, Button } from "./styles/FormStyles";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Who dis?"),
  meal: Yup.string(),
});

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const onSubmit = values => {
  const payload = {
    name: values.name,
    meal: values.meal,
  };
  console.log(payload);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "rsvp", ...payload }),
  })
    .then(() => console.log("Success!"))
    .catch(error => console.log(error));
};

const rsvpForm = props => {
  const formik = useFormik({
    initialValues: {
      name: "",
      meal: "MEAT",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });
  const { t } = useTranslation();

  return (
    <Form name="rsvp" data-netlify="true" onSubmit={formik.handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        name="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      {formik.errors.name && <ErrorMessage>{formik.errors.name}</ErrorMessage>}
      <Button type="submit" disabled={formik.isSubmitting}>
        {formik.isSubmitting ? `Submitting...` : `Submit`}
      </Button>
    </Form>
  );
};

export default rsvpForm;
