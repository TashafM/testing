import axios from "axios";

const instance = axios.create({
  baseURL: "https://dev.elred.io/",
  timeout: 5000, // milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
