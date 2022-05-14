import React, { useEffect, useState, useContext, useRef, useMemo } from "react";

import { HeaderContainer, ScrollBox } from "../../styles/layoutStyles";
import { LayoutContext } from "../../context/layoutContext";

import ScrollTopBtn from "./ScrollTopBtn";
import { throttle } from "lodash";

import Topbar from "./Topbar";

const Header = ({ hearderTitle, headerLOption, headerROption }) => {
  const { matchese } = useContext(LayoutContext);

  const headerRef = useRef();
  const [scrollBtnOpen, setScrollBtnOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, [scrollBtnOpen]);

  const listener = useMemo(
    () =>
      throttle(() => {
        if (!headerRef.current) return;
        const open = headerRef.current.clientHeight < window.scrollY;

        if (scrollBtnOpen !== open) setScrollBtnOpen(open);
      }, [300]),
    [scrollBtnOpen]
  );

  return (
    <React.Fragment>
      <HeaderContainer ref={headerRef}>
        <Topbar
          hearderTitle={hearderTitle}
          headerLOption={headerLOption}
          headerROption={headerROption}
        />
      </HeaderContainer>
      <ScrollBox>
        <ScrollTopBtn active={scrollBtnOpen} />
      </ScrollBox>
    </React.Fragment>
  );
};

export default React.memo(Header);
