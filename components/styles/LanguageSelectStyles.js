import styled from "styled-components";

export const LanguageSelectContainer = styled.div`
  margin: 0 1rem;
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  & > button:first-child {
    margin-right: 0.5rem;
  }
  & > button:last-child {
    margin-left: 0.5rem;
  }
`;

export const LanguageButton = styled.button`
  height: 100%;
  width: 4rem;
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-size: cover;
  cursor: pointer;
  opacity: 80%;
  transform: skew(-20deg);
  &:hover,
  &:focus {
    opacity: 100%;
  }
  @media (min-width: 700px) {
    height: 3rem;
    width: 4.5rem;
    border: 2px solid ${props => props.theme.lightgrey};
  }
  @media (min-width: 1300px) {
    height: 3.5rem;
    width: 5.25rem;
  }
`;
