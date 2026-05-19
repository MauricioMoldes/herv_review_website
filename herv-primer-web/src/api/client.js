import axios from "axios";

const api = axios.create({
  baseURL: "http://10.62.55.108:8001",
});

export default api;
