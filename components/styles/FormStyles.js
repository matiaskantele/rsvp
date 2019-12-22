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
    border: 0.2rem solid ${props => props.theme.lightgrey};
    text-align: center;
  }

  [type="radio"]:checked + div {
    border: 0.3rem solid ${props => props.theme.black};
  }
`;

export const Hidden = styled.div`
  display: none;
`;

const puffIn = keyframes`
  0% {
    transform: scale(1.2);
    transform-origin: 50% 0%;
    opacity: 0;
  }
  100% {
    transform: scale(1);
    transform-origin: 50% 0%;
    opacity: 1;
  }
`;

export const AnimatedContainer = styled.div`
  animation: ${puffIn} 0.7s linear ease-in-out both;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const Input = styled.input`
  height: 4.5rem;
  width: calc(100% - 2rem);
  margin: 0 0 2rem 2rem;
  padding-left: 1rem;
  border: 0.2rem solid ${props => props.theme.lightgrey};
  border-radius: 2px;
  font-size: 2rem;
  font-family: "Montserrat";
  &::placeholder {
    color: ${props => props.theme.placeholder};
  }
`;

export const StyledTextArea = styled.textarea`
  width: calc(100% - 2rem);
  margin: 0 0 2rem 2rem;
  border: 0.2rem solid ${props => props.theme.lightgrey};
  border-radius: 0.2rem;
  padding: 1rem;
  font-size: 2rem;
  font-family: "Montserrat";
  &::placeholder {
    color: ${props => props.theme.placeholder};
  }
`;

export const ErrorMessage = styled.div`
  position: relative;
  top: -2rem;
  float: right;
  pointer-events: none;
  color: red;
  font-size: 1.8rem;
  font-weight: 500;
`;

export const MenuGroup = styled.div`
  display: flex;
  width: calc(100% - 2rem);
  align-items: center;
  justify-content: space-between;
  margin: 0 0 2rem 2rem;
  & > label {
    margin: 0;
  }
`;

export const MenuImage = styled.div`
  height: 6rem;
  width: 6rem;
  background: url(${props => props.src}) no-repeat center center;
  background-size: 80%;
  @media (min-width: 1300px) {
    height: 8rem;
    width: 8rem;
  }
`;

export const Button = styled.button`
  display: block;
  background: none;
  height: 6rem;
  width: 25rem;
  border: 0.2rem solid ${props => props.theme.lightgrey};
  border-radius: 1.5rem;
  margin: 2rem auto;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    border: 0.2rem solid ${props => props.theme.black};
    background-color: ${props => (props.attending ? "#A5E9D4" : "#FEB7C0")};
  }
`;
