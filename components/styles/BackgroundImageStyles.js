import styled from "styled-components";

export const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  transform: scale(-1);
  background: url("invite-background.jpg") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  filter: contrast(90%) brightness(50%) opacity(40%);
`;
