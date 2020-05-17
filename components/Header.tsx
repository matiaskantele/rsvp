import Link from 'next/link';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import Nav from './Nav';

const StyledHeader = styled.header`
  .bar {
    background-color: white;
    border-bottom: 0.2rem solid ${(props): string => props.theme.black};
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

const Logo = styled.div`
  font-family: 'Marck Script', cursive;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  & > a {
    font-size: 4rem;
  }
  @media (min-width: 1300px) {
    margin-left: 3rem;
  }
`;

const Header: React.FC = () => {
  const [t] = useTranslation();
  return (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <Link href="/">
            <a>{t('logo')}</a>
          </Link>
        </Logo>
        <Nav />
      </div>
    </StyledHeader>
  );
};

export default Header;
