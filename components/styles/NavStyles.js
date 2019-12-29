import styled from "styled-components";

const NavStyles = styled.nav`
  & > ul {
    width: 100%;
    line-height: 2;
    padding: 0;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${props => props.theme.lightgrey};
  }
  & > ul > li {
    list-style: none;
  }
  & > ul > li > a {
    font-size: 1.4rem;
    padding: 0 1.4rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    background: none;
    border: 0;
    cursor: pointer;
    @media (min-width: 700px) {
      padding: 1rem 3rem;
      font-size: 1.5rem;
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
    &:after {
      height: 2px;
      background: ${props => props.theme.black};
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 1rem;
    }
    &:hover,
    &:focus {
      &:after {
        width: 4rem;
      }
    }
  }
  @media (min-width: 700px) {
    & > ul > li > a:after {
      margin-top: 1.5rem;
    }
  }
  @media (min-width: 1300px) {
    & > ul {
      justify-content: space-evenly;
      font-size: 2rem;
      border-top: none;
    }
  }
`;

export default NavStyles;
