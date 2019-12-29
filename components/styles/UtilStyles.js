import styled from "styled-components";

export const Hideable = styled.div`
  display: ${props => (props.visible ? "block" : "none")};
  & > p {
    display: ${props => (props.visible ? "block" : "none")};
  }
  & > label {
    margin-top: 1rem;
  }
`;
