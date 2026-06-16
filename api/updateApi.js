import axios from "axios";

const update = axios.create({
  baseURL: "https://codeyntra-backend-01.onrender.com/update",
});

export default update;
