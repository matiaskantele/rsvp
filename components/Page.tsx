import styled from 'styled-components';

import Meta from './Meta';
import Header from './Header';

const StyledPage = styled.div`
  color: ${(props): string => props.theme.black};
`;

const Inner = styled.main`
  max-width: ${(props): string => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  z-index: 1;
`;

interface PageProps {
  route: string;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ route, children }: PageProps) => (
  <>
    <StyledPage>
      <Meta route={route} />
      <Header />
      <Inner>{children}</Inner>
    </StyledPage>
  </>
);

export default Page;
