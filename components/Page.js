import styled from "styled-components";

import Meta from "./Meta";
import Header from "./Header";
import { Background } from "./styles/BackgroundStyles";

const StyledPage = styled.div`
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const Page = ({ route, children }) => (
  <>
    <Background />
    <StyledPage>
      <Meta route={route} />
      <Header />
      <Inner>{children}</Inner>
    </StyledPage>
  </>
);

export default Page;
