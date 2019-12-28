import { useField } from "formik";

import { MenuGroup, MenuImage } from "./styles/RadioSelectionStyles";

const RadioSelection = props => {
  const [field] = useField(props.name);

  return (
    <MenuGroup id={props.name}>
      {props.options.map(option => (
        <label key={option}>
          <input {...field} {...props} value={option} />
          <MenuImage src={`${option.toLowerCase()}.svg`} />
        </label>
      ))}
    </MenuGroup>
  );
};

export default RadioSelection;
