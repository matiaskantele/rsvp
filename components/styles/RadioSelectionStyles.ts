import styled from 'styled-components';

export const MenuGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  [type='radio'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
  }

  [type='radio'] + div {
    cursor: pointer;
    border: 0.2rem solid ${(props): string => props.theme.lightgrey};
    border-radius: 0.2rem;
    text-align: center;
  }

  [type='radio']:checked + div,
  [type='radio']:focus + div {
    border: 0.2rem solid ${(props): string => props.theme.black};
  }

  @media (min-width: 700px) {
    width: 35%;
  }
`;

interface ImageProps {
  src: string;
}

export const MenuImage = styled.div<ImageProps>`
  height: 6rem;
  width: 6rem;
  background: url(${(props): string => props.src}) no-repeat center center;
  background-size: 90%;
  @media (min-width: 700px) {
    height: 6.5rem;
    width: 6.5rem;
  }
  @media (min-width: 1300px) {
    height: 7rem;
    width: 7rem;
  }
`;
