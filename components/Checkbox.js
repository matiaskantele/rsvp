import { useField } from "formik";

import {
  CheckboxLabel,
  CheckboxInput,
  CheckboxSpan,
  CheckboxText,
} from "./styles/CheckboxStyles";

const Checkbox = ({ children, ...props }) => {
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <CheckboxLabel>
        <CheckboxInput type="checkbox" {...field} {...props} />
        <CheckboxSpan />
        <CheckboxText>{children}</CheckboxText>
      </CheckboxLabel>
    </>
  );
};

export default Checkbox;
