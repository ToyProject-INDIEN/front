import React, { useContext } from "react";

import { FOOTER_MENU } from "./Menu";
import { Grid } from "../../styles/globalStyles";
import { FooterMobileStyled, IconButton } from "../../styles/layoutStyles";
import { LayoutContext } from "../../context/layoutContext";
import { useNavigate } from "react-router-dom";

const MobileFooter = () => {
  const { matchese } = useContext(LayoutContext);
  const navigate = useNavigate();

  const bottomMenuOnclick = (path) => {
    if (matchese && path) {
      // todo.. 로그인 제약 걸어야함..
      navigate(path);
    }
  };

  return (
    <React.Fragment>
      {matchese && (
        <FooterMobileStyled
          container
          direction={"row"}
          justifyContent={"space-between"}
          alignItems="center"
        >
          {FOOTER_MENU.map((item, i) => {
            let nowPath = window.location.pathname.split("/")[1];
            let footerPath = item?.pathname.split("/")[1];

            let now = false;
            if (nowPath === footerPath) now = true;

            return (
              <div
                className="menu"
                key={`footer_menu_${i}`}
                onClick={() => bottomMenuOnclick(item.pathname)}
              >
                <Grid container direction={"column"}>
                  <IconButton>
                    <i className={`icon ${item.icon} ${now ? "active" : ""}`} />
                  </IconButton>
                </Grid>
              </div>
            );
          })}
        </FooterMobileStyled>
      )}
    </React.Fragment>
  );
};

export default MobileFooter;
