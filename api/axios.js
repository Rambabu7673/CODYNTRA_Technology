import axios from "axios";

const response = axios.create({
  baseURL: "http://localhost:3000/user",
});

export default response;
