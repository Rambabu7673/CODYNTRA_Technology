import axios from "axios";
const response = axios.create({
  baseURL: "https://codeyntra-backend-01.onrender.com/plan",
});

export default response