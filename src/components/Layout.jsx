import React, { useEffect, useCallback } from "react";

import Theme from "./layout/Theme";
import Header from "./layout/Header";
import MobileFooter from "./layout/MobileFooter";
import { Main } from "../styles/layoutStyles";

const Layout = ({ children, hearderTitle, headerLOption, headerROption }) => {
  return (
    <Theme>
      <Header
        hearderTitle={hearderTitle}
        headerLOption={headerLOption}
        headerROption={headerROption}
      />
      <Main>{children}</Main>
      <MobileFooter />
    </Theme>
  );
};

export default Layout;
