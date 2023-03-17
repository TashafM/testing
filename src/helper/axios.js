import axios from "axios";

const instance = axios.create({
  baseURL: "https://dev.elred.io/",
  // timeout: 5000, // milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

//intercept request
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  const userId = localStorage.getItem("usercode");
  console.log(config);
  if (token) {
    //set default and body header

    config.headers.Authorization = `Bearer ${token}`;
    config.data = { companyUserCode: userId };
  }

  return config;
});

//intercep response
instance.interceptors.response.use(
  (response) => {
    //restun response
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
