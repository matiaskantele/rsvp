import styled from "styled-components";

export const LanguageSelectContainer = styled.div`
  padding: 0 0 0 1.4rem;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2.8rem;
  @media (min-width: 700px) {
    height: 5rem;
    padding: 0.7rem 3rem;
  }
  &:before {
    content: "";
    width: 2px;
    background: ${props => props.theme.lightgrey};
    height: 100%;
    left: 0;
    position: absolute;
    transform: skew(-20deg);
    top: 0;
    bottom: 0;
  }
  & > button:first-child {
    margin-right: 0.5rem;
  }
  & > button:last-child {
    margin-left: 0.5rem;
  }
`;

export const LanguageButton = styled.button`
  height: 2.6rem;
  width: 4rem;
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-size: cover;
  cursor: pointer;
  opacity: 60%;
  transform: skew(-20deg);
  filter: grayscale(1);
  &:hover,
  &:focus {
    filter: grayscale(0);
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
