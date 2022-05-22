import styled, { css } from "styled-components";
import { smLayout, xlLayout, uxLayout } from "./homeStyles";

let herderHeight = "62px";
let bottomHeight = "56px";

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - ${herderHeight});

  margin-top: ${herderHeight};

  ${smLayout} {
    height: calc(100vh - ${herderHeight} - ${bottomHeight});
    margin-bottom: ${bottomHeight};
  }
`;

export const HeaderContainer = styled.header`
  height: ${herderHeight};
  background: ${(props) => props.theme.background};
  width: 100%;
  padding: 15px 5%;
  overflow: hidden;
  z-index: 8000;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const MobileTopContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .text {
    font-size: 17px;
    color: #fff;
  }

  .title {
    color: #fff;
    font-size: 17px;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .leftOption {
    .backTic {
      span {
        border-top: 1px solid #fff;
        border-left: 1px solid #fff;
        display: block;
        width: 21px;
        height: 21px;
        transform: rotate(315deg);
        margin: 0;
      }
    }

    .cancel {
      height: 23px;
      width: 23px;

      svg {
        height: 100%;
        width: 100%;
        color: #fff;
      }
    }
  }

  .rigthOption {
    .search {
      i {
        width: 29px;
        height: 29px;
      }
    }

    .write {
      i {
        width: 32px;
        height: 32px;
      }
    }

    .option {
      i {
        width: 5px;
        height: 22px;
      }
    }
  }
`;

export const FooterMobileStyled = styled.footer`
  width: 100%;
  height: ${bottomHeight};
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-start;

  .menu {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const IconButton = styled.button`
  padding: 5px;
  border-radius: 15px;
`;

export const Menu = styled.div`
  font-size: 20px;
  padding: 0 30px;
  color: #ffffff;
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `}
`;

export const HearderSearchBar = styled.nav`
  width: 100%;
  border: 1px solid #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 3%;

  input {
    width: 95%;
    background: transparent;
    border: none;
    outline: none;
    padding: 5px;
    color: #ffffff;
    font-size: 16px;
  }

  input::placeholder {
    font-size: 14px;
    color: #fff;
  }
`;

export const LogoStyled = styled.sub`
  width: 110px;
  height: 25px;
  bottom: 0;
  font-size: 100%;
  display: block;

  i {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const ScrollBox = styled.div`
  position: fixed;
  bottom: 12%;
  right: 10%;
  z-index: 90909090;

  ${smLayout} {
    right: 4%;
  }
`;

export const ScrollTopButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  margin: 11px 0;
  cursor: pointer;
  background-color: #555555;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  visibility: hidden;
  transition: opacity 500ms, visibility 500ms;

  svg {
    color: #fff;
  }

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      visibility: unset;
      transition: opacity 500ms, visibility 500ms;
    `};
`;

export const Body = styled.article`
  width: 100%;
  padding: 0 20%;

  ${(props) =>
    props.pt &&
    css`
      padding-top: 15px;
    `}
  ${(props) =>
    props.pb &&
    css`
      padding-bottom: 15px;
    `}
        ${(props) =>
    props.ptb &&
    css`
      padding-top: 15px;
      padding-bottom: 15px;
    `}
  ${(props) =>
    props.pn &&
    css`
      padding-right: 0px;
      padding-left: 0px;
    `}

  ${smLayout} {
    padding: 0;
  }
`;
