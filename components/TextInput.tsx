import { useField } from 'formik';

import { Input, TextArea } from './styles/TextInputStyles';

interface TextInputProps {
  id?: string;
  type: string;
  name: string;
  noLabel?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  rows?: number;
}

const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
  const { id, name, placeholder, type, noLabel, autoFocus, rows } = props;
  const [field] = useField(name);

  return type === 'text' ? (
    <Input
      id={id}
      name={name}
      type="type"
      placeholder={placeholder}
      autoFocus={autoFocus}
      noLabel={noLabel}
      onBlur={field.onBlur}
      onChange={field.onChange}
      value={field.value}
    />
  ) : (
    <TextArea
      name={name}
      rows={rows}
      placeholder={placeholder}
      onBlur={field.onBlur}
      onChange={field.onChange}
      value={field.value}
    />
  );
};

export default TextInput;
