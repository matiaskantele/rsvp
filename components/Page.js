import Meta from "./Meta";
import Header from "./Header";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const Page = props => (
  <StyledPage>
    <Meta />
    <Header />
    <Inner>{props.children}</Inner>
  </StyledPage>
);

export default Page;
