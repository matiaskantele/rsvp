import styled from "styled-components";

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  transform: scale(-1);
  background-image: url("background.webp");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  filter: contrast(90%) brightness(50%) opacity(40%);
`;
