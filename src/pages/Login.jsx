import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";

import CustomInput from "../components/common/CustomInput";
import CustomButton from "../components/common/CustomButton";
import { Body } from "../styles/layoutStyles";

import { Spacing } from "../styles/commonStyles";

import queryString from 'query-string';
import { sendData } from '../constants/api_index';
import axios from "axios";

const Home = () => {
  const [value, setValue] = useState("");

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  // 카카오 로그인 관련
  const key = '918f9822b4091962f4efc82602dcdc38';
  const redirect = 'http://127.0.0.1:3000/login'
  const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&state=login&client_id=${key}&redirect_uri=${redirect}`;

  const code = queryString.parse(window.location.search).code;
  console.log(code);
  
  const sendAllowCode = (_code) => {

    let res = sendData('login/ouath', {
        'grant_type': 'authorization_code',
        'client_id': key,
        'redirect_uri': redirect,
        'code': _code,
    });

    // 위 코드가 안 될시 임시 대체 테스트용
    /*
    axios.post({
      url:'http://127.0.0.1:본인포트/login/ouath',
      data: {
        'grant_type': 'authorization_code',
        'client_id': key,
        'redirect_uri': redirect,
        'code': _code
      }
    }).then(function(res){
      console.log(res);
    })
    */
  }
  if(code){
    sendAllowCode(code);
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
        <CustomButton ><a href={url} target='blank'>카카오 로그인</a></CustomButton>
      </Body>
    </Layout>
  );
};

export default Home;
