import styled from "styled-components";

export const Background = styled.div`
  width: 90rem;
  height: 100vh;
  position: absolute;
  right: 0;
  bottom: 0;
  background: url("flowers.svg") no-repeat;
  transform: scaleY(-1);
  pointer-events: none;
  z-index: -1;
`;
