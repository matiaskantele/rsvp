import styled from "styled-components";

export const LanguageSelectContainer = styled.div`
  margin: 0 3rem 0 1.4rem;
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
  height: 2rem;
  width: 3rem;
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-size: cover;
  border: 2px solid ${props => props.theme.lightgrey};
  cursor: pointer;
  filter: opacity(80%);
  transform: skew(-20deg);
  &:hover,
  &:focus {
    border: 2px solid ${props => props.theme.black};
  }
  @media (min-width: 700px) {
    height: 2.5rem;
    width: 3.5rem;
  }
  @media (min-width: 1300px) {
    height: 3rem;
    width: 4rem;
  }
`;
