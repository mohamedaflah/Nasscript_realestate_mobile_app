import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://eleven-regions-retire.loca.lt/api",
  withCredentials: true,
});
