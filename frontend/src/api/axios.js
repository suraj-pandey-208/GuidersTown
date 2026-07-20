import axios from "axios";

const api = axios.create({
  baseURL: "https://guiderstown.onrender.com",
  withCredentials: true,
});

export default api;