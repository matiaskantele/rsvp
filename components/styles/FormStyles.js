import styled, { keyframes } from "styled-components";

export const FormGrid = styled.form`
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-columns:
    [viewport-start] minmax(1em, 1fr)
    [container-start] minmax(0, 30em) [container-end]
    minmax(1em, 1fr) [viewport-end];
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;

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
    outline: 0.125rem solid gray;
    text-align: center;
  }

  [type="radio"]:checked + div {
    outline: 0.25rem solid ${props => props.theme.gold};
  }
`;

export const GridItem = styled.div`
  grid-column: container;
  justify-self: center;
  min-height: 10rem;
`;

export const GridSeparator = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  grid-column: viewport;
  display: flex;
  justify-items: center;
  justify-content: space-between;
  grid-template-columns: inherit;
  & > * {
    grid-column: container;
  }
`;

export const LeftSeparator = styled.div`
  background: url("separator.svg") no-repeat center center;
  height: 100%;
  width: 15rem;
`;

export const RightSeparator = styled.div`
  background: url("separator.svg") no-repeat center center;
  height: 100%;
  width: 15rem;
  transform: scaleX(-1);
`;

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  width: 45rem;
  height: 3rem;
  border-radius: 1rem;
  margin: 0 auto;
  padding-left: 1rem;
`;

export const ErrorMessage = styled.div`
  position: relative;
  height: 3rem;
  top: -3rem;
  padding-right: 1rem;
  box-shadow: 0 0 0 0.6rem pink;
  text-align: right;
  border-radius: 1rem;
  pointer-events: none;
  color: pink;
`;

export const MenuGroup = styled.div`
  display: flex;
  width: 40rem;
  align-items: center;
  justify-content: space-between;
  & > label {
    margin: 0;
  }
`;

export const MenuItem = styled.div`
  width: 10rem;
  height: 10rem;
  & > p {
    font-size: 5rem;
    margin: 0;
  }
`;

export const Button = styled.button`
  grid-column: container;
  background: none;
  height: 6rem;
  width: 25rem;
  border: 0.4rem solid ${props => props.theme.gold};
  border-radius: 1.5rem;
  margin: 2rem;
  font-size: 2rem;
`;

const heartKeyframes = keyframes`
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
`;

export const LoadingHeart = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  transform: rotate(45deg);
  transform-origin: 20px 20px;

  & > div {
    top: 16px;
    left: 16px;
    position: absolute;
    width: 16px;
    height: 16px;
    background: pink;
    animation: ${heartKeyframes} 1.2s infinite
      cubic-bezier(0.215, 0.61, 0.355, 1);

    &:after,
    &:before {
      content: " ";
      position: absolute;
      display: block;
      width: 16px;
      height: 16px;
      background: pink;
    }

    &:before {
      left: -12px;
      border-radius: 50% 0 0 50%;
    }

    &:after {
      top: -12px;
      border-radius: 50% 50% 0 0;
    }
  }
`;
