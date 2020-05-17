import { useField } from 'formik';

import {
  CheckboxLabel,
  CheckboxInput,
  CheckboxSpan,
  CheckboxText,
} from './styles/CheckboxStyles';

interface CheckboxProps {
  id: string;
  name: string;
  children?: React.ReactNode[];
}

const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  const { id, name, children } = props;
  const [field] = useField({ name, type: 'checkbox' });

  return (
    <>
      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          id={id}
          name={field.name}
          checked={field.checked}
          onBlur={field.onBlur}
          onChange={field.onChange}
          value={field.value}
        />
        <CheckboxSpan />
        <CheckboxText>{children}</CheckboxText>
      </CheckboxLabel>
    </>
  );
};

export default Checkbox;
