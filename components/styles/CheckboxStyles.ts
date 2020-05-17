import styled from 'styled-components';

export const CheckboxLabel = styled.label`
  display: block;
  font-size: 2rem;
  position: relative;
  cursor: pointer;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 3.6rem;
  height: 3.6rem;
  &:checked + span {
    transform: rotate(0deg) scale(1);
    opacity: 1;
    border: 2px solid ${(props): string => props.theme.black};
    &:after {
      transform: rotate(45deg) scale(1);
      opacity: 1;
      left: 11px;
      top: 2px;
      width: 12px;
      height: 24px;
      border: solid #008489;
      border-width: 0 4px 4px 0;
      background-color: transparent;
      border-radius: 0;
    }
    &:before {
      left: -9px;
      top: -9px;
      width: 48px;
      height: 48px;
      border-radius: 2px;
      transform: scale(3);
      opacity: 0;
      z-index: 999;
      transition: all 0.3s ease-out;
    }
  }
  &:focus + span {
    border: 2px solid ${(props): string => props.theme.black};
  }
`;

export const CheckboxSpan = styled.span`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 36px;
  width: 36px;
  background-color: transparent;
  border-radius: 2px;
  transition: all 0.3s ease-out;
  border: 0.2rem solid ${(props): string => props.theme.lightgrey};
  &:after {
    position: absolute;
    content: '';
    left: 18px;
    top: 18px;
    height: 0px;
    width: 0px;
    border-radius: 5px;
    border: solid #a5e9d4;
    border-width: 0 6px 6px 0;
    transform: rotate(0deg) scale(0);
    opacity: 1;
    transition: all 0.3s ease-out;
  }
  &:before {
    position: absolute;
    content: '';
    left: 20px;
    top: 20px;
    width: 0px;
    height: 0px;
    border-radius: 5px;
    border: 2px solid ${(props): string => props.theme.black};
    transform: scale(0);
  }
`;

export const CheckboxText = styled.span`
  display: inline-block;
  padding-left: 4.6rem;
  height: 3.6rem;
  line-height: 3.6rem;
`;
