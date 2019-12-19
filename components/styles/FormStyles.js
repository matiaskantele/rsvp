import styled, { keyframes } from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  [type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
  }

  [type="radio"] + div {
    cursor: pointer;
    outline: 0.125rem solid ${props => props.theme.lightgrey};
    text-align: center;
  }

  [type="radio"]:checked + div {
    outline: 0.25rem solid ${props => props.theme.lightgrey};
  }
`;

export const HiddenInputsForNetlifyForms = styled.div`
  display: none;
`;

const puffIn = keyframes`
  0% {
    transform: scale(1.5);
    transform-origin: 50% 0%;
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    transform-origin: 50% 0%;
    filter: blur(0px);
    opacity: 1;
  }
`;

export const AnimatedContainer = styled.div`
  animation: ${puffIn} 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.2s both;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const Input = styled.input`
  height: 4rem;
  width: calc(100% - 2rem);
  margin: 0 0 2rem 2rem;
  padding-left: 1rem;
  border: 2px solid ${props => props.theme.lightgrey};
  border-radius: 1rem;
  font-size: 2rem;
  font-family: "Montserrat";
`;

export const StyledTextArea = styled.textarea`
  width: calc(100% - 2rem);
  margin: 0 0 2rem 2rem;
  border: 0.2rem solid ${props => props.theme.lightgrey};
  border-radius: 1rem;
  padding: 1rem;
  font-size: 2rem;
  font-family: "Montserrat";
`;

export const ErrorMessage = styled.div`
  height: 4rem;
  text-align: right;
  border-radius: 1rem;
  pointer-events: none;
  color: red;
  font-weight: 500;
`;

export const MenuGroup = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1.5rem;
  & > label {
    margin: 0;
  }
`;

export const MenuItem = styled.div`
  width: 7rem;
  height: 100%;
  & > p {
    font-size: 6rem;
    margin: auto;
  }
`;

export const Button = styled.button`
  display: block;
  background: none;
  height: 6rem;
  width: 25rem;
  border: 0.4rem solid ${props => props.theme.black};
  border-radius: 1.5rem;
  margin: 2rem auto;
  font-size: 2rem;
  cursor: pointer;
  &:disabled {
    background: red;
  }
`;
