import styled, { keyframes } from "styled-components";

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

export const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  text-shadow: 1px 1px 4px white;
  padding-top: 10rem;
  animation: ${puffIn} 0.7s linear ease-in-out both;
  text-align: center;
  & > h1 {
    font-size: 4rem;
    margin-bottom: 3rem;
    text-shadow: 2px 2px 5px white;
    margin-bottom: 2rem;
    &:last-of-type {
      margin-bottom: 8rem;
    }
  }
  & > p {
    font-size: 1.7rem;
    font-family: "Montserrat";
    max-width: 60%;
  }
  @media (min-width: 700px) {
    & > h1 {
      font-size: 5rem;
      margin-bottom: 2.5rem;
      &:last-of-type {
        margin-bottom: 10rem;
      }
    }
    & > p {
      font-weight: 500;
      font-size: 2rem;
    }
  }
  @media (min-width: 1300px) {
    padding-top: 15rem;
    & > h1 {
      font-size: 6rem;
      margin-bottom: 2.5rem;
      &:last-of-type {
        margin-bottom: 12rem;
      }
    }
    & > p {
      font-size: 2.5rem;
    }
  }
`;
