import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://deep-sloths-stare.loca.lt/api",
  withCredentials: true,
});
