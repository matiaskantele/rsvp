import { useField } from 'formik';

import { MenuGroup, MenuImage } from './styles/RadioSelectionStyles';

interface RadioProps {
  name: string;
  type: string;
  options: string[];
}

const RadioSelection: React.FC<RadioProps> = (props: RadioProps) => {
  const { name, type, options } = props;
  const [field] = useField(name);

  return (
    <MenuGroup id={name}>
      {options.map((option) => (
        <label key={option} htmlFor={name + option}>
          <input
            id={name + option}
            name={name}
            type={type}
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={option}
          />
          <MenuImage src={`${option.toLowerCase()}.svg`} />
        </label>
      ))}
    </MenuGroup>
  );
};

export default RadioSelection;
