import { useField } from "formik";

import { MenuGroup, MenuImage } from "./styles/RadioSelectionStyles";

const RadioSelection = ({ options, id }) => {
  const [field] = useField(id);
  return (
    <MenuGroup id={id}>
      {options.map(option => (
        <label key={option}>
          <input {...field} name={id} type="radio" value={option} />
          <MenuImage src={`${option.toLowerCase()}.svg`} />
        </label>
      ))}
    </MenuGroup>
  );
};

export default RadioSelection;
