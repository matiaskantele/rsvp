import styled from "styled-components";

export const RsvpContainer = styled.div`
  margin-top: 2rem;
  & > h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 3.5rem;
  }
  @media (min-width: 700px) {
    & > h1 {
      font-size: 4.5rem;
    }
  }
`;

export const Attendance = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3rem;
  & > button {
    position: relative;
    height: 5rem;
    transition: all 0.25s ease-in-out;
    font-family: "Marck Script", cursive;
    font-size: 2.5rem;
    font-weight: 900;
    background: transparent;
    cursor: pointer;
    transform: skew(-20deg);
    & > span {
      display: inline-block;
      transform: skew(20deg);
    }
    @media (min-width: 700px) {
      font-size: 3rem;
    }
    @media (min-width: 1300px) {
      font-size: 3.5rem;
    }
  }
`;

export const AttendButton = styled.button`
  border: 2px solid
    ${props =>
      props.selected
        ? props.attending
          ? props.theme.black
          : props.theme.lightgrey
        : props.theme.lightgrey};
  border-right: 2px solid
    ${props =>
      props.selected && props.attending
        ? props.theme.black
        : props.theme.lightgrey};
  width: ${props =>
    props.selected ? (props.attending ? "70%" : "30%") : "50%"};
  opacity: ${props =>
    props.selected ? (props.attending ? "1.0" : "0.5") : "1.0"};
  &:focus,
  &:hover {
    border-width: 3px 2px;
    border-style: solid;
    border-color: ${props => props.theme.black};
  }
`;

export const DeclineButton = styled.button`
  border: 2px solid
    ${props =>
      props.selected
        ? !props.attending
          ? props.theme.lightgrey
          : props.theme.black
        : props.theme.lightgrey};
  border-left: ${props => !props.selected && "none"};
  width: ${props =>
    props.selected ? (props.attending ? "70%" : "30%") : "50%"};
  opacity: ${props =>
    props.selected ? (props.attending ? "1.0" : "0.5") : "1.0"};
  &:focus,
  &:hover {
    border-width: 3px 2px;
    border-style: solid;
    border-color: ${props => props.theme.black};
  }
`;
