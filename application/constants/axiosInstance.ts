import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://tame-cougars-doubt.loca.lt/api",
  withCredentials: true,
});
