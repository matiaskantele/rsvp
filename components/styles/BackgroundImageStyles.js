import styled, { keyframes } from "styled-components";

const kenburns = keyframes`
  0% {
    transform: scale(1) translateY(0);
    transform-origin: 60% 20%;
  }
  100% {
    transform: scale(1.4) translateY(-1.5rem);
    transform-origin: 70% 22%;
  }
`;

export const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  background: url("invite-background.jpg") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  filter: contrast(90%) brightness(50%) opacity(40%);
  animation: ${kenburns} 10s ease-out both;
`;
