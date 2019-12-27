import { useField } from "formik";

import { Input, TextArea } from "./styles/TextInputStyles";

const TextInput = props => {
  const [field] = useField(props);
  return props.type === "text" ? (
    <Input {...field} {...props} />
  ) : (
    <TextArea {...field} {...props}></TextArea>
  );
};

export default TextInput;
