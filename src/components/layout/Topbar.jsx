import React, { useEffect, useState, useContext, useRef, useMemo } from "react";

import { HAEDER_MENU } from "./Menu";
import { LayoutContext } from "../../context/layoutContext";
import MobileTopbar from "./MobileTopbar";

import Logo from "./Logo";
import { Menu } from "../../styles/layoutStyles";
import { Grid } from "../../styles/globalStyles";
import SearchBar from "./SearchBar";

const Topbar = ({ hearderTitle, headerLOption, headerROption }) => {
  const { matchese } = useContext(LayoutContext);

  const goPages = (url) => {
    console.log(url);
  };

  return (
    <React.Fragment>
      {matchese ? (
        <MobileTopbar
          title={hearderTitle}
          leftOption={headerLOption}
          rightOption={headerROption}
        />
      ) : (
        <Grid container item xs={12} alignItems="center">
          <Grid item xs={8}>
            <Grid container justifyContent="flex-start" alignItems="center">
              <Grid
                onClick={() => goPages("/home")}
                style={{ marginRight: "15px" }}
              >
                <Logo />
              </Grid>

              {HAEDER_MENU.map((menu) => {
                return (
                  <Grid key={menu.label} onClick={() => goPages(menu.pathname)}>
                    <Menu arch={menu.anchor}>{menu.label}</Menu>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid container item xs={4} alignItems="center">
            <SearchBar />

            <Grid
              container
              justifyContent="flex-end"
              alignItems="center"
              style={{ height: "100%" }}
            >
              <Grid onClick={() => goPages("login")}>
                <Menu>Login</Menu>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default React.memo(Topbar);
