import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";

import CustomInput from "../components/common/CustomInput";
import CustomButton from "../components/common/CustomButton";
import { Body } from "../styles/layoutStyles";

import { Spacing } from "../styles/commonStyles";

const Home = () => {
  const [value, setValue] = useState("");

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <Layout hearderTitle="" headerLOption="logo" headerROption="search">
      <Body>
        <CustomInput
          value="비밀번호"
          variant="standard"
          placeholder="standard"
          type="password"
        />
        <Spacing />

        <CustomInput
          value="아이디"
          variant="outlined"
          placeholder="outlined"
          type="text"
        />
        <Spacing />

        <CustomInput
          value={value}
          onChange={handleChangeInput}
          variant="standard"
          placeholder="outlined"
          type="password"
          error={true}
          warningText="비밀번호 조건"
        />
        <Spacing />

        <CustomButton>로그인</CustomButton>
        <CustomButton fullWidth>로그인</CustomButton>
        <CustomButton fullWidth outlined>
          로그인
        </CustomButton>
        <CustomButton fullWidth disabled>
          로그인
        </CustomButton>
      </Body>
    </Layout>
  );
};

export default Home;
