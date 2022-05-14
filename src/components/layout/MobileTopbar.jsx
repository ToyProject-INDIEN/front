import React from "react";

import { MobileTopContainer } from "../../styles/layoutStyles";
import Logo from "./Logo";

import { useNavigate } from "react-router-dom";

const MobileTopbar = ({ title, leftOption, rightOption }) => {
  const navigate = useNavigate();

  const LeftOptionRender = ({ type }) => {
    let option = null;

    switch (type) {
      case "logo":
        option = <Logo />;
        break;
      case "backTic":
        option = (
          <div className="backTic" onClick={() => navigate(-1)}>
            <span />
          </div>
        );
        break;
      case "cancel":
        option = (
          <div className="cancel" onClick={() => navigate(-1)}>
            <i className="icon close" />
          </div>
        );
        break;
      default:
        option = (
          <div className="text">
            <span>{type}</span>
          </div>
        );
        break;
    }

    return option;
  };

  const RightOptionRender = ({ type }) => {
    let option = null;

    switch (type) {
      case "search":
        option = (
          <div className="search">
            <i className="icon search" />
          </div>
        );
        break;
      case "write":
        option = (
          <div className="write">
            <i className="icon write" />
          </div>
        );
        break;
      case "option":
        option = (
          <div className="option">
            <i className="icon option" />
          </div>
        );
        break;
      default:
        option = (
          <div className="text">
            <span>{type}</span>
          </div>
        );
        break;
    }

    return option;
  };

  return (
    <MobileTopContainer>
      <div className="leftOption">
        <LeftOptionRender type={leftOption} />
      </div>

      <div className="title">{title}</div>

      <div className="rigthOption">
        <RightOptionRender type={rightOption} />
      </div>
    </MobileTopContainer>
  );
};

export default MobileTopbar;
