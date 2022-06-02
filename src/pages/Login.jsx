import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";

import CustomInput from "../components/common/CustomInput";
import CustomButton from "../components/common/CustomButton";
import { Body } from "../styles/layoutStyles";

import { Spacing } from "../styles/commonStyles";

import axios from 'axios';
import queryString from 'query-string';

const Home = () => {
  const [value, setValue] = useState("");

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  const key = '918f9822b4091962f4efc82602dcdc38';
  const redirect = 'http://127.0.0.1:3000/login'
  const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&state=login&client_id=${key}&redirect_uri=${redirect}`;

  const code = queryString.parse(window.location.search).code;
  console.log(code);
  
  const requestToken = (_code) => {
    axios.post({
      headers: {'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'},
      url: 'https://kauth.kakao.com/oauth/token',
      params: {
        'grant_type': 'authorization_code',
        'client_id': key,
        'redirect_uri': redirect,
        'code': _code,
      }
    }).then(function(res){
      console.log(res);
    });
  }
  if(code){
    requestToken(code);
  }

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
        <p>로그인 페이지</p>
      </Body>
    </Layout>
  );
};

export default Home;
