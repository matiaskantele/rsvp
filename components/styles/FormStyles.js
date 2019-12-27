import styled, { keyframes } from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Hidden = styled.div`
  display: none;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const SectionContainer = styled.div`
  position: relative;
  margin: 0 0 2rem 2rem;
  & > label:nth-of-type(2) {
    margin-top: 1rem;
  }
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
`;

export const CompanionButton = styled.button`
  position: relative;
  display: block;
  background: none;
  height: 4rem;
  width: 30%;
  border: 0.2rem solid ${props => props.theme.lightgrey};
  border-radius: 0.2rem;
  margin: 1rem 0 0 2rem;
  font-size: 2rem;
  color: ${props => props.theme.placeholder};
  cursor: pointer;
  &:hover,
  &:focus {
    border: 0.2rem solid ${props => props.theme.black};
  }
`;

export const RemoveCompanion = styled.span`
  height: 6rem;
  width: 6rem;
  position: absolute;
  bottom: -0.75rem;
  right: 1rem;
  opacity: 0.5;
  &:before,
  &:after {
    position: absolute;
    left: 28px;
    top: 12px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: ${props => props.theme.black};
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

export const CustomErrorMessage = styled.span`
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
  box-shadow: 0 0 0 0.5rem red;
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
