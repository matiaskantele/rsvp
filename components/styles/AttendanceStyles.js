import styled from "styled-components";

export const Attendance = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 0;
  & > button {
    position: relative;
    height: 5rem;
    transition: all 0.25s ease-in-out;
    font-size: 1.5rem;
    font-weight: 900;
    text-transform: uppercase;
    border-top: 1px solid ${props => props.theme.lightgrey};
    border-bottom: 1px solid ${props => props.theme.lightgrey};
    cursor: pointer;
    transform: skew(-20deg);
    & > span {
      display: inline-block;
      transform: skew(20deg);
    }
    @media (min-width: 1300px) {
      font-size: 2rem;
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
`;
