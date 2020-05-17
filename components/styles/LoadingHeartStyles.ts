import styled, { keyframes } from 'styled-components';

const heartKeyframes = keyframes`
0% {
  transform: scale(0.95);
}
5% {
  transform: scale(1.1);
}
39% {
  transform: scale(0.85);
}
45% {
  transform: scale(1);
}
60% {
  transform: scale(0.95);
} 
100% {
  transform: scale(0.9);
}
`;

export const LoadingHeart = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  transform: rotate(45deg);
  transform-origin: 20px 20px;
  & > div {
    top: 16px;
    left: 16px;
    position: absolute;
    width: 16px;
    height: 16px;
    background: pink;
    animation: ${heartKeyframes} 1.2s infinite
      cubic-bezier(0.215, 0.61, 0.355, 1);

    &:after,
    &:before {
      content: ' ';
      position: absolute;
      display: block;
      width: 16px;
      height: 16px;
      background: pink;
    }

    &:before {
      left: -12px;
      border-radius: 50% 0 0 50%;
    }

    &:after {
      top: -12px;
      border-radius: 50% 50% 0 0;
    }
  }
`;
