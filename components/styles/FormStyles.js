import styled, { keyframes } from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-size: 2rem;
  & > h2 {
    font-size: 2rem;
  }
`;

export const SectionContainer = styled.div`
  position: relative;
  margin: 0 0 2rem 2rem;
  @media (min-width: 700px) {
    margin: 0 0 3rem 3rem;
  }
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
  & > label {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const CompanionButton = styled.button`
  position: relative;
  display: block;
  background: none;
  height: 4.9rem;
  width: 60%;
  border: 0.2rem solid ${props => props.theme.black};
  border-radius: 0.2rem;
  margin-top: 1rem;
  font-size: 2rem;
  color: ${props => props.theme.black};
  cursor: pointer;
  &:hover,
  &:focus {
    border: 0.2rem solid ${props => props.theme.black};
  }
`;

export const RemoveCompanion = styled.button`
  height: 6rem;
  width: 6rem;
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;
  opacity: 0.5;
  background: none;
  border: none;
  cursor: pointer;
  &:before,
  &:after {
    position: absolute;
    left: 28px;
    top: 13px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: ${props => props.theme.black};
    border-radius: 0.2rem;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:hover {
    opacity: 1;
  }
`;

export const InputErrorMessage = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.5rem;
  pointer-events: none;
  color: red;
  font-size: 1.8rem;
  font-weight: 500;
  border: 0.2rem solid transparent;
  border-radius: 0.2rem;
  box-shadow: 0 0 0 0.3rem red;
`;

export const CompanionInputErrorMessage = styled.span`
  position: absolute;
  top: 6rem;
  left: 0;
  width: 100%;
  height: 4.5rem;
  pointer-events: none;
  color: red;
  font-size: 1.8rem;
  font-weight: 500;
  border: 0.2rem solid transparent;
  border-radius: 0.2rem;
  box-shadow: 0 0 0 0.3rem red;
`;

export const MenuErrorMessage = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  pointer-events: none;
  color: red;
  font-size: 1.8rem;
  font-weight: 500;
  border: 0.2rem solid transparent;
  border-radius: 0.2rem;
  box-shadow: 0 0 0 0.3rem red;
  @media (min-width: 700px) {
    height: 6.5rem;
  }
  @media (min-width: 1300px) {
    height: 7rem;
  }
`;

export const MenuErrorMessageWithCompanion = styled.span`
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;
  height: 6rem;
  pointer-events: none;
  color: red;
  font-size: 1.8rem;
  font-weight: 500;
  border: 0.2rem solid transparent;
  border-radius: 0.2rem;
  box-shadow: 0 0 0 0.3rem red;
  @media (min-width: 700px) {
    height: 6.5rem;
  }
  @media (min-width: 1300px) {
    height: 7rem;
  }
`;

export const CompanionMenuErrorMessage = styled.span`
  position: absolute;
  top: 13rem;
  left: 0;
  width: 100%;
  height: 6rem;
  pointer-events: none;
  color: red;
  font-size: 1.8rem;
  font-weight: 500;
  border: 0.2rem solid transparent;
  border-radius: 0.2rem;
  box-shadow: 0 0 0 0.3rem red;
  @media (min-width: 700px) {
    top: 13.5rem;
    height: 6.5rem;
  }
  @media (min-width: 1300px) {
    top: 14rem;
    height: 7rem;
  }
`;

export const Button = styled.button`
  display: block;
  background: none;
  height: 6rem;
  width: 25rem;
  border: 0.2rem solid ${props => props.theme.lightgrey};
  border-radius: 0.2rem;
  margin: 2rem auto;
  font-size: 2rem;
  transform: skew(-20deg);
  cursor: pointer;
  &:hover,
  &:focus {
    border: 0.2rem solid ${props => props.theme.black};
    background-color: ${props => (props.attending ? "#A5E9D4" : "#FEB7C0")};
  }
  & > span {
    display: inline-block;
    transform: skew(20deg);
    text-shadow: 2px 2px 5px white;
  }
`;
