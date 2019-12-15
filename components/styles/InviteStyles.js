import styled from "styled-components";

export const InviteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25vh;
  text-shadow: 1px 1px 1px white;
  & > h1 {
    font-size: 6rem;
    margin-bottom: 3rem;
    text-shadow: 2px 2px 2px white;
  }
  & > h1 > div {
    display: block;
    text-align: center;
    /* color: white; */
    /* font-size: 5rem; */
    /* text-shadow: 1px 1px 1px black; */
  }
  & > h2 {
    font-size: 2rem;
    /* font-size: 3rem; */
    margin-bottom: 1.5rem;
  }
  & > p {
    font-size: 1.7rem;
    /* font-size: 2rem; */
    font-family: "Montserrat";
  }
  @media (min-width: 700px) {
    padding-top: 35vh;
    & > h1 {
      font-size: 9rem;
      margin-bottom: 3rem;
    }
    & > h1 > div {
      display: inline;
    }
    & > h2 {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }
    & > p {
      font-size: 2rem;
    }
  }
`;
