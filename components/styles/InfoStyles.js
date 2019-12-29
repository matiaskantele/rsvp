import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 3rem 0;
  &:first-of-type {
    margin-top: 1.5rem;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 0 2rem 0;
    & > img,
    h1 {
      font-size: 3.7rem;
      margin-right: 2rem;
    }
  }
  & > h2 {
    font-size: 2rem;
    margin: 1rem 2rem;
  }
  & > p {
    line-height: 1.2;
    margin: 1rem 2rem;
    font-size: 1.7rem;
    overflow-wrap: break-word;
    &:last-of-type {
      margin-bottom: 3rem;
    }
  }
  & > div > p {
    line-height: 1.2;
    margin: 1rem 2rem;
    font-size: 1.7rem;
    overflow-wrap: break-word;
  }
`;

export const Image = styled.img`
  height: 5rem;
  width: 5rem;
`;
