import styled from "styled-components";

export const Input = styled.input`
  height: 4.5rem;
  width: 100%;
  padding-left: 1rem;
  border: 0.2rem solid ${props => props.theme.lightgrey};
  border-radius: 0.2rem;
  font-size: 2rem;
  font-family: "Montserrat";
  &::placeholder {
    color: ${props => props.theme.placeholder};
  }
  &:focus {
    border: 2px solid ${props => props.theme.black};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 0.2rem solid ${props => props.theme.lightgrey};
  border-radius: 0.2rem;
  padding: 1rem;
  font-size: 2rem;
  font-family: "Montserrat";
  &::placeholder {
    color: ${props => props.theme.placeholder};
  }
  &:focus {
    border: 2px solid ${props => props.theme.black};
  }
`;
