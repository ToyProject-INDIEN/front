import React from "react";

import { LogoStyled } from "../../styles/layoutStyles";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate("home");
  };

  return (
    <LogoStyled onClick={home}>
      <i className="icon logo" />
    </LogoStyled>
  );
};

export default Logo;
