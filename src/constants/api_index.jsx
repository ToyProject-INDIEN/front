import axios from "axios";
import { API_URL } from "./index";

// Get data..
export const getData = async (item) => {
  let res = await axios.get(`${API_URL}/${item}`);

  return res.data;
};
