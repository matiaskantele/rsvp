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
  margin-bottom: 2rem;
  & > button {
    position: relative;
    height: 5rem;
    transition: all 0.25s ease-in-out;
    font-family: "Marck Script", cursive;
    font-size: 2.5rem;
    font-weight: 900;
    border-top: 1px solid ${props => props.theme.lightgrey};
    border-bottom: 1px solid ${props => props.theme.lightgrey};
    cursor: pointer;
    transform: skew(-20deg);
    &:focus,
    &:hover {
      border-top: 2px solid ${props => props.theme.black};
      border-bottom: 2px solid ${props => props.theme.black};
    }
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
  border-left: 1px solid ${props => props.theme.lightgrey};
  border-right: 1px solid ${props => props.theme.lightgrey};
  width: ${props =>
    props.selected ? (props.attending ? "70%" : "30%") : "50%"};
  background: ${props =>
    props.selected ? (props.attending ? "#A5E9D4" : "none") : "none"};
  opacity: ${props =>
    props.selected ? (props.attending ? "1.0" : "0.5") : "1.0"};
  &:focus,
  &:hover {
    border-left: 2px solid ${props => props.theme.black};
    border-right: 2px solid ${props => props.theme.black};
  }
`;

export const DeclineButton = styled.button`
  border-left: none;
  border-right: 1px solid ${props => props.theme.lightgrey};
  width: ${props =>
    props.selected ? (props.attending ? "70%" : "30%") : "50%"};
  background: ${props =>
    props.selected ? (!props.attending ? "none" : "#FEB7C0") : "none"};
  opacity: ${props =>
    props.selected ? (props.attending ? "1.0" : "0.5") : "1.0"};
  &:focus,
  &:hover {
    border-left: 2px solid ${props => props.theme.black};
    border-right: 2px solid ${props => props.theme.black};
  }
`;
