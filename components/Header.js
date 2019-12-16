import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Nav from "./Nav";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteCHangeError = () => NProgress.done();

const Logo = styled.h1`
  font-size: 3rem;
  margin: 0.25rem 0 0.25rem 2rem;
  position: relative;
  z-index: 2;
  line-height: 1.5;
  a {
    padding: 0.5rem;
    color: ${props => props.theme.black};
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    z-index: 99;
    background-color: white;
    border-bottom: 2px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

const Header = () => {
  const [t] = useTranslation();
  return (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <Link href="/">
            <a>{t("logo")}</a>
          </Link>
        </Logo>
        <Nav />
      </div>
    </StyledHeader>
  );
};

export default Header;
