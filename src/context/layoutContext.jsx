import React, { useState, useEffect } from 'react';
import { MOBILE_SIZE } from '../constants/index';

export const LayoutContext = React.createContext({
  matchese: '',
});

const LayoutContextProvider = props => {
  const [matchese, setMatches] = useState(window.matchMedia(`(max-width:${MOBILE_SIZE})`).matches);

  useEffect(() => {
    window.addEventListener('resize', resizePage);

    return () => window.addEventListener('resize', resizePage);
  }, []);

  const resizePage = e => {
    setMatches(window.matchMedia(`(max-width:${MOBILE_SIZE})`).matches);
  };

  return (
    <LayoutContext.Provider
      value={{
        matchese: matchese,
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;
