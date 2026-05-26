import axios from "axios";

const api = axios.create({
  baseURL: "https://codeyntra-backend-01.onrender.com/user",
});

export default api;
