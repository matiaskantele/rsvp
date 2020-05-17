import styled from 'styled-components';

interface HideableProps {
  visible: boolean;
}

export const Hideable = styled.div<HideableProps>`
  display: ${(props): string => (props.visible ? 'block' : 'none')};
  & > p {
    display: ${(props): string => (props.visible ? 'block' : 'none')};
  }
  & > label {
    margin-top: 1rem;
  }
`;
