import styled, { css } from "styled-components";
import { BtnAction } from "./animationStyles";

export const Button = styled.button`
  height: 45px;
  padding: 5px 12px;
  margin: 3px 0;
  border-radius: 40px;
  position: relative;
  overflow: hidden;
  color: #fff;
  background-color: #9a34ff;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${(props) =>
    props.bgColor &&
    css`
      background-color: ${props.bgColor};
    `}


  ${(props) =>
    props.outlined &&
    css`
      background-color: transparent;
      border: 1px solid #fff;
      color: #fff;
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: #343434;
      color: rgba(255, 255, 255, 0.4);
    `}



  & > .active {
    position: absolute;
    display: block;
    border-radius: 50%;
    pointer-events: none;
    background-color: #fff;
    transform: translate(-50%, -50%);
    animation: ${BtnAction} 0.6s linear infinite;
  }
`;

export const CustomInputContainer = styled.div`
  width 100%;
  height: 45px;
  padding: 0 15px;
  display: flex;
  transition: border 0.3s;

  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  ${(props) =>
    props.variant === "outlined" &&
    css`
      border: 1px solid #fff;
      border-radius: 30px;

      ${(props) =>
        props.focus &&
        css`
          border: 1px solid #9a34ff;
        `}
    `}


  ${(props) =>
    props.variant === "standard" &&
    css`
      border-bottom: 1px solid #fff;

      ${(props) =>
        props.focus &&
        css`
          border-bottom: 1px solid #9a34ff;
        `}
    `}

  input {
    width: 90%;
    height: 100%;
    font-size: 16px;
    color: #fff;
    background-color: transparent;
    border: none;
    outline: none;
  }

  .option {
    width: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }


`;

export const WarningText = styled.div`
  width: 100%;
  color: #fff;
  padding: 5px 15px;
  font-size: 13px;
  display: block;
  opacity: 0;
  visibility: visible;

  ${(props) =>
    props.show &&
    css`
      opacity: 1;
      visibility: unset;
    `}

  ${(props) =>
    props.error &&
    css`
      &:before {
        color: #f33 !important;
      }
    `}

  &:before {
    content: "⎷";
    margin-right: 5px;
    color: #00ff29;
  }
`;

export const Spacing = styled.div`
  width: 100%;
  height: 30px;
`;
