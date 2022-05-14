import React, { useState } from "react";

import { HearderSearchBar } from "../../styles/layoutStyles";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  const submit = (e) => {
    if (!value) return;

    const ENTER = 13;

    if (e?.keyCode === ENTER) {
      // 검색페이지로 이동 ..
      console.log(value);
    }
  };

  return (
    <HearderSearchBar>
      <input
        placeholder="새로운 취향을 찾아보세요."
        value={value}
        onKeyDown={submit}
        onChange={handleChangeInput}
      />
      <i className="icon search" />
    </HearderSearchBar>
  );
};

export default SearchBar;
