import React from "react";

import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const Theme = ({ children }) => {
  const theme = {
    background: "#101010",
    primary: "#08d7e5",
    text: "#ffffff",
  };

  // Theme Styled
  const GlobalStyle = createGlobalStyle`
    ${normalize}

    body {
          background: ${theme.background};
          overscroll-behavior: none;
          overflow-x: hidden;
        }
    `;
  //  -------------

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {children}
    </ThemeProvider>
  );
};

export default Theme;
