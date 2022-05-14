import React from "react";
import { BsArrowUp } from "react-icons/bs";
import smoothscroll from "smoothscroll-polyfill";

import { ScrollTopButton } from "../../styles/layOutStyles";

const ScrollTopBtn = ({ active }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    smoothscroll.polyfill();
  };

  return (
    <ScrollTopButton onClick={scrollTop} active={active}>
      <BsArrowUp />
    </ScrollTopButton>
  );
};

export default ScrollTopBtn;
