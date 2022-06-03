import Layout from "../components/Layout";
import CustomButton from "../components/common/CustomButton";
import axios from "axios";
import { API_URL } from "./index";

// Get data..
export const getData = async (item) => {
  let res = await axios.get(`${API_URL}/${item}`);

  return res.data;
};

export const sendData = async (restUri, params) => {
  
  let res = await axios.post({
    url:`${API_URL}/${restUri}`,
    headers : {'Content-Type': 'application/json'},
    data: params
  });

  return res;
}
