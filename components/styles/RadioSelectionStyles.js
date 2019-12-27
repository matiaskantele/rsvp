import styled from "styled-components";

export const MenuGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:first-of-type {
    margin-bottom: 1rem;
  }
`;

export const MenuImage = styled.div`
  height: 6rem;
  width: 6rem;
  background: url(${props => props.src}) no-repeat center center;
  background-size: 90%;
  @media (min-width: 1300px) {
    height: 8rem;
    width: 8rem;
  }
`;
