import styled from 'styled-components';

interface InputProps {
  noLabel: boolean;
}

export const Input = styled.input<InputProps>`
  height: 4.9rem;
  width: 100%;
  margin-top: ${(props): string => (props.noLabel ? '1rem' : '0')};
  padding-left: 1rem;
  border: 0.2rem solid ${(props): string => props.theme.lightgrey};
  border-radius: 0.2rem;
  font-size: 2rem;
  font-family: 'Montserrat';
  background-clip: padding-box;
  &::placeholder {
    color: ${(props): string => props.theme.placeholder};
  }
  &:focus {
    border: 2px solid ${(props): string => props.theme.black};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 0.2rem solid ${(props): string => props.theme.lightgrey};
  border-radius: 0.2rem;
  padding: 1rem;
  font-size: 2rem;
  font-family: 'Montserrat';
  background-clip: padding-box;
  &::placeholder {
    color: ${(props): string => props.theme.placeholder};
  }
  &:focus {
    border: 2px solid ${(props): string => props.theme.black};
  }
`;
