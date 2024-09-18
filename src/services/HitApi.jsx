import axios from "axios";

export const hitApi = axios.create({
  baseURL: `http://localhost:3000`,
});
